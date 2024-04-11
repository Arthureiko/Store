import Image from "next/image";
import logo from "@/app/public/images/logo.jpeg";
import perfil from "@/app/public/images/perfil.jpeg";

function Header() {
  return (
    <header className="flex items-center justify-between border-b fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div>
        <Image
          src={logo}
          alt="Imagem da logo"
          width={150}
          height={100}
          className="p-4"
        />
      </div>
      <h1 className="text-xl">Store Shirt</h1>
      <button className="flex items-center gap-1">
        <Image src={perfil} alt="Imagem da perfil" width={50} height={50} />
        Arthur Eiko
      </button>
    </header>
  );
}
export default Header;
