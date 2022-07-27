import Slider from "./Slider";

const Working = ({width}) => {
    let minWidth = 800;
    return <div className="working" id="working">

                <h2>Working Now...</h2>

                <div className="info-working-wrapper">

                    <div className="text-wrapper">
                        <h3>RODA</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odio, consectetur quae architecto at ad quisquam illo doloremque, sit cum, error veritatis? Facere et praesentium dolorum magnam ex, maiores illum.</p>
                    </div>
                    <Slider width={width} minWidth={minWidth}/>
                    
                </div>
                
        <style jsx>{`

            .working {
                padding: 6rem 0;
                overflow: hidden;
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
                transition: .5s;
                margin: .5rem .5rem;
            }

            .working p{
                color:var(--gray);
                line-height: 1.3rem;
                padding: .5rem;
            }

            .info-working-wrapper{
                display: grid;
                ${width>minWidth?'grid-template-columns: 1fr 3fr;':''}
                grid-gap: 1rem;
            }

        `}</style>
    </div>
}

export default Working