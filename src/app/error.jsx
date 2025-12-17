"use client";
import Link from "next/link";
import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";

const error = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-5">
      <BiSolidErrorAlt size={100} className="text-primary" />
      <h2 className="text-4xl font-bold">Somethin Went Wrong</h2>
      <Link href={"/"} className="btn">
        Go to Home
      </Link>
    </div>
  );
};

export default error;
