import './ThemePicker.css'






const ThemePicker = () =>{
    return(
        <div className="Theme-Bar">
            <ThemeButton/>
            <ThemeButton/>
        </div>
    )
}


const ThemeButton = () =>{

    return(
        <button className="theme-btn">test</button>
    )
}

export default ThemePicker;