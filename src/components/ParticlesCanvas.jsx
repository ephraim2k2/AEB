import React, { useEffect, useRef } from 'react';

export default function ParticlesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H;
    let particles = [];
    let animationFrameId;

    const resize = () => {
      if (!canvas.parentElement) return;
      W = canvas.width = canvas.parentElement.offsetWidth;
      H = canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const COLORS = ['rgba(245,166,35,', 'rgba(46,204,113,', 'rgba(6,182,212,'];
    const rand = (a, b) => Math.random() * (b - a) + a;

    particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: rand(0, W || 1200),
        y: rand(0, H || 800),
        r: rand(0.5, 2.5),
        vx: rand(-0.15, 0.15),
        vy: rand(-0.25, -0.05),
        alpha: rand(0.1, 0.5),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: rand(0, Math.PI * 2),
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.life += 0.012;
        p.alpha = 0.3 + Math.sin(p.life) * 0.2;
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -5) {
          p.y = H + 5;
          p.x = rand(0, W);
        }
        if (p.x < -5) p.x = W + 5;
        if (p.x > W + 5) p.x = -5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" id="particles-canvas" />;
}
