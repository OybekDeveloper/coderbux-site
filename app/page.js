import React from "react";
import { Home } from "./_components/Home";
import { Services } from "./_components/Services";
import { AboutUs } from "./_components/AboutUs";

export default function HomePage() {
  return (
    <div className="">
      <Home />
      <Services />
      <AboutUs />
    </div>
  );
}
