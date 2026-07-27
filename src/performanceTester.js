export function startPerformanceTester(options = {}) {
  const {
    fpsWarning = 45,
    longTaskWarning = 50,
    scrollWarning = 8,
    showOverlay = true,
  } = options;

  let fps = 0;
  let frames = 0;
  let lastTime = performance.now();
  let rafId = null;
  let scrollCount = 0;

  let overlay = null;

  if (showOverlay) {
    overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      right: 12px;
      bottom: 12px;
      z-index: 999999;
      background: rgba(0,0,0,0.75);
      color: #fff;
      font: 12px Arial;
      padding: 10px 12px;
      border-radius: 8px;
      pointer-events: none;
      line-height: 1.5;
    `;
    overlay.innerHTML = `FPS: --<br>Scroll Events: --`;
    document.body.appendChild(overlay);
  }

  function updateOverlay() {
    if (!overlay) return;
    overlay.innerHTML = `
      FPS: ${fps}<br>
      Scroll Events/sec: ${scrollCount}
    `;
  }

  function fpsLoop(now) {
    frames++;

    if (now - lastTime >= 1000) {
      fps = frames;

      if (fps < fpsWarning) {
        console.warn(`[Performance] Low FPS: ${fps}`);
      }

      updateOverlay();

      frames = 0;
      scrollCount = 0;
      lastTime = now;
    }

    rafId = requestAnimationFrame(fpsLoop);
  }

  function onScroll() {
    const start = performance.now();

    scrollCount++;

    requestAnimationFrame(() => {
      const cost = performance.now() - start;

      if (cost > scrollWarning) {
        console.warn(`[Performance] Heavy scroll frame: ${cost.toFixed(2)}ms`);
      }
    });
  }

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > longTaskWarning) {
        console.warn(
          `[Performance] Long task: ${entry.duration.toFixed(2)}ms`,
          entry
        );
      }
    }
  });

  try {
    observer.observe({ entryTypes: ["longtask"] });
  } catch (e) {
    console.warn("[Performance] Long task observer not supported.");
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  rafId = requestAnimationFrame(fpsLoop);

  console.log("[Performance] Tester started");

  return function stopPerformanceTester() {
    window.removeEventListener("scroll", onScroll);
    cancelAnimationFrame(rafId);
    observer.disconnect();

    if (overlay) {
      overlay.remove();
    }

    console.log("[Performance] Tester stopped");
  };
}