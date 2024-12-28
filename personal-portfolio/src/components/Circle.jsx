import React from 'react'
import profil from "../assets/profil.png"

const Circle = () => {
  return (
    <div className="bg-light-grey">
      {/* Outer Circle */}
        <div className="relative block h-[15em] w-[15em] rounded-full overflow-hidden border-light-grey shadow-custom-outer
                      before:absolute before:block before:rounded-full before:top-15 before:left-15 before:bottom-15 before:right-15
                      before:bg-light-grey before:shadow-custom-outer:before">
            {/* Inner Circle with Custom Background */}
            <div className="absolute w-full h-full inset-4 -z-10 rounded-full "></div>
        </div>
    </div>
  )
}

export default Circle
