import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from "react-router-dom"

import { favoritesSelector } from '../selectors/favorites'

export default function Home() {

    const favorites = useSelector(favoritesSelector)

    return (
        <Redirect to={favorites.length ? "/favorites" : "/timers"} />
    )
}
