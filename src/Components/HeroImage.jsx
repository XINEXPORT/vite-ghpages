import React from 'react'
import { ReactComponent as RoadSVG } from '../images/road.svg'

const HeroImage = () => {
  return (
    <div className="flex justify-center relative">
      <RoadSVG className="w-20 h-20 fill-current text-blue-500" /> {/* Change color using Tailwind CSS */}
    </div>
  )
}

export default HeroImage