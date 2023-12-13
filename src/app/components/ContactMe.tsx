import Link from "next/link";
import Image from "next/image";

export default function ContactMe() {
    return (
        <div>
            <div className="flex justify-center">
                <div className="bg-mocha/[.85] p-4 rounded-2xl text-center text-3xl font-bold inline-block">
                    Let&apos;s get in touch! Reach me at:
                </div>
            </div>

            <div className="flex flex-col text-black mt-4">
                <div className="flex flex-row gap-6 justify-center items-center">
                    <Image src="/gmail.png" alt="Email icon" className='w-20 h-auto' />
                    <Link href="mailto:LiamPowers@u.northwestern.edu" className="underline hover:text-[#569A86]">
                        LiamPowers@u.northwestern.edu
                    </Link>
                </div>

                <div>
                    <div className="flex flex-row gap-6 justify-center items-center">
                        <Image src="/linkedin.png" alt="LinkedIn icon" className="w-20 h-auto" />
                        <Link href="https://www.linkedin.com/in/liampowers-/" className="underline hover:text-[#569A86]">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
