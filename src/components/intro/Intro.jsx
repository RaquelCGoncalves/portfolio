import "./intro.scss"



export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/rachel.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper"> 
                    <h2>Hi There, I'm</h2>
                    <h1>Raquel Gonçalves</h1>
                    <h3>Mcs student in biomedical engineering - Medical Informatics</h3>
                    
                </div>
                <a href="#about" className="down">
                   <img src="assets/down.png" alt="" /> 
                </a>
                
            </div>

            
        </div>
    )
}
