import { useState } from "react"
import "./style.css"

const GetUserComponent=({setUser, setIsLoggedIn})=>{

    const [userInput, setUserInput]=useState("")

    const HandleLogin=(input)=>{
        setUser(input)
        setIsLoggedIn(true)
    }

    return(
        <>
            <form>
                <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
                <button onClick={()=>HandleLogin(userInput)}>Login com nome</button>
            </form>
        </>
    )
}

export default GetUserComponent