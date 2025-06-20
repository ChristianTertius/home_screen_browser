import React, { useEffect, useRef, useState } from "react";

const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [_, setVantaEffect] = useState<any>(null);

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
          backgroundAlpha: 0.0,
          color1: 0xb49c7a,
          color2: 0xb49c7a,
          separation: 20,
          alignment: 20,
          cohesion: 20,
          quantity: 3,
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
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f0e7db",
        zIndex: -1,
      }}
    />
  );
};

export default VantaBackground;
