"use client";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { LampContainer } from "@/components/ui/lamp";
import { TextAnimate } from "@/components/ui/text-animate";

export function Services() {
  return (
    <div
      id="services"
      className="w-full min-h-screen bg-black/[0.96] flex justify-center items-center gap-3 flex-col"
    >
      <TextAnimate
        className={"text-[32px] mt-20"}
        animation="blurInUp"
        by="character"
      >
        Bizning xizmatlar
      </TextAnimate>

      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "IT Konsalting",
    description:
      "Biz sizga texnologik masalalarda maslahat berish va eng yaxshi yechimlarni taqdim etish bilan shug'ullanamiz.",
    link: "https://stripe.com",
  },
  {
    title: "Web va Mobil Ilovalar",
    description:
      "Yangi web va mobil ilovalar yaratishda professional xizmatlar.",
    link: "https://netflix.com",
  },
  {
    title: "Xavfsizlik Yechimlari",
    description:
      "Kompaniyangizning ma'lumotlarini xavfsizligini ta'minlash uchun ilg'or xavfsizlik yechimlari.",
    link: "https://google.com",
  },
  {
    title: "Bulut Texnologiyalari",
    description:
      "Sizga o'z biznesingizni bulut texnologiyalarida rivojlantirishda yordam beramiz.",
    link: "https://meta.com",
  },
  {
    title: "Ma'lumotlar Bazasi Boshqaruvi",
    description:
      "Bizning jamoa samarali va xavfsiz ma'lumotlar bazasi boshqaruvini ta'minlaydi.",
    link: "https://amazon.com",
  },
  {
    title: "Sun'iy Intellekt va Mashina O'qitish",
    description:
      "Kompaniyangizni sun'iy intellekt va mashina o'qitish orqali optimallashtirish va innovatsion yechimlar yaratish.",
    link: "https://microsoft.com",
  },
];
