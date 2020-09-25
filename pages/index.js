
import React from 'react';
import {Col,Row} from 'reactstrap';
import Typical from 'react-typical';
/*import image1 from '../assets/images/libary.png';
import image2 from '../assets/images/resume.png';
import image3 from '../assets/images/graduu.jpg';*/
/*const image1 = require('../assets/images/libary.png')
const image2 = require('../assets/images/resume.png')
const image3 = require('../assets/images/graduu.jpg')*/



function Home (){


  return(
        
       <div className = "outer-container">
           
           <div className = "inner-container">
              <div>
                  <div className = "profile-container">
                     <Row>
                        
                        <Col xs = 'auto'>
                        <div >
                           {/*<img src = {image3} className = "profile" />*/}
                        </div>
                        </Col>
                         
                        <Col xs = "auto">
                             <div className = "word">
                             <h1>Clement Dunstan Siaffu</h1>
                             <p>Adminstrator</p>
                             </div>
                        </Col>

                          
                        <Col xs = "auto">
                             <div className = "word-2">
                             <p>Adminstration dashboard for digital resume and book libarary application</p>
                             </div>
                        </Col>

                     </Row>
                   
                    
                  
                  </div>
                 
              </div>
             
           </div>
           <Typical
                  steps = {['Hi,welcome to admin dashboard',2000,"what can we help you",2000]}
                  loop = {Infinity}
                  wrapper = "h2"
                  />

            <Row className = "container-image">
                  
                   <Col xs = "auto" className = "left-box">
                       <a href = "http://localhost:3000/library" style = {{textDecoration:'none'}}>
                       {/*<img src = {image1} className = "image-style"/>*/}
                       <h1 className = "text-form">Book libary form</h1>
                       </a>
                      
                   </Col>
                   
                   
                   <Col xs = "auto" className = "right-box">
                     
                    
                       <a href = "http://localhost:3000/resume" style = {{textDecoration:'none'}} >
                        {/*<img src = {image2} className = "image-style"/>*/}
                       <h1 className = "text-form">Resume form</h1>
                       </a>
                   
                   </Col>
                 

            </Row>
       </div>
  )
}


export default Home