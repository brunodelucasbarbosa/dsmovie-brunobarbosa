import MovieStars from 'components/MovieStars'
import MovieScore from 'components/MovieScore'
import Pagination from 'components/Pagination'
import React from 'react'

export default function index() {
  return (
    <>
      <Pagination />
      <MovieStars />
      <MovieScore />
    </>
  )
}
