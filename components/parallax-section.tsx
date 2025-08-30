'use client';

import { useEffect, useRef } from "react";
import { useParallaxScroll } from "../src/hooks/useParallaxScroll";
import {
    HeroContent,
    TilesSectionContent,
    ShowerHeadsContent,
    ToiletSeatsSectionContent,
} from "./parallax-content";

const parallaxSections = [
    {
        id: "hero",
        title: "Mirage Tiles",
        subtitle: "Transform your space with our exquisite collection of ceramic tiles. From modern minimalist designs to classic patterns, find the perfect tiles for every room.",
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
    const { currentSlideNumber } = useParallaxScroll({
        totalSlides: parallaxSections.length
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = '';
            };
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            const backgrounds = containerRef.current.querySelectorAll('.parallax-background');

            backgrounds.forEach((bg, index) => {
                bg.classList.remove('up-scroll', 'down-scroll');

                if (index < currentSlideNumber) {
                    bg.classList.add('down-scroll');
                } else if (index > currentSlideNumber) {
                    bg.classList.add('up-scroll');
                }
            });
        }
    }, [currentSlideNumber]);

    return (
        <div ref={containerRef} className="parallax-container">
            {parallaxSections.map((section) => (
                <section
                    key={section.id}
                    className="parallax-background"
                    style={{
                        ...(!section.backgroundVideo && { backgroundImage: `url(${section.backgroundImage})` }),
                    }}
                >
                    {/* Video Background */}
                    {section.backgroundVideo && (
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={section.backgroundVideo} type="video/mp4" />
                        </video>
                    )}
                    <section.Component section={section} />
                </section>
            ))}
        </div>
    );
}