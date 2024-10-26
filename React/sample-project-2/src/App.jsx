
import Navbar from "./components/Navbar"
const App = () => {
    const data = {
        appname: "Hello"
    }
    const logo = "my logo "
    const test = "hello world"
  return (
     <>
     {test}
     <p className="text-yellow-500">hello world</p>
     <Navbar appdata={data} logodata={logo}/>
     </>
    
  )
}

export default App