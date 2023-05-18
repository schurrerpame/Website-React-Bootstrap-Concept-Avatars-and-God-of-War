import React from 'react'
import './Headings.css';

const Headings = ({ txt, subtxt }) => {
    return (
        <div className="box-headings">
            <div className="heading-subtitle"> {subtxt}</div>
            <div className="heading"> {txt}</div>
        </div>
    )
}

export default Headings