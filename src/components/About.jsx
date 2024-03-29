import me from "../img/me.jfif";
import SkillBar from "./SkillBar";
import hv from "../download/HV_CRISTIAN_VEGA.pdf"

const About = ({width}) => {
    
    let minWidth = 1000;

    return <div className="about" id="about">
        
        <h2>About Me ...</h2>
        <div className="info-wrapper">
            
            <div className="info">
                <p>I am a fullstack developer with knowledge of various technologies <a href={hv} target={"_blank"} rel="noreferrer">( See all in my downloadable CV )</a> and I have been working with Santo Tomás University since 2020 as a researcher and since 2022 as a fullstack developer on a university spinoff project. <br/><br/> I am self-taught and I learn quickly, very good at teamwork, also with the ability to be a good leader when the situation requires it. I am a person who gives everything of himself to achieve his goals.</p>
                <div className="skills">
                    <SkillBar name={'HTML-CSS'} percent={'92'}/>
                    <SkillBar name={'JavaScript'} percent={'75'}/>
                    <SkillBar name={'ReactJS'} percent={'80'}/>
                    <SkillBar name={'NextJS'} percent={'85'}/>
                    <SkillBar name={'ReactNative'} percent={'80'}/>
                    <SkillBar name={'Git'} percent={'80'}/>
                    <SkillBar name={'Figma'} percent={'75'}/>
                    <SkillBar name={'Jira'} percent={'85'}/>
                    <SkillBar name={'MongoDB'} percent={'75'}/>
                    <SkillBar name={'AWS-Amplify'} percent={'80'}/>
                    <SkillBar name={'AWS-DynamoDB'} percent={'70'}/>
                    <SkillBar name={'AWS-Cognito'} percent={'60'}/>
                </div>
            </div>
            
            <div className="image">
                <img src={me} alt="me :)" />
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
                grid-gap: ${width>minWidth?'2':'1'}rem;
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
                line-height: 1.3rem;
                text-align: justify;
            }

            .about a{
                display: inline-block;
                color: var(--ligth-green);
            }

            .about a::after{
                content: "";
                text-align: center;
                display: block;
                width: 90%;
                margin: 0 5%;
                height: 1px;
                position: relative;
                bottom: 0.2em;
                background-color: var(--ligth-green);
                transition: 1s;
                opacity: 0.5;
            }

            .skills{
                padding: 1rem ${width>minWidth?'0':'1rem'};
                display: grid;
                grid-gap: .8rem;
                ${width>minWidth?'grid-template-columns: 1fr 1fr;':''}                
            }

        `}</style>
    </div>
}

export default About