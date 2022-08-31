const Contact = ({width}) => {

    let minWidth = 550;


    return <div className="contact" id="contact">

                <h2>Contact</h2>

                <div className="contact-wrapper">
                    <p>I am finishing my degree as an engineer and I have some freelancer projects in progress, but I am always available for job offers...</p>
                    <ul>
                        <li>
                            <a href="mailto:cristianvega.m@outlook.com" >
                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
                                <label>Mail</label>
                            </a>
                        </li>
                        
                        <li>
                            <a href="mailto:cristianvega@usantotomas.edu.co" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M191.9 448.6c-9.766 0-19.48-2.969-27.78-8.891L32 340.2V480c0 17.62 14.38 32 32 32h256c17.62 0 32-14.38 32-32v-139.8L220.2 439.5C211.7 445.6 201.8 448.6 191.9 448.6zM192 192c0-35.25 28.75-64 64-64h224V32c0-17.62-14.38-32-32-32H128C110.4 0 96 14.38 96 32v192h96V192zM320 256H64C46.38 256 32 270.4 32 288v12.18l151 113.8c5.25 3.719 12.7 3.734 18.27-.25L352 300.2V288C352 270.4 337.6 256 320 256zM576 160H256C238.4 160 224 174.4 224 192v32h96c33.25 0 60.63 25.38 63.75 57.88L384 416h192c17.62 0 32-14.38 32-32V192C608 174.4 593.6 160 576 160zM544 288h-64V224h64V288z"/></svg>
                                <label>Corporate Mail</label>
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://www.linkedin.com/in/cristian-vega-developer" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                <label>Linked In</label>
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://github.com/KristtianV">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                <label>GitHub</label>
                            </a>
                        </li>
                    </ul>
                </div>
        

        <style jsx>{`

            .contact {
                padding: 6rem 0;
                padding-bottom: 12rem;
                margin: 0 10%;
            }

            .contact-wrapper{
                display: grid;
                justify-items: center;
                grid-gap: 7rem;
            }

            .contact h2 {
                font-weight: 800;
                font-size: 2rem;
                text-align: center;
                color: var(--ligth-green);
                transition: .5s;
                margin: 1rem 0;
            }

            .contact p{
                font-size: ${width<minWidth?'1':'1.3'}rem;
                color: var(--gray);
                padding: 1rem;
                border-radius: 1rem;
                line-height: 1.3rem;
                text-align: center;
            }

            .contact ul{
                display: flex;
                width: 100%;
                justify-content: space-around;
            }

            .contact li{
                height:${width<minWidth?'2':'5'}rem;
                text-align: center;
            }

            .contact a{
                display: grid;
                justify-items: center;
                fill:var(--ligth-green);
                transition: .3s;
            }

            .contact a:hover{
                transform: scale(1.3)
            }

            .contact svg{
                height:${width<minWidth?'2':'3'}rem;
                padding: 1rem;
            }

            .contact label{
                display: ${width<minWidth?'none':'block'};
                color: var(--gray);
            }
            

        `}</style>
    </div>
}

export default Contact