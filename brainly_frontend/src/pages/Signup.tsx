import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from "react"
import { BACKEND_URL } from "../components/config";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export function Signup(){
    const usernameRef= useRef<HTMLInputElement>(null);
    const passwordRef= useRef<HTMLInputElement>(null);
    const navigate=useNavigate()

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        try{
            await axios.post(
                BACKEND_URL + "/api/v1/signup",{

                    username:username, 
                    password:password
                }
                // { headers: { "Content-Type": "application/json" } }
            );

            navigate("/Signin")
            alert("You have signed up")
        }
        catch(err){
            alert("error while signing up")
        }
        
    }

    return <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
            
            <div className="flex justify-center pt-4 ">
                <Button onClick={signup} loading={false} variant="primary" text="Signup" size="md" fullwidth={true}/>
            </div>

            <p className="mt-4 text-gray-600">
                Already have an account?{" "}
                <span
                    onClick={() => navigate("/Signin")}
                    className="text-blue-600 cursor-pointer hover:underline"
                    >
                    Sign in
                </span>
           </p>
        </div>
    </div>
}