import image from '../../images/image20.jpg'
import image6 from '../../images/image21.jpg'
import image7 from '../../images/111.webp'

import image2 from '../../images/basket.png'
import image3 from '../../images/ecological-cleaning-products-concept.jpg'
import image4 from '../../images/wepik-export-20230627143828I8tM.png'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { Navigation, Pagination } from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css';
import { Link } from 'react-router-dom'


const goRight = () => {
    const scroller = document.getElementById('scroller')
    scroller.style.scrollBehavior = 'smooth';
    scroller.scrollLeft = scroller.scrollLeft -= 300;
}
const goLeft = () => {
   
    const scroller = document.getElementById('scroller')
    scroller.style.scrollBehavior = 'smooth';
    scroller.scrollLeft = scroller.scrollLeft += 300;
}

const OurProducts = () => {

    const ContainerProduct1 = () => {

        const ContainerProduct2 = (props) => {
            return (
                <>
                    <Link to='/OurProductsDet' className='m-2 shadow rounded bg-secondary' style={{ minWidth: '300px' }}>
                        <div className=' my-2'>
                            <div className=''>
                                <img alt='img' src={props.images} width='100%' />
                            </div>
                            <div className='p-2'>
                                <div>
                                    <div className='text-uppercase text-white' style={{ fontSize: '20px', textDecoration: 'none' }}>product name</div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </>
            )
        }
        return (
            <>
                <div style={{ position: 'relative' }}>
                    <div id='scroller' className='scroller d-flex py-2' style={{ overflowX: "scroll" }}>
                        <ContainerProduct2 images={image2} />
                        <ContainerProduct2 images={image2} />
                        <ContainerProduct2 images={image2} />
                        <ContainerProduct2 images={image2} />
                        <ContainerProduct2 images={image2} />
                        <ContainerProduct2 images={image2} />
                        <ContainerProduct2 images={image2} />
                    </div>
                    <div style={{ position: 'absolute',cursor:'pointer', right: '0', top: '0', bottom: '0', backgroundColor: 'rgba(0,0,0,0.5)' }} className='text-white p-3 fs-2 d-none d-md-block' onClick={goLeft}>
                        <div className='d-flex flex-column h-100 justify-content-center '>
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                    <div style={{ position: 'absolute',cursor:'pointer', left: '0', top: '0', bottom: '0', backgroundColor: 'rgba(0,0,0,0.5)' }} className='text-white fs-2 p-3 d-none d-md-block' onClick={goRight}>
                        <div className='d-flex flex-column h-100 justify-content-center '>
                            <AiOutlineArrowLeft /></div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
            >
                <Swiper style={{ background: 'linear-gradient( rgb(0,0,0), rgb(33, 37, 41))' }} className=''
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}

                >
                    <SwiperSlide>
                        <div>
                            <div>
                                <div className='row'>
                                    <div className='col-12 col-md-8' style={{backgroundColor:'#C5C6D0',height:'70vh'}}>
                                        <div className='d-flex justify-content-center h-100'>
                                            <div className='d-flex justify-content-center flex-column'>
                                                <div>
                                                    <div className='display-1 fw-bold text-uppercase'>check out our products</div>
                                                    <div>Some text about the product in question</div>
                                                    <button className='btn btn-outline-secondary rounded-0 btn-sm text-uppercase fw-bold'>contact us</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 d-none d-md-block op' style={{ backgroundColor:'#808080',height:'70vh'}}>
                                        <div style={{height:'100%'}} className='d-flex flex-column justify-content-center'>
                                            <div className='' style={{height:'350px', width:'350px', transform:'translateX(-25%)', overflow:'hidden'}}>
                                                <img src={image3} width='100%'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div>
                                <div className='row'>
                                    <div className='col-12 col-md-8' style={{backgroundColor:'#C5C6D0',height:'70vh'}}>
                                        <div className='d-flex justify-content-center h-100'>
                                            <div className='d-flex justify-content-center flex-column'>
                                                <div>
                                                    <div className='display-1 fw-bold text-uppercase'>check out our products</div>
                                                    <div>Some text about the product in question</div>
                                                    <button className='btn btn-outline-secondary rounded-0 btn-sm text-uppercase fw-bold'>contact us</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 d-none d-md-block op' style={{ backgroundColor:'#808080',height:'70vh'}}>
                                        <div style={{height:'100%'}} className='d-flex flex-column justify-content-center'>
                                            <div className='' style={{height:'350px', width:'350px', transform:'translateX(-25%)', overflow:'hidden'}}>
                                                <img src={image3} width='100%'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='bg-white' style={{minHeight:''}}>
                    <div className=''>
                        <div>
                           <div style={{height:'50vh', background:`url(${image4}) no-repeat center`, minHeight:"50vh", backgroundSize:'cover'}}>
                            <div style={{backgroundColor:'rgba(0,0,0,0.7)', height:'100%'}}>
                                <div className='h-100 p-3'>
                                    <div className='row h-100'>
                                        <div className='col-12 col-md-6'>
                                            <div className='flex-column text-white h-100 ps-4 justify-content-center d-flex'>
                                                <div>
                                                    <div className='fw-bold display-1'>Hair Shampoo</div>
                                                    <div>some writing about this stuff</div>
                                                    <button className='btn btn-outline-light fw-bold text-uppercase'>contact us</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-6'></div>
                                    </div>
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


export default OurProducts