import React from 'react'
import { Link as RouterLink } from "react-router-dom"

import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'

import InfoIcon from '@material-ui/icons/Info'

import { ReactComponent as Logo } from '../logo.svg'

const useStyles = makeStyles(theme => ({
    button: {
        color: "white",
    },
    title: {
        flexGrow: 1,
        color: "white",
        textDecoration: "none"
    },
}))

export default function Header() {

    const classes = useStyles()

    const { t } = useTranslation()

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start" color="inherit" aria-label="logo" title="logo"
                >
                    <Icon><Logo/></Icon>
                </IconButton>
                <Typography
                    variant="h6" className={classes.title}
                    component={RouterLink} to={`/`}
                >
                    Pasta Timers
                </Typography>
                <IconButton
                    edge="end" className={classes.button} aria-label="info" title={t('info')}
                    component={RouterLink} to={`/info`}
                >
                    <InfoIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )

}
