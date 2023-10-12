import { motion } from "framer-motion"
import image from '../../images/desk.jpg'
import { BsHeadset } from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
const ConatctUs = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
            >
                <div style={{ background: `url(${image}) center fixed no-repeat`, backgroundSize: 'cover' }}>
                    <div style={{ minHeight: '100vh' }}>
                        <div className='d-flex  text-white justify-content-center text-center flex-column' style={{ backgroundColor: "rgba(0,0,0,0.6)", minHeight: '100vh', paddingTop: '150px' }}>
                        <div className='d-flex flex-column justify-content-center text-center' style={{ height: '100%' }}>
                            <motion.div initial={{ y: '15vh', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: 'spring', duration: 4 } }}>
                                <h3 className='display-2 fw-bold text-white text-uppercase'> contact <span className='text-success'>us</span></h3>
                            </motion.div>
                        </div>
                            <div>
                                <div className='p-3'>
                                    <div className='row'>
                                        <div className='col-md-1'></div>
                                        <div className='col-md-10 col-12'>
                                            <div className='row'>
                                                <div className='col-md-4 col-12'>
                                                    <div className='py-4'>
                                                        <div className='row'>
                                                            <div className='col-12 p-2'>
                                                                <div className='border-success contx border rounded  p-3 d-flex' >
                                                                    <div className='d-flex justify-content-center border-success me-2 flex-column p-3' style={{ borderRight: "5px solid" }}><BsHeadset size={50} /></div>
                                                                    <div className="d-flex justify-content-center" style={{alignItems:'center'}}>
                                                                        <div style={{ fontSize: '11px' }}>
                                                                            <div><b>Call</b> us</div>
                                                                            <div>+260 767 432 198</div>
                                                                            <div>+260 771 187 445</div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className='col-12 p-2'>
                                                                <div className='border-success contx border rounded  p-3 d-flex'>
                                                                    <div className='d-flex justify-content-center border-success me-2 flex-column p-3 ' style={{ borderRight: "5px solid" }}><FaMapMarkerAlt className='' size={50} /></div>
                                                                    <div>
                                                                        <div style={{ fontSize: '11px' }}>
                                                                            <div className='fw-bold'>Visit us</div>
                                                                            <div>Plot # 1037</div>
                                                                            <div>Chalala, Lusaka</div>
                                                                        </div>
                                                                        <a style={{ fontSize: '11px' }} href=''>Show map</a>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className='col-12 p-2'>
                                                                <div className='border-success contx border rounded  p-3 d-flex'>
                                                                    <div className='d-flex justify-content-center border-success me-2 flex-column p-3 ' style={{ borderRight: "5px solid" }}><AiOutlineMail className='' size={50} /></div>
                                                                        <div className='text-start d-flex justify-content-center' style={{ fontSize: '11px', alignItems:'center' }}>
                                                                            <div>
                                                                                <div className='fw-bold'>Send us an email</div>
                                                                                <div>Perfect5cleaningsolution@gmail.com</div>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-8 col-12'>
                                                    <div className='py-5'>
                                                        <form>
                                                            <div className='d-md-flex ' style={{ gap: '20px' }}>
                                                                <div className='w-100 text-start'>
                                                                    <div>Email:</div>
                                                                    <input required type='email' className='border border-success text-white p-2 w-100' style={{ backgroundColor: 'rgba(0,0,0,0)' }} />
                                                                </div>
                                                                <div className='w-100 text-start'>
                                                                    <div>Subject (optional):</div>
                                                                    <input type='text' placeholder='' className='border border-success text-white p-2 w-100' style={{ backgroundColor: 'rgba(0,0,0,0)' }} />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <textarea style={{ resize: 'none', backgroundColor: 'rgba(0,0,0,0)', minHeight: '300px' }} className='border text-white p-2 border-success w-100 my-4' />
                                                            </div>
                                                            <button className='btn btn-outline-success text-white rounded-0 w-50 '>Send <IoMdSend className='text-white' size={20} /></button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-1'></div>
                                    </div>
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