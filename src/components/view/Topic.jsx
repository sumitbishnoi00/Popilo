import React from 'react'
import { useParams } from 'react-router-dom'
import Kids from '../popilo/Kids';
import Anyage from '../popilo/Anyage';
import Everyage from '../popilo/Everyage';

const Topic = () => {

    const {cardName} = useParams();
  return (
    <>
        {cardName === "Kids" 
        ? (<Kids />)
        : cardName === "Anyage"
            ? (<Anyage />)
            : cardName === "Everyage"
                ? (<Everyage />)
                : (<h1>Page Not Found</h1>)
        }
    </>
  )
}

export default Topic