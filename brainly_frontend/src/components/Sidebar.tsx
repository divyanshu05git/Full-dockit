import { BrainIcon } from "../icons/BrainIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { TagIcon } from "../icons/TagIcon";
import { XIcon } from "../icons/XIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItem } from "./SidebarItems";

export function SideBar(){
    return <div className="h-screen w-72 bg-white border-r border-gray-300 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl text-black-400 items-center pt-8">
            <div className="pr-2 text-purple-600">
                <BrainIcon />
            </div>
            <h1 className="font-bold "> Dock It </h1>
        </div>
       <div className="pt-12 pl-4 "> 
            <SideBarItem text="Twitter" icon={<XIcon/>} link={"https://www.x.com/"} />
            <div className="p-1"></div>
            <SideBarItem text="YouTube" icon={<YoutubeIcon/>} link={"https://www.youtube.com/"} />
            <div className="p-1"></div>
            <SideBarItem text="Documents" icon={<DocumentIcon/>} link={"https://www.youtube.com/"} />
            <div className="p-1"></div>
            <SideBarItem text="Links" icon={<LinkIcon/>} link={"https://www.youtube.com/"} />
            <div className="p-1"></div>
            <SideBarItem text="Tags" icon={<TagIcon/>} link={"https://www.youtube.com/"} />
       </div> 

    </div>
}