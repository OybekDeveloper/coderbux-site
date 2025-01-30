"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextTitle({ title, revealText }) {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] rounded-2xl w-full">
      <TextRevealCard text={title} revealText={revealText} /> 
    </div>
  );
}
