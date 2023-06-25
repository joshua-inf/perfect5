import image from '../../images/image20.jpg'
import image6 from '../../images/image21.jpg'
import image7 from '../../images/111.webp'

import image2 from '../../images/basket.png'
import image3 from '../../images/clean2.jpeg'
import image4 from '../../images/clean0.jpg'
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
                            <div className="" style={{ background: `url(${image3}) fixed right`, backgroundSize: 'cover', height: '70vh' }}>
                                <div className='row p-5 h-100' >
                                    <div className='col-12 col-md-5  d-flex flex-column justify-content-center'>
                                        <div className=''>
                                            <div className=' p-4 bg-light shadow rounded' >
                                                <div className='text-uppercase' style={{ fontSize: '25px', fontWeight: 'bold' }}>welcome to our store</div>
                                                <div style={{ fontSize: '30px' }}>
                                                    Lorem ipsum dolor sit amet
                                                </div>
                                                <div>
                                                    <button className='btn m-2 rounded-0 p-3 text-uppercase fw-bolder btn-outline-success'>contact us now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-7 d-md-block d-none'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="" style={{ background: `url(${image4}) fixed right`, backgroundSize: 'cover', height: '70vh' }}>
                                <div className='row p-5 h-100' >
                                    <div className='col-12 col-md-5  d-flex flex-column justify-content-center'>
                                        <div className=''>
                                            <div className='p-4 bg-light shadow rounded' >
                                                <div className='text-uppercase' style={{ fontSize: '25px', fontWeight: 'bold' }}>welcome to our store</div>
                                                <div style={{ fontSize: '30px' }}>
                                                    Lorem ipsum dolor sit amet
                                                </div>
                                                <div>
                                                    <button className='btn m-2 rounded-0 p-3 text-uppercase fw-bolder btn-outline-success'>contact us now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-7 d-md-block d-none'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div style={{minHeight:'100vh'}}>
                    <div className='p-3'>
                        <div>
                            <div className='row'>
                                <div className='col-12 my-3 col-md-4 col-lg-3'>
                                    <div>
                                        <div className=''>
                                            <div className=' p-0'>
                                                <div className='bg-dark p-3' style={{height:"100%", width:'100%'}}>
                                                    <img src={image2} width='100%'/>
                                                </div>
                                            </div>
                                            <div className='p-0'>
                                                <div className='bg-light p-3' style={{height:'100%', width:'100%'}}>
                                                    <div className='fw-bold'>Product Name</div>
                                                    <div style={{fontSize:'15px'}}>
                                                        Perfect 5 something really interestig about this product
                                                        that will prolly make you wanna buy or try using in your household
                                                        couse this is what this container is about....
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 my-3 col-md-4 col-lg-3'>
                                    <div>
                                        <div className=''>
                                            <div className=' p-0'>
                                                <div className='bg-dark p-3' style={{height:"100%", width:'100%'}}>
                                                    <img src={image2} width='100%'/>
                                                </div>
                                            </div>
                                            <div className='p-0'>
                                                <div className='bg-light p-3' style={{height:'100%', width:'100%'}}>
                                                    <div className='fw-bold'>Product Name</div>
                                                    <div style={{fontSize:'15px'}}>
                                                        Perfect 5 something really interestig about this product
                                                        that will prolly make you wanna buy or try using in your household
                                                        couse this is what this container is about....
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 my-3 col-md-4 col-lg-3'>
                                    <div>
                                        <div className=''>
                                            <div className=' p-0'>
                                                <div className='bg-dark p-3' style={{height:"100%", width:'100%'}}>
                                                    <img src={image2} width='100%'/>
                                                </div>
                                            </div>
                                            <div className='p-0'>
                                                <div className='bg-light p-3' style={{height:'100%', width:'100%'}}>
                                                    <div className='fw-bold'>Product Name</div>
                                                    <div style={{fontSize:'15px'}}>
                                                        Perfect 5 something really interestig about this product
                                                        that will prolly make you wanna buy or try using in your household
                                                        couse this is what this container is about....
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 my-3 col-md-4 col-lg-3'>
                                    <div>
                                        <div className=''>
                                            <div className=' p-0'>
                                                <div className='bg-dark p-3' style={{height:"100%", width:'100%'}}>
                                                    <img src={image2} width='100%'/>
                                                </div>
                                            </div>
                                            <div className='p-0'>
                                                <div className='bg-light p-3' style={{height:'100%', width:'100%'}}>
                                                    <div className='fw-bold'>Product Name</div>
                                                    <div style={{fontSize:'15px'}}>
                                                        Perfect 5 something really interestig about this product
                                                        that will prolly make you wanna buy or try using in your household
                                                        couse this is what this container is about....
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
            </motion.div>
        </>
    )
}


export default OurProducts