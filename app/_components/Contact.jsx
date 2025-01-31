"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandX,
  IconBrandYoutube,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
export function Contact() {
  const placeholders = [
    "Veb-saytimning yuklanish tezligini qanday oshirish mumkin?",
    "Mobil ilovam uchun qanday dizayn tavsiyalarini bera olasiz?",
    "Mening biznesim uchun qaysi texnologiyalar eng mos?",
    "Sayt xavfsizligini qanday ta’minlash mumkin?",
    "SEO orqali veb-saytimni qanday yaxshilash mumkin?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("yuborildi");
  };

  const links = [
    {
      title: "Telegram",
      icon: (
        <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Youtube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div
      id="contact"
      className="flex justify-center items-center flex-col md:gap-10 md:space-y-5 min-h-[60vh] md:min-h-screen"
    >
      <div className=" flex flex-col justify-center  items-center px-4">
        <h2 className="mb-10 sm:mb-20 text-3xl text-center sm:text-5xl dark:text-white text-black">
          Bizga savollaringizni berishingiz mumkin
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>

      <div>
        <div className="flex items-center justify-center w-full">
          <FloatingDock
            // only for demo, remove for production
            mobileClassName="translate-y-20"
            items={links}
          />
        </div>
      </div>
    </div>
  );
}
