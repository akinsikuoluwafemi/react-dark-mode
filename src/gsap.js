import React, { useEffect, useState, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';
import logo from './logo.png';

function Anime () {
    let logoItem = useRef(null);
    
    console.log(logoItem)
    
    useEffect(() => {
        console.log(logoItem)
        TweenMax.to(
            logoItem,
            .8,
            {
                opacity: 1,
                y: -20
                
            }
        )
    }, [])

    return (
        <div >
            <img
                ref={el => {logoItem = el}}
            
                src={logo} />

        </div>
            
        
    )
}

export default Anime;