import React, { useEffect, useRef, useState } from 'react'

export default function QuantumCore() {
  const containerRef = useRef(null)
  const [threeLoaded, setThreeLoaded] = useState(false)

  useEffect(() => {
    // Check if THREE is already on window
    if (window.THREE) {
      setThreeLoaded(true)
      return
    }

    // Load Three.js from CDN
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
    script.async = true
    script.onload = () => {
      setThreeLoaded(true)
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  useEffect(() => {
    if (!threeLoaded || !containerRef.current) return
    const THREE = window.THREE
    if (!THREE) return

    const container = containerRef.current
    let width = container.clientWidth || 500
    let height = container.clientHeight || 500

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    container.innerHTML = ''
    container.appendChild(renderer.domElement)

    // --- Main Core Group ---
    const coreGroup = new THREE.Group()
    scene.add(coreGroup)

    // --- 1. Outer Particle Sphere Shell ---
    const particleCount = 3000
    const sphereRadius = 2.4
    const spherePositions = new Float32Array(particleCount * 3)
    const sphereColors = new Float32Array(particleCount * 3)

    const color1 = new THREE.Color(0x7b2cff) // Violet
    const color2 = new THREE.Color(0xff3bd4) // Magenta

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere surface
      const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount)
      const theta = Math.sqrt(particleCount * Math.PI) * phi

      const x = Math.sin(phi) * Math.cos(theta) * sphereRadius
      const y = Math.sin(phi) * Math.sin(theta) * sphereRadius
      const z = Math.cos(phi) * sphereRadius

      spherePositions[i * 3] = x + (Math.random() - 0.5) * 0.1
      spherePositions[i * 3 + 1] = y + (Math.random() - 0.5) * 0.1
      spherePositions[i * 3 + 2] = z + (Math.random() - 0.5) * 0.1

      // Blend color based on position
      const tempColor = color1.clone().lerp(color2, Math.abs(z) / sphereRadius)
      sphereColors[i * 3] = tempColor.r
      sphereColors[i * 3 + 1] = tempColor.g
      sphereColors[i * 3 + 2] = tempColor.b
    }

    const sphereGeometry = new THREE.BufferGeometry()
    sphereGeometry.setAttribute('position', new THREE.BufferAttribute(spherePositions, 3))
    sphereGeometry.setAttribute('color', new THREE.BufferAttribute(sphereColors, 3))

    const sphereMaterial = new THREE.PointsMaterial({
      size: 0.018,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    })

    const outerSphere = new THREE.Points(sphereGeometry, sphereMaterial)
    coreGroup.add(outerSphere)

    // --- 2. Inner Undulating Wavy Disc Core ---
    const ringCount = 18
    const maxRadius = 1.6
    const pointsPerRing = 120
    const rings = []

    const ringMaterial = new THREE.LineBasicMaterial({
      color: 0xff3bd4,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      linewidth: 1.5
    })

    for (let i = 1; i <= ringCount; i++) {
      const ringRadius = (i / ringCount) * maxRadius
      const ringPositions = new Float32Array((pointsPerRing + 1) * 3)

      for (let j = 0; j <= pointsPerRing; j++) {
        const theta = (j / pointsPerRing) * Math.PI * 2
        ringPositions[j * 3] = Math.cos(theta) * ringRadius
        ringPositions[j * 3 + 1] = 0
        ringPositions[j * 3 + 2] = Math.sin(theta) * ringRadius
      }

      const ringGeometry = new THREE.BufferGeometry()
      ringGeometry.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3))
      
      const line = new THREE.Line(ringGeometry, ringMaterial)
      coreGroup.add(line)
      rings.push({
        geometry: ringGeometry,
        radius: ringRadius,
        initialPositions: ringPositions.slice()
      })
    }

    // --- 3. Sweeping Volumetric Light Beams ---
    const beamCount = 8
    const beamsGroup = new THREE.Group()
    coreGroup.add(beamsGroup)

    const beamMaterial = new THREE.MeshBasicMaterial({
      color: 0x7b2cff,
      transparent: true,
      opacity: 0.07,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    })

    for (let i = 0; i < beamCount; i++) {
      // Create a double-sided volumetric cone representation
      const beamGeo = new THREE.ConeGeometry(0.35, 5.5, 4, 1, true)
      const beam = new THREE.Mesh(beamGeo, beamMaterial)

      // Randomly orient beams spherically
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * 2 * Math.PI

      beam.rotation.x = phi
      beam.rotation.z = theta
      beam.rotation.y = Math.random() * Math.PI

      beamsGroup.add(beam)
    }

    // --- Ambient Center Glow Core ---
    const centerGeo = new THREE.SphereGeometry(0.2, 16, 16)
    const centerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    })
    const centerSphere = new THREE.Mesh(centerGeo, centerMat)
    coreGroup.add(centerSphere)

    // --- Interaction ---
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      mouseY = -((event.clientY - rect.top) / rect.height - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove)

    // --- Animation Loop ---
    const clock = new THREE.Clock()
    let animationFrameId

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()
      const time = elapsedTime * 1.8

      // Slow rotation of outer sphere and core group
      outerSphere.rotation.y = elapsedTime * 0.08
      outerSphere.rotation.x = elapsedTime * 0.04

      beamsGroup.rotation.y = -elapsedTime * 0.12
      beamsGroup.rotation.x = -elapsedTime * 0.06

      // React to mouse
      coreGroup.rotation.x += (mouseY * 0.25 - coreGroup.rotation.x) * 0.05
      coreGroup.rotation.y += (mouseX * 0.25 - coreGroup.rotation.y) * 0.05

      // Pulsate center core
      const centerScale = 1.0 + Math.sin(time * 3.5) * 0.15
      centerSphere.scale.set(centerScale, centerScale, centerScale)

      // Animate Undulating Rings Core (Concentric wavy disc ripple)
      rings.forEach((ring) => {
        const posAttribute = ring.geometry.attributes.position
        const positions = posAttribute.array

        for (let j = 0; j <= pointsPerRing; j++) {
          const initX = ring.initialPositions[j * 3]
          const initZ = ring.initialPositions[j * 3 + 2]
          const theta = Math.atan2(initZ, initX)
          const r = ring.radius

          // Wave equation replicating the twisting glowing core:
          // Propagates outwards with r, twisted by angle (2 * theta), speed modulated by time
          const waveHeight = Math.sin(r * 4.0 - time * 3.0) * Math.cos(theta * 2.0 + time * 0.5) * 0.38 * (r / maxRadius)
          
          positions[j * 3 + 1] = waveHeight
        }
        posAttribute.needsUpdate = true
      })

      renderer.render(scene, camera)
    }

    animate()

    // --- Resize Handling ---
    const handleResize = () => {
      if (!containerRef.current) return
      width = containerRef.current.clientWidth
      height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [threeLoaded])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-24 md:py-32 overflow-hidden bg-[#05040a] text-white">
      {/* Dynamic scan line background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(123, 44, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(123, 44, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Sci-fi Radial Light Source behind core */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-25 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 59, 212, 0.12) 0%, rgba(123, 44, 255, 0.04) 50%, transparent 70%)',
          filter: 'blur(50px)'
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Sci-fi Telemetry & Title */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-start gap-8 z-20">
            
            {/* Pulsating badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-violet-950/40 border border-violet-500/20 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff3bd4] animate-pulse shadow-[0_0_12px_#ff3bd4]" />
              <span className="font-mono text-[0.62rem] text-violet-300 tracking-[0.25em] uppercase font-bold">
                Quantum Reactor Active
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4.2rem)] leading-[1.1] font-extrabold text-white tracking-tight">
              Powering Vision With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-400">
                Quantum Intelligence
              </span>
            </h2>

            {/* Paragraph description */}
            <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-xl">
              Our proprietary neural core processing engine generates dynamic volumetric models and handles millions of automated decisions per second with absolute sub-millisecond precision.
            </p>

            {/* Spec Telemetry HUD */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 w-full max-w-lg border-t border-violet-900/30 pt-8 mt-2">
              <div>
                <span className="block font-mono text-[0.55rem] tracking-wider text-slate-500 uppercase">Compute Capacity</span>
                <span className="font-display text-xl font-bold text-white tracking-wider">4.8 PETAFLOPS</span>
              </div>
              
              <div>
                <span className="block font-mono text-[0.55rem] tracking-wider text-slate-500 uppercase">Decision Latency</span>
                <span className="font-display text-xl font-bold text-[#ff3bd4] tracking-wider">&lt; 0.12 MS</span>
              </div>

              <div>
                <span className="block font-mono text-[0.55rem] tracking-wider text-slate-500 uppercase">Core Temperature</span>
                <span className="font-display text-xl font-bold text-emerald-400 tracking-wider">28.4°C // NOMINAL</span>
              </div>

              <div>
                <span className="block font-mono text-[0.55rem] tracking-wider text-slate-500 uppercase">Neural Connections</span>
                <span className="font-display text-xl font-bold text-violet-400 tracking-wider">12.4K ACTIVE</span>
              </div>
            </div>

          </div>

          {/* Right Column: WebGL Interactive Animation (Reference Video Object) */}
          <div className="col-span-1 lg:col-span-6 relative h-[500px] lg:h-[650px] w-full flex items-center justify-center">
            {/* Borderless WebGL Canvas Container */}
            <div ref={containerRef} className="w-full h-full relative z-10 bg-transparent overflow-hidden" />
          </div>

        </div>
      </div>
    </section>
  )
}
