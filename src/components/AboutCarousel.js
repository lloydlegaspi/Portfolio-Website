import { useEffect, useState } from "react";
import Image from "next/image";

const AboutCarousel = ({ images = [], interval = 4000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const id = setInterval(() => {
      setCurrent((s) => (s + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  const prev = () => setCurrent((s) => (s - 1 + images.length) % images.length);
  const next = () => setCurrent((s) => (s + 1) % images.length);

  return (
    <div className="relative w-full aspect-[3.8/4] overflow-hidden rounded-2xl">
      {images.map((src, i) => (
        <div
          key={i}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Image src={src} alt={`about-${i}`} fill className="object-cover" priority={i === current} />
        </div>
      ))}

      {/* Arrows */}
      <button
        aria-label="Previous image"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 text-white p-2 hover:bg-black/60"
      >
        ‹
      </button>
      <button
        aria-label="Next image"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 text-white p-2 hover:bg-black/60"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-2 w-8 rounded-full transition-all ${i === current ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutCarousel;