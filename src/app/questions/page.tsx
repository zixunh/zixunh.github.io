"use client";

import { useState } from "react";
import Link from "next/link";

export default function QuestionsPage() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        const data = await res.json();
        setContent(data.content);
        setUnlocked(true);
      } else if (res.status === 401) {
        setError("Incorrect password.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (unlocked && content !== null) {
    return (
      <div className="min-h-screen bg-[#FFFCF8]">
        <div className="max-w-screen-lg mx-auto px-8 py-24">
          <Link
            href="/"
            className="font-serif text-sm text-zinc-500 hover:text-zinc-800 underline mb-8 inline-block"
          >
            ← Back
          </Link>
          <pre className="font-serif text-sm leading-relaxed text-zinc-700 whitespace-pre-wrap mt-6">
            {content}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFCF8] flex items-center justify-center">
      <div className="max-w-sm w-full mx-auto px-8">
        <h1 className="font-serif text-lg mb-6 text-zinc-800">
          Enter password to view
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(null);
            }}
            placeholder="Password"
            className="w-full border border-zinc-300 rounded px-3 py-2 text-sm font-serif text-zinc-800 bg-white focus:outline-none focus:border-zinc-500"
            autoFocus
          />
          {error && (
            <p className="text-sm font-serif text-red-500">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-zinc-800 text-white text-sm font-serif py-2 rounded hover:bg-zinc-700 transition-colors disabled:opacity-50"
          >
            {loading ? "Checking…" : "Unlock"}
          </button>
        </form>
        <div className="mt-6">
          <Link
            href="/"
            className="font-serif text-sm text-zinc-500 hover:text-zinc-800 underline"
          >
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
}
