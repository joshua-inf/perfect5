import image from '../../images/flowers.jpg'
import { motion } from 'framer-motion'

const Services = () => {
    return (
        <>
           <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
            >
            <div style={{ background: `url(${image}) center fixed no-repeat`, backgroundSize: 'cover', backgroundPositionY: '', height: '50vh' }}>
                    <div className='d-flex flex-column justify-content-center text-center' style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%' }}>
                        <motion.div initial={{ y: '15vh', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: 'spring', duration: 4 } }}>
                            <h3 className='display-2 fw-bold text-white text-uppercase'> our<span className='text-success'> services</span></h3>
                        </motion.div>
                    </div>
                </div>
                <div className='p-3'>
                    <div style={{minHeight:'100vh'}}>

                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Services