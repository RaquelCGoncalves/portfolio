import "./topbar.scss"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">RaquelGonçalves</a>
                    <div className="itemContainer">
                    
                        <a href='https://www.linkedin.com/in/raquel-gon%C3%A7alves-8673b120b' className="linkedin">
                            <img src="assets/linkedin1.png" alt="" /> 
                        </a>
                        <a href='https://github.com/RaquelCGoncalves' className="github">
                            <img src="assets/github1.png" alt="" /> 
                        </a>
                        
                        <img src="assets/mail2.png" alt="" className="mail" />
                        <span className="text">raquelccgoncalves@hotmail.com</span>
                       

                   

                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>

            </div>
            
            
        </div>
    )
}
