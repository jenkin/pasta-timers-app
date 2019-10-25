# Pasta Timers App

| [Italiano](https://github.com/jenkin/pasta-timers-app/blob/master/README.md) | [English](https://github.com/jenkin/pasta-timers-app/blob/master/README-en.md) | [Español](https://github.com/jenkin/pasta-timers-app/blob/master/README-es.md) | [Português](https://github.com/jenkin/pasta-timers-app/blob/master/README-pt.md) | [...](https://github.com/jenkin/pasta-timers-app/issues/15)

Pasta Timers shows reccomended cooking time for more common types and brands in the market

![screenshot](https://repository-images.githubusercontent.com/214686946/4b0a8980-ed27-11e9-827f-88954c137291)

## How to install

You are able to use the application on the browser or install it into the phone clicking on Menù > Aggiungi ant Home screen (for Chrome).

## How to use it

Use the lower buttons to find your pasta cooking time. (icon on the left)
or to quickly access your favorite pastas (icon on the right).
Touch the heart icon to add or remove a pasta from your favorite list.
Touch the image of a pasta to open the official producers web page and discover all details and recommended recipes.

## How to contribute

This app is a Progressive Web App based on React and create React App.
The cooking time database is a static file under `build/timers.json`.
Data schema is described following [json-schema](https://json-schema.org/) specifications in `timers.schema.json`.
You can validate database against the provided schema using [ajv-cli](https://github.com/jessedc/ajv-cli): `npx ajv -s timers.schema.json -d public/timers.json`.

To contribute the database open an issue containing the following information:

* name
* brand
* product line
* type of pasta (short or long)
* "al dente" cooking time (in minutes)
* url of the official website (on the manufacturer's website)
* official image url (on the manufacturer's website)

## Cooking "la pasta"

Boil enough water in a high-sided pan with a lid.
Add aproximately 100 grams of pasta per person.
When the water starts boiling add salt with a full-teaspoon every 700 ml of water.
Throw the pasta and cover the pot until the water starts boiling again, then turn off the heat.
Cook for the indicated time starting from the boiling.
Turn with a spoon a couple of times during cooking.
Drain the pasta, season to will and serve hot.
Hot cooking water can be used in small doses in the dressing or to wash the dishes manually.

## Warning

The indicated cooking times are intended for "al dente" cooking recommended by the manufacturers.
For a softer pasta add one or two more minutes to fits your will.

## Guarantees

This application is provided as is, without warranties of any kind, explicit or implicit.
In no event will authors or copyright holders be liable for any claims, damages or other liability.

## Personal information

This application does not fetch or store any users information
The application is hosted by Github (more information <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">Github Pages</a>).
Users favorites are saved on it's own device via  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" rel="noopener noreferrer" target="_blank">localStorage</a>.

## Copyright

All registered trademarks and all images are of their respective owners and are resident on their servers.
The author of the application logo is <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> of <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a>.

## Reuse licenses

This code is distributed open source with a  <a href="https://tldrlegal.com/license/mit-license" rel="noopener noreferrer" target="_blank">MIT</a> license.
The pasta's cooking time file (timers.json) is released under license <a href="https://tldrlegal.com/license/odc-open-database-license-(odbl)" rel="noopener noreferrer" target="_blank">ODbL</a>.

## Contact

To report malfunctions, suggests a change or ask any question you are able to open an issue on the project repository at <a href="https://github.com/jenkin/pasta-timers-app/issues" rel="noopener noreferrer" target="_blank">Github</a>.
