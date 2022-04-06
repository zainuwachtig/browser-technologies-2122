# Customize your tee

## Link naar de demo

## Beschrijving

Customize your tee is de oplossing op de case:

> Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, opslaan, bestellen, en een volgende keer dat ik de site bezoek kunnen gebruiken.

## Features

Je kan:
[x] uit vier verschillende kleuren kiezen (wit, grijs, rood en geel).
[x] een gepersonaliseerde tekst erop zetten.
[x] uit vier (unisex) maten kiezen.
[x] in het winkelmandje kijken of je de juiste keuze hebt gemaakt.
[x] 'afrekenen'.

Er is bewust gekozen om de gebruiker **niet** meerdere t-shirts te laten bestellen. Ook is er voor gekozen **niet** verder te gaan met een 'opgeslagen' ontwerp, de drie opties op het t-shirt kan prima opnieuw ingevuld worden en zou alleen maar veel ruimte opnemen in de database.

## Progressive Enhancement

### Functional layer

De laag met de core functionaliteiten, een t-shirt bestellen en afrekenen. Dit moet mogelijk zijn op (vrijwel) iedere browser. Deze laag bestaat uit een html `form` waarin de keuzes voor het t-shirt gegroepeerd zijn in een `fieldset`. Deze data wordt door middel van de node server opgeslagen in een JSON file. Vervolgens wordt de gebruiker geleid naar het winkelmandje, zodat de gebruiker kan checken of alles naar wens is. Ten slotte kan de gebruiker afrekenen, weer door middel van een `form` met duidelijke foutmeldingen voor ieder device (oudere browsers ondersteunen niet de ingebakken HTML `required` attribuut).
Wanneer alles juist is krijgt de gebruiker een bevestiging.

### Usable layer

De laag met CSS, hiermee wordt de algehele gebruikerservaring verbeterd. Ook maakt deze het laag de website wat fijner voor de ogen van de gebruiker. Dit wordt gedaan door kleur en worden de fieldsets gegroepeerd voor het customizen van je shirt, zodat alles makkelijk in één oogopslag te zien is. Verder is het duidelijk welke opties voor het shirt gekozen is door de gekozen optie een `outline` met een `outline-offset` mee te geven.

### Pleasurable layer

Last but not least, de laag met client-side javascript. Dit geeft de mogelijkheid voor de gebruiker om de keuzes direct op het t-shirt te zien.

## Geteste browsers

### Chromium browser

Voor de Chromium browser is gekozen voor Chrome, deze browser heb ik voornamelijk gebruikt om te testen.

## Testverslag

### Onderzochte features

### Wat word wel en niet ondersteund?

### Welke functionaliteiten heb ik uitgeschakeld?
