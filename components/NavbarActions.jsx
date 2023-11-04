"use client";

import { ShoppingBagIcon } from "lucide-react";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();
  if (!isMounted) return null;
  return (
    <>
      <div className=" ml-auto items-center gap-x-4">
        <Button
          onClick={() => router.push("/cart")}
          className=" rounded-full bg-black px-4 py-2 flex items-center"
        >
          <ShoppingBagIcon size={20} color="white" />
          <span className=" ml-2 text-sm font-medium text-white">
            {cart.items.length}
          </span>
        </Button>
      </div>
    </>
  );
};

export default NavbarActions;
