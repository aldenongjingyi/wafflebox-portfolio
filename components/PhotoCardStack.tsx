"use client";

import { useState, useRef, useCallback } from "react";

interface Props {
  images: string[];
  title: string;
}

export default function PhotoCardStack({ images, title }: Props) {
  const [order, setOrder] = useState(() => images.map((_, i) => i));
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dismissed, setDismissed] = useState<number | null>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const advance = useCallback((dir: "next" | "prev") => {
    setDismissed(order[order.length - 1]);
    setTimeout(() => {
      setOrder((prev) => {
        const next = [...prev];
        if (dir === "next") {
          const top = next.pop()!;
          next.unshift(top);
        } else {
          const bottom = next.shift()!;
          next.push(bottom);
        }
        return next;
      });
      setDismissed(null);
      setDragX(0);
    }, 300);
  }, [order]);

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    setDragX(e.clientX - startX.current);
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setDragging(false);
    if (dragX < -60) advance("next");
    else if (dragX > 60) advance("prev");
    else setDragX(0);
  };

  if (images.length === 0) {
    return (
      <div className="text-center py-32 text-black/30">
        <p className="text-sm tracking-widest uppercase">Photos coming soon</p>
      </div>
    );
  }

  const visibleCount = Math.min(3, images.length);

  return (
    <div className="relative flex flex-col items-center select-none py-16">
      {/* Stack scene */}
      <div
        className="relative"
        style={{
          width: "min(72vw, 48vh)",
          aspectRatio: "676 / 1010",
          perspective: "900px",
        }}
      >
        {order.map((imgIdx, stackPos) => {
          const isTop = stackPos === order.length - 1;
          const depth = order.length - 1 - stackPos;

          // Only render top 3 cards
          if (depth >= visibleCount) return null;

          const isDismissing = dismissed === imgIdx;

          // Stack offset — cards behind peeking out
          const scale = 1 - depth * 0.04;
          const translateY = depth * -14;
          const rotate = depth === 0 ? 0 : depth === 1 ? -1.5 : -3;

          let topCardTransform = "";
          if (isTop) {
            const flyX = isDismissing
              ? dragX > 0
                ? "120vw"
                : "-120vw"
              : `${dragX}px`;
            const flyRotate = isDismissing
              ? dragX > 0
                ? "25deg"
                : "-25deg"
              : `${dragX * 0.08}deg`;
            topCardTransform = `translateX(${flyX}) rotate(${flyRotate})`;
          }

          return (
            <div
              key={imgIdx}
              style={{
                position: "absolute",
                inset: 0,
                transform: isTop
                  ? `scale(${scale}) translateY(${translateY}px) ${topCardTransform}`
                  : `scale(${scale}) translateY(${translateY}px) rotate(${rotate}deg)`,
                transition: isTop && dragging
                  ? "none"
                  : isDismissing
                  ? "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transformOrigin: "bottom center",
                zIndex: stackPos,
                cursor: isTop ? (dragging ? "grabbing" : "grab") : "default",
                borderRadius: "2px",
                overflow: "hidden",
                boxShadow: isTop
                  ? "0 24px 64px rgb(0 0 0 / 0.35), 0 4px 16px rgb(0 0 0 / 0.2)"
                  : "0 12px 32px rgb(0 0 0 / 0.2)",
                backgroundColor: "#111",
              }}
              onPointerDown={isTop ? onPointerDown : undefined}
              onPointerMove={isTop ? onPointerMove : undefined}
              onPointerUp={isTop ? onPointerUp : undefined}
              onPointerCancel={isTop ? onPointerUp : undefined}
              onClick={isTop && Math.abs(dragX) < 5 ? () => advance("next") : undefined}
            >
              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[imgIdx]}
                alt={`${title} ${imgIdx + 1}`}
                draggable={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  pointerEvents: "none",
                }}
              />

              {/* Overlay gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgb(0 0 0 / 0.7) 0%, rgb(0 0 0 / 0.1) 50%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Bottom label */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.5rem",
                  pointerEvents: "none",
                }}
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    margin: "0.25rem 0 0",
                  }}
                >
                  {imgIdx + 1} / {images.length}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hint */}
      <p className="mt-8 text-black/25 text-xs tracking-widest uppercase">
        ← drag · tap next →
      </p>
    </div>
  );
}
