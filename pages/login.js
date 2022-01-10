export default function Home() {
    return(
          <button onClick={() => {
        document.cookie = 'token=1234; path=/'
        }}>
        login
        </button>
    )
}