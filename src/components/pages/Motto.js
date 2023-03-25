import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion";

import image1 from '../../images/bg.jpg'
import image6 from '../../images/clean6.jpg'
import image7 from '../../images/clean7.jpg'
import image8 from '../../images/image1.jpg'



function Comp(props) {
    return (
        <><div className='col-12 col-md-4 p-3'>
            <div className='cont-core' style={{ cursor: 'pointer' }}>
                <div style={{ overflow: 'hidden', position: 'relative', overflow:'hidden', height:'100px' }}>
                    <div className='text-white text-center p-4 d-flex flex-column justify-content-around'>
                        <h3 className="fw-light text-uppercase">
                            {props.title}
                        </h3>
                    </div>
                </div>
                <div className="text-white fw-light px-3" style={{ textAlign: 'justify' }}>
                    <p>
                        It’s a great feeling knowing you have hired a team
                        of professionals who you can trust and count on t
                        o get the job done at the highest level of service every time.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

function Motto() {
    const { ref, inView } = useInView({
    });

    let Anime = useAnimation();
    useEffect(() => {
        
        if (inView) {
            Anime.start(
                {
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: 'spring',
                        duration: 2
                    }
                }
            )
        }
        if (!inView) {
            Anime.start(
                {
                    y: 100,
                    opacity: 0
                }
            )
        }
    }, [inView])


    return (
        <>
            <div ref={ref} className='d-flex ' style={{ background: `url(${image1}) center fixed`, minHeight: '100vh', backgroundSize: 'cover' }} >
                <div className="d-flex py-5 flex-column justify-content-around" style={{ overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.6)', minHeight: '100vh' }}>
                    <motion.div animate={Anime} className=''>
                        <div className="text-center d-flex flex-column justify-content-around">
                            <h3 className="text-white text-uppercase">our missiong</h3>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-2">
                                </div>
                                <div className="col-8">
                                    <div className='row'>
                                        <Comp image={image7} title='CUSTOMER FOCUS' />
                                            <Comp image={image6} title='EFFECIENCY' />
                                            <Comp image={image8} title='Consistency' />
                                            <Comp title='Staff Focus' />
                                            <Comp title='Corporate friendship' />
                                    </div>
                                </div>
                                <div className="col-2">
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Motto