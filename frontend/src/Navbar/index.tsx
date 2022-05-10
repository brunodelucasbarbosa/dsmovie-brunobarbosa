import React from 'react'
import {ReactComponent as GithubIcon} from '../assets/img/github-1.svg'
import './styles.css'

export default function index() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>

          <a href="https://github.com/brunodelucasbarbosa">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="ds-movie-contact-link">brunodelucasbarbosa</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}
