# Pasta Timers App

| [Italiano](https://github.com/jenkin/pasta-timers-app/blob/master/README.md) | [English](https://github.com/jenkin/pasta-timers-app/blob/master/README-en.md) | [Español](https://github.com/jenkin/pasta-timers-app/blob/master/README-es.md) | [Português](https://github.com/jenkin/pasta-timers-app/blob/master/README-pt.md) | [...](https://github.com/jenkin/pasta-timers-app/issues/15)

Pasta Timers muestra los tiempos de cocción recomendados para los tipos y marcas de pastas más comunes del mercado.

![screenshot](https://repository-images.githubusercontent.com/214686946/4b0a8980-ed27-11e9-827f-88954c137291)

## Cómo se instala

Se puede usar esta aplicación desde el navegador o instalarla en el smartphone clickeando en Menu > Aggiungi en la pantalla de Inicio (en Chrome).

## Cómo se usa

Utiliza los botones de abajo para buscar el tiempo de cocción de tu pasta (los ícono a la izquierda)
o para acceder velozmente a tu pasta preferida (icono a la derecha).
Toca el corazón para agregar o remover una pasta de tu lista de favoritos.
Toca la imagen de una pasta para abrir su página oficial de productos y descubrir todos los detalles y las recetas recomendadas.

## Cómo contribuir

La aplicación es una Progressive Web App basada en React y Create React App.
La base de datos de los tiempos de cocción es un archivo estático en `build/timers.json`.
> Lo schema dati è descritto mediante [json-schema](https://json-schema.org/) nel file `timers.schema.json`.
> Puoi verificare la validità del database mediante [ajv-cli](https://github.com/jessedc/ajv-cli): `npx ajv -s timers.schema.json -d public/timers.json`.

Per contribuire al database apri una issue con queste informazioni:
Para contribuir a la base de datos, abra un issue con la siguiente información.

* nombre
* marca
* linea
* tipo de pasta (corta o larga)
* tiempo di cocción al dente (en minutos)
* url de la página oficial (el sitio del fabricante)
* url de la imágen oficial (el sitio del fabricante)

## Cocinar la pasta

Hervir una cantidad suficiente de agua en una olla de lados altos con tapa.
Calculee aproximadamente 100 gramos de pasta por persona. Cuando el agua hierva, agregue una cucharadita de sal gruesa por cada 700 ml de agua. 
Tire la pasta y cubra la olla hasta que el agua comience a hervir nuevamente, luego apague el fuego. 
Cocine por el tiempo indicado a partir de la ebullición.
Gire con un cucharón un par de veces durante la cocción.
Escurra la pasta, sazone al gusto y sirva caliente. 
El agua caliente para cocinar se puede usar en pequeñas dosis en el aderezo o para lavar los platos a mano.

## Advertencia

Los tiempos de cocción indicados son estimativos para una cocción "al dente" y es la recomendada por el fabricante.
Para una pasta mas blanda al paladar agregue uno o dos minutos de acuerdo a su gusto.

## Garantías

Esta aplicación viene como es, sin garantías de ningún tipo, explicitas o implícitas.
En ningún caso los autores o titulares del copyright son responsables por cualquier reclamo de ningún tipo de responsabilidad

## Datos personales

Esta aplicación no recoje ningún dato personal del usuario.
El hosting de la aplicación es gracias a Github (visite <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">Github Pages</a>).
Los datos de sus preferencias se guardan en su dispositivo mediante <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" rel="noopener noreferrer" target="_blank">localStorage</a>.

## Copyright

Todas las marcas registradas y todas las imágenes son de sus respectivos dueños y estan alojadas en su propio servidor.
El autor del logo de la aplicación es <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> de <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a>.

## Licencia de reutilización

El código surgente de esta aplicación es distribuido open source con licencia <a href="https://tldrlegal.com/license/mit-license" rel="noopener noreferrer" target="_blank">MIT</a>.
La base de datos de tiempos de coocción es distribuida con licencia <a href="https://tldrlegal.com/license/odc-open-database-license-(odbl)" rel="noopener noreferrer" target="_blank">ODbL</a>.

## Contacto

Para reportar errores, sugerir una modificación o hacer una consulta puede abrir un issue en el repositorio del proyecto en <a href="https://github.com/jenkin/pasta-timers-app/issues" rel="noopener noreferrer" target="_blank">Github</a>.
