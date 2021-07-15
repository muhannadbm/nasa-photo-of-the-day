import React from "react"

export default function Article(props) {
    const {date , explanation , hdurl, title} = props.content
    return(
        <div>
            <p>Date : {date}</p>
            <p>Title: {title}</p>
            <p>Explanation: {explanation}</p>
            <img className = 'myimg' src={hdurl}></img>
        </div>
    )
}