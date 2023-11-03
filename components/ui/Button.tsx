import { cn } from "@/libs/util";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <>
        <button
          className={cn(
            " w-auto rounded-full text-white  bg-black border-transparent disabled:cursor-not-allowed disabled:opacity-60 hover:opacity-75 transition",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      </>
    );
  }
);

Button.displayName = "Button";

export default Button;
