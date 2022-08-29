import React from "react";
import '../stylesheets/contactPage.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { motion } from "framer-motion";

export function Contactpage(props){
    return(
        
        <div className="container" >
            <script src="https://kit.fontawesome.com/33172e2cc6.js" crossorigin="anonymous"></script>

            <div className="contactme-container">
                <div className="container">
                    <motion.div 
                        initial={{
                            color:'#000'
                        }}
                        animate={{
                            y:10,
                            color:'#fff'
                        }}
                        transition={{
                            ease:'easeOut',
                            duration: 4
                        }}

                        className="contact-info">
                            <h1>Contact me</h1>
                            <p>
                                Nowadays, I'm living in Peru, so I would like to get a remotely jobs. If you want a full stack developer o data scientist, 
                                you could contact me, by this means or you can send a message to my    
                                <a href="https://www.linkedin.com/in/juliocesarromerotorres/" target="_blank"> Linkedin </a> profile. 
                                I will support you with the experience I have so that you can achieve your goals. :)  
                            </p>
                    </motion.div>
                    
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="outline-dark" type="submit">
                            Send message!
                        </Button>
                    </Form>


                </div>
                <div className="image-test">
                    <h1>Loading ...</h1>
                </div>
            </div> 
        </div>
    );
}

export default Contactpage;
