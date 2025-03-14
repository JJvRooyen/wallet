"use client"

import { useState } from "react";
import Link from "next/link";

export default function CopyrightPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md p-6 text-center">
        <h2 className="text-lg font-semibold">Design & Development Credits</h2>
        <p className="mt-2 text-gray-700">
          This website was <strong>designed by</strong>{" "}
          <Link href="https://www.figma.com/@anima" target="_blank" className="text-blue-500 underline">
            Anima
          </Link>
          . <br />
          The development, coding, and implementation were done by <strong>me</strong>.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
