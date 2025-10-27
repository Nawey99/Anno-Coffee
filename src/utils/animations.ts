import { useEffect, useRef, useState } from 'react';

// Animation utility hooks and functions

export const usePageLoadAnimation = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Trigger page load animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    return isLoading;
};

export const useScrollAnimation = (threshold = 0.1) => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            {
                threshold,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold]);

    return ref;
};

// Animation classes for CSS
export const animationClasses = {
    fadeInUp: 'animate-fade-in-up',
    fadeInLeft: 'animate-fade-in-left',
    fadeInRight: 'animate-fade-in-right',
    scaleIn: 'animate-scale-in',
    slideInUp: 'animate-slide-in-up',
    stagger: 'animate-stagger'
};

// Stagger animation delay helper
export const getStaggerDelay = (index: number, baseDelay = 100) => {
    return `${index * baseDelay}ms`;
};
