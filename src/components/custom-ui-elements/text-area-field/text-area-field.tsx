import React from "react";
import { Fragment, PropsWithChildren } from "react";

type TextAreaFieldProps = {
  idTag: string;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

export const TextAreaField = ({idTag, ...props}: PropsWithChildren<TextAreaFieldProps>) => {
  return (
    <Fragment>
      <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
        <textarea
          {...props}
          name={idTag}
          id={idTag}
          rows={3}
          className="block w-full rounded-md border-gray-300 pr-32 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        ></textarea>
      </div>
    </Fragment>
  );
};
