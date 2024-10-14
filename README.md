# RealEstateCare

RealEstateCare is een mockup van een mobiele webapplicatie ontworpen voor vastgoedinspecteurs om schade te rapporteren, 
onderhoud bij te houden, en technische installaties te inspecteren. De applicatie is gebouwd met Vue.js en biedt de 
basisfunctionaliteiten om rapportages bij te houden en aanpassingen te maken aan een project.

## Inhoud

- [Procesbeschrijving](#procesbeschrijving)
- [Functionaliteiten](#functionaliteiten)
- [Bekende Problemen](#bekende-problemen)
- [Verantwoording](#verantwoording)
  - [Security](#security)
  - [Usability](#usability)
  - [Accessibility](#accessibility)
  - [Style Guides en Best Practices](#style-guides-en-best-practices)
- [WCAG 2.1 Richtlijnen](#wcag-21-richtlijnen)
- [Installatie](#installatie)
- [Gebruik](#gebruik)
- [Toekomstige Verbeteringen](#toekomstige-verbeteringen)

## Procesbeschrijving

Tijdens het ontwikkelen van RealEstateCare heb ik ervoor gekozen om Vue.js te gebruiken vanwege de flexibiliteit, 
schaalbaarheid en de component-gebaseerde architectuur die het biedt. Het project is opgezet als een Single Page Application, 
wat zorgt voor snelle navigatie zonder constante pagina-verversingen. 

Ik heb gedurende het proces meerdere keren feedback ontvangen en mijn applicatie stapsgewijs verbeterd. De focus lag op het maken van een 
prototype met een basisfunctionaliteit voor inspecteurs maar met ruimte voor verdere ontwikkeling.

## Alert commands en console.log commands
- Alle alert berichten en console.log berichten zijn er puur ter ondersteuning voor het beoordelen van de mockup applicatie. Deze zouden in de echte applicatie verwijderd worden.

## Functionaliteiten

- **Login met tweefactor-authenticatie (gesimuleerd met localStorage)**.
- **Schade rapporteren**: Inspecteurs kunnen schade vastleggen, met foto's en gedetailleerde beschrijvingen.
- **Onderhoud bijhouden**: Voer informatie over achterstallig onderhoud in en upload foto's.
- **Technische installaties inspecteren**: Documenteer storingen en goedkeuringen van installaties.
- **Instellingen**: Basisinstellingen, waaronder licht/donker thema en accountbeheer.

## Bekende Problemen

1. **Input Validatie en Sanitation**: Op dit moment is alleen basisvalidatie en input sanitation toegevoegd. Verdere verbeteringen zijn nodig om schadelijke invoer volledig te filteren.
2. **Toegankelijkheidsfuncties**: Niet alle WCAG 2.1-richtlijnen zijn volledig geïmplementeerd. Ondersteuning voor toetsenbordnavigatie ontbreken gedeeltelijk.


## Verantwoording

### Security
Op het gebied van security is voornamelijk gebruik gemaakt van basisvalidatie en input sanitation om te voorkomen dat schadelijke invoer wordt verwerkt. 
Ik heb ervoor gekozen om authenticatie te simuleren met `localStorage`, maar dit is niet veilig voor een productietoepassing. In de toekomst moet een veiliger authenticatiesysteem worden opgezet, 
inclusief het versleutelen van gevoelige gegevens en het beschermen tegen cross-site scripting (XSS) en andere aanvallen.

### Usability
Voor de usability heb ik de tien heuristieken van Jakob Nielsen als richtlijn gebruikt:
- **Zichtbaarheid van systeemstatus**: Elke pagina biedt feedback aan de gebruiker. Bijvoorbeeld, na het succesvol inloggen wordt de gebruiker naar het dashboard geleid.
- **Overeenkomst tussen het systeem en de echte wereld**: De applicatie gebruikt termen zoals 'Schade', 'Onderhoud', en 'Technische Installaties' die bekend zijn bij de gebruiker.
- **Gebruikerscontrole en vrijheid**: Gebruikers kunnen eenvoudig door de applicatie navigeren.
- **Consistentie en standaarden**: De applicatie houdt vast aan conventies van mobiele applicaties.
- **Voorkomen van fouten**: Input validatie voorkomt enkele veelvoorkomende fouten bij invoer.

### Accessibility
De applicatie voldoet aan sommige WCAG 2.1-richtlijnen zoals het aanbieden van duidelijke labels voor alle invoervelden.  
Ook is de toetsenbordtoegankelijkheid nog niet volledig geïmplementeerd. Dit omdat deze mockup aaplicatie ingericht is voor mobiele gebruikers.

### Style Guides en Best Practices
Bij de ontwikkeling heb ik de best practices van Vue.js gevolgd zoals het gebruik van componenten en het scheiden van concerns. 
Alle componenten zijn netjes gestructureerd en de code is eenvoudig te onderhouden. Verder heb ik rekening gehouden met leesbare 
component- en variabelennamen in `PascalCase` en `kebab-case`, waar toepasselijk.

## WCAG 2.1 Richtlijnen

Op dit moment voldoet de applicatie aan enkele WCAG 2.1-richtlijnen:

- **1.3.1 – Info en relaties**: Labels worden gebruikt om invoervelden te beschrijven.
- **2.4.2 – Paginatitel**: Elke pagina heeft een duidelijke en relevante titel.
- **3.3.2 – Labels en instructies**: Alle invoervelden hebben labels.

De volgende richtlijnen worden nog niet volledig ondersteund:

- **2.1.1 – Toetsenbord toegankelijk**: De applicatie is nog niet volledig toegankelijk met het toetsenbord.

## Niet-werkende Functionaliteiten
In deze prototypeversie van de applicatie zijn enkele functionaliteiten mock-ups en worden ze nog niet volledig ondersteund door backend-functionaliteit. Hieronder een overzicht van wat nog niet werkt.

1. **Formulier in RecordAssigned.vue**:
   - De ingevulde gegevens van het formulier in `RecordAssigned.vue` worden nog niet verzonden naar een database. Dit komt doordat er nog geen backend en database zijn opgezet voor deze mockup. Het formulier werkt momenteel alleen lokaal waarbij de gegevens na het invullen worden gelogd in de console.

2. **Uploaden van Foto's**:
   - Hoewel gebruikers foto's kunnen uploaden in verschillende delen van de applicatie worden deze foto's momenteel alleen weergegeven in de interface en nergens opgeslagen. Na een herstart van de applicatie gaan de geüploade foto's verloren.
   - Er is momenteel geen server of cloudopslag gekoppeld aan de applicatie waar foto's kunnen worden opgeslagen.

3. **Opties in SettingsPage.vue**:
   - De instellingenopties in `SettingsPage.vue` (zoals het wisselen van thema, meldingen) zijn momenteel slechts visuele mock-ups. Ze voeren nog geen echte wijzigingen door in de applicatie of slaan geen gegevens op.
   - De opties zijn momenteel puur demonstratief bedoeld. 

4. **Downloaden van pdf bestanden.**:
   - De pdf bestanden die in KnowledgeBase.vue staan kunnen niet echt gedownload worden. Het is demonstratief bedoeld. 

## Installatie

1. Clone de repository:
   ```bash
   git clone https://github.com/username/RealEstateCare.git
   cd RealEstateCare
