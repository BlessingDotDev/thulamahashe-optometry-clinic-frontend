import React from 'react';

const baseStyle =
  "rounded-lg py-2 px-4 font-semibold cursor-pointer tracking-widest transition-all duration-200 focus:outline-none";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-md",

  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300 hover:scale-105",

  tertiary:
    "bg-transparent text-green-500 hover:text-green-400 hover:underline",

  custom:
    "md:hidden bg-green-500 hover:bg-green-600 transition-all duration-200 p-2 rounded-sm cursor-pointer"

}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  children?: React.ReactNode;
}

const Button = React.memo(function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${variant !== "custom" ? baseStyle : ""} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
})

export default Button;