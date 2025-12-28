import React, { useEffect, useRef, useState } from 'react';

const SkillCircle = ({ percent }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  // Responsive circle size
  const getSize = () => {
    if (window.innerWidth < 640) return 120; // mobile
    return 190; // desktop
  };

  // Responsive stroke (border)
  const getStroke = () => {
    if (window.innerWidth < 640) return 12; // mobile
    return 17; // desktop
  };

  const [size, setSize] = useState(getSize());
  const [stroke, setStroke] = useState(getStroke());

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  // Update size & stroke on resize
  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
      setStroke(getStroke());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const interval = setInterval(() => {
            start++;
            setProgress(start);
            if (start >= percent) clearInterval(interval);
          }, 15);
        } else {
          setProgress(0);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center font-[poppins]"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="absolute -rotate-90"
      >
        {/* background border */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.25)"
          strokeWidth={stroke}
          fill="none"
        />

        {/* animated border */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#00adb5"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference - (progress / 100) * circumference
          }
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.4s ease" }}
        />
      </svg>

      <p className="text-white text-lg sm:text-xl font-semibold z-10">
        {progress}%
      </p>
    </div>
  );
};

export default SkillCircle;
