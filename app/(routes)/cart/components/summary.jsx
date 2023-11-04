"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";

const Summary = () => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    setLoading(true);
    const response = await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        productIds: items.map((item) => item.id),
      })
      .catch((err) => console.log(err));
    console.log(response);
    toast.success("Payment SucessFul");
    removeAll();
    setLoading(false);
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} disabled={loading} className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
