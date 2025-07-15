"use client";

import { useEffect, useRef } from "react";

export default function TessellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const hexagonSize = 30;
    const hexagonHeight = hexagonSize * 2;
    const hexagonWidth = Math.sqrt(3) * hexagonSize;

    const drawHexagon = (x: number, y: number, opacity: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + hexagonSize * Math.cos(angle);
        const hy = y + hexagonSize * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(hx, hy);
        } else {
          ctx.lineTo(hx, hy);
        }
      }
      ctx.closePath();
      
      ctx.strokeStyle = `rgba(243, 186, 47, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const rows = Math.ceil(canvas.height / (hexagonHeight * 0.75)) + 2;
      const cols = Math.ceil(canvas.width / hexagonWidth) + 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * hexagonWidth + (row % 2 === 1 ? hexagonWidth / 2 : 0);
          const y = row * hexagonHeight * 0.75;

          const distance = Math.sqrt(
            Math.pow(x - mousePos.current.x, 2) + 
            Math.pow(y - mousePos.current.y, 2)
          );

          const maxDistance = 200;
          const opacity = distance < maxDistance 
            ? 0.1 + (1 - distance / maxDistance) * 0.3 
            : 0.05;

          drawHexagon(x, y, opacity);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}