'use client';
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [quote, setQuote] = useState(null);
  const [category, setCategory] = useState(null);

  const fetchQuote = async (keyword = "") => {
    // Use your own Next.js API route here
    // For now, category filtering is not implemented on backend, so ignore keyword
    const url = "/api/quotes";

    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setQuote(data[0]); // Use first quote from response array
    } catch (err) {
      console.error("Failed to fetch quote:", err);
    }
  };

  useEffect(() => {
    fetchQuote(); // fetch random quote initially
  }, []);

  useEffect(() => {
    if (category) fetchQuote(category); // fetch by category if implemented in backend later
  }, [category]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      <Navbar onCategorySelect={setCategory} />

      <div className="border-2 border-black p-6 max-w-xl text-center rounded-2xl bg-white shadow-md mb-8">
        {quote ? (
          <>
            <p className="text-xl italic mb-4 whimsical-text">“{quote.q}”</p>
            <p className={`${caveat.className} text-lg text-gray-600 font-geist-sans`}>— {quote.a}</p>
          </>
        ) : (
          <p className="text-xl">Loading...</p>
        )}
      </div>

      <footer className="text-sm text-gray-400">Coded by Maram ✨</footer>
    </main>
  );
}
