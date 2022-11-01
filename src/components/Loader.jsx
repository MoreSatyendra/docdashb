import React from 'react'

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_3w1whxz5.json"  background="transparent"  speed="1"  style={{width: "300px ", height: "300px"}}  loop  autoplay></lottie-player>
    </div>
  )
}

export default Loader