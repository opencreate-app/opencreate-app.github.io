// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState, type PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  // const [ready, setReady] = useState(false);

  // useEffect(() => {
  //   setReady(true);
  // }, []);

  return (
    <div
      // className={`reveal ${ready ? "reveal-ready" : ""} ${className}`}
      className={className}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
