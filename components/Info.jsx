"use client";
import { Product } from "@/types";
import React, { MouseEventHandler } from "react";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";


const Info = ({ data }) => {
  const cart = useCart();
  const onAddToCart = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };
  return (
    <>
      <div className="">
        <h1 className=" text-3xl text-gray-900">{data?.name}</h1>
        <div className=" mt-3 flex items-end justify-between">
          <p className=" text-2xl text-gray-900">
            <Currency value={data?.price} />
          </p>
        </div>
        <hr className=" my-4" />
        <div className=" flex flex-col gap-y-6 ">
          <div className="flex items-center gap-x-4">
            <h3 className=" font-semibold text-black">Size:</h3>
            <div className="">{data?.size?.name}</div>
          </div>
          <div className="flex items-center gap-x-4">
            <h3 className=" font-semibold text-black">Color:</h3>
            <div
              className=" h-6 w-6 rounded-full border"
              style={{ backgroundColor: data?.color?.value }}
            />
          </div>
        </div>
        <div className="mt-10  felx items-center gap-x-3">
          <Button
            onClick={(e) => onAddToCart(e)}
            className=" flex items-center gap-x-2 text-white p-3"
          >
            Add To Cart
            <ShoppingCart className="  h-6 w-6" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Info;
