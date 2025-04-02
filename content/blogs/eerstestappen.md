---

title: De eerste stappen
summary: Goed, zoals je weet heb ik dus geen thema from scratch gemaakt. Ik werk vanuit het [Zen thema](https://zen-demo.xdeb.org/). Het is een heel simpel thema, met weinig poespas. Het is qua uiterlijk alleen totaal niet wat ik zocht, dus ik moest zelf aan de knutsel!
date: 2025-04-01

--- 

Goed, zoals je weet heb ik dus niet zélf een thema gemaakt. Ik werk vanuit het [Zen-thema](https://zen-demo.xdeb.org/). Het is een heel simpel thema, met weinig poespas. Het is qua uiterlijk alleen totaal niet wat ik zocht, dus ik moest zelf aan de knutsel!

## De basisinstellingen
Een aantal overkoepelende dingen voor je Hugo-website stel in je via je hugo.toml bestand. Dit is het bestand waar je parameters in kunt stellen die belangrijk zijn voor je hele website. Denk aan de titel van je website, de basisurl, de taal en het thema dat je gebruikt. Maar ook of je bepaalde dingen die via het thema mogelijk zijn wel of niet wilt gebruiken, zoals een mobiel menu. 

Het verschilt overigens een beetje per thema of het een toml of yaml bestandje is. Zolang je de gepaste schrijfwijze voor het bestand gebruikt, maakt het (voor zover ik op dit moment weet) niet zo heel veel uit wélke het is. Als het bestandje maar hugo heet. 

Hierin heb ik dus ingesteld dat ik een Nederlandse website heb. Het instellen van de hoofdtaal van de pagina's is heel belangrijk, omdat voorleessoftware aan de hand daarvan bepaald in welke taal de pagina moet worden voorgelezen. Verder heb ik de url van mijn githubpages ingevuld (dit kon ik natuurlijk pas toevoegen nadat ik de repo had aangemaakt) en dat ik gebruik wil maken van het mobiele menu. 

## Ik heb helemaal geen logo
Als je de demopagina van het Zen-thema bekijkt, valt je meteen een gigantisch logo op. Dat moest er uit en dat was meteen al een uitdaging! 

Zoals ik in mijn [vorige blog, 'Het begin'](https://renateroke.github.io/blogs/hetbegin/) heb verteld, werkt Hugo met layout templates. Iedere pagina is opgebouwd uit meerdere templates. De basis heet de 'base of', dit is het raamwerk voor alle pagina's. Het raamwerk bestaat uit HTML (de doctype, html, head, body etcetera) en placeholders waarin je verwijst naar de specifieke ándere templates die je wilt gebruiken. Die zijn kort door de bocht ingedeeld in:

- Grote templates: Zoals de overzichtpagina's (de list pagina's) en voor 'gewone' pagina's. 
- En de 'partials'. Dit zijn bijvoorbeeld de menu's, de cookiebar, gerelateerde links en paginering.

Als je werkt vanuit een bestaand thema, is er al een baseof document dat verwijst naar allerlei templates en parameters. In mijn baseof document staat in de header een 'if statement', die zoekt naar een parameter die te maken heeft met het logo. Als voor de parameter logo 'true' is aangegeven, wordt er een bestand met de naam logo uit de images map geïmporteerd. Standaard heeft deze parameter de waarde 'true'. 

Ik wil op dit moment geen logo in mijn header (want ik héb helemaal geen logo), dus heb ik het baseof document moeten aanpassen zodat de standaardwaarde voor logo 'false' is. Vervolgens moest ik mijn link en naam in de header nog stylen, maar het zag er al meteen een stuk beter uit!

## Kleurenpalet kiezen

Het basisthema is nogal...basis. De volgende stap was het samenstellen van een kleurenpalet voor mijn nieuwe website. Nu wil het toeval dat ik vorig jaar mijn werkkamer heb verbouwd en de accentmuur een hele mooie blauwgroene kleur heeft. Die kleur nam ik dus als uitgangspunt. En ik heb ook een nieuwe zomerjas, in een kleur uit dezelfde kleurfamilie. Ik was er dus al vrij snel uit dat ik voor een monochrome kleurset wou gaan. 

Het moest natuurlijk wel een palet zijn dat in combinatie met de tekstkleuren aan de [WCAG contrasteisen voor tekst](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) en aan de [WCAG contrasteisen voor niet-tekst](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) zou voldoen. Na wat online zoekwerk kwam ik uit op de toegankelijke kleurpalet generator van [Venngage](https://venngage.com/tools/accessible-color-palette-generator) en na wat husselwerk was ik tevreden met het resultaat.

Het basispalet waar ik op uit ben gekomen is:

- Donkerstgroen(HEX #294141)
- Donkergroen (HEX #3B5453)
- Middelgroen (HEX #4E6766)
- Lichtgroen (HEX #92A3A3)
- Lichtstgroen (HEX #ECF1F2)

Op de donkerste kleur gebruik ik de meest lichtgroene kleur voor tekst en op de lichtgroene kleur gebruik ik een bijna-zwarte kleur voor tekst. Het contrast zou hoger zijn als ik wit en zwart zou gebruiken, maar een hoger contrast betekent niet per se dat de tekst prettiger leest. In tegendeel, voor veel mensen met een cognitieve beperking (zoals ikzelf), is een iets minder schel contrast juist erg prettig. 

De contrastratio tussen twee kleuren wordt namelijk voornamelijk beïnvloed door de hoe donker of licht de kleuren zijn, niet alleen door de kleurtint. En een groter verschil in helderheid betekent in de regel dat mensen die erg prikkelgevoelig zijn voor licht, meer last hebben van een erg hóóg contrast dan van een laag contrast. Aangezien dit voor mij ook geldt, heb ik er dus bewust voor gekozen om wel overal aan de contrastratio van 4,5:1 te voldoen, maar niet op alle plekken aan 7:1 zoals het [AAA succescriterium voor contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) vraagt. 

In WCAG 3 (daar moeten we nog wel heel lang op wachten) schakelen we mogelijk over op een nieuwe manier voor het berekenen van contrast: de APCA. Dat staat voor 'Accessible Perceptual Contrast Algorithm', oftewel een algoritme voor perceptueel contrast. Hoe we contrast ervaren is namelijk niet zwart wit (haha), maar heel erg afhankelijk van de context waarin de kleuren geplaatst zijn. In de [APCA Easy intro](https://git.apcacontrast.com/documentation/APCAeasyIntro) kun je hier meer over lezen, zij leggen het ook een stuk uitgebreider uit dan ik. 

In het volgende blog vertel ik je onder andere over hoe ik de kleuren heb toegevoegd aan het project en het avontuur met lokalisering!
