"use client";

import { useEffect, useState } from "react";

const SUBMITTED_KEY = "qd_lead_popup_submitted";
const SHOW_DELAY_MS = 4_000;

/**
 * Fires shortly after the visitor lands on each page (or earlier on desktop
 * exit-intent). Dismissing it never suppresses it — it reappears on the next
 * page load/navigation. Suppressed permanently once a lead was captured
 * (set by LeadForm on successful submit).
 */
export function useSmartPopup({ showDelayMs = SHOW_DELAY_MS } = {}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(SUBMITTED_KEY) === "1") return;

    let fired = false;

    const fire = () => {
      if (fired) return;
      fired = true;
      setOpen(true);
      cleanup();
    };

    const onMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0 && !event.relatedTarget) fire();
    };

    const timer = setTimeout(fire, showDelayMs);

    function cleanup() {
      document.removeEventListener("mouseout", onMouseOut);
      clearTimeout(timer);
    }

    document.addEventListener("mouseout", onMouseOut);

    return cleanup;
  }, [showDelayMs]);

  return [open, setOpen] as const;
}
