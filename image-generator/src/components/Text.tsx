import type { FC, ReactNode } from "react";

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

export default Text;
