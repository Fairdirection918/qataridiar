"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "smart-popup:shown";
const SUBMITTED_KEY = "qd_lead_popup_submitted";
const SHOW_DELAY_MS = 4_000;

interface UseSmartPopupOptions {
  /** Time on page (ms) before the popup fires. */
  showDelayMs?: number;
  /** sessionStorage key used to guarantee a once-per-session show. */
  storageKey?: string;
}

/**
 * Fires once per session shortly after the visitor lands (or earlier on
 * desktop exit-intent). Suppressed permanently once a lead was captured.
 * Any element with `data-popup-suppress` cancels the popup for the session
 * when clicked, so visitors who already found their way to a contact link
 * aren't interrupted.
 */
export function useSmartPopup({
  showDelayMs = SHOW_DELAY_MS,
  storageKey = STORAGE_KEY,
}: UseSmartPopupOptions = {}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(storageKey)) return;
    if (localStorage.getItem(SUBMITTED_KEY) === "1") return;

    let fired = false;

    const fire = () => {
      if (fired) return;
      fired = true;
      sessionStorage.setItem(storageKey, "1");
      setOpen(true);
      cleanup();
    };

    const suppress = () => {
      sessionStorage.setItem(storageKey, "1");
      cleanup();
    };

    const onMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0 && !event.relatedTarget) fire();
    };

    const onClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement | null)?.closest("[data-popup-suppress]")) {
        suppress();
      }
    };

    const timer = setTimeout(fire, showDelayMs);

    function cleanup() {
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("click", onClick);
      clearTimeout(timer);
    }

    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("click", onClick);

    return cleanup;
  }, [showDelayMs, storageKey]);

  return [open, setOpen] as const;
}
