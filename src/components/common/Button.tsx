"use client";

import { type MouseEvent } from "react";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "inverse";
  href?: string;
  onClick?: () => void;
  hoverLabel?: string;
};

export function Button({
  label,
  variant = "primary",
  href,
  onClick,
  hoverLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-block font-extrabold uppercase rounded-full py-4 px-12 transition-all overflow-hidden h-[60px] group cursor-pointer duration-500 will-change-transform transform border-2 ease-in-out";

  const variants = {
    primary:
      "bg-primary text-light hover:bg-dark hover:text-primary border-transparent",
    secondary: "bg-dark text-light hover:text-primary border-light",
    inverted:
      "bg-primary text-light hover:bg-light hover:text-primary border-transparent",
  };

  const buttonStyle = clsx(
    baseStyles,
    variants[variant as keyof typeof variants]
  );
  const contentTranslate = clsx(
    "flex flex-col transition-transform duration-300 text-center",
    hoverLabel && "group-hover:-translate-y-1/2"
  );
  const labelStyle = clsx(hoverLabel && "group-hover:opacity-0 leading-[1.6]");
  const hoverLabelStyle = "opacity-0 group-hover:opacity-100 leading-[1.6]";

  const onMoveButton = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const target = e.currentTarget;
    const { offsetX, offsetY } = e.nativeEvent;
    const { clientWidth: width, clientHeight: height } =
      e.target as HTMLElement;
    const movement = 2;
    const translateX = offsetX < width / 2 ? -movement : movement;
    const translateY = offsetY < height / 2 ? -movement : movement;

    target.style.transform = `translate(${translateX}px, ${translateY}px)`;
  };

  const onResetButtonPosition = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const target = e.currentTarget;
    target.style.transform = `translate(0px, 0px)`;
  };

  if (href) {
    return (
      <a
        className={buttonStyle}
        href={href}
        onMouseMove={onMoveButton}
        onMouseLeave={onResetButtonPosition}
      >
        <div className={contentTranslate}>
          <span className={labelStyle}>{label}</span>
          {hoverLabel && <span className={hoverLabelStyle}>{hoverLabel}</span>}
        </div>
      </a>
    );
  }

  return (
    <button
      className={buttonStyle}
      onClick={onClick}
      onMouseMove={onMoveButton}
      onMouseLeave={onResetButtonPosition}
    >
      <div className={contentTranslate}>
        <span className={labelStyle}>{label}</span>
        {hoverLabel && <span className={hoverLabelStyle}>{hoverLabel}</span>}
      </div>
    </button>
  );
}
