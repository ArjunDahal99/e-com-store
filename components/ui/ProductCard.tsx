"use client";

import Image from "next/image";
import IconButton from "./IconButton";
import { ExpandIcon, ShoppingCartIcon } from "lucide-react";
import Currency from "./Currency";
import { usePathname, useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import PreviewModal from "../preview-modal";
import usePreviewModal from "@/hooks/use-preview";
import useCart from "@/hooks/use-cart";

const ProductCard = ({ data }: { data: any }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };
  const handelClick = () => {
    router.push(`/product/${data?.id}`);
  };
  return (
    <>
      <div
        onClick={handelClick}
        className=" bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      >
        {/* iamges and actions */}
        <div className="aspect-square rounded-xl bg-gray-100 relative">
          <Image
            className="aspect-square rounded-md object-cover "
            src={data?.images?.[0]?.url}
            alt="Image"
            fill
          />
          <div
            className=" opacity-0 transition absolute
            group-hover:opacity-100 px-6 w-full bottom-6 "
          >
            <div className=" flex gap-x-6 justify-center">
              <IconButton
                onClick={onPreview}
                icon={<ExpandIcon size={20} className=" text-gray-600" />}
              />
              <IconButton
                onClick={onAddToCart}
                icon={<ShoppingCartIcon size={20} className=" text-gray-600" />}
              />
            </div>
          </div>
        </div>
        {/* description */}
        <div className="">
          <p className=" font-semibold text-lg">{data.name}</p>
          <p className=" text-sm text-gray-500">{data.category?.name}</p>
          {/* price */}
          <div className="flex items-center justify-between">
            <Currency value={data?.price} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
