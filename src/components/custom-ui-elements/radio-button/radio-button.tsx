import { Fragment, PropsWithChildren } from "react";

type CustomInputFieldProps = {
  idTag: string;
  bgColor: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const RadioButton = ({
  idTag,
  ...props
}: PropsWithChildren<CustomInputFieldProps>) => {
  return (
    <Fragment>
      <div>
        <input
          type="radio"
          id="red"
          name="bg-color"
          value="bg-red-500"
          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label
          htmlFor="bg-color"
          className="ml-3 block text-sm font-medium text-gray-700"
        >
          Red
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="green"
          name="bg-color"
          value="bg-green-500"
          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label
          htmlFor="bg-color"
          className="ml-3 block text-sm font-medium text-gray-700"
        >
          Green
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="blue"
          name="bg-color"
          value="bg-blue-500"
          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label
          htmlFor="bg-color"
          className="ml-3 block text-sm font-medium text-gray-700"
        >
          Blue
        </label>
      </div>
    </Fragment>
  );
};
