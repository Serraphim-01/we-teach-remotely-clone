import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

export default function RotatingGlobe() {
  const globeEl = useRef();
  const [dimensions, setDimensions] = useState({ width: 140, height: 140 });

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.0;
      globeEl.current.controls().enableZoom = false;
    }

    // Handle resizing
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      const isMedium = window.innerWidth >= 600;

      if (isLarge) setDimensions({ width: 550, height: 550 });
      else if (isMedium) setDimensions({ width: 280, height: 280 });
      else setDimensions({ width: 140, height: 140 });
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`mx-auto`}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
}
