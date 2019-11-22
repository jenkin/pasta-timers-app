import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from "react-router-dom"

import { includes, assign } from 'lodash-es'

import { useTranslation } from 'react-i18next'

import List from '@material-ui/core/List'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { timersAsObjectSelector } from '../selectors/timers'
import { favoritesSelector } from '../selectors/favorites'

import {
    addFavorite,
    removeFavorite,
} from '../actions'

import { Timer } from '../components/Timer'

export default function Preferences() {

    const { t } = useTranslation()

    const dispatch = useDispatch()

    const timersAsObject = useSelector(timersAsObjectSelector)
    const favorites = useSelector(favoritesSelector)

    return (
        favorites.length
        ?
        <List dense>
            {
                favorites
                    .map(id => assign(timersAsObject[id], { id: id }))
                    .map(timer => {
                        let isFavorite = includes(favorites, timer.id)
                        return (
                            <Timer
                                key={timer.id}
                                id={timer.id}
                                title={timer.name}
                                suptitle={timer.line}
                                subtitle={timer.producer}
                                label={isFavorite ? t("favorites.remove") : t("favorites.add")}
                                link={timer.url}
                                time={timer.time}
                                icon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                onClick={e => dispatch(isFavorite ? removeFavorite(timer.id) : addFavorite(timer.id))}
                            />
                        )
                    })
            }
        </List>
        :
        <Redirect to={"/timers"} />
    )

}
