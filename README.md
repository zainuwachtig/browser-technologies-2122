# Customize your tee

## Link naar de demo

## Beschrijving

Customize your tee is de oplossing op de case:

> Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, opslaan, bestellen, en een volgende keer dat ik de site bezoek kunnen gebruiken.

### Eerste schets

Als idee had ik om het proces in te delen met behulp van progressive disclosure, al snel dacht ik wel dat dat voor die drie opties niet echt nodig was en dat het teveel tijd zou kosten om het in elkaar te zetten.
![Eerste schets](https://user-images.githubusercontent.com/74155415/162219098-4c4defb0-590f-47d0-9b81-bb7d37aa514e.PNG)

## Features

Je kan:

-   [x] uit vier verschillende kleuren kiezen (wit, grijs, rood en geel).
-   [x] een gepersonaliseerde tekst erop zetten.
-   [x] uit vier (unisex) maten kiezen.
-   [x] in het winkelmandje kijken of je de juiste keuze hebt gemaakt.
-   [x] 'afrekenen'.

Er is bewust gekozen om de gebruiker **niet** meerdere t-shirts te laten bestellen, als de gebruiker meerdere gepersonaliseerde t-shirts wil, kan hij meerdere aparte bestellingen plaatsen.

## Progressive Enhancement

### Functional layer

De laag met de core functionaliteiten, een t-shirt bestellen en afrekenen. Dit moet mogelijk zijn op (vrijwel) iedere browser. Deze laag bestaat uit een html `form` waarin de keuzes voor het t-shirt gegroepeerd zijn in een `fieldset`. Deze data wordt door middel van de node server opgeslagen in een JSON file. Vervolgens wordt de gebruiker geleid naar het winkelmandje, zodat de gebruiker kan checken of alles naar wens is. Ten slotte kan de gebruiker afrekenen, weer door middel van een `form` met duidelijke foutmeldingen voor ieder device (oudere browsers ondersteunen niet de ingebakken HTML `required` attribuut).
Wanneer alles juist is krijgt de gebruiker een bevestiging.

### Usable layer

De laag met CSS, hiermee wordt de algehele gebruikerservaring verbeterd. Ook maakt deze het laag de website wat fijner voor de ogen van de gebruiker. Dit wordt gedaan door kleur en worden de fieldsets gegroepeerd voor het customizen van je shirt, zodat alles makkelijk in één oogopslag te zien is. Verder is het duidelijk welke opties voor het shirt gekozen is door de gekozen optie een `outline` met een `outline-offset` mee te geven.

### Pleasurable layer

Last but not least, de laag met client-side javascript. Dit geeft de mogelijkheid voor de gebruiker om de keuzes direct op het t-shirt te zien. Ook heb ik localStorage gebruikt zodat de gebruiker weer verder kan waar die mee gebleven was, bijvoorbeeld wanneer die per ongeluk het tabblad sluit. Ik gebruik localStorage als pleasurable laag, want wanneer die bijvoorbeeld is uitgeschakeld kan de gebruiker geen t-shirt bestellen.

## Testverslag

### Onderzochte features

-   localStorage
-   live preview
-   keyboard only

### Geteste browsers

#### Macbroek Pro | Chrome

Voor de Chromium browser is gekozen voor Chrome, dit is mijn standaardbrowser en alles werkt naar behoren. Alle features werkten, voor keyboard only heb ik in onderstaande regels de css gezet zodat er een duidelijke focus is waar de gebruiker is.

```css
*:focus {
    outline: 1px dotted black;
    outline-offset: 2px;
}
```

![Chrome op de Macbroek Pro](https://user-images.githubusercontent.com/74155415/162213464-c3f351cd-9bb1-4d9f-a882-7128b84ab493.png)

#### Macbroek Pro | Safari

Als niet chromium browser (WebKit) heb ik voor Safari gekozen, de standaard browser van Apple. Zowel de live preview en localstorage werkten, de keyboard only niet daarentegen. Alleen de tekstvelden werd op gefocust maar niet de radio buttons. Daarvoor moeten extra stappen ondernomen worden zie [deze link](https://www.tempertemper.net/blog/how-to-use-the-keyboard-to-navigate-on-safari). Ook gaat de outline niet mee met de border van de radio buttons waardoor die dus vierkant is.

![Safari op de Macbroek Pro](https://user-images.githubusercontent.com/74155415/162214049-815a49f2-efba-4012-a327-58cf4d717046.png)

#### Samsung Note 4 | Chrome

Verbazingwekkend ging alles goed op deze telefoon, alle functies werkten en het zag er precies zo uit als op desktop.

![Chrome op de Samsung Note 4](https://user-images.githubusercontent.com/74155415/162217010-cdffdafb-801c-48de-96f5-e6a5b71ee3bd.png)

#### iPhone 13 | Safari

Net zoals op Safari en de Samsung Note is er geen outline border. Ook werden de buttons een soort plat gedrukt maar door een `-webkit-appearance: none` werden ze weer normaal.

![Safari op de iPhone 13](https://user-images.githubusercontent.com/74155415/162218031-4fdbc805-af90-4d0e-b577-2b23b4b0cf36.PNG)

### Wat word wel en niet ondersteund?

Twee dingen die ik graag gebruik zijn custom variables en `aspect-ratio`. Met custom variables kan ik gemakkelijk de kleuren aanpassen van de buttons, helaas word dit op de Nokia Lumia niet ondersteund en zie je dus geen kleur. Dat vind ik geen ramp, want de site is nog steeds werkzaam.
`aspect-ratio` gebruik ik voor bijvoorbeeld rondjes zodat je steeds maar 1 waarde hoeft te definiëren (`height` of `width`) en dus minder hoeft aan te passen. Ook dit wordt helaas niet goed ondersteund op de Lumia, maar dit is wel een probleem want als je zowel geen width als height meegeeft aan een element, is het niet zichtbaar. Hier moest ik dus van afstappen.

Wat mij wel verbaasde was dat `display: flex` nog wel aardig ondersteund werd ook op de oudere devices. Ik had hier stiekem al op gehoopt omdat ik al het positioneren met flexbox doe en anders zou moeten werken met `margin` en `padding` op alles.

### Welke functionaliteiten heb ik uitgeschakeld?

Als je javascript uitschakelt is de site nog steeds bruikbaar. localStorage kan dan niet worden gebruikt, dus er wordt niks lokaal opgeslagen en de gebruiker zal opnieuw zijn keuzes moeten invullen wanneer die de pagina verlaat.
Ook is er geen live preview op het t-shirt doordat dat met javascript gebeurt, dit is geen ramp want wanneer je op bestellen drukt zie je alsnog een preview van je gekozen t-shirt.
