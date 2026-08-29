"use client";

import { useState, useRef } from "react";

interface Props {
  images: string[];
  title: string;
}

export default function PhotoCardStack({ images, title }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [flyDir, setFlyDir] = useState<"left" | "right" | null>(null);
  const [dragX, setDragX] = useState(0);
  const dragging = useRef(false);
  const startX = useRef(0);
  const animating = useRef(false);

  if (images.length === 0) {
    return (
      <div className="text-center py-32 text-black/30">
        <p className="text-sm tracking-widest uppercase">Photos coming soon</p>
      </div>
    );
  }

  const total = images.length;

  const advance = (dir: "left" | "right") => {
    if (animating.current) return;
    animating.current = true;
    setFlyDir(dir);
    setDragX(0);
  };

  const onTransitionEnd = () => {
    setActiveIdx((i) => (flyDir === "left" ? (i + 1) % total : (i - 1 + total) % total));
    setFlyDir(null);
    animating.current = false;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (animating.current) return;
    dragging.current = true;
    startX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setDragX(e.clientX - startX.current);
  };

  const onPointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    if (dragX < -60) advance("left");
    else if (dragX > 60) advance("right");
    else setDragX(0);
  };

  const onClick = () => {
    if (Math.abs(dragX) < 5 && !animating.current) advance("left");
  };

  // Compute transform for each card slot (0 = top, 1 = second, 2 = third)
  const getCardStyle = (slot: number, isTop: boolean): React.CSSProperties => {
    const scale = 1 - slot * 0.04;
    const translateY = slot * -16;
    const rotate = slot === 0 ? 0 : slot === 1 ? -1.5 : -3;

    if (isTop && flyDir) {
      return {
        transform: `scale(${scale}) translateY(${translateY}px) translateX(${flyDir === "left" ? "-130vw" : "130vw"}) rotate(${flyDir === "left" ? -20 : 20}deg)`,
        transition: "transform 0.35s cubic-bezier(0.4, 0, 1, 1)",
        willChange: "transform",
      };
    }

    if (isTop) {
      return {
        transform: `scale(${scale}) translateY(${translateY}px) translateX(${dragX}px) rotate(${dragX * 0.05}deg)`,
        transition: dragging.current ? "none" : "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform",
        cursor: dragging.current ? "grabbing" : "grab",
      };
    }

    return {
      transform: `scale(${scale}) translateY(${translateY}px) rotate(${rotate}deg)`,
      transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      willChange: "transform",
      cursor: "default",
    };
  };

  // Build 3 visible slots from activeIdx
  const slots = [0, 1, 2].map((slot) => ({
    slot,
    imgIdx: (activeIdx + slot) % total,
  })).reverse(); // render back-to-front so top card is last (highest z)

  return (
    <div className="flex flex-col items-center select-none py-16">
      <div
        style={{
          position: "relative",
          width: "min(72vw, 48vh)",
          aspectRatio: "676 / 1010",
          perspective: "900px",
        }}
      >
        {slots.map(({ slot, imgIdx }) => {
          const isTop = slot === 0;
          return (
            <div
              key={slot}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 3 - slot,
                borderRadius: "2px",
                overflow: "hidden",
                backgroundColor: "#111",
                boxShadow: isTop
                  ? "0 24px 64px rgb(0 0 0 / 0.3), 0 4px 16px rgb(0 0 0 / 0.15)"
                  : "0 8px 24px rgb(0 0 0 / 0.15)",
                transformOrigin: "bottom center",
                ...getCardStyle(slot, isTop),
              }}
              onPointerDown={isTop ? onPointerDown : undefined}
              onPointerMove={isTop ? onPointerMove : undefined}
              onPointerUp={isTop ? onPointerUp : undefined}
              onPointerCancel={isTop ? onPointerUp : undefined}
              onClick={isTop ? onClick : undefined}
              onTransitionEnd={isTop && flyDir ? onTransitionEnd : undefined}
            >
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
                  userSelect: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgb(0 0 0 / 0.65) 0%, transparent 55%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.25rem 1.5rem",
                  pointerEvents: "none",
                }}
              >
                <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>
                  {title}
                </p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.55rem", letterSpacing: "0.12em", margin: "0.2rem 0 0" }}>
                  {imgIdx + 1} / {total}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-black/25 text-xs tracking-widest uppercase">
        ← drag · tap next →
      </p>
    </div>
  );
}
