import quotes from './quotes.json';
import { Caveat } from "next/font/google";


const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      <div className="bg-white/30 backdrop-blur-lg rounded-xl p-8 max-w-xl text-center shadow-xl">
        <p className="text-2xl font-semibold mb-4 italic text-gray-800 whimsical-text ">“{randomQuote.quote}”</p>
<p className={`${caveat.className} text-lg font-medium text-gray-700`}>— {randomQuote.author}</p>
      </div>

      <footer className="mt-12 text-sm text-gray-600 ">Coded by Maram ✨</footer>
    </main>
  );
}
