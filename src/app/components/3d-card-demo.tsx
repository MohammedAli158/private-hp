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
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border">
        <CardItem
          translateZ={50}
          className="text-lg font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300"
        >
          {subtitle}
        </CardItem>

        <CardItem translateZ={100} className="w-full mt-4">
          <img
            src={imageUrl}
            height="800"
            width="800"
            className="h-44 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>

        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="a"
            href={enrollLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
          >
            Learn more →
          </CardItem>

          <CardItem
            translateZ={20}
            as="button"
            onClick={() => window.open(enrollLink, "_blank")}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Enroll Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
