

import React from 'react';
import {Row,Col} from 'reactstrap'


function Library(){


    return(

        <div className = "outer-form-container">
            <div className = "inner-form-container"> 
              <form className = "form-container" action = "http://localhost:8000/ingiza" method = "POST" >
                  <div className = "form-style">
                   <div className = "each-input-content">
                       <Row ><p className= "label-style">Title of the book</p></Row>
                       <Row>
                           <input type = "text" className = "input-style"
                            name = "title"
                            style = {{paddingLeft:10}}/>
                       </Row>
                   </div>

                   <div className = "each-input-content">
                       <Row ><p className= "label-style">Image of the book (url)</p></Row>
                       <Row>
                           <input type = "text" 
                           name = "image"
                           className = "input-style" 
                           style = {{paddingLeft:10}}/>
                       </Row>
                   </div>

                   <div className = "each-input-content">
                       <Row ><p className= "label-style">Content of the book (url)</p></Row>
                       <Row>
                           <input type = "text" 
                           name = "content"
                           className = "input-style" 
                           style = {{paddingLeft:10}} />
                       </Row>
                   </div>
                </div>

                <div className = "button-admin-container">
                     <button className = "button-admin">send</button>
                </div>

              </form>
         </div> 
        </div>
    )
}

export default Library;