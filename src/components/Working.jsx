import Slider from "./Slider";

const Working = ({width}) => {
    let minWidth = 1000;
    return <div className="working" id="working">

                <h2>Working Now...</h2>

                <div className="info-working-wrapper">

                    <div className="text-wrapper">
                        <h3>RODA</h3>
                        <p>RODA is a platform project to manage and interact with a bicycle parking network. It is being developed in <label>NextJS</label> and the cloud architecture is based on <label>AWS</label>. The platform consists of web apps for parking management and a mobile app built with <label>React Native</label> for users to find and interact with bike racks. Users will be able to control IoT smart locks from their cell phone to lock their bikes, this works with <label>AWS IoT Core</label> and <label>AWS Lambda</label>.</p>
                        <h4>My role: Full Stack Developer and Hardware Programmer</h4>
                    </div>
                    <Slider width={width} minWidth={minWidth}/>
                    
                </div>
                
        <style jsx>{`

            .working {
                padding: 6rem 0;
            }

            .working h2 {
                font-weight: 800;
                font-size: 1.5rem;
                color: var(--ligth-green);
                transition: .5s;
                margin: 2rem 0;
            }

            .working h3 {
                font-size: 1.2rem;
                color: var(--ligth-green);
                margin: .5rem .5rem;
            }

            .working h4 {
                font-size: 1rem;
                color: var(--ligth-green);
                margin: .5rem .5rem;
                text-align: right;
            }

            .working p{
                color:var(--gray);
                line-height: 1.3rem;
                padding: .5rem;
                text-align: justify;
            }

            .working label{
                color: var(--ligth-green);
            }

            .info-working-wrapper{
                display: grid;
                ${width>minWidth?'grid-template-columns: 1fr 3fr;':''}
                grid-gap: 2rem;
                align-items: center;
            }
            

        `}</style>
    </div>
}

export default Working