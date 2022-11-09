import { Fragment, PropsWithChildren } from "react";

type CustomInputProps = {
  idTag: string;
  bgColor: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const RadioButton = ({
  idTag,
  bgColor,
  label,
  ...props
}: PropsWithChildren<CustomInputProps>) => {
  return (
    <Fragment>
      <div className="flex items-center">
        <input
          {...props}
          type="radio"
          id={idTag}
          value={bgColor}
          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label
          htmlFor={idTag}
          className="ml-3 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      </div>
    </Fragment>
  );
};
