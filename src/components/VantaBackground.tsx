// components/VantaBackground.tsx
import React, { useEffect, useRef, useState } from "react";

const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let effect: any;

    const initVanta = () => {
      if (vantaRef.current && (window as any).VANTA) {
        effect = (window as any).VANTA.BIRDS({
          el: vantaRef.current,
          THREE: (window as any).THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xf0e7db,
          color1: 0xb49c7a, // Soft brown untuk burung
          color2: 0xb49c7a, // Bisa juga pakai warna yang sama biar seragam
        });
        setVantaEffect(effect);
      }
    };

    // Check if scripts are already loaded
    if ((window as any).VANTA && (window as any).THREE) {
      initVanta();
    } else {
      // Wait for scripts to load
      const checkScripts = setInterval(() => {
        if ((window as any).VANTA && (window as any).THREE) {
          clearInterval(checkScripts);
          initVanta();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkScripts), 10000);
    }

    return () => {
      if (effect) {
        effect.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#0a0a0a",
        zIndex: -1, // Pastikan di belakang semua konten
      }}
    />
  );
};

export default VantaBackground;
