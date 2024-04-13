'use client';
import React, { useState, useEffect, useRef } from 'react';
import CountUp from "react-countup";

interface CountingNumberProps{
    number: Number
}

const CountingNumber = ({ number }: CountingNumberProps) => {

    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);

    useEffect(() => {
        const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // When 50% of the element is visible
        };

        const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
        }, options);

        if (countRef.current) {
        observer.observe(countRef.current);
        }

        return () => {
        if (countRef.current) {
            observer.unobserve(countRef.current);
        }
        };
    }, []);

  return (
    <span ref={countRef} className="text-3xl font-bold text-blue-500 animate-counting">
        {
            isVisible && (<CountUp duration={2} className="counter" end={number.valueOf()} />)
        }
    </span>
  );
};

export default CountingNumber;
