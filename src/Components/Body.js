import React from "react"
import Article from "./Article"
export default function Body(props){
const {bodydata} = props
console.log(bodydata)

if (!bodydata) return <h3>Loading...</h3>
return (
<div className = "content">
    { <Article content = {bodydata}/> }
</div>
)
}