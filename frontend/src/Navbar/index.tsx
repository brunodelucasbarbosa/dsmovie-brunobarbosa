import React from 'react'
import {ReactComponent as GithubIcon} from '../assets/img/github-1.svg'


export default function index() {
  return (
    <header>
      <nav>
        <div>
          <h1>DSMovie</h1>

          <a href="https://github.com/brunodelucasbarbosa">
            <div>
              <GithubIcon />
              <p>brunodelucasbarbosa</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}
