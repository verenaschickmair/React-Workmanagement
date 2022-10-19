import { XMarkIcon } from "@heroicons/react/24/outline"
import { PropsWithChildren, useState } from "react"
import "./popup.css"

type PopupProps = {
    trigger: boolean,
    onCloseClick: () => void
}

export const Popup = ({children, trigger, onCloseClick,...props}: PropsWithChildren<PopupProps>) =>{

function onButtonCloseClick() {
    console.log("test")
    onCloseClick()
}

return trigger ? (
    <div className="popup">
        <div className="popup-inner">
        <button onClick={onButtonCloseClick} className="popup-button"><XMarkIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true"/></button>
        {children}
        </div>
    </div>
): null
}