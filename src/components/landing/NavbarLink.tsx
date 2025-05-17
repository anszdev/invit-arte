import Link from "next/link";

type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavbarLink({ href, children }: NavbarLinkProps) {
  return (
    <Link
      href={href}
      className="font-extrabold text-lg uppercase text-dark/90 hover:text-dark/100 transition-colors after:content-[''] after:block after:w-full after:h-0.5 after:bg-primary overflow-hidden after:-translate-x-full hover:after:translate-x-0 after:transition-transform after:duration-300"
    >
      {children}
    </Link>
  );
}
