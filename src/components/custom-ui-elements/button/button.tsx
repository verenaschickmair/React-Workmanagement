import { EnvelopeIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";


type ButtonProps = {
  icon?:React.ReactNode
  buttonSize?: "small" | "medium" | "large"
  buttonText: string
} & ButtonHTMLAttributes<HTMLButtonElement>
export const CustomButton = ({buttonSize="medium", icon, buttonText,...props}: PropsWithChildren<ButtonProps>) => {
    const defaultClasses =  "inline-flex items-center rounded-md border border-transparent bg-indigo-600 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    const buttonClassNames = classNames(defaultClasses, {
      "px-3 py-2": buttonSize === "small",
      "px-4 py-2": buttonSize === "medium",
      "px-5 py-3": buttonSize === "large"
    })
  return (
    <>
      <button {...props}
        type="button"
        className={buttonClassNames}
      >
        {icon}
        {buttonText}
      </button>
    </>
  );
}
