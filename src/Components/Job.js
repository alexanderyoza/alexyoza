import '../Styles/Job.css';

function Job(props) {
    return (
        <div className='job-cont'>
            <div className='job'>
                <div className='job-info'>
                    <h1>
                        {props.info.title}
                    </h1>
                    <div>
                        {props.info.position}
                    </div>
                    <div>
                        {props.info.date}
                    </div>
                    <div>
                        {props.info.location}
                    </div>
                </div>
                <img src={props.info.image} alt='company-logo' />
            </div>
        </div>
    )
}

export default Job