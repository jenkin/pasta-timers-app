import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import classnames from 'classnames'

import { includes } from 'lodash-es'

import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { ReactComponent as Logo } from '../logo.svg'

import { timersSelector } from '../selectors/timers'
import { favoritesSelector } from '../selectors/favorites'
import { producersSelector } from '../selectors/producers'

import {
    addFavorite,
    removeFavorite,
} from '../actions'

import { Timer } from '../components/Timer'

const useStyles = makeStyles(theme => ({
    chip: {
        opacity: 0.5,
        marginRight: theme.spacing(1),
        "&.active": {
            opacity: 1
        }
    },
    text: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    icon: {
        width: "50%",
        marginTop: theme.spacing(6)
    }
}))

export default function Preferences() {

    const classes = useStyles()

    const { t } = useTranslation()

    const dispatch = useDispatch()

    const timers = useSelector(timersSelector)
    const favorites = useSelector(favoritesSelector)
    const producers = useSelector(producersSelector)

    const [searchValue, setSearchValue] = useState("")
    const [selectValue, setSelectValue] = useState("")

    return (
        timers.length
        ?
        <>
            <TextField
                label={t("timers.search")}
                className={classes.text}
                placeholder={t("timers.example")}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
            {
                producers
                    .map(producer => (
                        <Chip
                            key={producer}
                            className={classnames(classes.chip, producer === selectValue ? "active" : "")}
                            color="primary"
                            label={producer} title={t("timers.select")}
                            component="a" href={`#${producer}`} clickable
                            onClick={e => setSelectValue(producer !== selectValue ? producer : "")}
                        />
                    ))
            }
            <List dense>
                {
                    (() => {

                        let filteredTimers = timers
                            .filter(timer => !(searchValue.length > (selectValue ? 0 : 2)) || includes(timer.name.toLowerCase(), searchValue.toLowerCase().trim()))
                            .filter(timer => !selectValue || timer.producer === selectValue)

                        return (
                            filteredTimers.length && filteredTimers.length !== timers.length
                            ?
                            filteredTimers
                                .map(timer => {
                                    let isFavorite = includes(favorites, timer.id)
                                    return (
                                        <Timer
                                            key={timer.id}
                                            id={timer.id}
                                            title={timer.name}
                                            subtitle={timer.producer}
                                            suptitle={timer.line}
                                            label={isFavorite ? t("favorites.remove") : t("favorites.add")}
                                            link={timer.url}
                                            time={timer.time}
                                            icon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                            onClick={e => dispatch(isFavorite ? removeFavorite(timer.id) : addFavorite(timer.id))}
                                        />
                                    )
                                })
                            :
                            <Typography align="center" gutterBottom>
                                <Logo className={classes.icon}/>
                            </Typography>
                        )
                    })()
                }
            </List>
        </>
        :
        <Typography align="center" gutterBottom>
            <Logo className={classes.icon}/>
        </Typography>
    )

}
