import React from "react";
import Intro from "./Intro";
import About from './About'
import Project from "./Project";
import Skills from './Skills'
import Contact from './Contact'

function Content (props) {
    if (props.change === ''){
        return <Intro/>
    } else if (props.change === 'about'){
        return <About/>
    } else if (props.change === 'skills'){
        return <Skills/>
    } else if (props.change === 'project'){
        return <Project/>
    } else if (props.change === 'contact'){
        return <Contact/>
    }
}

export default Content;