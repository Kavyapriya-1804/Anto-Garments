import React from "react";
import ScriptTag from 'react-script-tag';
//import $ from 'jquery';
import pic1 from "../products/images/pic1.png"
// import pic2 from "../products/images/pic2.jpg"
// import pic3 from "../products/images/pic3.png"
// import pic4 from "../products/images/pic4.png"
// import pic5 from "../products/images/pic5.png"
import "./banners.css";
import "./slicarousel.css";
import "./demo.css";
{/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
   <script src="js/slicarousel.js"></script>
    <script> 
	   $(document).ready(function(){
	     $(".the_slider").slicarousel();
	   });
</script> */}
	

function Banners(){

    return(
      <div>
        <main>
        <article>
          <h3>ANTO GARMENTS</h3>
            <div className="container">
              <div className="the_slider">
                <div className="s_slider_container">
                  <div className="s_slide">
                    <div className="s_slide_0"  style={{ backgroundImage:`url(${pic1})` }}>  loreum espeum </div> 
                  </div>
                </div>
                {/* <div className="s_slider_container">
                  <div className="s_slide">
                    <div className="s_slide_1"  style={{ backgroundImage:`url(${pic2})` }}>  loreum espeum </div> 
                  </div>
                </div>
                <div className="s_slider_container">
                  <div className="s_slide">
                    <div className="s_slide_2"  style={{ backgroundImage:`url(${pic3})` }}>  loreum espeum </div> 
                  </div>
                </div>
                <div className="s_slider_container">
                  <div className="s_slide">
                    <div className="s_slide_3"  style={{ backgroundImage:`url(${pic4})` }}>  loreum espeum </div> 
                  </div>
                </div>
                <div className="s_slider_container">
                  <div className="s_slide">
                    <div className="s_slide_4"  style={{ backgroundImage:`url(${pic5})` }}>  loreum espeum </div> 
                  </div>
                </div> */}
              </div>
            </div>
        </article>
       </main>

        <ScriptTag isHydrating={true} type="text/javascript" src= "https://code.jquery.com/jquery-3.4.1.min.js" />
        <ScriptTag isHydrating={true} type="text/javascript" src= "/slicarousel.js" />

      </div>
    );
}

export default Banners      







































































