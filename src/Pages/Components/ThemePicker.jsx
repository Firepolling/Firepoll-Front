import './ThemePicker.css'
import { useEffect, useState } from 'react'
import {reactLocalStorage} from 'reactjs-localstorage';

import {RiPaintFill , RiPaintLine} from 'react-icons/ri'

const themes =[
    {
        Name: "Default",
        Colors: ['#db4105','#000000']
    },
    {
        Name: "Fp",
        Colors: ['#2D4057','#EAEDF1']
    },
    {
        Name: "Lambo",
        Colors: ['#FF10F0','#39FF14']
    },
    {
        Name: "High Contrast",
        Colors: ['#000000','#FFFFFF']
    }
]




const ThemePicker = () =>{
    const [showBar,setShowBar] = useState(false)
    const [theme,setTheme] = useState(['#db4105','#000000']) // default theme fall back


    useEffect(()=>{ // on load check if a theme is stored, if not then set to default theme
        let storedTheme = reactLocalStorage.getObject('theme')
        console.log(Object.keys(storedTheme).length === 0)
        if(Object.keys(storedTheme).length === 0)
        {
            storedTheme = themes[0].Colors
        }
        setTheme(storedTheme)
        
    },[])

    useEffect(()=>{
        document.documentElement.style.setProperty('--primary-color',theme[0])
        document.documentElement.style.setProperty('--secondary-color',theme[1])
        reactLocalStorage.setObject("theme",theme) //store the theme selected
    },[theme])

    const ThemeButton = ({themeColors}) =>{
    
    return(
        <div className="theme-btn-holder">
            <button className="theme-btn" onClick={()=>setTheme(themeColors)}>
                <div className="padding"></div>
                <div className="theme-holder">
                    <div className="semi-circle" style={{"backgroundColor":themeColors[0]}}/>
                    <div className='semi-circle flipped' style={{"backgroundColor":themeColors[1]}}/>
                </div>
            </button>
        </div>
    )
}


    if(!showBar)
    {
        return(
        <div className="theme-picker-bar">
            <div className="setter-holder">
                <button className="theme-setter" onClick={()=>setShowBar(!showBar)}>
                    <RiPaintFill/>
                </button>
            </div>
        </div>
    )
    }


    return(
        <div className="theme-picker-bar">
            <div className="setter-holder">
                <button className="theme-setter turn" onClick={()=>setShowBar(!showBar)}>
                    <RiPaintLine/>
                </button>
            </div>
            <div className="theme-bar">
                {
                    themes.map((theme)=>{
                        return <ThemeButton key={theme.Name} themeColors={theme.Colors}/>
                    })
                }
            </div>
        </div>
    )
}




export default ThemePicker;