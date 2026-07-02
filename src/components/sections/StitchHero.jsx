import React, { useEffect, useRef, useState } from 'react'

export default function StitchHero() {
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
      // Clean up script if component unmounts before loading
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
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    // Clear any previous canvas
    container.innerHTML = ''
    container.appendChild(renderer.domElement)

    // --- Core Intelligence Sphere (Point Cloud) ---
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64)
    const sphereMaterial = new THREE.PointsMaterial({
      color: 0x7b2cff, // Violet
      size: 0.015,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })
    const corePoints = new THREE.Points(sphereGeometry, sphereMaterial)
    scene.add(corePoints)

    // --- Neural Energy Ribbons (Torus Knots for complexity) ---
    const ribbonGroup = new THREE.Group()
    const ribbonCount = 3
    const ribbonColors = [0xff3bd4, 0x2f6bff, 0xbb0011] // Magenta, Blue, Red

    for (let i = 0; i < ribbonCount; i++) {
      const geometry = new THREE.TorusKnotGeometry(1.5, 0.01, 128, 16, i + 2, i + 3)
      const material = new THREE.MeshBasicMaterial({
        color: ribbonColors[i],
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        wireframe: true
      })
      const ribbon = new THREE.Mesh(geometry, material)
      ribbon.rotation.x = Math.random() * Math.PI
      ribbon.rotation.y = Math.random() * Math.PI
      ribbonGroup.add(ribbon)
    }
    scene.add(ribbonGroup)

    // --- Inner Glowing Core ---
    const innerGeometry = new THREE.SphereGeometry(0.8, 32, 32)
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending
    })
    const innerCore = new THREE.Mesh(innerGeometry, innerMaterial)
    scene.add(innerCore)

    // --- Particle Flow (Floating Data Nodes) ---
    const particlesCount = 500
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.5
    })
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particleSystem)

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xbb0011, 2)
    pointLight.position.set(2, 2, 2)
    scene.add(pointLight)

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
      
      // Rotate core
      corePoints.rotation.y = elapsedTime * 0.1
      corePoints.rotation.x = elapsedTime * 0.05
      
      // Pulse core scale
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.05
      corePoints.scale.set(pulse, pulse, pulse)
      
      // Animate ribbons
      ribbonGroup.children.forEach((ribbon, index) => {
        ribbon.rotation.x += 0.01 * (index + 1)
        ribbon.rotation.y += 0.005 * (index + 1)
        const ribbonPulse = 1 + Math.sin(elapsedTime + index) * 0.1
        ribbon.scale.set(ribbonPulse, ribbonPulse, ribbonPulse)
      })
      
      // Drift particles
      particleSystem.rotation.y = elapsedTime * 0.02
      
      // React to mouse
      scene.rotation.x += (mouseY * 0.1 - scene.rotation.x) * 0.05
      scene.rotation.y += (mouseX * 0.1 - scene.rotation.y) * 0.05
      
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
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#050505] text-white">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Background Radial Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 75% 50%, rgba(187, 0, 17, 0.15) 0%, transparent 60%)'
        }}
      />

      {/* ThreeJS Container in Background (Right half on desktop, full on mobile) */}
      <div 
        ref={containerRef} 
        className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0 bg-transparent overflow-hidden pointer-events-none" 
      />

      {/* Main Container */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="col-span-1 lg:col-span-8 flex flex-col items-start gap-8 z-20">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#BB0011] animate-pulse shadow-[0_0_10px_#BB0011]" />
              <span className="font-mono text-[0.62rem] text-slate-300 tracking-[0.25em] uppercase font-bold">
                AI • Automation • Deep-Tech
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.15] font-extrabold text-white tracking-tight">
              Build Smarter Systems with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2B2B] to-[#ffb4ab]">
                Human-Centered AI
              </span>
            </h2>

            {/* Subheading */}
            <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-xl">
              TECH6SENSE AI creates intelligent solutions, AI automation, deep-tech products, and scalable digital systems for modern businesses to thrive in the next digital era.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <button className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#BB0011] hover:bg-[#E50914] text-white font-mono text-xs font-bold tracking-widest uppercase rounded shadow-[0_0_30px_rgba(187,0,17,0.3)] hover:shadow-[0_0_40px_rgba(187,0,17,0.55)] hover:-translate-y-0.5 transition-all duration-300">
                Explore AI Solutions
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              
              <button className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-slate-200 hover:text-white font-mono text-xs font-bold tracking-widest uppercase rounded backdrop-blur-sm hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300">
                Book a Strategy Call
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-white/10 w-full">
              <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:gap-6 items-center text-slate-400">
                
                {/* Indicator 1 */}
                <div className="flex items-center gap-2.5 hover:text-white transition-colors duration-300 cursor-default group">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#BB0011] group-hover:bg-[#BB0011]/10 transition-all">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                      <rect x="5" y="5" width="14" height="14" rx="2" />
                      <path d="M9 9h6v6H9z" />
                      <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
                    </svg>
                  </span>
                  <span className="font-mono text-[0.68rem] tracking-wider uppercase font-semibold">AI Development</span>
                </div>

                {/* Indicator 2 */}
                <div className="flex items-center gap-2.5 hover:text-white transition-colors duration-300 cursor-default group">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#BB0011] group-hover:bg-[#BB0011]/10 transition-all">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="5" r="2.5" />
                      <circle cx="6" cy="18" r="2.5" />
                      <circle cx="18" cy="18" r="2.5" />
                      <path d="M12 7.5v5M12 12.5H6v3M12 12.5h6v3" />
                    </svg>
                  </span>
                  <span className="font-mono text-[0.68rem] tracking-wider uppercase font-semibold">Automation Systems</span>
                </div>

                {/* Indicator 3 */}
                <div className="flex items-center gap-2.5 hover:text-white transition-colors duration-300 cursor-default group">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#BB0011] group-hover:bg-[#BB0011]/10 transition-all">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                      <path d="M7 3h10M10 3v5L5 17.5A2 2 0 006.8 20h10.4a2 2 0 001.8-2.5L14 8V3" />
                      <path d="M8.5 12h7" />
                    </svg>
                  </span>
                  <span className="font-mono text-[0.68rem] tracking-wider uppercase font-semibold">Deep-Tech Products</span>
                </div>

                {/* Indicator 4 */}
                <div className="flex items-center gap-2.5 hover:text-white transition-colors duration-300 cursor-default group">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#BB0011] group-hover:bg-[#BB0011]/10 transition-all">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 7h2M9 11h2M9 15h2M13 7h2M13 11h2M13 15h2" />
                    </svg>
                  </span>
                  <span className="font-mono text-[0.68rem] tracking-wider uppercase font-semibold">Enterprise Innovation</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
