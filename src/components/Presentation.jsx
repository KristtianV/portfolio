import hv from "../download/HV_CRISTIAN_VEGA.pdf"
const Presentation = ({width}) => {

    let minWidth = 880;

    return <div className="presentation" id="presentation">
        
        <h1>Hi, my name is...</h1>
        <h2>Cristian Alexander Vega Mosquera</h2>
        <h3>Web and Software Developer</h3>
        <p>I am a telecommunications engineer, with experience as a researcher. I've been a freelance ReactJS frontend developer for three years and a fullstack developer with the MERN Stack for two years. Currently I have been developing software with Java and SQL.</p>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/cristian-vega-developer">LinkedIn</a>
            </li>
            <li>
                <a href="https://n9.cl/minciencias_cristianvega">CvLac</a>
            </li>
            <li>
                <a href={hv} download>Download Resume</a>
            </li>
        </ul>
        <style jsx>{`
            .presentation{
                padding-top:1rem; 
                display: grid;
                align-content: center;
                grid-gap: 2rem;
                height: 100vh;
            }

            .presentation h1{
                font-size: ${width<minWidth?'1':'2'}rem;
                color: var(--ligth-green);
                transition: .5s;
            }

            .presentation h2{
                font-size: ${width<minWidth?'3':'5'}rem;
                font-weight: 800;
                color: var(--gray);
                transition: .5s;
            }

            .presentation h3{
                font-size: ${width<minWidth?'1':'2'}rem;
                color: var(--gray);
                transition: .5s;
            }

            .presentation p{
                font-size: 1rem;
                color: var(--ligth-green)
            }
            
            .presentation ul{
                display: ${width<minWidth?'grid':'flex'};
                justify-content: space-around;
                grid-gap: 1rem;
            }
            .presentation li{
                width: 200px;    
                border: solid 2px var(--green);
                border-radius: 1rem;
                text-align: center;
                transition: .5s;
            }
            .presentation a{
                width: 100%;
                height: 100%;
                padding: .5rem 0;
                color: var(--ligth-green);
            }

            .presentation h1,.presentation h2,.presentation h3 {
                text-shadow: 15px 15px 5px #160425;
            }

            .presentation li:hover{
                background-color: var(--ligth-green);
                transform: scale(1.1)
            }

            .presentation a:hover{
                color: var(--black-purple)
            }

        `}</style>
    </div>
}

export default Presentation