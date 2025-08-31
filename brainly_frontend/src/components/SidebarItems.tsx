import type { ReactElement } from "react"
import { Link } from "react-router-dom";

export function SideBarItem({text , icon , link}:{
    text:string
    icon:ReactElement
    link:string
}){
    return(
        <Link
      to={link}
      className="flex items-center text-gray-700 py-2 cursor-pointer hover:bg-[#5046e4] hover:text-white rounded max-w-48 pl-4 transition-all duration-300"
    >
      <div className="pr-2">{icon}</div>
      <span>{text}</span>
    </Link>
    )
}