 function Mini(props){
    return (
        <>
            <div>
            <div className=' d-flex flex-column justify-content-center'  style={{minHeight:'70vh', marginBlock:'100px'}}>
                            <div className='row'>
                                <div className='col-12'>
                                    <div data-aos='fade-right'>
                                        <div className='row'>
                                            <div className='col-12 col-sm-6'>
                                                <div>
                                                    <div className='fw-light'>
                                                        <h3 className=''>Keep a clean and healthy environment with our enhanced disinfection services</h3>
                                                        <p style={{textAlign:'justify'}}>
                                                        Merry Maids is committed to creating a clean and healthy environment for you and your family. In addition to our exceptional routine cleaning,
                                                        enhanced disinfection services are available for your home to help ensure your family’s wellness.
                                                        Studies have shown that disinfecting high-touch hard
                                                        </p>
                                                        <p style={{textAlign:'justify'}}>
                                                        surfaces can prevent infections. That is why at Merry Maids, we want to give you the option to have 
                                                        our expert cleaners come in to thoroughly clean your home and disinfect the high-touch surfaces for you. Through our existing safety protocols
                                                        and driven by the shared cleaning expertise of all ServiceMaster Brands, you can rest assured that your home receives a cleaning backed by decades of experience.
                                                        </p>
                                                            <br/>*Disinfection cleaning is only effective on hard surfaces
                                                    </div>
                                                
                                                </div>

                                            </div>
                                            <div className='col-12 col-sm-6'>
                                                <div>
                                                    <div>
                                                        <img alt='image' src={props.image2} width='100%' />
                                                    </div>
                                                    <div className='d-flex justify-content-end py-4'>
                                                        <button className='btn btn-outline-light text-uppercase btn-lg rounded-0'>check out the rest of our services</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3 d-flex flex-column justify-content-center'  style={{minHeight:'70vh'}}>
                            <div className='row'>
                                <div className='col-12'>
                                    <div data-aos='fade-left'>
                                        <div className='row'>
                                        <div className='col-12 col-sm-6'>
                                                <div>
                                                    <div>
                                                        <img alt='image' src={props.image1} width='100%' />
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className='col-12 col-sm-6'>
                                                <div>
                                                    <div className='fw-light'>
                                                        <h3 className=''>House cleaning services you can see and feel</h3>
                                                        <p style={{textAlign:'justify'}}>
                                                        Your home is more than just a house—it’s where memories are made and moments are cherished. Though
                                                         life can be complicated, the simple things shouldn’t be. Merry Maids strives to take the stress out
                                                          of your day so you can do life your way. With more than 40 years of experience 
                                                        and an advanced, time-tested cleaning process, we can help you reclaim time with your loved ones.
                                                        </p>
                                                        <div style={{textAlign:'left'}}>
                                                            <ul>
                                                                <li>Your home is more than just a house—it’s where memorie</li>
                                                                <li>Your home is more than just a house—it’s where memorie</li>
                                                                <li>Your home is more than just a house—it’s where memorie</li>
                                                                <li>Your home is more than just a house—it’s where memorie</li>
                                                            </ul>
                                                        </div>
                                                        <div className='d-flex justify-content-end py-4'>
                                                        <button className='btn btn-outline-light text-uppercase  rounded-0'>check out the rest of our services</button>
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
        </>
    )
}

export default Mini