import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import OldinVersion from "./OldinVersion";

class ClassCom extends React.Component{
    constructor(){
        super();
        this.state ={
            hour: new Date().getTime()
        }
    }

    render(){
        return (
            <>
                <p>{this.state.hour}</p>
                <h2>Lorem, ipsum.</h2>
            
            </> 
        )
    }
}

export default ClassCom;