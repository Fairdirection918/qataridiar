"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "gac_cookie_notice_dismissed";

export function CookieNotice() {
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const privacyHref = pathname?.startsWith("/en") ? "/en/privacy-policy" : "/ar/privacy-policy";

  useEffect(() => {
    const t = setTimeout(() => {
      if (localStorage.getItem(STORAGE_KEY) === "1") setVisible(false);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (

    // gac footer marker: {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
    <>
      {/* gac:start:cookie-notice */}
      <div
        id="gac-cookie-notice"
        role="region"
        aria-label="Cookie notice"
        className="fixed z-[999] mx-auto max-w-[26rem] rounded-[10px] bg-qd-navy p-[16px_20px] text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] start-4 end-4 bottom-44 lg:start-6 lg:end-auto lg:bottom-6 lg:mx-0"
      >
        <p className="mb-[12px] text-[14px] leading-[24px]">
          We use cookies to improve your experience on this website.{" "}
          <a href={privacyHref} className="underline">
            Privacy Policy
          </a>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="cursor-pointer rounded-md border border-current bg-transparent px-[20px] py-[8px] text-[14px] font-bold"
        >
          OK
        </button>
      </div>
      {/* gac:end:cookie-notice */}
    </>
  );
}