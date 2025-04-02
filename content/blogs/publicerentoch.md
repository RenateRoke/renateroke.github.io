---

title: Klaar om te publiceren...toch?
summary: In mijn vorige blog heb je kunnen lezen over hoe ik een aantal basisdingen op de website heb aangepast en een toegankelijk kleurenpallet heb samengesteld. Vandaag vertel ik je over het implementeren van de kleuren, waarom al mijn knoppen ineens geen toegankelijke naam meer hadden en hoe ik de website daadwerkelijk online heb gekregen!
date: 2025-04-02

--- 

In mijn vorige blog heb je kunnen lezen over hoe ik een aantal basisdingen op de website heb aangepast en een toegankelijk kleurenpallet heb samengesteld. Vandaag vertel ik je over het implementeren van de kleuren, waarom al mijn knoppen ineens geen toegankelijke naam meer hadden en hoe ik de website daadwerkelijk online heb gekregen!

## Het thema aanpassen

Nadat ik bepaald had welke kleuren ik wil gebruiken, moest ik de kleuren ook daadwerkelijk gaan toepassen in de CSS van mijn website. Gelukkig was de readme van de themamaker redelijk leesbaar voor een beginneling zoals ik en wist ik al vrij snel dat ik in de assets map moest zijn. Wanneer je een thema installeert in Hugo, heeft het thema een vergelijkbare mappenstructuur als mappenstructuur in je Hugo project. 

Als je zelf je eigen thema maakt en beheert kun je direct in de mappen van het thema werken, maar dat gaat voor mij niet op. Om het thema te overschrijven, moet ik exact dezelfde mappenstructuur creëren in mijn eigen project en daar de bestanden met wijzigingen in plaatsen. Het is daarbij belangrijk dat alle mappen en bestanden exact dezelfde naam hebben als in het thema! 

De bestanden die ik moest gaan bewerken zitten dus in de assets map. In het kleurenbestand staan alle kleuren gedefinieerd die je gebruikt in je project. Ook definieer je hier de kleuren voor tekst, links, buttons, etcetera. Hier heb ik dus zowel de kleuren toegevoegd, als ingesteld waar ik die kleuren voor wil gebruiken. Ik heb hier ook een aantal nieuwe variabelen aangemaakt, specifiek voor het mobiele menu, want die bestonden nog niet. 

## En het thema nog meer aanpassen
Vervolgens heb ik in het custom scss bestand een aantal zaken aangepast aan de opmaak van de website. Dit bestand wordt als laatste geladen in de css, waardoor ik hierin makkelijk wat grotere onderdelen van het thema kan overschrijven. Hierin heb ik bijvoorbeeld de kleuren in de header en footer aangepast en wederom een heel aantal dingen in het (mobiele) menu. Daar heb ik bijvoorbeeld de stijlen voor focus en hover aangepast zodat ook dán de contrastratio goed blijft. Ook heb ik een underline gegeven aan de link met aria-current. Zo is het zowel programmatisch als visueel duidelijk welk onderdeel in het menu actief is. 

Nu klinkt het alsof dit allemaal even snel snel is gebeurd, maar ik heb flink wat uurtjes zitten zoeken en foeteren! Ik kreeg de styling voor een al eerder bezochte link met zowel aria-current als toetsenbordfocus maar niet goed. Uiteindelijk bleek het probleem dat het thema terugviel op de standaard styling van eerder bezochte links, dat weer gedefinieerd stond in een apart links.scss bestand. Nadat ik apart voor eerder bezochte links mét aria-current én mét toetsenbordfocus een stijl had gedefinieerd in het custom.scss bestand, was het eindelijk opgelost. 

## Oops...ik bedoel oeps!

Nadat alles er een beetje uit zag zoals ik voor ogen had, was het tijd om eens te kijken hoe het gesteld was met de toegankelijke namen en rollen van mijn interactieve elementen. En hey, dat is gek! Alles mist een toegankelijke naam? Dit is het moment dat ik er achter kwam dat het instellen van de Nederlandse taalcode in mijn hogo.toml bestandje niet genoeg was. Mijn thema bevatte namelijk een heleboel mogelijke talen, maar géén Nederlands. 

