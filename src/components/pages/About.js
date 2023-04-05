import { motion } from 'framer-motion'
import image from '../../images/bgabt.jpg'
import image2 from '../../images/p5logo.png'
const About = () => {
    return (
        <>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{type:'spring',duration: 0.8, delay: 0.5}} 
            >
                <div style={{background:`url(${image}) center fixed no-repeat`,backgroundSize:'cover',backgroundPositionY:'-250px',  height:'50vh'}}>
                    <div className='d-flex flex-column justify-content-center text-center' style={{ backgroundColor:'rgba(0,0,0,0.6)', height:'100%'}}>
                    <motion.div initial={{y:'15vh', opacity:0}} animate={{y:0, opacity:1, transition:{type:'spring', duration:4}}}>
                                <h3 className='display-2 fw-bold text-white text-uppercase'> about <span className='text-success'>us</span></h3>
                    </motion.div>
                    </div>
                </div>
                <div>
                    <div className='text-white  mt-4' style={{minHeight:'100vh'}}>
                        <div>   
                            <div className='text-center text-uppercase'>
                                <img src={image2} width='200px'/>
                                <h2 className='' style={{fontFamily:'cursive'}}>who we are</h2></div>
                            <div className='d-flex justify-content-center'>
                                <div className='' style={{textAlign:'justify', width:'90%'}}>
                                    <p className='my-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                     eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p className='my-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                     eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p className='my-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                     eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5'>
                </div>
            </motion.div>
        </>
    )
}

export default About