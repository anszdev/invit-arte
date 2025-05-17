import Link from "next/link";
import { NavbarLink } from "./NavbarLink";
import { Button } from "../common/Button";
import { Container } from "../common/Container";

export function Navbar() {
  return (
    <nav className="w-full py-10">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" className="font-extrabold text-3xl">
            Invit🪅Arte
          </Link>
          <div className="flex gap-x-14 ">
            <NavbarLink href="#">Servicios</NavbarLink>
            <NavbarLink href="#">Precios</NavbarLink>
            <NavbarLink href="#">Faq</NavbarLink>
          </div>
          <Button
            label="Inicia sesión"
            hoverLabel="Con Google"
            variant="primary"
          />
        </div>
      </Container>
    </nav>
  );
}
