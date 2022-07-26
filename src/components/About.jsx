import image from "../img/me.jfif";
import SkillBar from "./SkillBar";

const About = ({width}) => {
    
    let minWidth = 1000;

    return <div className="about" id="about">
        
        <h2>About Me ...</h2>
        <div className="info-wrapper">
            
            <div className="info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, non. Esse consectetur corporis magni explicabo labore, alias adipisci quae blanditiis? Ex architecto reiciendis neque assumenda in reprehenderit. Aliquid sapiente alias nisi dicta, aut exercitationem doloribus aspernatur tempora nemo quo nulla saepe pariatur enim quibusdam aperiam consequuntur, amet maiores molestias ipsam!</p>
                <div className="skills">

                    <SkillBar name={'HTML'} percent={'92'}/>
                    <SkillBar name={'CSS'} percent={'88'}/>
                    <SkillBar name={'JavaScript'} percent={'70'}/>
                    <SkillBar name={'REACT'} percent={'73'}/>
                    <SkillBar name={'NextJS'} percent={'90'}/>
                    <SkillBar name={'AWS'} percent={'60'}/>
                
                </div>
            </div>
            
            <div className="image">
                <img src={image} alt="me :)" />
                <div className="overlay"></div>
            </div>

        </div>

        <style jsx>{`

            .about{
                padding: 6rem 0;
            }


            .info-wrapper{
                display: grid;
                ${width>minWidth?'grid-template-columns: 3fr 2fr;':'grid-template-rows: auto 2fr;'}
                grid-gap: ${width>minWidth?'3':'1'}rem;
                align-items: center;
                justify-items: center;
            }
            

            .image{
                position: relative;
                border-radius: 1rem;
            }

            .image img{
                width: 100%;
                max-height: 400px;
                max-width: 400px;
                border-radius: 1rem;
            }

            .image .overlay{
                position:absolute;
                max-height: 400px;
                max-width: 400px;
                left: 0;
                top:0;
                border-radius: 1rem;
                height: 100%;
                width: 100%;
                background: rgb(43, 15, 67, .4);
                opacity: .9;
                transition: 1s;
                box-shadow: #2B0F43 10px 10px 0px -3px, #2ECA16 10px 10px;       
                transition-property: box-shadow opacity;
            }
           

            .image .overlay:hover{
                opacity: .1;
                box-shadow: #2B0F43 0px 0px 0px -3px, #2ECA16 0px 0px;     
            }

            .about h2 {
                font-weight: 800;
                font-size: 1.5rem;
                color: var(--ligth-green);
                line-height: 4rem;
            }

            .about p{
                color:var(--gray);
            }


        `}</style>
    </div>
}

export default About