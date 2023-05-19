import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const router = useRouter();
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type: type }));
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password)
      return alert("Please fill all fields");
    try {
      const newUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("User not found", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      }
      if (error.code === "auth/wrong-password") {
        toast.error("Wrong Password", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      }
      if (error.code === "auth/too-many-requests") {
        toast.error("Too many requests", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      }
    }
  }, [error]);
  return (
    <form className="space-y-6 px-6 pb-4" onSubmit={handleSubmit}>
      <h3 className="text-xl font-medium text-white">Sign in to leetcode</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300">
          Your Email
        </label>
        <input
          onChange={handleInputChange}
          type="email"
          id="email"
          name="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-600 text-white placeholder-gray-400"
          placeholder="name@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300">
          Your Password
        </label>
        <input
          onChange={handleInputChange}
          type="password"
          id="password"
          name="password"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-600 text-white placeholder-gray-400"
          placeholder="**********"
        />
      </div>

      <button
        type="submit"
        className="w-full focus:ring-blue-300 text-white font-medium text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s rounded-lg">
        {loading ? "Please Wait..." : "Log In"}
      </button>
      <button className="w-full flex justify-end">
        <a
          href="#"
          className="text-sm block text-brand-orange hover:underline w-full text-right"
          onClick={() => handleClick("forgotPassword")}>
          Forgot Password?
        </a>
      </button>
      <div className="text-sm font-medium text-gray-300">
        Not registered yet?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={() => handleClick("register")}>
          Create account
        </a>
      </div>
    </form>
  );
};

export default Login;
