import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { BACKEND_URL } from "./config";
import { Input } from "./Input"
import { useRef, useState} from "react";
import axios from 'axios';

enum ContentType{
    Youtube = "youtube",
    Twitter ="twitter",
}
//@ts-ignore
export function CreateContentModal({open , onClose}){
    const titleRef= useRef<HTMLInputElement>(null);
    const linkRef= useRef<HTMLInputElement>(null);
    const [type , setType]= useState(ContentType.Youtube)
    
    async function addContent(){
        const title= titleRef.current?.value;
        const link= linkRef.current?.value;

            if (!title || !link) {
                alert("Please fill all fields");
                return;
            }

        try{
            await axios.post(`${BACKEND_URL}/api/v1/content`,{
                link,
                title,
                type
            },{
                headers:{
                    "Authorization": localStorage.getItem("token")
                }
            })
            alert("content has been added")
        }
        catch(err){
            alert("Can not add content")
        }
        
    }

    return <div>
      {open && <div className="w-screen h-screen bg-slate-400 fixed top-0 left-0 opacity-60 flex justify-center ">
        <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                        <CrossIcon/>
                    </div>
                </div>
                <div>
                    {/* @ts-ignore */}
                    <Input ref={titleRef} placeholder={"Title"}/> <Input ref={linkRef} placeholder={"Link"}/>
                </div>
                <div >
                    <h1 className="text-gray-900">Type</h1>
                    <div className="flex gap-1 p-4 justify-center">
                        <Button size="sm" text="YouTube" variant={type === ContentType.Youtube?"primary":"secondary"} onClick={()=>{
                            setType(ContentType.Youtube)
                        }}/>
                        <Button size="sm" text="Twitter" variant={type === ContentType.Twitter?"primary":"secondary"} onClick={()=>{
                            setType(ContentType.Twitter)
                        }}/>
                    </div>
                </div>
                <div className="flex justify-center">
                  <Button onClick={addContent} variant="primary" text="Submit" size="md"/>
                </div>  
            </span>
        </div>
      </div>}
    </div>
}

