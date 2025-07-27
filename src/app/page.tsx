import {
    FiGithub,
    FiExternalLink,
    FiLinkedin,
    FiInstagram,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <main className="flex flex-col gap-12 items-center justify-center h-screen">
            <section className="flex flex-col items-center gap-2">
                <Image
                    className="rounded-full w-[8em] border-2 border-black dark:border-[#aeff62]"
                    src="/profile.jpg"
                    alt="shabin"
                    width={100}
                    height={100}
                />
                <h1 className="text-xl lg:text-2xl dark:text-transparent tan-kulture font-extralight bg-clip-text text-black dark:bg-gradient-to-r to-[#8d8d8d] via-white from-[#8d8d8d]">
                    Shabeen Sharih
                </h1>
                <p className="text-sm">
                    Hey guys👋, Check out my other platforms below👇
                </p>
            </section>
            <section>
                <ul className="flex flex-col gap-2">
                    <Link
                        href="https://www.linkedin.com/in/shabeen-sharih/"
                        target="_blank"
                    >
                        <li className="bg-[#aeff62] text-black flex items-center justify-center gap-4 text-md md:text-lg py-2 px-[4em] rounded-3xl">
                            <FiLinkedin />
                            <h2>LinkedIn</h2>
                        </li>
                    </Link>
                    <Link href="https://github.com/shabinx30" target="_blank">
                        <li className="bg-[#aeff62] text-black flex items-center justify-center gap-4 text-md md:text-lg py-2 px-[4em] rounded-3xl">
                            <FiGithub />
                            <h2>Github</h2>
                        </li>
                    </Link>
                    <Link
                        href="https://www.instagram.com/shabinsharih/"
                        target="_blank"
                    >
                        <li className="bg-[#aeff62] text-black flex items-center justify-center gap-4 text-md md:text-lg py-2 px-[4em] rounded-3xl">
                            <FiInstagram />
                            <h2>Instagram</h2>
                        </li>
                    </Link>
                </ul>
            </section>
            <section>
                <Link className="flex items-center gap-4 border-2 text-black dark:text-[#aeff62] py-2 px-4 rounded-3xl" href="https://shabeensharih.tungstenz.online">
                    <h2>Checkout My Personal Website</h2>
                    <FiExternalLink />
                </Link>
            </section>
        </main>
    );
};

export default page;
