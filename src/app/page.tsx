import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <main className="flex flex-col gap-8 items-center justify-center h-screen">
            <section className="flex flex-col items-center gap-2">
                <Image
                    className="rounded-full w-[8em] border-2 border-[#aeff62]"
                    src="/profile.jpg"
                    alt="shabin"
                    width={100}
                    height={100}
                />
                <h1 className="text-xl lg:text-2xl dark:text-transparent tan-kulture font-extralight bg-clip-text text-black dark:bg-gradient-to-r to-[#8d8d8d] via-white from-[#8d8d8d]">
                    Shabeen Sharih
                </h1>
            </section>
            <section>
                <ul className="flex flex-col gap-2">
                    <Link
                        href="https://www.linkedin.com/in/shabeen-sharih/"
                        target="_blank"
                    >
                        <li className="bg-[#aeff62] text-black flex items-center justify-center gap-2 text-md md:text-xl py-2 px-[4em] rounded-3xl">
                            <FaLinkedin />
                            <h2>LinkedIn</h2>
                        </li>
                    </Link>
                    <Link href="https://github.com/shabinx30" target="_blank">
                        <li className="bg-[#aeff62] text-black flex items-center justify-center gap-2 text-md md:text-xl py-2 px-[4em] rounded-3xl">
                            <FaGithub />
                            <h2>Github</h2>
                        </li>
                    </Link>
                    <Link
                        href="https://www.instagram.com/shabinsharih/"
                        target="_blank"
                    >
                        <li className="bg-[#aeff62] text-black flex items-center justify-center gap-2 text-md md:text-xl py-2 px-[4em] rounded-3xl">
                            <PiInstagramLogoFill size={24} />
                            <h2>Instagram</h2>
                        </li>
                    </Link>
                </ul>
            </section>
        </main>
    );
};

export default page;
