import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useSetRecoilState } from "recoil";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: true }));
  };
  return (
    <div className="flex justify-between items-center px-2 sm:px-12 md:px-24">
      <Link href={"/"} className="flex items-center justify-center h-20">
        <Image
          src={"/logo.png"}
          alt="leetcode"
          className="h-full"
          width={200}
          height={100}
        />
      </Link>
      <div className="flex items-center">
        <button
          className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium border-2 border-brand-orange hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange transition-all duration-300 ease-in-out"
          onClick={handleClick}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
