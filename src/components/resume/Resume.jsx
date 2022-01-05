import "./resume.scss";

import Bar from "../Bar/Bar";

const languages = [
    {
      icon:"assets/dot.png",
      name:'Python',
      level:'40'  
    },
    {
        icon:"assets/dot.png",
        name:'Java',
        level:'15'  
    },
    {
        icon: "assets/dot.png",
        name:'Javascript',
        level:'15'  
    },
    {
        icon:"assets/dot.png",
        name:'HTML',
        level:'50'  
    },
    {
        icon:"assets/dot.png",
        name:'CSS',
        level:'30'  
    },
    {
        icon:"assets/dot.png",
        name:'React',
        level:'10'  
    },
    {
        icon:"assets/dot.png",
        name:'Django',
        level:'15'  
    },
    {
        icon:"assets/dot.png",
        name:'Flask',
        level:'15'  
    },
    {
        icon:"assets/dot.png",
        name:'JADE',
        level:'20'  
    },
    {
        icon:"assets/dot.png",
        name:'Docker',
        level:'10'  
    }
    
]


export default function Resume() {
    return (
        <div className="resume" id="resume">
            <h1 className="title"> Resume </h1>
            <div className="left">
                <h4 className="resume-card_heading">
                        Education
                </h4>
                <div className="resume-card_body">
                    <h5 className="resume-card_title">
                        Master in Biomedical Engineering (2016-Present)
                    </h5>
                    <p className="resume-card_name">
                        University of minho
                    </p>
                <div className="languages">
                    <h5 className="resume-language-heading">
                        Language and Framework
                     </h5>
                    <div className="resume-language_body">
                        {
                            languages.map(Language => <Bar value={Language}/>)
                        }
                    </div>
                </div>
            </div>
            </div>
            <div className="right">
                <div className="experience">
                    <h4 className="resume-card_heading1">
                         Professional Experience
                    </h4>
                    <div className="resume-card_body1">
                        <h5 className="resume-card_title1">
                            Sales Assistant (2019)
                        </h5>
                        <p className="resume-card_name1">
                            SportZone
                        </p>
                    </div>
                </div>
                <div className="experience-volun">
                    <h4 className="resume-card_heading2">
                        Volunteer Experience
                    </h4>
                    <div className="resume-card_body2">
                        <h5 className="resume-card_title2">
                            Tutor (2017)
                        </h5>
                        <p className="resume-card_name2">
                            Maria Imaculada Youth Institute
                        </p> 
                    </div>
                    <div className="resume-card_body3">
                        <h5 className="resume-card_title3">
                            Food Distribution (2016-2017)
                        </h5>
                        <p className="resume-card_name3">
                            Refood Braga
                        </p>
                        
                    </div>

                </div>

                <div className="certificates">
                    <h4 className="resume-card_heading4">
                        Course Certificates
                    </h4>
                    <div className="deep">
                        <a href="https://coursera.org/share/b4e873a6487e92e5fe60426b025463bb">
                            Deep Learning Specialization
                        </a>
                    </div>
                    <div className="boot">
                        <a href="https://www.udemy.com/certificate/UC-ce010772-43f2-4296-a10f-04de608a4bae/"> 
                            Python for Data Science and Machine Learning Bootcamp
                        </a>
                    </div>
                        
                    
                    

                </div>
                
            </div>

            
        </div>

    )
}
