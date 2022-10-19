import { Fragment, PropsWithChildren } from "react"

type CustomInputFieldProps = {
    idTag:string
} & React.InputHTMLAttributes<HTMLInputElement>

export const CustomInputField = ({idTag, ...props}:PropsWithChildren<CustomInputFieldProps>) =>{
    return(
        <Fragment>
            <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
                    <input
                    {...props}
                    name={idTag}
                    id={idTag}
                    className="block w-full rounded-md border-gray-300 pr-32 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    </div>
        </Fragment>
    )
}