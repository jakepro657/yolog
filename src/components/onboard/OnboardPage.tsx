"use client"

import React, { useContext } from "react";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeftIcon } from "lucide-react";
import onboard1 from "/public/icon/onboard1.png";
import onboard2 from "/public/icon/onboard2.png";
import onboard3 from "/public/icon/onboard3.png";
import onboard4 from "/public/icon/onboard4.png";
import onboard5 from "/public/icon/onboard5.png";
import progress1 from "/public/icon/progress1.png";
import progress2 from "/public/icon/progress2.png";
import progress3 from "/public/icon/progress3.png";
import progress4 from "/public/icon/progress4.png";
import { OnboardContext } from "./OnboardProgressProvider";

type Props = {};

function OnboardPage({}: Props) {
  const { handleNext, handlePrev, index, setIndex } =
    useContext(OnboardContext);

  

  return (
    <div className="w-full h-full overflow-clip">
        
    </div>
  );
}

export default OnboardPage;
