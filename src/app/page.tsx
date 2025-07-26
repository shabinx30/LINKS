import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const page = () => {
    return (
        <main className="flex flex-col gap-8 items-center justify-center h-screen">
            <section className="flex flex-col items-center gap-2">
                <Image className="rounded-full" src="/profile.jpg" alt="shabin" width={100} height={100}/>
                <h1 className="text-2xl text-white font-semibold">Shabeen Sharih</h1>
            </section>
            <section>
                <ul className="flex flex-col gap-2">
                    <li className="bg-[#2b2b2b] flex items-center justify-center gap-4 text-md md:text-xl py-2 px-4 rounded-3xl">
                        <FaLinkedin className="text-blue-400" />
                        <h2>LinkedIn</h2>
                    </li>
                    <li className="bg-[#2b2b2b] flex items-center justify-center gap-4 text-md md:text-xl py-2 px-4 rounded-3xl">
                        <FaGithub />
                        <h2>Github</h2>
                    </li>
                    <li className="bg-[#2b2b2b] flex items-center justify-center gap-2 text-md md:text-xl py-2 px-4 rounded-3xl">
                        <FaInstagram style={{ fill: "url(#iconGradient)" }} />
                        <svg width="0" height="0">
                            <defs>
                                <linearGradient
                                    id="iconGradient"
                                    gradientTransform="rotate(45)"
                                >
                                    <stop offset="0%" stopColor="#F8C400" />
                                    <stop offset="50%" stopColor="#E8174B" />
                                    <stop offset="100%" stopColor="#D300C5" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <h2>Instagram</h2>
                    </li>
                </ul>
            </section>
        </main>
    );
};

export default page;
