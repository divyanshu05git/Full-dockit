import type { ReactElement } from "react"

export interface ButtonProps{
    variant :"primary" | "secondary"
    size:"sm" | "md" | "lg"
    text:string
    startIcon?:ReactElement
    endIcon?:ReactElement
    onClick?:()=> void
    fullwidth?:boolean
    loading?:boolean
}

//it is for every button
const defaultStyles="rounded-md flex items-center font-light"

const variantStyles={
    "primary":"bg-[#5046e4] text-white",
    "secondary":"bg-[#e0e7fe] text-[#3e38a7]"
}

const sizeStyles={
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
}

export const Button =({variant , fullwidth ,text , loading ,startIcon, onClick , size}:ButtonProps) =>{
    return <button onClick={onClick} className={`${variantStyles[variant]} ${sizeStyles[size]} ${defaultStyles} ${fullwidth?' w-full flex justify-center':''} ${loading?"opacity-40":""} }`} disabled={loading}>{startIcon?<div className="pr-2">{startIcon}</div>:<></>} {text} <div className="pl-2"></div>
    </button>
}

