import React, { useEffect } from 'react'
import { Link as RouterLink } from "react-router-dom"

import { useTranslation } from 'react-i18next'

import { includes } from 'lodash-es'

import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import TimerIcon from '@material-ui/icons/Timer'
import FavoriteIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles({
})

export default function Footer({ match }) {

    const classes = useStyles()

    const { t } = useTranslation()

    const pages = ["timers","favorites"]

    const [value, setValue] = React.useState(match.params.pageId || "")

    useEffect(() => {
        if (includes(pages, match.params.pageId)) {
            setValue(match.params.pageId)
        } else {
            setValue("")
        }
    }, [match, pages])

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
            className={classes.root}
            showLabels
        >
            <BottomNavigationAction
                label={t('timers.title')} value="timers" icon={<TimerIcon />}
                component={RouterLink} to={`/timers`}
            />
            <BottomNavigationAction
                label={t('favorites.title')} value="favorites" icon={<FavoriteIcon />}
                component={RouterLink} to={`/favorites`}
            />
        </BottomNavigation>
    )
}