Voor iedere beschikbare taal is er een i8n bestand (dit staat voor internationalisatie en lokalisatie), met daarin voor alle standaard onderdelen van je website een vertaling. Denk aan de naam van het hamburgermenu, maar ook voor woorden ín een toegankelijke naam zoals 'in', 'door' of 'Laatst gewijzigd'. 

Voor het Nederlands was dit nog niet aanwezig in mijn thema, terwijl ik al wel naar het Nederlands verwees in mijn hugo bestand. Hierdoor verwees ik dus in al mijn templates naar een taalvariabele die helemaal niet bestond, waardoor er niks getoond werd! Ik heb dus zelf een Nederlands i8n bestand moeten aanmaken en toevoegen (neem gerust een kijkje!) aan mijn website. Gelukkig was dat niet moeilijk, ik kon een bestaand bestand uit het thema kopiëren en de waarden bij de variabelen aanpassen. Het bestand zelf kreeg de toepasselijke naam 'nl' en nu heeft alles wel een kloppende en beschrijvende naam. 

## Tijd om live te gaan!

Ondertussen had ik een eerste blogje geschreven en zag alles er lokaal top uit, dus ik was er klaar voor om te gaan publiceren! Dacht ik. Ik moest eerst nog leren over submodules. Een Git submodule is een manier om één repository in een andere repository op te nemen. Het wordt vaak gebruikt om externe code (zoals een Hugo-thema of een bibliotheek) als een aparte eenheid binnen je project te beheren. Dit kan ofwel door van het origenele thema een submodule te maken, of door een form te maken van het thema. 

Omdat het thema in een repo leeft die niet van mij is (logisch), kan ik daar zelf geen wijzigingen in doorvoeren (ook logisch). Dat is nu ook niet per se nodig, maar ik zou wel graag de optie hebben om het thema zelf te beheren. Daarom heb ik een fork aangemaakt van het thema. Een fork is een kopie van een repository in je eigen account, die je zelf beheert. Dat thema kan dan nog steeds, als ik dat wil, updates ontvangen van het 'echte' thema. In de tussentijd ben ik niet afhankelijk van wat de thema-eigenaar wel of niet doet. Of dit de ideale route is weet ik nog niet precies, maar voor nu werkt het.

Vervolgens moest ik nog instellen dat Github ook daadwerkelijk een website maakt van mijn berg bestandjes. Voor sites die in Jekyll zijn gemaakt gaat dat automatisch, maar voor Hugo moet je hiervoor zelf een Github workflow instellen. Hiervoor heb ik [deze tutorial van Hugo](https://gohugo.io/host-and-deploy/host-on-github-pages/#build-hugo-with-github-action) gebruikt. Ook dat ging niet zonder slag of stoot, maar uiteindelijk is het gelukt. De aanhouder wint!

## Hoe verder?

Alles werkt en het ziet er niet meer zo bleh uit als in het begin, maar ik ben natuurlijk nog niet klaar! De volgende dingen waar ik aan wil gaan werken zijn een footermenu en een sitemap. Omdat ik geen uitgebreid navigatiemenu wil, is een sitemap een fijne manier om een overzicht te hebben van alle pagina's op de website. Het is voor mijn website ook de meest logische manier om te voldoen aan [succescriterium 2.4.5, 'multiple ways'](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways). Daarnaast zou ik graag het grid van mijn website aanpassen, maar daar moet ik eerst nog meer over leren. 

Als laatste in deze blog nog een bedankje voor Bram, die twee fijne pullrequests heeft gemaakt. Dankzij hem staat er nu bijvoorbeeld een lang-attribuut bij de Lorem ipsum tekst op de contactpagina. Dat kan vanwege de Goldmark Markdown-parser, waarmee je attributen kunt toevoegen in shortcode in het markdownbestand, die vervolgens in de HTML terecht komen. Hiermee kun je bijvoorbeeld ook een css class of id toevoegen aan een blok. Super handig! Ik kende het nog niet en het is super fijn dat het nu geconfigureerd is.

In de tussentijd ben ik ook bezig met [FreeCodeCamp](https://www.freecodecamp.org/), waar ik momenteel aan het leren ben over CSS voor responsive websites. Zo leer ik gaandeweg steeds meer dingen die ik ook voor deze website kan toepassen.

Tot de volgende!

