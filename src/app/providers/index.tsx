"use client";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const Proveiders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="z-[99999]">
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};

export default Proveiders;