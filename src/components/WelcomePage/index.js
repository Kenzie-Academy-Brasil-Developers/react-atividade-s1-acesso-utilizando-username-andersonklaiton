import "./style.css"
const WelcomePage=({user, setIsLoggedIn})=>{

    const HandleLogout=()=>{
        setIsLoggedIn(false)
      }

    return(
        <>
            <form>
                <h1>Seja bem vindo {user}</h1>
                <button onClick={HandleLogout}>Sair</button>
            </form>
        </>
    )
}

export default WelcomePage