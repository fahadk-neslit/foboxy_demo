import React from "react";
import Button from "../../atoms/buttons/Button";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  return (
    <div className="flex flex-row sticky top-0 left-0 w-full py-4 max-body max-h-[126px] body_padding justify-between items-center bg-white z-50">
      <img src="/assets/svg/logo.svg" width={174} height={54} />
      <div className="hidden sm:hidden md:hidden lg:flex justify-start items-center gap-5 ">
        <h2 className="normal_button">Fotobox mieten</h2>
        <h2 className="normal_button">FAQ</h2>
        <h2 className="normal_button">Für Veranstalter</h2>
        <h2 className="normal_button">Über uns</h2>
      </div>
      <div className="hidden sm:hidden md:hidden lg:flex">
        <Button />
      </div>
      <div className="flex sm:flex md:flex lg:hidden">
        <GiHamburgerMenu size={24} />
      </div>
    </div>
  );
}

export default Header;
