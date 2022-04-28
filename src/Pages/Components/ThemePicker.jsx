import './ThemePicker.css'
import { useState } from 'react'

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
    }
]



const ThemePicker = () =>{
    const [showBar,setShowBar] = useState(false)


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


const ThemeButton = ({themeColors}) =>{

    const setTheme = () =>{
        document.documentElement.style.setProperty('--primary-color',themeColors[0])
        document.documentElement.style.setProperty('--secondary-color',themeColors[1])
    }

    return(
        <div className="theme-btn-holder">
            <button className="theme-btn" onClick={setTheme}>
                <div className="padding"></div>
                <div className="theme-holder">
                    <div className="semi-circle" style={{"backgroundColor":themeColors[0]}}/>
                    <div className='semi-circle flipped' style={{"backgroundColor":themeColors[1]}}/>
                </div>
            </button>
           
        </div>
    )
}

export default ThemePicker;