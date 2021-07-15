import React, {useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const links = [{link: 'Home', url: '#home'},{link: 'About', url: '#about'},
{link: 'Services', url: '#services'}, {link: 'Contact', url: '#contact'}]

const StyledList = styled.li`
    list-style-type: none;
    font-weight: bold;
    font-size: 1.7rem;
a {
    
    color: ${({theme}) => theme.white};
    text-decoration: none;
    padding-bottom: 2px;

    border-bottom: none;
    :hover {
        border-bottom: solid 3px ${({theme}) => theme.pinkishred};
    }
    }
:hover{
    font-size: 1.8rem;
}
`

const StyledHeader = styled.div`
.top {
    height: 50vh;
background-image: url('https://i1.wp.com/getwallpapers.com/wallpaper/full/d/a/6/5615.jpg');
background-repeat: no-repeat;
background-position: bottom;
padding-top: 1%;

h1{color:${({theme}) => theme.white};
letter-spacing: 4rem;
font-size: 5rem;
}
}
ul {
    display: flex;
justify-content: space-evenly;
width: 50%;
margin: auto;
}
`

export default function Header() {

     return(
        <StyledHeader>
            <div className='top'>
                <h1>NASA</h1>
            <ul>
                    {links.map(link =>{
                        return <StyledList><a href={link.url}>{link.link}</a></StyledList>
                    })}

                </ul>
            </div>
            <div className="bottom">

            </div>
            </StyledHeader>
    )

}