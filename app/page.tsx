"use client";
import React from "react";
import Image from "next/image";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#E84125]">
          Solana Portfolio Viewer
        </h1>
        <h1 className="text-md font-bold text-center text-white my-2">
          {"Built by adlonymous"}
        </h1>
        <div className="text-md font-bold text-center text-white my-2">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
