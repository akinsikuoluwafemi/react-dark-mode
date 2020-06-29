import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
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
                ref={el => { logoItem = el }}
            
                src={logo} alt="" />

        </div>
            
        
    )
}

export default Anime;