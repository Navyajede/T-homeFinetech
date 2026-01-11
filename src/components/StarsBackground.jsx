import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    let animationId;

    const logo = new Image();
    logo.src = "/logo.png";

    logo.onload = () => init();
    window.addEventListener("resize", init);

    function init() {
      cancelAnimationFrame(animationId);

      const dpr = window.devicePixelRatio || 1;

      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars = [];

      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");

      tempCanvas.width = width;
      tempCanvas.height = height;

      // 🔥 Responsive logo size
      const size = Math.min(width, height) * 0.45;
      const x = width / 2 - size / 2;
      const y = height / 2 - size / 2;

      tempCtx.clearRect(0, 0, width, height);
      tempCtx.drawImage(logo, x, y, size, size);

      const data = tempCtx.getImageData(0, 0, width, height).data;

      for (let py = 0; py < height; py += 4) {
        for (let px = 0; px < width; px += 4) {
          const i = (py * width + px) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];
          const brightness = (r + g + b) / 3;

          // ✅ Only strong logo pixels
          if (brightness < 180 && a > 150) {
            stars.push({
              x: Math.random() * width,
              y: Math.random() * height,
              tx: px,
              ty: py,
              size: Math.random() * 1.2 + 0.5,
              speed: Math.random() * 0.012 + 0.008,
            });
          }
        }
      }

      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        s.x += (s.tx - s.x) * s.speed;
        s.y += (s.ty - s.y) * s.speed;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56,189,248,0.9)";
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
