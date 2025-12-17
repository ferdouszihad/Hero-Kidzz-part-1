"use client";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const CartButton = ({ product }) => {
  const session = useSession();
  const path = usePathname();
  const router = useRouter();
  const islogin = session?.status == "authenticated";

  const handleAdd2Cart = () => {
    if (islogin) alert(product._id);
    else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };

  return (
    <div>
      <button
        onClick={handleAdd2Cart}
        className="btn btn-primary btn-wide flex gap-2"
      >
        <FaCartPlus />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
