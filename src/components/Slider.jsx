import { useState, useEffect } from "react";
import masterImg from "../img/img1.PNG";
import mapImg from "../img/img2.PNG";
import empresasImg from "../img/img3.PNG";
import androidImg from "../img/img6.PNG";
import padlock from "../img/padlock.gif";
import ImgWrapper from "./ImgWrapper";


const Slider = ({ width, minWidth }) => {

    const imgNum = 5;

    const [imgState, setImgState] = useState(0);

    useEffect(() => {
        const intervalId = setTimeout(() => {
            handleImgState('next');
        }, 10000);
        return () => clearTimeout(intervalId);
    }, [imgState]);



    const handleImgState = (todo) => {
        switch (todo) {
            case 'next':
                if (imgState + 100 < (imgNum * 100)) {
                    setImgState(imgState + 100)
                } else {
                    setImgState(0)
                }
                break;
            default:
                if (imgState - 100 >= 0) {
                    setImgState(imgState - 100)
                }
                break;
        }

    }

    return <div className="slider">

        <div className="slider-wrapper">

            <ImgWrapper
                imageUrl={padlock}
                altText="3D design in blender and IoT hardware implementation"
                labelText="3D design in blender and IoT hardware implementation"
            />
            <ImgWrapper
                imageUrl={masterImg}
                altText="Login with AWS Amplify and Cognito"
                labelText="Login with AWS Amplify and Cognito"
            />
            <ImgWrapper
                imageUrl={mapImg}
                altText="Interactive map made with MapBox"
                labelText="Interactive map made with MapBox"
            />
            <ImgWrapper
                imageUrl={empresasImg}
                altText="Bicycle parking information stored in AWS DynamoDB"
                labelText="Bicycle parking information stored in AWS DynamoDB"
            />
            <ImgWrapper
                imageUrl={androidImg}
                altText="Mobile app with real-time information with AWS AppSync"
                labelText="Mobile app with real-time information with AWS AppSync"
            />
        </div>


        <div className="controllers-wrapper">
            <button onClick={handleImgState} className="left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z" /></svg>
            </button>
            <button onClick={() => handleImgState('next')} className="rigth">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z" /></svg>
            </button>
        </div>

        <style jsx>{`

            .img-wrapper{
                min-width: 100%;
                transition: 1s ease all;
                z-index: 10;
                position: relative;
                transform: translateX(-${imgState}%)
            }

            .slider{
                position: relative;
                overflow: hidden;
                border-radius: .5rem;
            }

            .slider-wrapper {
                display: flex;
                flex-wrap: nowrap;
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
                width: ${width < minWidth ? '2.5' : '3.5'}rem;
                position: absolute;
                transition: .5s;
                padding: .5rem;
                fill: var(--green);
            }

            .controllers-wrapper button:hover{
                background-color: rgb(196, 255, 112,.2);
                fill: var(--dark-purple);
            }


            .left{
                left: 0;
                border-radius: 1rem 0 0 1rem;
                ${imgState === 0 ? 'display:none' : ''}

            }

            .rigth{
                right: 0;
                border-radius: 0 1rem 1rem 0;
                ${imgState === ((imgNum * 100) - 100) ? 'display:none' : ''}
            }

        `}</style>
    </div>
}

export default Slider