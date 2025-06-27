import { CircleCheck, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  features: Array<string>;
  image: string;
  link: string;
}

const ProjectCard = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-end md:justify-between gap-12 rounded-xl shadow-sm overflow-hidden shadow-gradient-end-color max-w-full lg:min-w-[1024px] lg:max-w-5xl relative">
      <Image
        src={props.image}
        width={2000}
        height={2000}
        alt={props.title}
        className="hidden lg:block lg:absolute h-[350px] w-[550px] scale-125 top-1/2 -right-16 rounded-tl-3xl"
      />
      <div className="p-4 md:p-12 z-20">
        <h2 className="text-lg md:text-3xl font-pockota border-b border-gradient-start-color pb-3 gradient-text">
          {props.title}
        </h2>
        <div className="mt-6 space-y-3 w-full">
          {props.features?.map((feature) => {
            return (
              <div
                key={feature}
                className="flex text-white gap-2 text-sm md:text-base"
              >
                <div>
                  <CircleCheck />
                </div>
                <p className="lg:w-96">{feature}</p>
              </div>
            );
          })}
        </div>
        <Link href={props.link} target="blank">
          <button
            type="button"
            className="mt-8 bg-primary-color text-black px-5 py-2 rounded-md flex gap-2 items-center text-sm font-semibold"
          >
            View live site <MoveUpRight className="size-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
