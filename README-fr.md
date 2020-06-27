# Pasta Timers App

| [Italiano](https://github.com/jenkin/pasta-timers-app/blob/master/README.md) | [English](https://github.com/jenkin/pasta-timers-app/blob/master/README-en.md) | [Español](https://github.com/jenkin/pasta-timers-app/blob/master/README-es.md) | [Français](https://github.com/jenkin/pasta-timers-app/blob/master/README-fr.md) | [Português](https://github.com/jenkin/pasta-timers-app/blob/master/README-pt.md) | [简体中文](https://github.com/jenkin/pasta-timers-app/blob/master/README-zh_HANS.md) | [...](https://github.com/jenkin/pasta-timers-app/issues/15)

Pasta Timers indique les temps de cuisson recommandés pour les types et les marques de pâtes les plus courants sur le marché.

![screenshot](https://repository-images.githubusercontent.com/214686946/4b0a8980-ed27-11e9-827f-88954c137291)

## Comment l'installer

### Web

Vous pouvez utiliser cette application à partir de votre browser ou l'installer sur votre smartphone en cliquant sur Menu > Ajouter à l'écran d'accueil (sur Chrome).

### Telegram

Grâce à le mythique [@piersoft](https://github.com/piersoft) il est maintenant possible d'avoir le temps de cuisson des pâtes à portée du chat, il suffit d'activer le bot [pastatimersbot](https://t.me/pastatimersbot) sur Telegram (si vous n'utilisez pas encore, [jetez un coup d'oeil!](https://telegram.org/)).

## Mode d'emploi

Utilisez les boutons en bas pour rechercher le temps de cuisson de vos pâtes (icône à gauche) ou pour accéder rapidement à vos pâtés préférés (icône sur la droite).
Touchez l'icône en forme de cœur pour ajouter ou supprimer une pâte de votre liste de favoris.
Tapez sur l'image d'une pâte pour ouvrir la page officielle du producteur et découvrir tous les détails et les recettes recommandées.

## Comment contribuer

L'application est une Progressive Web App basée sur React and Create React App.
La base de données des temps de cuisson est composée de fichiers statiques dans `public/timers/`, indiqués dans le fichier `public/producers.json`.
Le schéma des données est décrit par [json-schema] (https://json-schema.org/) dans les fichiers `producers.schema.json` et `timers.schema.json`.
Vous pouvez vérifier la validité de la base de données en utilisant [ajv-cli](https://github.com/jessedc/ajv-cli) : `bash validate.sh`.

Pour contribuer à la base de données, ouvrez un Issue avec cette information :

* nom
* marque
* ligne de produit
* temps de cuisson al dente (en minutes)
* url de la page officielle (sur le site du fabricant)
* url de l'image officielle (sur le site du fabricant)

## Cuire les pâtes

Faites bouillir une quantité suffisante d'eau dans une marmite à haut couvercle.
Doser environ 100 gr de pâtes par personne.
Lorsque l'eau arrive à ébullition, ajoutez une cuillère à café de gros sel pour 700 ml d'eau.
Jetez les pâtes et couvrez la casserole jusqu'à ce que l'eau recommence à bouillir, puis éteignez le feu.
Cuire pendant le temps indiqué à partir de la reprise de l'ébullition.
Tournez avec une louche plusieurs fois pendant la cuisson.
Égouttez les pâtes, assaisonnez-les selon votre goût et servez-les chaudes.
L'eau de cuisson chaude peut être utilisée en petites quantités pour assaisonner ou pour laver la vaisselle à la main.

## Avertissements

Les temps de cuisson indiqués sont destinés à une cuisson "al dente", comme le recommandent les fabricants.
Pour des pâtes plus tendres en bouche, ajoutez une ou deux minutes selon votre goût.

## Garanties

Ce logiciel est fourni tel quel, sans garantie d'aucune sorte, expresse ou implicite.
En aucun cas, les auteurs ou les détenteurs de droits d'auteur ne peuvent être tenus responsables de toute réclamation, dommage ou autre responsabilité.

## Les données personnelles

Cette application ne collecte aucune donnée personnelle de l'utilisateur.
L'hébergement de l'application est géré par Github (voir <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">Github Pages</a>).
Les favoris sont enregistrés sur l'appareil de l'utilisateur au moyen du <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" rel="noopener noreferrer" target="_blank">localStorage</a>.

## Copyright

Toutes les marques et images sont la propriété de leurs propriétaires respectifs et résident sur leurs serveurs.
L'auteur du logo du logiciel est <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> de <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a>.

## Licences de Réutilisation

Le code source de cette application est publié en open source sous licence <a href="https://tldrlegal.com/license/mit-license" rel="noopener noreferrer" target="_blank">MIT</a>.
La base de données des temps de cuisson des pâtes (fichier timers.json) est diffusée sous licence <a href="https://tldrlegal.com/license/odc-open-database-license-(odbl)" rel="noopener noreferrer" target="_blank">ODbL</a>.

## Contacts

Pour signaler des dysfonctionnements, suggérer un changement ou poser une question, vous pouvez ouvrir une Issue sur le repositoire du projet à l'adresse <a href="https://github.com/jenkin/pasta-timers-app/issues" rel="noopener noreferrer" target="_blank">Github</a>.
