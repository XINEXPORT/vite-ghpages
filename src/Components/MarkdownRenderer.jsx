import React from 'react'
import ReactMarkdown from 'react-markdown'


const MarkdownRenderer = ({markdownContent}) => {
  return (
<div className='prose'> ReactMarkdown Renderer
    <ReactMarkdown>{markdownContent}</ReactMarkdown>
</div>
  )
}

export default MarkdownRenderer