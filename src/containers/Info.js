import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'

import { ReactComponent as Logo } from '../logo.svg'

const useStyles = makeStyles(theme => ({
    icon: {
        width: "25%",
        height: "25%",
        margin: "0 6.25%",
        "& img": {
            width: "100%"
        }
    }
}))

export default function Info() {

    const classes = useStyles()

    return (
        <>
            <Typography variant="h4" gutterBottom>Informazioni</Typography>
            <Typography paragraph>
                Pasta Timers mostra i tempi di cottura raccomandati per le tipologie e i marchi di pasta più comuni sul mercato.
            </Typography>

            <Typography variant="h6">Come si installa</Typography>
            <Typography paragraph>
                Puoi usare questa applicazione dal browser oppure installarla sul tuo smartphone cliccando su Menù > Aggiungi a schermata Home (su Chrome).
            </Typography>

            <Typography variant="h6">Come si usa</Typography>
            <Typography paragraph>
                Usa i pulsanti in basso per cercare il tempo di cottura della tua pasta (icona a sinistra)
                o per accedere velocemente alle tue paste preferite (icona a destra).
                Tocca l'icona del cuore per aggiungere o rimuovere una pasta dalla lista delle tue preferite.
                Tocca l'immagine di una pasta per aprire la pagina ufficiale del produttore e scoprire tutti i dettagli e le ricette consigliate.
            </Typography>

            <Typography variant="h6">Come contribuire</Typography>
            <Typography paragraph>
                L'applicazione è una Progressive Web App basata su React e Create React App.
                Il database dei tempi di cottura è un file statico in formato json.
                Per contribuire al database apri una issue sul repository del progetto su <a href="https://github.com/jenkin/pasta-timers-app/issues" rel="noopener noreferrer" target="_blank">Github</a>.
            </Typography>

            <Typography variant="h6">Cuocere la pasta</Typography>
            <Typography paragraph>
                Far bollire una sufficiente quantità di acqua in una pentola dai bordi alti con un coperchio.
                Dosare circa 100 gr di pasta per persona.
                Quando l'acqua arriva a bollore salare con un cucchiaino di sale grosso per ogni 700 ml d'acqua.
                Buttare la pasta e coprire la pentola finché l'acqua non riprende a bollire, quindi spegnere il fuoco.
                Cuocere per il tempo indicato a partire dalla ripresa del bollore.
                Girare con un mestolo un paio di volte durante la cottura.
                Scolare la pasta, condire a volontà e servire ben calda.
                L'acqua calda di cottura può essere usata in piccole dosi nel condimento oppure per lavare a mano i piatti.
            </Typography>

            <Typography variant="h6">Avvertenze</Typography>
            <Typography paragraph>
                I tempi di cottura indicati sono da intendersi per una cottura "al dente" così come raccomandati dai produttori.
                Per una pasta più morbida al palato aggiungere uno o due minuti secondo il proprio gusto.
            </Typography>

            <Typography variant="h6">Garanzie</Typography>
            <Typography paragraph>
                Questa applicazione viene fornita così com'è, senza garanzie di alcun tipo, esplicite o implicite.
                In nessun caso gli autori o i titolari del copyright saranno responsabili per qualsiasi reclamo, danno o altro tipo di responsabilità.
            </Typography>

            <Typography variant="h6">Dati personali</Typography>
            <Typography paragraph>
                Questa applicazione non raccoglie alcun dato personale dell'utente.
                L'hosting dell'applicazione è gestito da Github (vedi <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">Github Pages</a>).
                Il salvataggio dei preferiti avviene sul device dell'utente mediante <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" rel="noopener noreferrer" target="_blank">localStorage</a>.
            </Typography>

            <Typography variant="h6">Copyright</Typography>
            <Typography paragraph>
                Tutti i marchi registrati e tutte le immagini sono dei rispettivi proprietari e sono residenti sui loro server.
                L'autore del logo dell'applicazione è <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> di <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a>.
            </Typography>

            <Typography variant="h6">Licenze di riutilizzo</Typography>
            <Typography paragraph>
                Il codice sorgente di questa applicazione è rilasciato in open source con licenza <a href="https://tldrlegal.com/license/mit-license" rel="noopener noreferrer" target="_blank">MIT</a>.
                Il database dei tempi di cottura della pasta (file timers.json) è rilasciato con licenza <a href="https://tldrlegal.com/license/odc-open-database-license-(odbl)" rel="noopener noreferrer" target="_blank">ODbL</a>.
            </Typography>

            <Typography variant="h6">Contatti</Typography>
            <Typography paragraph>
                Per segnalare malfunzionamenti, suggerire una modifica o fare una domanda puoi aprire una issue sul repository del progetto su <a href="https://github.com/jenkin/pasta-timers-app/issues" rel="noopener noreferrer" target="_blank">Github</a>.
            </Typography>

            <Typography align="center" gutterBottom>
                <Icon className={classes.icon}><a href="https://pastatimers.app" rel="noopener noreferrer" target="_blank"><Logo/></a></Icon>
            </Typography>

        </>
    )
}
