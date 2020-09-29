


import React from 'react';
import {Row,Col} from 'reactstrap'


function Medium(){


    return(

        <div className = "outer-form-container-content">
            <div className = "inner-form-container-content"> 
              <form className = "form-container-content" action = "http://localhost:8080/leta" method = "POST" >
                  <div className = "form-style-content">
                  

                   <div className = "each-input-content-content">
                       <Row ><p className= "label-style-content">Title of the content</p></Row>
                       <Row>
                           <input type = "text" 
                           name = "title"
                           className = "input-style-content" 
                           style = {{paddingLeft:10}}/>
                       </Row>
                   </div>

                   <div className = "each-input-content-content">
                       <Row ><p className= "label-style-content">Image of the content (url)</p></Row>
                       <Row>
                           <input type = "text" 
                           name = "image"
                           className = "input-style-content" 
                           style = {{paddingLeft:10}}/>
                       </Row>
                   </div>

                   <div className = "each-input-content-content">
                       <Row ><p className= "label-style-content">author of the content</p></Row>
                       <Row>
                           <input type = "text" 
                           name = "author"
                           className = "input-style-content" 
                           style = {{paddingLeft:10}}/>
                       </Row>
                   </div>

                   <div className = "each-input-content-content">
                       <Row ><p className= "label-style-content">Contents</p></Row>
                       <Row>
                           <textarea type = "text" 
                           name = "content"
                           className = "input-style-textarea" 
                           style = {{paddingLeft:10,resize:"none",overflow:'hidden'}} 
                            />
                       </Row>
                   </div>
                </div>

                <div className = "button-admin-container-content">
                     <button className = "button-admin">send</button>
                </div>

              </form>
         </div> 
        </div>
    )
}

export default Medium;