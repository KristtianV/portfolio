const SkillBar = ({name,percent}) => {
    return <div className="bar-wrapper">
                <h1>{percent}</h1>
                <h3>{name}</h3>
                <div className="bar"></div>
        
        <style jsx>{`

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
                
                border: dashed .25rem var(--ligth-green); 
                transition: width 1s;
            }
            
            .bar-wrapper h3{
                color: var(--ligth-green);
            }

        `}</style>
    </div>
}

export default SkillBar