import masterImg from "../img/img1.PNG";
import mapImg from "../img/img2.PNG";
import empresasImg from "../img/img3.PNG";


const Slider = ({width, minWidth}) => {

    return <div className="slider">

                <div className="slider-wrapper">
                    <div className="img-wrapper">
                        <a href="#working">
                            <img src={masterImg} alt="" />
                        </a>
                        <div className="text-slider">
                            <label>
                                Login whith AWS Amplify and Cognito
                            </label>
                        </div>
                    </div>

                    <div className="img-wrapper">
                        <a href="#working">
                            <img src={mapImg} alt="" />
                        </a>
                        <div className="text-slider">
                            <label>
                                Login con AWS Amplify y Cognito
                            </label>
                        </div>
                    </div>

                    <div className="img-wrapper">
                        <a href="#working">
                            <img src={empresasImg} alt="" />
                        </a>
                        <div className="text-slider">
                            <label>
                                Login whith AWS Amplify and Cognito
                            </label>
                        </div>
                    </div>
                </div>


                <div className="controllers-wrapper">
                    <button className="left">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z"/></svg>
                    </button>
                    <button className="rigth">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"/></svg>
                    </button>
                </div>

        <style jsx>{`

            .slider{
                position: relative;
            }

            .slider-wrapper {
                display: flex;
                flex-wrap: nowrap;
            }

            .img-wrapper{
                display: grid;
                min-width: 100%;
                transition: 1s ease all;
                z-index: 10;
                position: relative;
                justify-items: center;
            }

            .img-wrapper img{
                width: 100%;
                border-radius: .5rem;
                vertical-align: top;
                border: solid .3rem var(--ligth-green);
                box-sizing: border-box;
            }

            .text-slider{
                font-size:  ${width<minWidth?'.8':'1'}rem;
                background-color: rgb(43, 15, 67, .5);;
                color: var(--gray);
                padding: ${width<minWidth?'.5':'1'}rem;;
                text-align: center;
                position: absolute;
                bottom: 0;
                box-sizing: border-box;
                border-radius: .5rem .5rem 0 0 ;
                pointer-events: none;
                border: solid .2rem var(--ligth-green);
            }

            .controllers-wrapper{
                position: absolute;
                z-index: 20;
                top:0;
                width: 100%;
                height: 100%;
                pointer-events: none;
            }

            .controllers-wrapper button{
                pointer-events: all;
                background: none;
                border: none;
                outline:noen;
                cursor: pointer;
                height: 100%;
                width: ${width<minWidth?'2.5':'3.5'}rem;
                position: absolute;
                transition: 1s;
                fill: var(--ligth-green);
                padding: .5rem;
            }

            .controllers-wrapper button:hover{
                background-color: rgb(43, 15, 67, .7);
            }

            .left{
                left: 0;
            }

            .rigth{
                right: 0;
            }

        `}</style>
    </div>
}

export default Slider