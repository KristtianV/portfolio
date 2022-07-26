import aseguralosImg from "../img/img4.PNG";
import ustaImg from "../img/img5.PNG";


const Proyects = ({width}) => {

    let minWidth = 800;

    return <div className="proyects" id="proyects">
                    
                <h2>Some Projects I Have Done ...</h2>

                <div className="proyect-wrapper">             
                        
                    <a className="img-link" href="https://aseguralos.web.app">
                        <img src={aseguralosImg} alt="Aseguralos" />
                        <div className="overlay">Click To Go</div>
                    </a>

                    <div className="summary-wrapper">

                        <h3>ASEGURALOS</h3>

                        <ul className="list-tec">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>FireBase</li>
                        </ul> 

                        <p>It is a project that I carried out as a freelance for a company under construction, which provides services and advice on cybersecurity or computer security tools. My first web page : )</p>  
                        
                        <label>Date: Nov 2020</label>        
                            

                        
                    </div>
                
                </div>

                <div className="proyect-wrapper-2">             
                        
                    <div className="summary-wrapper">

                        <h3>Metrics of the authors and research groups of the Santo Tomás University</h3>

                        <ul className="list-tec">
                            <li>HTML</li>
                            <li>Excel</li>
                            <li>Power Bi</li>
                        </ul> 

                        <p>A compilation and analysis of data from the metrics of the authors and research groups of the Santo Tomás University</p>  
                        
                        <label>Date: Ago 2021</label>        
                            

                        
                    </div>

                    <a className="img-link" href="https://observatoriocienciometria.usta.edu.co/index.php/metricas-usta/autores-y-grupos-de-investigacion">
                        <img src={ustaImg} alt="USTA Metrics" />
                        <div className="overlay">Click To Go</div>
                    </a>

                
                </div>

                
        <style jsx>{`

            .proyects{
                display: grid;
                padding: 5rem 0;
            }

            .proyects h2 {
                font-weight: 800;
                font-size: 1.5rem;
                color: var(--ligth-green);
                transition: .5s;
                margin: 1rem 0;
            }

            .proyect-wrapper {
                display: grid;
                ${width>minWidth?'grid-template-columns: 3fr 2fr;':'grid-template-rows: auto 2fr;'}
                text-align: right;
                grid-gap: 2rem;
                align-items: center;
                margin-bottom: 5rem;
            }

            .proyect-wrapper-2{
                display: grid;
                ${width>minWidth?'grid-template-columns: 2fr 3fr;':'grid-template-rows: auto 2fr;'}
                text-align: right;
                grid-gap: 2rem;
                align-items: center;
            }

            .summary-wrapper h3{
                font-size: 1.3rem;
                color: var(--ligth-green);
                line-height: 2rem;
                padding: 0 1rem;        
            }

            .summary-wrapper p{
                color: var(--ligth-green);
                padding: 1rem;
                border-radius: 1rem;
                background-color: var(--purple);
                border: solid .2rem var(--ligth-green);
                line-height: 1.3rem;
            }

            .img-link img{
                width: 100%;
                border-radius: 1rem;
            }

            .list-tec{
                display: flex;
                justify-content: space-around;
                margin: 1rem;
                color: var(--gray);
            }

            .summary-wrapper label{
                font-size: .8rem;
                background-color: var(--purple);
                padding: .5rem;
                margin: 1rem;
                border-radius: 1rem;
                color: var(--ligth-green);
                border: solid .2rem var(--ligth-green);
            }

            .img-link {
                position: relative;
            }

            .summary-wrapper{
                ${width>minWidth?'':'grid-row: 1;'}
            }

            .img-link .overlay{
                display: grid;
                position:absolute;
                left: 0;
                top:0;
                border-radius: 1rem;
                height: 99%;
                width: 100%;
                background: rgb(43, 15, 67, .4);
                opacity: .9;
                transition: 1s;
                box-shadow: #2B0F43 10px 10px 0px -3px, #2ECA16 10px 10px;       
                transition-property: box-shadow opacity;
                justify-items: inherit;
                align-items: flex-end;
                font-size: 1.5rem;
                color: var(--gray);
                box-sizing: border-box;
                padding: 1rem;
            }

            .img-link .overlay:hover{
                opacity: .1;
                box-shadow: #2B0F43 0px 0px 0px -3px, #2ECA16 0px 0px;     
            }


        `}</style>
    </div>
}

export default Proyects