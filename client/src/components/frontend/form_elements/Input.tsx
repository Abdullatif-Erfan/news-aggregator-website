import React from "react";
type InputProps = {
  className?: string;
} & React.ComponentProps<"input">;

function Input({ className, ...rest }: InputProps) {
  return <input className={`${className && className}`} {...rest} />;
}

export default Input;
