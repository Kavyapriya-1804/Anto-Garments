import React from 'react'
//import './footer.css'

function Footer(){
  const col={width: "100%", display: "flex",
    flexDirection: "column",
    padding: "0 1em",
    minHeight: "12em"};
  const rows={padding: "1em 1em"};
    return (
        <div className="contents" style={{display:"flex", flexDirection:"column",fontFamily:"poppins",boxSizing: "border-box", border: "none", outline: "none",marginTop:"5%"}}>
        <div className="footer" style={{display:"flex", flexDirection:"column", backgroundColor:"#F5F5DC"}}>
          <div className="row primary" style={{display: "grid", gridTemplateColumns: "3fr 2fr 2fr", alignItems: "stretch"}}>
            <div className="column about" style={col}>

            <h3 style={{width: "100%", textAlign: "centre", color: "white", fontSize: "1.4em", whiteSpace: "nowrap"}}>ANTO GARMENTS</h3>

            <p style={{textAlign:"center"}}>
               Contact :   +91 8489753111
            </p>

            <div className="social"
                style={{ color: "#191970",display: "flex",
                justifyContent: "space-around",
                fontSize: "2.4em",
                flexDirection: "row",
                marginTop: "0.5em" }}>

                <a href="https://www.facebook.com/anto.garments.9" target="blank"><i className="fa fa-facebook-square"></i></a>
                <a href="https://chat.whatsapp.com/BodyrpiSO2pLTRNb3P3tVF" target="blank"><i className="fa fa-whatsapp"></i></a>
                <a href="https://pin.it/1xWLKvM" target="blank"><i className="fa fa-pinterest-square"></i></a>
                <a href="https://www.instagram.com/antogarments/" target="blank"><i className="fa fa-instagram"></i></a>
            </div>
            </div>

            <div className="column links" style={col}>
            <h3 style={{width: "100%", textAlign: "left", color: "white", fontSize: "1.4em", whiteSpace: "nowrap"}}>TO VISIT</h3>

            <ul>
            <li></li>
            <li>
            <a href="#faq">Mr.Jerome Arockiya Vincent</a>
            </li>
            <li>Ramamoorthy Nagar, </li>
            <li> Krishnapalayam road,</li>
            <li>Erode - 638003.</li>
            </ul>

            </div>

            <div className="column subscribe" style={col}>
            <h3 style={{width: "100%", textAlign: "left", color: "white", fontSize: "1.4em"}}>Newsletter</h3>
            <div className="subs" style={{display:"flex"}}>
            <input type="email" placeholder="Your email-id" />
            <button style={{backgroundColor:"orange", color:"white", textAlign:"center", fontSize: "1em", justifyContent: "space-around", borderRadius: "5px",margin:"5px", padding:"5px"}}>Subscribe</button>
            </div>

            </div>

          </div>

        <div className="row copyright" style={{ padding: "0.3em 1em", textAlign:"right"}}>
          <hr></hr>
            <p style={{colour:"white"}}>Copyright &copy; 2022 Web Team</p>
            <br></br>
        </div>
      </div>
    /</div>
    )
}

export default Footer