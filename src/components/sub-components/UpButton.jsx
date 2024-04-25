import React from "react";

export default function UpButton() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="z-50 fixed right-10 bottom-6 text-theme-fill border-2 rounded-full text-4xl p-5 h-12 w-8 flex place-content-center items-center cursor-pointer transition-all duration-500 ease-in-out hover:bg-theme-hover dark:hover:bg-theme-hover hover:-translate-y-2"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
    >
      &#8593;
    </button>
  );
}
