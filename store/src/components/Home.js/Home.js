import React from 'react'
import style from './Home.module.css'

function Home() {
  return (
    <div>
        <img className={style.img}
        src='https://media.gq.com/photos/58d56068e6d6671ac09f3d00/16:9/w_1280,c_limit/92-0417-GQ-FEBS10-01.jpg'
        alt='storefront'/>
    </div>
  )
}

export default Home