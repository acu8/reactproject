import React from 'react'
import 'bulma/css/bulma.css'

export default function ProfileCard({ title, handle, image, description }) {
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-1by1'>
         <img src={image} alt='pda' />
        </figure>
      </div>
    <div className='card-content'>
      <div className='media-content'>
        <p class="title is-4">Title is {title}</p>
        <p class="subtitle is-6">Title is {handle}</p>
      </div>
      <div className='content'>{description}</div>
    </div>
  </div>
  )
}
