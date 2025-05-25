import Image from 'next/image';
import StarSvg from './starSvg';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

export const ExperiencesLogos = () => {
  return (
    <section className="w-full flex justify-center relative mt-8 bg-transparent md:pb-24">
      <Image
        src="/versai_logo.svg"
        width={80}
        height={100}
        alt="versai"
        className="scale-75"
      />
      <Image
        src="/hootboard_logo.svg"
        width={250}
        height={20}
        alt="hootboard"
        className="scale-75"
      />
      <Image
        src="/zivaka_logo.svg"
        width={80}
        height={30}
        alt="zivaka"
        className="scale-75 -ml-2"
      />
    </section>
  );
};

export const Banner = () => {
  return (
    <div
      id="banner"
      className="w-full relative bg-center h-auto gap-48 bg-no-repeat bg-cover flex flex-col items-center text-center bg-gradient-to-b from-secondary-color from-20% to-background md:bg-[url('/enhanced-vector.jpeg')] pt-44 md:pt-48 px-4"
    >
      <section className="space-y-3 md:space-y-6">
        <div className="flex flex-col items-center text-sm">
          <Image src="/avatar.svg" alt="avatar" width={60} height={60} />
          <div className="bg-teritiary-color px-2 py-1 rounded-md">
            🟢 Available for opportunities
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-pockota relative">
          Welcome to <br />
          <StarSvg className="text-gradient-start-color min-w-9 size-9 -rotate-6 absolute left-6 -top-2 md:hidden" />
          my digital humble abode
          <StarSvg className="text-gradient-start-color min-w-9 size-9 -rotate-6 absolute -right-1 -bottom-1 md:hidden" />
        </h1>
        <p className="text-gray-400">
          I am a fullstack developer.
          <br />
          My passion lies in crafting intuitive user interfaces and implementing
          robust back-end solutions.
        </p>
        <div className="flex gap-5 w-full justify-center items-center">
          <Link href="mailto:bhatshaqran@protonmail.com">
            <button
              type="button"
              className="bg-primary-color text-secondary-color rounded-md px-4 py-2 font-semibold"
            >
              👋🏻 Lets talk
            </button>
          </Link>
          <Link
            href="https://drive.proton.me/urls/2AHFCZ9YW8#nZSDagRg34pE"
            target="blank"
          >
            <button
              type="button"
              className="flex gap-2 items-center border border-gray-600 px-4 py-2 rounded-md"
            >
              Get my CV <MoveUpRight className="size-4" />
            </button>
          </Link>
        </div>
      </section>
      <ExperiencesLogos />
    </div>
  );
};
