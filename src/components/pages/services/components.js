
export const GeneralSev = (props) => {
    return (
        <>
            <div className='text-white d-flex flex-column flex-md-row'>
                <div className='d-flex flex-column px-3' style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <props.icon size={50} />
                </div>
                <div className="text-center text-md-start">
                    <h2>{props.title}</h2>
                    <p  style={{ fontSize: '12px' }}>
                        {props.info}
                    </p>
                </div>
            </div>
        </>
    )
}

export const Logogs = (props) => {
    return(
        <>
            <div className="p-4 col-lg-2 col-md-3 col-4">
                <img alt="logoimageholder" width='100%' src={props.logo}/>
            </div>
        </>
    )
}