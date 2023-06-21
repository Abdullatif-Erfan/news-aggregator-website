import React from "react";
type ButtonProps = {
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<"button">;

function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button className={`${className && className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
