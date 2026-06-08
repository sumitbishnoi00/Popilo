import React from 'react'
import { useParams } from 'react-router-dom'
import PopiloDetails from '../popilo/PopiloDetails';

const Topic = () => {

    const {cardName} = useParams();
  return (
    <>
        <PopiloDetails />
    </>
  )
}

export default Topic