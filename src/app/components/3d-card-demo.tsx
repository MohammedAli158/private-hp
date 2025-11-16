"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

interface ThreeDCardDemoProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  enrollLink?: string;
}

export default function ThreeDCardDemo({
  imageUrl,
  title,
  subtitle,
  enrollLink = "#",
}: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var h-full">
      {/* MODIFIED: Glassmorphism card body with premium effects */}
      <CardBody className="h-full w-full bg-slate-800/50 backdrop-blur-xl rounded-2xl ring-1 ring-emerald-500/20 shadow-2xl shadow-black/40 transition-all duration-300 group-hover:ring-emerald-500/40 group-hover:shadow-emerald-500/20 p-6">
        
        {/* MODIFIED: Premium gradient title with display font */}
        <CardItem
          translateZ={50}
          className="font-display text-2xl font-bold bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent mb-3"
        >
          {title}
        </CardItem>

        {/* MODIFIED: Subtle subtitle with better spacing */}
        <CardItem
          as="p"
          translateZ={60}
          className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6"
        >
          {subtitle}
        </CardItem>

        {/* MODIFIED: Enhanced image with gradient overlay */}
        <CardItem translateZ={100} className="w-full mb-8">
          <div className="relative group">
            <img
              src={imageUrl}
              className="h-48 w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
              alt={title}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </CardItem>

        {/* MODIFIED: Premium buttons with hover effects */}
        <div className="flex justify-between items-center">
          <CardItem
            translateZ={20}
            as="a"
            href={enrollLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-all duration-200 relative"
          >
            Learn more 
            <span className="ml-1 transition-transform group-hover:ml-2">→</span>
            <div className="h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full mt-1"></div>
          </CardItem>

          <CardItem
            translateZ={20}
            as="button"
            onClick={() => window.open(enrollLink, "_blank")}
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-400 text-black text-sm font-bold hover:from-emerald-400 hover:to-emerald-500 transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-emerald-500/25"
          >
            Enroll Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}