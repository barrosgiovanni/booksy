import React from 'react'
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

function Description({ description }) {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpansion = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className='description' onClick={handleExpansion}>
      <div className='description-label'>
        <h4 className='description-title'>Show description</h4>
        <FaCaretDown className='down-icon'/>
      </div>
      { isExpanded && <div className='description-text'><p>{description}</p></div> }
    </div>

  )
}

export default Description
