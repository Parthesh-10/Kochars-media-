"use client";

import { useState, useRef, useEffect } from "react";

interface counterProp {
  num: number;
  isVisible: boolean;
  duration?: number;
  triggerOnce?: boolean;
}

export default function UseCounter({
  num,
  isVisible,
  duration = 1500,
  triggerOnce = true,
}: counterProp) {
  const [count, setCount] = useState<number>(0);
  const [hasRun, setHasRun] = useState<boolean>(false);
  const requestRef = useRef<number | null>(null);
  const timeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) return;
    if (triggerOnce && hasRun) return;

    const animate = (timeStamp: number) => {
      if (!timeRef.current) timeRef.current = timeStamp;
      const elasped = timeStamp - timeRef.current;
      const progress = Math.min(elasped / duration, 1);
      const easeOut = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(easeOut * num);
      setCount(currentCount);
      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setHasRun(true);
      }
    };
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      timeRef.current = null;
    };
  }, [isVisible, num, duration, triggerOnce, hasRun]);

  return <>{count.toLocaleString()}</>;
}
