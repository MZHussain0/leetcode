import { atom } from "recoil";

interface authModalState {
  isOpen: boolean;
  type: "login" | "register" | "forgotPassword";
}

const initialAuthModalState: authModalState = {
  isOpen: false,
  type: "login",
};

export const authModalState = atom({
  key: "authModalState",
  default: initialAuthModalState,
});
