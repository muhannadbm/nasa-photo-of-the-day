import React from "react"
import styled, { keyframes } from 'styled-components'


const StyledArticle =styled.div`
.text{
:hover{

    font-size: 1.1rem;
} }
background: ${({theme}) => theme.black};
padding: 2%;
.text{
background: #ba1e68;
width: 40%;
border-radius: 30%;
padding: 2rem;
height: max-content;
color: ${({theme}) => theme.white}
    }

.container{
    display: flex;
justify-content: space-evenly;
}
.myimg{
    height: 65vh;
width: 40%;
}
.title{
    color: ${({theme}) => theme.gray};
}
.explanation{
    font-family: 'Space Mono', monospace;
}
`



export default function Article(props) {
    const {date , explanation , hdurl, title, url, media_type} = props.content
    return(
        <StyledArticle>
            <div className= "container">
            {media_type === 'video' ? <iframe width="420" height="315"
            src= {url}>
            </iframe>  : <img className = 'myimg' src={hdurl}></img>}
            <div className="text">
            <p className="date">Date : {date}</p>
            <h4 className='title'>{title}</h4>
            <p className= 'explanation'>{explanation}</p>
            </div>

            </div>

        </StyledArticle>
    )
}