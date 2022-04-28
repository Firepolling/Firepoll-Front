import './Pill-Body.css'
import ThemePicker from './ThemePicker';



const PillBody = (props) =>{

    return(
        <div className="page">
            <div className="poll-header">
                <ThemePicker/>
            </div>
            <div className="poll-main">
                <div className="title">
                    <h1 className='title-text'>Fire Poll</h1>
                </div>
                <div className="pill-body">
                    {props.children}
                </div>
            </div>
            <div className="poll-footer">
                
            </div>
        </div>
    )
}

export default PillBody;


