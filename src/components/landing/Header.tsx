import { Button } from "../common/Button";

export function Header() {
  return (
    <header className="container mx-auto px-6">
      <div className="max-w-3/4 mx-auto mt-6">
        <h1 className="text-8xl font-black text-center">Invit🪅Arte</h1>
        <h2 className="text-[4.6rem] font-black text-center text-balance">
          Crea invitaciones a tu estilo
        </h2>
        <p className="text-center font-medium text-2xl w-3/4 mx-auto mt-6">
          ¿Tienes una idea genial para tu evento? Con Invit🪅Arte, puedes
          plasmarla y personalizar tus invitaciones de manera fácil y rápida.
        </p>
        <div className="flex justify-center mt-12">
          <Button
            href="#"
            label="Sorprende con una "
            hoverLabel="invitación wow"
            variant="primary"
          />
        </div>
      </div>
    </header>
  );
}
