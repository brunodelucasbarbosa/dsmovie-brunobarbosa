import Pagination from 'components/Pagination'
import React, { useState, useEffect } from 'react'
import MovieCard from 'components/MovieCard'
import axios from 'axios'
import { BASE_URL } from 'utils/requests'
import { MoviePage } from 'types/movie'

export default function Listing() {

  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalpages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });
  
  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
    .then(response => {
      const data = response.data as MoviePage;
      setPage(data)
    });
  }, [pageNumber]);
  



  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          {page.content.map(movie => {
            return (
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard movie={movie} />
              </div>
            )
          })}
          

        </div>
      </div>
    </>
  )
}
