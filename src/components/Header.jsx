const Header = () => {
    return <nav className="header">

            <section className="top-nav">
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">
                    <li><a href="/#about">About</a> </li>
                    <li><a href="/#proyects">Proyects</a></li>
                    <li><a href="/#working">Working now</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </section>

        <style jsx>{`

            .top-nav {
                width: 100%;
                position: fixed;
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 6rem;
                background-color: rgb(43, 15, 67, .5);
                backdrop-filter: blur(5px)
            }

            .header a {
                color: var(--gray);
                transition: .5s;
                padding: .5rem;
            }

            .header a:hover{
                background: var(--ligth-green);
                border: solid 1px var(--green);
                border-radius: .5rem;
                padding: 1rem;
                color: var(--black-purple)
            }

            .menu {
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 0 10%;
                display: flex;
                flex-direction: row;
                margin: 0;
            }

            .menu > li {
                margin: 0 1rem;
                overflow: hidden;
            }

            .menu-button-container {
                display: none;
                width: 30px;
                cursor: pointer;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            #menu-toggle {
                display: none;
            }

            .menu-button,
            .menu-button::before,
            .menu-button::after {
                display: block;
                background-color: #fff;
                position: absolute;
                height: 4px;
                width: 30px;
                transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
                border-radius: 2px;
            }

            .menu-button::before {
                content: '';
                margin-top: -8px;
            }

            .menu-button::after {
                content: '';
                margin-top: 8px;
            }

            #menu-toggle:checked + .menu-button-container .menu-button::before {
                margin-top: 0px;
                transform: rotate(405deg);
            }

            #menu-toggle:checked + .menu-button-container .menu-button {
                background: rgba(255, 255, 255, 0);
            }

            #menu-toggle:checked + .menu-button-container .menu-button::after {
                margin-top: 0px;
                transform: rotate(-405deg);
            }

            @media (max-width: 550px) {
                .top-nav {
                    height: 4rem;
                    background-color: rgb(43, 15, 67, .8);
                    backdrop-filter: none;
                }
                .menu-button-container {
                    display: flex;
                    position: fixed;
                    right: 1rem;
                }
                .menu {
                    position: absolute;
                    top: 0;
                    left: 0;
                    margin-top: 4rem;
                    flex-direction: column;
                    width: 80%;
                    justify-content: center;
                    align-items: center;
                }
                #menu-toggle ~ .menu li {
                    height: 0;
                    margin: 0;
                    padding: 0;
                    border: 0;
                    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
                }
                #menu-toggle:checked ~ .menu li {
                    background-color: rgb(43, 15, 67, .8);
                    height: 2.5em;
                    padding: 0.5em;
                    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
                }
                
                .menu > li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0;
                    padding: 0.5em 0;
                    width: 100%;
                    color: white;
                }
            }

        `}</style>
    </nav>
}

export default Header