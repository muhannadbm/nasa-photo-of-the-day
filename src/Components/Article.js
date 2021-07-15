import React from "react"

export default function Article(props) {
    const {date , explanation , hdurl, title, url, media_type} = props.content
    return(
        <div>
            <p>Date : {date}</p>
            <p>Title: {title}</p>
            <p>Explanation: {explanation}</p>
            {media_type === 'video' ? <iframe width="420" height="315"
            src= {url}>
            </iframe>  : <img className = 'myimg' src={hdurl}></img>}
        </div>
    )
}