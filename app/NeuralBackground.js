"use client";

import { useEffect, useRef } from "react";

export default function NeuralBackground({
  accent = "#818cf8",
  count = 140,
  repelRadius = 160,
  repelStrength = 1.4,
  fadeAlpha = 0.08,
  className,
  zIndex = -1,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let t0 = 0;

    const mouse = { x: -9999, y: -9999, active: false };
    const particles = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      w = rect.width;
      h = rect.height;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const seed = () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: 0,
      vy: 0,
      life: Math.random() * 100,
      maxLife: 200 + Math.random() * 200,
      size: 0.8 + Math.random() * 1.4,
    });
    for (let i = 0; i < count; i++) particles.push(seed());

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    const hex = accent.replace("#", "");
    const ar = parseInt(hex.slice(0, 2), 16);
    const ag = parseInt(hex.slice(2, 4), 16);
    const ab = parseInt(hex.slice(4, 6), 16);

    const noise = (x, y, t) =>
      Math.sin(x * 0.005 + t * 0.0008) * Math.cos(y * 0.005 + t * 0.0011) +
      Math.sin((x + y) * 0.003 + t * 0.0005) * 0.5;

    const frame = () => {
      ctx.fillStyle = `rgba(10,10,18,${fadeAlpha})`;
      ctx.fillRect(0, 0, w, h);

      t0 += reduced ? 0.2 : 1;

      for (const p of particles) {
        const a = noise(p.x, p.y, t0) * Math.PI * 2;
        p.vx += Math.cos(a) * 0.08;
        p.vy += Math.sin(a) * 0.08;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < repelRadius * repelRadius && d2 > 0.1) {
            const d = Math.sqrt(d2);
            const f = (1 - d / repelRadius) * repelStrength;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }

        p.vx *= 0.92;
        p.vy *= 0.92;
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.x < 0 || p.x > w || p.y < 0 || p.y > h || p.life > p.maxLife) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
          p.vx = 0;
          p.vy = 0;
          p.life = 0;
          p.maxLife = 200 + Math.random() * 200;
        }

        const fade = Math.sin((p.life / p.maxLife) * Math.PI);
        ctx.fillStyle = `rgba(${ar},${ag},${ab},${fade * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      ro.disconnect();
    };
  }, [accent, count, repelRadius, repelStrength, fadeAlpha]);

  return (
    <div
      aria-hidden
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        zIndex,
        pointerEvents: "none",
        background: "#0a0a12",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
