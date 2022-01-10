import Router from "next/router"

export default function Home() {
    function login(){
        document.cookie = 'token=1234; path=/'
        Router.replace('/dashboard')
    }
    return(
        <button onClick={() => login()}>
        login
        </button>
    )
}