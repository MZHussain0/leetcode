import { auth } from "@/firebase/firebase";
import { FC } from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";

interface LogoutProps {}

const Logout: FC<LogoutProps> = ({}) => {
  const [signOut, loading, error] = useSignOut(auth);
  const handleLogout = () => {
    signOut();
  };
  return (
    <button
      className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange"
      onClick={handleLogout}>
      <FiLogOut />
    </button>
  );
};

export default Logout;
