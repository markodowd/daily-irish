"use client";
import { useRef } from "react";
import type { FC, ReactNode } from "react";

import html2canvas from "html2canvas";

const Text: FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
}) => (
  <p
    className={`text-white text-9xl font-bold drop-shadow-[0_6px_6px_rgba(0,0,0,1)] ${className}`}
  >
    {children}
  </p>
);

const Word = ({ text }: { text: string }) => (
  <div className="flex flex-col items-center gap-4">
    <Text>{text}</Text>
  </div>
);

export default function Home() {
  const imageRef = useRef(null);

  const saveImage = () => {
    if (!imageRef.current) return;

    html2canvas(imageRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "gradient_image.png";
      link.click();
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="w-[1200px] h-max bg-gradient-to-r from-emerald-950 to-cyan-950 flex flex-col"
        ref={imageRef}
      >
        <div className="p-8 rounded-3xl m-14 flex-1 flex flex-col gap-8 justify-evenly items-center bg-gradient-to-br from-green-950 to-cyan-950 shadow-2xl">
          <Word text="Grá" />
          <Text className="text-7xl">☘</Text>
          <Word text="Hello" />
        </div>
        <div className="h-max flex justify-end">
          <p className="m-4 text-lg text-white">@DailyIrishBot</p>
        </div>
      </div>

      <button
        onClick={saveImage}
        className="bg-purple-500 text-white px-4 py-2 rounded-md"
      >
        Save image
      </button>
    </main>
  );
}
