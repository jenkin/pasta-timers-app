import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
    button: {
        width: "100%"
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
    image: {
        display: "block",
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%"
    },
    time: {
        alignItems: "baseline",
        "& *": {
            marginRight: "0.1em"
        }
    }
}))

export function Timer({
    image = "",
    title = "",
    subtitle = "",
    suptitle = "",
    label = "",
    link = "#",
    time = 0,
    icon,
    onClick
}) {

    const classes = useStyles()

    return (
        <ListItem title={`${suptitle} - ${title} - ${subtitle}`}>

            <ListItemAvatar>
                <Avatar className={classes.avatar}>
                    <a className={classes.image} style={{ backgroundImage: `url(${image})` }} href={link} target="_blank" rel="noopener noreferrer"> </a>
                </Avatar>
            </ListItemAvatar>

            <ListItemText primary={title} secondary={subtitle} />

            <ListItemSecondaryAction>

                <IconButton className={classes.time}>
                    <Typography variant="h4">{time}</Typography>
                    <Typography variant="subtitle2">min</Typography>
                </IconButton>

                <IconButton
                    edge="end" aria-label="favorite" title={label}
                    onClick={onClick}
                >
                    {icon}
                </IconButton>

            </ListItemSecondaryAction>

        </ListItem>
    )
}
