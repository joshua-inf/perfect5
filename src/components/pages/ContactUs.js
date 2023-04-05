import { motion } from "framer-motion"
import image from '../../images/desk.jpg'
import image1 from '../../images/phone.png'
import image2 from '../../images/email.png'
import image3 from '../../images/lo.png'

const ConatctUs = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
            >
                <div style={{ background: `url(${image}) center fixed no-repeat`, backgroundSize: 'cover', backgroundPositionY: '-250px', height: '50vh' }}>
                    <div className='d-flex flex-column justify-content-center text-center' style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%' }}>
                        <motion.div initial={{ y: '15vh', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: 'spring', duration: 4 } }}>
                            <h3 className='display-2 fw-bold text-white text-uppercase'> contact <span className='text-success'>us</span></h3>
                        </motion.div>
                    </div>
                </div>
                <div style={{ minHeight: '100vh' }}>
                    <div className="pt-5">
                        <div className="p-3">
                            <div className="row">
                                <div className="col-12 col-md-6 p-5">
                                    <div className="d-flex flex-column" style={{gap:'20px'}}>
                                        <div className="text-center">
                                            <img src={image1} height='300px'/>
                                        </div>
                                        <div className="text-uppercase text-white text-center">
                                            <h1>call us on</h1>
                                            <div>+260 767 432 198</div>
                                            <div>+260 771 187 445</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-5">
                                    <div className="d-flex flex-column" style={{gap:'20px'}}>
                                    <div className="text-center">
                                            <img src={image2} height='300px'/>
                                        </div>
                                        <div className="text-white text-center">
                                            <h1 className="text-uppercase ">email us on</h1>
                                            <div>Perfect5cleansolution@gmail.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="p-4 border bg-black">
                            <div className="row">
                                <div className="col-md-8 col-12">
                                    <img src={image3} width='100%' />
                                </div>
                                <div className="col-md-3 col-12">
                                    <div className="">
                                    <div className="text-white">
                                        <h1 className="text-uppercase">vist us</h1>
                                        <hr/>
                                        <div className="py-4">
                                            <div className="h1">
                                                Plot number 1037,<br/> Chalala,<br/> Lusaka,<br/> Zambia.
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
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

export default ConatctUs