import React from "react";

import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import Image from "next/image";
import { cn } from "@/libs/util";

interface GalleryProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryProps> = ({ image }) => {
  return (
    <Tab
      className=" relative flex aspect-square cursor-pointer 
     items-center  justify-center rounded-md bg-white"
    >
      {({ selected }) => (
        <div className="">
          <span className=" absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt=""
              className=" object-cover object-center"
            />
          </span>
          <span
            className={cn(
              " absolute inset-0 rounded-md ring-2 ring-offset-2 ",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;