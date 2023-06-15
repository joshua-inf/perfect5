import { Link } from 'react-router-dom'
import image from '../../../images/stuff.png'

const OurProductsDetails = () => {
    const Seg = () => {
        return (
            <>
                <div className='col-sm-4 col-6 col-md-3 col-lg-2'>
                    <Link className='m-2 shadow rounded bg-secondary' style={{ minWidth: '300px' }}>
                        <div className=' my-2'>
                            <div className=''>
                                <img alt='img' src={image} width='100%' />
                            </div>
                            <div className='p-2'>
                                <div>
                                    <div className='text-uppercase text-white' style={{ fontSize: '15px', textDecoration: 'none' }}>product name</div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                <div className='p-3' style={{ marginTop: '100px' }}>
                    <div className='my-2'>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 ">
                            <div className='bg-light text-center' >
                                <img src={image} width='100%' />
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className=' text-white'>
                                <div className=' p-2'>
                                    <div className='text-uppercase fw-bold h5 '>
                                        product name
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2'>
                                        <div className='my-2' >
                                            <div>sizes</div>
                                            <div>
                                                Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className=''>
                                                <h3>Inquiry</h3>
                                                <div className='py-2'>
                                                    <div>
                                                        <input placeholder='emai address' style={{ height: '50px', outline: 'none' }} className='p-3 mb-3 bg-dark text-white w-100' /><br />
                                                        <input placeholder='phone number' style={{ height: '50px', outline: 'none' }} className='p-3 mb-3 bg-dark text-white w-100' /><br />
                                                        <textarea placeholder='let us know how we can help' style={{ height: '100px', outline: 'none', resize: 'none' }} className='p-3 bg-dark text-white w-100' />
                                                    </div>
                                                </div>
                                                <button className='btn px-5  py-3 rounded-0 btn-outline-light'>
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='p-3'>
                        <div className='text-white text-uppercase fw-bold h3 text-center'>
                            related products
                            <hr />
                        </div>
                        <div className='row'>
                            <Seg/>
                            <Seg/>
                            <Seg/>
                            <Seg/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurProductsDetails