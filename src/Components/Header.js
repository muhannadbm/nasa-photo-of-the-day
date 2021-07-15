import React, {useState, useEffect } from 'react'

const links = [{link: 'Home', url: '#home'},{link: 'About', url: '#about'},
{link: 'Services', url: '#services'}, {link: 'Contact', url: '#contact'}]

export default function Header() {

     return(
        <div className="header">
            <div className='top'></div>
            <div className="bottom">
                <ul>
                    {links.map(link =>{
                        return <li><a href={link.url}>{link.link}</a></li>
                    })}

                </ul>
            </div>
        </div>
    )

}