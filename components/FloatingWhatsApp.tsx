"use client";

import { useState, useEffect } from "react";
import { waLink } from "@/data/config";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-2xl bg-white px-4 py-2.5 shadow-lg border border-rose-light/40">
          <p className="font-sans text-sm font-medium text-ink">
            Need help? Chat with us!
          </p>
          <div className="absolute bottom-0 right-6 -mb-1.5 h-3 w-3 rotate-45 bg-white border-r border-b border-rose-light/40" />
        </div>
      )}

      {/* Button */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 animate-glow-pulse"
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2.05 22l5.3-1.39c1.45.79 3.08 1.21 4.69 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7C17.15 3.03 14.68 2 12.04 2zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.73c0 4.46-3.63 8.1-8.1 8.1-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.06 8.06 0 0 1-1.23-4.29c0-4.46 3.63-8.1 8.1-8.1zm-2.07 3.95c-.2 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.44 1.05 2.83 1.19 3.02.14.2 2.01 3.21 4.95 4.37 2.45.96 2.95.77 3.48.72.53-.05 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.55-.35-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.14-.65.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07a8 8 0 0 1-2.33-1.44 8.77 8.77 0 0 1-1.61-2c-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.2-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.62-1.51-.87-2.07-.23-.53-.46-.46-.63-.47-.16 0-.35-.01-.54-.01z" />
        </svg>

        {/* Notification badge */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white animate-badge-bounce">
          1
        </span>
      </a>
    </div>
  );
}
