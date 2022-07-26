import Header from "./components/Header"
import Presentation from "./components/Presentation"
import { useEffect, useState } from "react";
import About from "./components/About";
import Proyects from "./components/Proyects";
import Working from "./components/Working";
import Contact from "./components/Contact";


const App = () => {

    const [width, setWidth] = useState(window.innerWidth);
    
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, [width]);
    
    return <div className="container">
        

        <div className="content">
            <Presentation width={width}/>
            <About width={width}/>
            <Proyects width={width}/>
            <Working width={width}/>
            <Contact width={width}/>
        </div>
        
        <Header/>

        <style jsx>{`
            
            .content {
                margin: auto;
                padding: 0 12%;
                max-width: 1020px;
            }


        `}</style>
    </div>
}

export default App