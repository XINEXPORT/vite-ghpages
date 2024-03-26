import React from 'react'
// import { AboutData } from '../constants'
import { CHLinks } from '../constants'

const Link = ({url, icon: Icon}) => (

    <a href={url} target='_blank' rel='noopener noreferrer'>
    <Icon />
    </a>
)

const BioLinks = () => (
    <div>
        {CHLinks.map((link,index) => (
            <Link key={index} url={link.url} icon={link.icon} />
        ))}

    </div>
)


export default BioLinks