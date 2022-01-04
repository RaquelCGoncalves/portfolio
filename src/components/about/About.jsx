import "./about.scss"
import Typewriter from "typewriter-effect";

export default function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="title">
                    <h1>About Me</h1>
                </div>
                <div className="wrapper">
                    <Typewriter
                    onInit={(typewriter) =>{
                        typewriter.typeString("I’m a Mcs student in biomedical engineering and a tough cookie. From a very early age, computing and computer programs always amazed me. I love to learn new languages and frameworks. Boxing is one of the main activities I like to do outside work hours, as well playing video-games and listen to music.").changeDelay(50).start();
                    }}
                    />
                </div>
            </div>
                
            
            <div className="right">
                <div className="imgContainer">
                   <img src="assets/girl.gif" alt="" />
                </div>
            </div>
                
                  
             
                


            
        </div>
    )
}


