"use client";

import { useEffect, useState } from "react";
import { siteInfo } from "@/data/site";

export function WelcomeSplash() {
  const [isShowing, setIsShowing] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const enterDuration = 1250;
    const exitDuration = 700;

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, enterDuration);

    const hideTimer = window.setTimeout(() => {
      setIsShowing(false);
    }, enterDuration + exitDuration);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!isShowing) {
    return null;
  }

  return (
    <div className={`welcome-splash-overlay ${isExiting ? "welcome-splash-overlay--exit" : ""}`}>
      <div className="welcome-splash-orb" aria-hidden="true" />
      <div className="welcome-splash-content">
        <p className="welcome-splash-greeting">স্বাগতম</p>
        <h1 className="welcome-splash-title">{siteInfo.name}</h1>
        <p className="welcome-splash-subtitle">{siteInfo.tagline}</p>
      </div>
    </div>
  );
}
