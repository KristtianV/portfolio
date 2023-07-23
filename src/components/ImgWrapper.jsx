import React from 'react';

const ImgWrapper = ({ imageUrl, minWidth, width, labelText,altText }) => {
    return <div className="img-wrapper">

        <a href={'#working'}>
            <img src={imageUrl} alt={altText} />
        </a>
        <div className="text-slider">
            <label>{labelText}</label>
        </div>

        <style jsx>{`

            .img-wrapper img{
                width: 100%;
                border-radius: .5rem;
                vertical-align: top;
                border: solid .3rem var(--green);
                box-sizing: border-box;
                opacity: .8;
                transition: 1s;
            }

            .img-wrapper img:hover{
                opacity: 1;
            }


            .text-slider{
                display: grid;
                font-size:  ${width < minWidth ? '.8' : '1'}rem;
                background-color: rgb(43, 15, 67, .8);
                color: var(--gray);
                padding: ${width < minWidth ? '.5' : '1'}rem;
                text-align: center;
                align-items: center;
                position: absolute;
                bottom: 0;
                box-sizing: border-box;
                border-radius: 0 0 .5rem .5rem;
                border: solid .2rem var(--green);
                pointer-events: none;
                width: 100%;
                transition: 1s;
            }

        `}</style>
    </div>
}

export default ImgWrapper