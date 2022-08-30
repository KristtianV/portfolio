import Header from "./components/Header"
import Presentation from "./components/Presentation"
import { useEffect, useState } from "react";
import About from "./components/About";
import Proyects from "./components/Proyects";
import Working from "./components/Working";
import Contact from "./components/Contact";
import keyboard from "./img/keyboard.PNG";


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
            <Working width={width}/>
            <Proyects width={width}/>
            <Contact width={width}/>
        </div>
        
        <Header width={width}/>

        <style jsx>{`
            
            .content {
                margin: auto;
                padding: 0 12%;
                max-width: 1020px;
                
            }

            .content::before{
                    content: "";
                    position: absolute;
                    top: 0; 
                    left: 0;
                    width: 100%; 
                    height: 100vh;  
                    opacity: .3; 
                    z-index: -1;
                    background-image:  url(${keyboard});
                    background-size: cover;
            }


        `}</style>
    </div>
}

export default App