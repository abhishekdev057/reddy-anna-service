"use client";

import { DotLottieReact, type DotLottie } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

export function CustomerSupportIllustration() {
  const [animation, setAnimation] = useState<DotLottie | null>(null);
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!animation) return;

    if (reduceMotion) {
      animation.pause();
      return;
    }

    animation.play();
  }, [animation, reduceMotion]);

  return (
    <DotLottieReact
      aria-label="A customer support specialist helping someone online"
      autoplay={!reduceMotion}
      className="customer-support-lottie"
      dotLottieRefCallback={setAnimation}
      layout={{ fit: "contain", align: [0.5, 0.5] }}
      loop={!reduceMotion}
      renderConfig={{ devicePixelRatio: 1.5 }}
      role="img"
      src="/animations/customer-support.lottie"
    />
  );
}
