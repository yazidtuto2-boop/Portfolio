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

    // Magnet target: center of hovered card
    const magnet = { x: -9999, y: -9999, active: false };

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

    const onCardEnter = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      magnet.x = rect.left + rect.width / 2 - canvasRect.left;
      magnet.y = rect.top + rect.height / 2 - canvasRect.top;
      magnet.active = true;
    };
    const onCardLeave = () => {
      magnet.active = false;
      magnet.x = -9999;
      magnet.y = -9999;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    const bindCards = () => {
      document.querySelectorAll(".glass-card").forEach((el) => {
        el.addEventListener("mouseenter", onCardEnter);
        el.addEventListener("mouseleave", onCardLeave);
      });
    };
    setTimeout(bindCards, 500);

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
        // Flow field
        const a = noise(p.x, p.y, t0) * Math.PI * 2;
        p.vx += Math.cos(a) * 0.06;
        p.vy += Math.sin(a) * 0.06;

        // Cursor repel (always active)
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

        // Magnet attract toward card center
        if (magnet.active) {
          const dx = magnet.x - p.x;
          const dy = magnet.y - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > 1) {
            // Stronger pull for distant particles, softer when very close
            const force = Math.min(2.5, 300 / (d + 30));
            p.vx += (dx / d) * force * 0.15;
            p.vy += (dy / d) * force * 0.15;
          }
        }

        p.vx *= 0.92;
        p.vy *= 0.92;
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (!magnet.active && (p.x < 0 || p.x > w || p.y < 0 || p.y > h || p.life > p.maxLife)) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
          p.vx = 0;
          p.vy = 0;
          p.life = 0;
          p.maxLife = 200 + Math.random() * 200;
        }

        const fade = Math.sin((p.life / p.maxLife) * Math.PI);

        // Glow near magnet
        let alpha = fade * 0.7;
        let size = p.size;
        if (magnet.active) {
          const dm = Math.sqrt((p.x - magnet.x) ** 2 + (p.y - magnet.y) ** 2);
          if (dm < 120) {
            const t = 1 - dm / 120;
            alpha = fade * (0.7 + t * 0.9);
            size = p.size * (1 + t * 2.5);

            // Halo glow
            const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 5);
            grd.addColorStop(0, `rgba(${ar},${ag},${ab},${alpha * 0.5})`);
            grd.addColorStop(1, `rgba(${ar},${ag},${ab},0)`);
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.arc(p.x, p.y, size * 5, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.fillStyle = `rgba(${ar},${ag},${ab},${Math.min(1, alpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.querySelectorAll(".glass-card").forEach((el) => {
        el.removeEventListener("mouseenter", onCardEnter);
        el.removeEventListener("mouseleave", onCardLeave);
      });
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
