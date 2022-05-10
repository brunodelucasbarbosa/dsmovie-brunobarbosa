import React from 'react'
import {ReactComponent as StarFull} from 'assets/img/star-full.svg'
import {ReactComponent as StarEmpty} from 'assets/img/star-empty.svg'
import {ReactComponent as StarHalf} from 'assets/img/star-half.svg'
import './styles.css'

export default function index() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  )
}
