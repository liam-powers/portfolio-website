'use client'
import NavLinks from "../components/NavLinks";
import FilmShowcaseGrid from "../components/FilmShowcaseGrid";

export default function Film() {
    return (
        <div>
            <NavLinks />
            <div className="flex flex-row justify-center gap-40">
                <div className="text-black text-2xl text-white pt-80">
                    <div className="bg-mocha/[.85] p-4 rounded-2xl max-w-[600px]">
                        I like film! I use a Kodak Ektar H35 and any film from Kodak.
                        Shots are all taken from various excursions to San Francisco and San Jose.
                    </div>
                    </div>
                <div className="place-content-center w-3/12 h-auto pt-10 min-h-[800px]"><FilmShowcaseGrid /></div>
            </div>
            <div className='footer pt-5 pb-10 flex justify-center text-base text-black'>
                <div>
                    Website created by Liam Powers via React & Next.js © 2023
                </div>
            </div>
        </div>
    );
}