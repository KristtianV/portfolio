import Header from "./components/Header"
import Presentation from "./components/Presentation"
import { useEffect, useState } from "react";
import About from "./components/About";


const App = () => {

    const [width, setWidth] = useState(window.innerWidth);
    
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log(width);
    }, [width]);
    
    return <div className="container">
        
        <Header/>

        <div className="content">
            
            <Presentation width={width}/>
            <About width={width}/>

            <div className="working" id="working">
                <h2>Working now</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dignissimos nihil et praesentium autem qui delectus error quod consectetur obcaecati suscipit facere, accusamus alias ab, nobis expedita aut temporibus atque.</p>
            </div>

            <div className="contact" id="contact">
                <h2>Contact</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dignissimos nihil et praesentium autem qui delectus error quod consectetur obcaecati suscipit facere, accusamus alias ab, nobis expedita aut temporibus atque.</p>
            </div>
            <div className="proyects" id="proyects">
                <h2>Proyects</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dignissimos nihil et praesentium autem qui delectus error quod consectetur obcaecati suscipit facere, accusamus alias ab, nobis expedita aut temporibus atque.</p>
            </div>

            <div className="working" id="working">
                <h2>Working now</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dignissimos nihil et praesentium autem qui delectus error quod consectetur obcaecati suscipit facere, accusamus alias ab, nobis expedita aut temporibus atque.</p>
            </div>

            <div className="contact" id="contact">
                <h2>Contact</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dignissimos nihil et praesentium autem qui delectus error quod consectetur obcaecati suscipit facere, accusamus alias ab, nobis expedita aut temporibus atque.</p>
            </div>
        </div>
        

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