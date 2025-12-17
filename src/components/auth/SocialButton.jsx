"use client";
import { signIn } from "next-auth/react";
import { useParams, useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export const SocialButtons = () => {
  const params = useSearchParams();
  const callback = params.get("callbackUrl") || {};
  const handleLogin = async () => {
    signIn("google", { callbackUrl: callback });
  };

  return (
    <div className="flex gap-3 mt-4">
      <button
        onClick={handleLogin}
        className="btn btn-outline btn-error flex-1"
      >
        <FaGoogle className="text-lg" />
        Google
      </button>
    </div>
  );
};
