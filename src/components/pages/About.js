import { motion } from 'framer-motion'
import image from '../../images/bgabt.jpg'
import image2 from '../../images/7740.png'
import image3 from '../../images/walk.png'
import Mini from './HomeComp/MiniServicesSection'
const About = () => {
    return (
        <>
            <motion.div  id='/'
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
                <div className='py-5'>
                    <div className='p-3 text-white'>
                        <div>
                            <div className='row'>
                                <div className='col-1'>
                                </div>
                                <div className='col-10'>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <div>
                                            <div className=''>
                                                <div style={{textAlign:'justify'}}>
                                                    <div>
                                                        <p>
                                                    Perfect five was founded by an individual with vast experience in both cleaning industry and management skill way back in 2006 and in 2014 it was registered w
                                                    ith the registrar of compa­nies in Zambia, although it started with modest amount of capital but today perfect five cleaning service is growing fast in every as
                                                    pect in order to meet the demand of the fast growing industry. We are supported by a strong management team comprising of people with relevant technical experie
                                                    nce. We at perfect five cleaning solution believe that a good health is conducive to the productivity and the quality of our surround­ings; 
                                                    we strive to provide excellent cleaning services to satisfy the challenging needs of our customers. Our customers are an evidence of our achievements. 
                                                    </p>
                                                    </div>
                                                    <div>
                                                    <p>
                                                    Perfect five was founded by an individual with vast experience in both cleaning industry and management skill way back in 2006 and in 2014 it was registered w
                                                    ith the registrar of compa­nies in Zambia, although it started with modest amount of capital but today perfect five cleaning service is growing fast in every as
                                                    pect in order to meet the demand of the fast growing industry. We are supported by a strong management team comprising of people with relevant technical experie
                                                    nce. We at perfect five cleaning solution believe that a good health is conducive to the productivity and the quality of our surround­ings; 
                                                    we strive to provide excellent cleaning services to satisfy the challenging needs of our customers. Our customers are an evidence of our achievements. 
                                                    </p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{maxWidth:'100%', overflow:'hidden'}}>
                                        <Mini image1={image2} image2={image3} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-1'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default About