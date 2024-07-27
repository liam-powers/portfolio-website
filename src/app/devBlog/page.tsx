'use client'
import NavLinks from "../components/NavLinks";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Link from 'next/link';

export default function Film() {
    return (
        <div>
            <GoogleAnalytics />
            <CustomCursor />
            <NavLinks />
            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 pt-10 items-center">
                <div className="text-black text-2xl px-16">
                    <div className="bg-white p-4 rounded-2xl max-w-[1200px] h-auto">
                        <div>
                            WildHacks 2024 | April 6-7 | <Link href="https://www.parkwise.club/" className="text-blue-600 underline">Project</Link>
                            <div className="text-md">
                                This was my first hacakathon experience! Our team competed in the Urban Development track by creating a web app for helping people find garage and street parking based on their own preferences (price, walking distance, spot availability, arrival time, etc.). We used React, AWS, Python, JavaScript, Google Maps API, and data from parkchicago.com to create our project.

                                As our time was limited, we focused on creating a functional prototype solely for street parking.

                                Things that went well:
                                I learned a lot about how to work on a team. Without a project manager, we felt lost early on, but slowly we found our groove and delegated tasks to keep us busy and efficient.

                                Things that didn't go so well:
                                Our project didn't place in any of the categories. The judge's major detractor towards our score was originality; they thought it was functionally the same as SpotHero. Even though our project differentiates itself from competitors by aiming to produce recommendation scores for all parking - not just lots and garages - it was on us for not making that clear to judges. Definitely a takeaway for next time!
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-sm"><Footer /></div>
        </div>
    );
}
