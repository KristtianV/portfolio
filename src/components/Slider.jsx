import { useState } from "react";
import masterImg from "../img/img1.PNG";
import mapImg from "../img/img2.PNG";
import empresasImg from "../img/img3.PNG";


const Slider = ({width, minWidth}) => {

    const [imgState, setImgState] = useState(0);

    const handleImgState = (todo) =>{
        switch (todo) {
            case 'next':
                if (imgState+100<300) {
                    setImgState(imgState+100)
                }
                break;
            default:
                if (imgState-100>=0) {
                    setImgState(imgState-100)
                }
                break;
        }
        
    }

    return <div className="slider">

                <div className="slider-wrapper">
                    <div className="img-wrapper">
                        <a href="#working">
                            <img src={masterImg} alt="" />
                        </a>
                        <div className="text-slider">
                            <label>
                                Login with AWS Amplify and Cognito
                            </label>
                        </div>
                    </div>

                    <div className="img-wrapper">
                        <a href="#working">
                            <img src={mapImg} alt="" />
                        </a>
                        <div className="text-slider">
                            <label>
                                Interactive map made with MapBox
                            </label>
                        </div>
                    </div>

                    <div className="img-wrapper">
                        <a href="#working">
                            <img src={empresasImg} alt="" />
                        </a>
                        <div className="text-slider">
                            <label>
                                Bicycle parking information stored in AWS DynamoDB
                            </label>
                        </div>
                    </div>
                </div>


                <div className="controllers-wrapper">
                    <button onClick={handleImgState} className="left">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z"/></svg>
                    </button>
                    <button onClick={() => handleImgState('next')} className="rigth">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"/></svg>
                    </button>
                </div>

        <style jsx>{`

            .slider{
                position: relative;
                overflow: hidden;
                border-radius: .5rem;
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
                transform: translateX(-${imgState}%)
            }

            .img-wrapper img{
                width: 100%;
                border-radius: .5rem;
                vertical-align: top;
                border: solid .3rem var(--ligth-green);
                box-sizing: border-box;
            }

            .text-slider{
                display: grid;
                font-size:  ${width<minWidth?'.8':'1'}rem;
                background-color: rgb(43, 15, 67, .9);
                color: var(--gray);
                padding: ${width<minWidth?'.5':'1'}rem;
                text-align: center;
                align-items: center;
                position: absolute;
                bottom: 0;
                box-sizing: border-box;
                border-radius: 0 0 .5rem .5rem;
                border: solid .2rem var(--ligth-green);
                pointer-events: none;
                width: 100%;
                transition: 1s;
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
                outline:noen;
                cursor: pointer;
                height: 100%;
                width: ${width<minWidth?'2.5':'3.5'}rem;
                position: absolute;
                transition: .5s;
                padding: .5rem;
                fill: var(--ligth-green);
            }

            .controllers-wrapper button:hover{
                background-color: rgb(196, 255, 112,.2);
                fill: var(--dark-purple);
            }

            .left{
                left: 0;
                border-radius: 1rem 0 0 1rem;
                ${imgState===0?'display:none':''}

            }

            .rigth{
                right: 0;
                border-radius: 0 1rem 1rem 0;
                ${imgState===200?'display:none':''}
            }

        `}</style>
    </div>
}

export default Slider