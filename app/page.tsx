"use client";

import React from "react";
import HorizontalScroller2 from "@/components/BrandLogos/Clients";
import { Contact } from "@/components/Contact/Contact";
import FeatureComponent from "@/components/Feature/Feature";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import { Industries } from "@/components/Services/Industries";
import { Services } from "@/components/Services/Services";
import { ScrollProvider } from "@/contexts/ScrollContext";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import Home from "./Home/page";
import Admin from "./Admin/page";
import Upload from "./Upload/page";
export default function page() {
  return (
    <ScrollProvider>
      <Hero />
      <FeatureComponent />
      <Services />
      <HorizontalScroller2 />
      <Projects />
      <Industries />
      <Testimonials />
      <Contact />
      {/*
      <Home/>
      <Admin/>
      <Upload/> */}
    </ScrollProvider>
  );
}
