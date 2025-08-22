'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    HeroContent,
    TilesSectionContent,
    ShowerHeadsContent,
    ToiletSeatsSectionContent,
    CollectionsContent
} from "./parallax-content";

const parallaxSections = [
    {
        id: "hero",
        title: "Mirage Tiles",
        subtitle: "Transform Your Space with Premium Tiles & Bathroom Fixtures",
        backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236005/mirage/anq5esbmpzvmdq6zpdat.jpg",
        Component: HeroContent,
    },
    {
        id: "tiles",
        title: "Ceramic Tiles",
        subtitle: "Transform your spaces with tiles that redefine elegance, functionality, and durability.",
        backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236050/mirage/fsvhgkpwcyiyjfotr3j7.jpg",
        backgroundVideo: "https://res.cloudinary.com/zurri-cloud/video/upload/v1755868725/mirage/1734675334080_bvr29i.mp4",
        Component: TilesSectionContent,
    },
    {
        id: "shower-heads",
        title: "Shower Heads",
        subtitle: "Elevate your bathing experience with our premium shower heads.",
        backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236079/mirage/gucfvsjsuee7rho3wymh.jpg",
        backgroundVideo: "https://res.cloudinary.com/zurri-cloud/video/upload/v1755869579/mirage/1733727348504_zgtzjq.mp4",
        Component: ShowerHeadsContent,
    },
    {
        id: "toilet-seats",
        title: "Toilet Seats",
        subtitle: "Elevate your bathing experience with our premium shower heads.",
        backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236121/mirage/ho4li7tm8yurgrzkacrb.jpg",
        backgroundVideo: "https://res.cloudinary.com/zurri-cloud/video/upload/v1755870569/mirage/Toilet_Seat_Showroom_Video_Concept_uleodv.mp4",
        Component: ToiletSeatsSectionContent,
    },
    // {
    //   id: "bath-tub",
    //   title: "Bath Tubs",
    //   subtitle: "Elevate your bathing experience with our premium shower heads.",
    //   backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236122/mirage/fv7qgb3ihskuxhus2mkm.jpg",
    //   Component: CollectionsContent,
    // }
];

export default function ParallaxSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative">
            {parallaxSections.map((section, index) => {
                const targetScale = 1 - ((parallaxSections.length - index) * 0.05);
                const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
                const y = useTransform(scrollYProgress, [0, 1], [0, -index * 100]);

                return (
                    <motion.section
                        key={section.id}
                        style={{
                            scale,
                            y,
                            ...(!section.backgroundVideo && { backgroundImage: `url(${section.backgroundImage})` }),
                        }}
                        className="top-0 h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden"
                    >
                        <section.Component section={section} />
                        {!section.backgroundVideo && <div className="absolute inset-0 bg-black/20" />}
                    </motion.section>
                );
            })}
        </div>
    );
}