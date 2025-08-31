import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from "react"
import { BACKEND_URL } from "../components/config";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export function Signin(){
    const usernameRef=useRef<HTMLInputElement>(null);
    const passwordRef=useRef<HTMLInputElement>(null);
    const navigate=useNavigate()

    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        

        if (!username || !password) {
            alert("Please enter username and password");
            return;
        }

        try{
            const response=await axios.post(
                BACKEND_URL + "/api/v1/signin",{

                    username:username, 
                    password:password
                }
                
            );
            const jwt= response.data.token;
            localStorage.setItem("token",jwt)
            
            navigate("/dashboard")
            alert("You have signed in")
        }
        catch(err){
            alert("error while signing in")
        }
    }

    return <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
            
            <div className="flex justify-center pt-4 ">
                <Button onClick={signin} loading={false} variant="primary" text="Signin" size="md" fullwidth={true}/>
            </div>
        </div>
    </div>
}