

import React from 'react';
import {Row,Col} from 'reactstrap'


function Resume(){


    return(

        <div className = "outer-form-container-resume">
            <div className = "inner-form-container-resume"> 
              <form className = "form-container-resume" >
                  <div className = "form-style-resume">
                   <div className = "each-input-content-resume">
                       <Row ><p className= "label-style-resume">Skills</p></Row>
                       <Row>
                           <input type = "text" className = "input-style-resume"/>
                       </Row>
                   </div>

                   <div className = "each-input-content-resume">
                       <Row ><p className= "label-style-resume">Tools</p></Row>
                       <Row>
                           <input type = "text" className = "input-style-resume" />
                       </Row>
                   </div>

                   <div className = "each-input-content-resume">
                       <Row ><p className= "label-style-resume">Skills percentage(%)</p></Row>
                       <Row>
                           <input type = "text" className = "input-style-resume" />
                       </Row>
                   </div>

                   <div className = "each-input-content-resume">
                       <Row ><p className= "label-style-resume">Tools percentage(%)</p></Row>
                       <Row>
                           <input type = "text" className = "input-style-resume" />
                       </Row>
                   </div>

                   
                </div>

                <div className = "button-admin-container-resume">
                     <button className = "button-admin">send</button>
                </div>

              </form>
         </div> 
        </div>
    )
}

export default Resume;