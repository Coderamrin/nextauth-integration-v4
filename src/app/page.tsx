"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      {session?.user && (
        <div>
          <p className="text-3xl">Welcome, {session.user.name}</p>
          <div className="mb-5">{JSON.stringify(session?.user, null, 2)}</div>

          <button
            onClick={() => signOut()}
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      )}

      {!session?.user && (
        <div className="mt-5 space-x-3">
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="/auth/signin"
          >
            Signin
          </Link>

          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="/auth/signup"
          >
            Signup
          </Link>
        </div>
      )}
    </main>
  );
}
