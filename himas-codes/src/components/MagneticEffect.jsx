import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MagneticEffect = ({ children, className }) => {
    const magneticRef = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magneticRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magneticRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, top, left } = magneticRef.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.5);
            yTo(y * 0.5);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const currentRef = magneticRef.current;
        if (currentRef) {
            currentRef.addEventListener('mousemove', handleMouseMove);
            currentRef.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('mousemove', handleMouseMove);
                currentRef.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div ref={magneticRef} className={className}>
            {children}
        </div>
    );
};

export default MagneticEffect;