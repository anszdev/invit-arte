import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={clsx("mx-auto w-full max-w-[1400px] px-4")}>{children}</div>
  );
}
