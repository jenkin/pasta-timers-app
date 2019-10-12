import React, { useEffect, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { yellow } from '@material-ui/core/colors'

import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'

import { getTimers, getFavorites } from './actions'

const Home = lazy(() => import('./containers/Home'))
const Timers = lazy(() => import('./containers/Timers'))
const Favorites = lazy(() => import('./containers/Favorites'))
const Info = lazy(() => import('./containers/Info'))

const theme = createMuiTheme({
    palette: {
        primary: { main: yellow[700] }
    },
})

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    container: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    page: {
        height: '100%',
        overflowY: 'auto',
        paddingTop: "1.5em"
    }
}))

function App() {

    const classes = useStyles()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTimers())
        dispatch(getFavorites())
    }, [dispatch])

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Header />
                <Suspense fallback={<Loading />}>
                    <Container className={classes.container}>
                        <div className={classes.page}>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/timers" exact component={Timers} />
                                <Route path="/favorites" exact component={Favorites} />
                                <Route path="/info" exact component={Info} />
                            </Switch>
                        </div>
                    </Container>
                </Suspense>
                <Route path="/:pageId?" component={Footer} />
            </div>
        </ThemeProvider>
    );
}

export default App
