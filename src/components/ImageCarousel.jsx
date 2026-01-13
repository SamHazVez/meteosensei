import React, { useState } from "react";

export default function ImageCarousel({ images }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((idx + images.length - 1) % images.length);
  const next = () => setIdx((idx + 1) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel-container">
      <button onClick={prev} className="carousel-button" aria-label="Image précédente">‹</button>

      <div className="carousel-image-wrapper">
        <img
          src={images[idx]}
          alt={`Slide ${idx + 1}`}
          className="carousel-image"
        />
      </div>

      <button onClick={next} className="carousel-button" aria-label="Image suivante">›</button>
    </div>
  );
}
