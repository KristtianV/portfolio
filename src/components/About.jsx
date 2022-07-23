import image from "../img/me.jfif";

const About = ({width}) => {
    
    let minWidth = 700;

    return <div className="about" id="about">
        
        <h2>About Me</h2>
        <div className="wrapper">
            <div className="info">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolore fugiat quae sapiente atque eligendi dolorum, debitis odio quibusdam accusamus accusantium possimus! Quis quam laboriosam non sunt molestias in illo earum quibusdam, minima sequi, similique soluta cum. Eum assumenda, sunt laboriosam enim placeat non aliquam eius ad deserunt doloribus? Rerum aspernatur laborum at odit corporis inventore totam consequuntur vero officia molestias quod reprehenderit, veritatis dolore ad? Quibusdam reiciendis corrupti quidem unde aperiam. Ratione voluptates pariatur nihil vitae tempore, exercitationem cupiditate accusamus doloremque in quaerat sint, vel aliquam ab? Dignissimos quae quis temporibus modi vero illo sed maxime alias quia facere.</p>
                <div className="skills">
                    <div className="bar-wrapper">
                        <h3>HTML</h3>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={image} alt="" />
                <div className="overlay"></div>
            </div>

        </div>

        <style jsx>{`

            .about{
                margin: 2rem 0;
            }

            .wrapper{
                display: grid;
                ${width>minWidth?'grid-template-columns: 3fr 2fr;':'grid-template-rows: auto 2fr;'}
                grid-gap: ${width>minWidth?'4':'2'}rem;
            }
            
            .wrapper img{
                width: 100%;
                border-radius: 1rem;
            }

            .image{
                border-radius: 1rem;
            }

            .overlay{
                position: relative;
                top: -100%;
                left: 0;
                border-radius: 1rem;
                height: 99%;
                width: 100%;
                background: rgb(43, 15, 67, .3);;
                opacity: .9;
                transition: 1s;
                box-shadow: #2B0F43 10px 10px 0px -3px, #2ECA16 10px 10px;       
                transition-property: box-shadow opacity;
            }
           

            .overlay:hover{
                opacity: .1;
                box-shadow: #2B0F43 0px 0px 0px -3px, #2ECA16 0px 0px;     
            }

            .about h2 {
                font-size: 1.5rem;
                color: var(--ligth-green);
                transition: .5s;
                line-height: 3rem;
            }

            .about p{
                color:var(--gray);
            }
            
            .bar-wrapper{
                margin: 1rem;
                display: grid;
                grid-gap: .5rem;
                text-align: center;
            }

            .bar{
                width: 100%;
                height: .5rem;
                border-radius: .3rem;
                border: solid .2rem var(--green);
            }

            .bar::after{
                position: relative;
                left: -1px;
                display: flex;
                content: "";
                width: 85%;
                border: dashed .25rem var(--ligth-green); 
            }
            
            .bar-wrapper h3{
                color: var(--ligth-green);
            }

        `}</style>
    </div>
}

export default About