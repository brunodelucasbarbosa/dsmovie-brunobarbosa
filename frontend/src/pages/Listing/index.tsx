import Pagination from 'components/Pagination'
import React from 'react'
import MovieCard from 'components/MovieCard'
import axios from 'axios'
import { BASE_URL } from 'utils/requests'

export default function index() {

  axios.get(`${BASE_URL}/movies?size=12&page=0`)
  .then(x => console.log(x.data))


  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>

        </div>
      </div>
    </>
  )
}
