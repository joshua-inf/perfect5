import { motion } from "framer-motion"
import image from '../../images/desk.jpg'
import {BiPhoneCall} from 'react-icons/bi'
import {FaMailBulk} from 'react-icons/fa'
import {BiCurrentLocation} from 'react-icons/bi'
const ConatctUs = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
            >
                <div style={{ background: `url(${image}) center fixed no-repeat`, backgroundSize: 'cover'}}>
                    <div style={{backgroundColor: 'rgba(0,0,0,0.6)',paddingTop:'100px', minHeight: '100vh'}}>
                        <div className='d-flex flex-column justify-content-center text-center' style={{  height: '100%' }}>
                            <motion.div initial={{ y: '15vh', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: 'spring', duration: 4 } }}>
                                <h3 className='display-2 fw-bold text-white text-uppercase'> contact <span className='text-success'>us</span></h3>
                            </motion.div>
                        </div>
                        <div>
                            <div className="pt-5">
                                <div className="p-3 text-white">
                                    <div className="row">
                                        <div className="col-12 col-md-4 p-5">
                                            <div className="d-flex p-3 flex-column" style={{cursor:'pointer',gap:'20px'}}>
                                                <div className="text-center">
                                                    <BiPhoneCall style={{fontSize:'100px'}} />
                                                </div>
                                                <div className="text-uppercase text-center">
                                                    <h1 style={{fontSize:'20px'}}>call us on</h1>
                                                    <div>+260 767 432 198</div>
                                                    <div>+260 771 187 445</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 p-5">
                                            <div className="d-flex p-3 flex-column" style={{cursor:'pointer',gap:'20px'}}>
                                            <div className="text-center">
                                                <FaMailBulk style={{fontSize:'100px'}} />
                                                </div>
                                                <div className=" text-center">
                                                    <h1 style={{fontSize:'20px'}} className="text-uppercase ">email us on</h1>
                                                    <div>Perfect5cleansolution@gmail.com</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 p-5">
                                            <div className="d-flex p-3 flex-column" style={{cursor:'pointer',gap:'20px'}}>
                                            <div className="text-center">
                                                <BiCurrentLocation style={{fontSize:'100px'}}/>
                                                </div>
                                                <div className="text-center">
                                                    <h1 style={{fontSize:'20px'}} className="text-uppercase ">visit us</h1>
                                                    Plot number 1037,<br/> Chalala,<br/> Lusaka,<br/> Zambia.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <div className="p-5">
                        <div style={{backgroundColor:'rgb(255,255,255,0.5)'}} className='border border-white' >
                                <div className='p-4'>
                                    <h3>Inquiry</h3>
                                    <div className='py-2'>
                                        <div className='d-flex' style={{gap:'5px'}}>
                                            <input placeholder='firstname' style={{height:'50px', outline:'none'}} type='text' className='p-3 bg-dark text-white w-100'/>
                                            <input placeholder='lastname' style={{height:'50px', outline:'none'}} className='p-3 mb-3 bg-dark text-white w-100'/>
                                        </div>
                                        <div>
                                            <input placeholder='emai address' style={{height:'50px', outline:'none'}} className='p-3 mb-3 bg-dark text-white w-100'/><br/>
                                            <input placeholder='phone number' style={{height:'50px', outline:'none'}} className='p-3 mb-3 bg-dark text-white w-100'/><br/>
                                            <textarea placeholder='let us know how we can help' style={{height:'200px',resize:'none', outline:'none'}} className='p-3 bg-dark text-white w-100'/>
                                        </div>
                                    </div>
                                    <button className='btn px-5  py-3 rounded-0 btn-outline-dark'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ConatctUs