import { useEffect, useRef, useState } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  fallbackSrc?: string;
}

/**
 * Loads and plays a video only when it enters the viewport (+ 300px margin).
 * Fades in once the first frame is ready.
 */
const LazyVideo = ({ src, fallbackSrc = "/videos/showreel.mp4", className, style, ...props }: LazyVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !src) return;

    setReady(false);
    setTriedFallback(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.src = src;
          el.load();
          el.play().catch(() => {
            // Browser may block autoplay — it will retry via the autoPlay attr
          });
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  const handleError = () => {
    const el = ref.current;
    if (!el || triedFallback || !fallbackSrc || el.src.includes(fallbackSrc)) {
      return;
    }

    setTriedFallback(true);
    setReady(false);
    el.src = fallbackSrc;
    el.load();
    el.play().catch(() => {
      // Same autoplay policy caveat applies to fallback video.
    });
  };

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      onLoadedData={() => setReady(true)}
      onError={handleError}
      className={className}
      style={{
        ...style,
        opacity: ready ? 1 : 0,
        transition: "opacity 0.9s ease",
      }}
      {...props}
    />
  );
};

export default LazyVideo;
