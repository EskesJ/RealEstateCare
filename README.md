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
- [WCAG 2.1 Niveau A Richtlijnen](#wcag-21-niveau-a-richtlijnen)
- [Persisting Accessibility Errors](#persisting-accessibility-errors)
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

1. **Zichtbaarheid van systeemstatus**  
   De applicatie biedt duidelijke visuele feedback bij interacties zoals knoppen die oplichten bij het selecteren. Hierdoor blijft de gebruiker op de hoogte van zijn acties.

2. **Overeenkomst tussen het systeem en de echte wereld**    
   RealEstateCare maakt gebruik van vertrouwde terminologie en iconen zoals het gebruik van mappen- en tandwieliconen voor instellingen en documenten. Dit zorgt voor herkenning en gemak bij de gebruiker.

3. **Gebruikerscontrole en vrijheid**  
   De gebruiker kan eenvoudig door de applicatie navigeren en heeft de mogelijkheid om op elk moment uit te loggen of naar de gewenste sectie te gaan zonder onderbrekingen.

4. **Consistentie en standaarden**  
   De applicatie maakt gebruik van consistente elementen, zoals knoppen en termen, die overal dezelfde betekenis en werking hebben.

5. **Voorkomen van fouten**  
   Met behulp van invoervalidatie en foutmeldingen bij de invoer helpt de applicatie gebruikers om fouten te vermijden. Bijvoorbeeld bij het inloggen en bij formulieren.

6. **Herkenbaarheid gaat voor herinnering**  
   De applicatie maakt gebruik van labels en iconen die meteen duidelijk maken wat de functie is van elk element. Dit zorgt ervoor dat gebruikers niet onnodig zaken hoeven te onthouden.

7. **Flexibiliteit en efficiëntie van gebruik**   
   De applicatie is ontworpen met een intuïtieve interface waardoor gebruikers zonder veel voorkennis meteen aan de slag kunnen. De navigatie is eenvoudig en flexibel.

8. **Esthetisch en minimalistisch ontwerp**   
   De interface is minimalistisch met alleen de benodigde elementen in beeld. Dit zorgt voor een overzichtelijke en toegankelijke ervaring.

9. **Herstelbaarheid van fouten**  
   Wanneer er fouten optreden zoals bij het invoeren van een onjuist wachtwoord biedt de applicatie de mogelijkheid om de fout te herstellen.

10. **Help en documentatie**  
   Er is een informatie pagina opgenomen in de applicatie waar gebruikers meer informatie kunnen vinden.

### Accessibility
De applicatie voldoet aan WCAG 2.1-richtlijnen zoals het aanbieden van duidelijke labels voor alle invoervelden.De toetsenbordtoegankelijkheid nog niet volledig geïmplementeerd. Dit omdat deze mockup aaplicatie ingericht is voor mobiele gebruikers.

### Style Guides en Best Practices
Bij de ontwikkeling heb ik de best practices van Vue.js gevolgd zoals het gebruik van componenten en het scheiden van concerns. 
Alle componenten zijn netjes gestructureerd en de code is eenvoudig te onderhouden. Verder heb ik rekening gehouden met leesbare 
component- en variabelennamen in `PascalCase` en `kebab-case`, waar toepasselijk.

## WCAG 2.1 Niveau A Richtlijnen

**1.1.1 – Niet-tekstuele inhoud** Bied tekstalternatieven voor inhoud zonder tekst   
**Gelukt**. Alle niet-tekstuele inhoud, zoals iconen, hebben alternatieve teksten waar nodig.

**1.2.1 – Alleen audio en alleen video (vooraf gemaakt)** | Bied een alternatief voor alleen video en audio | 
**Niet van toepassing**. De applicatie bevat geen audio of video.

| **1.2.2 – Bijschriften (vooraf opgenomen)** | Geef bijschriften voor video’s met audio | **Niet van toepassing**. De applicatie bevat geen video's. |
| **1.2.3 – Audiobeschrijving of media-alternatief (vooraf opgenomen)** | Video met audio heeft een tweede alternatief | **Niet van toepassing**. De applicatie bevat geen video's. |
| **1.3.1 – Info en relaties** | Logische structuur | **Gelukt**. Er is een logische structuur aangehouden, en alle invoervelden hebben labels. |
| **1.3.2 – Betekenisvolle volgorde** | Inhoud presenteren in een zinvolle volgorde | **Gelukt**. Inhoud is in een logische en betekenisvolle volgorde gepresenteerd. |
| **1.3.3 – Zintuiglijke kenmerken** | Gebruik meer dan één zintuig voor instructies | **Gelukt**. Instructies worden niet alleen met kleur gegeven. |
| **1.4.1 – Gebruik van kleur** | Gebruik geen presentatie die alleen met kleur te begrijpen is | **Gelukt**. Kleur wordt niet gebruikt als enige visuele indicatie. |
| **1.4.2 – Audiobesturing** | Speel audio niet automatisch af | **Niet van toepassing**. De applicatie bevat geen audio. |
| **2.1.1 – Toetsenbord toegankelijk** | Alleen toegankelijk via toetsenbord | **Niet volledig ondersteund**. Omdat dit een mobiele mockup is, is toetsenbordtoegankelijkheid niet volledig geïmplementeerd. |
| **2.1.2 – Geen toetsenbord moeilijkheden** | Laat alles bereikbaar zijn met het toetsenbord | **Niet van toepassing**. Toetsenbordnavigatie is gedeeltelijk geïmplementeerd voor deze mobiele mockup. |
| **2.1.4 – Enkel teken sneltoetsen** | Sneltoetsen die via het toetsenbord geactiveerd worden zijn door de gebruiker uit te zetten | **Niet van toepassing**. Geen sneltoetsen in deze mobiele mockup. |
| **2.2.1 – Instelbare timing** | De gebruiker kan tijdslimieten instellen | **Niet van toepassing**. De applicatie bevat geen tijdslimieten. |
| **2.2.2 – Pauzeren, stoppen, verbergen** | Bied bedieningselementen voor het verplaatsen van inhoud | **Niet van toepassing**. Geen verplaatsbare inhoud in de applicatie. |
| **2.3.1 – Minder dan drie flitsen** | Geen inhoud knippert meer dan drie keer per seconde | **Gelukt**. Er zijn geen knipperende elementen in de applicatie. |
| **2.4.1 – Skip blokken** | Bied een skip ‘inhoud optie’ aan | **Niet van toepassing**. Niet relevant voor deze mobiele mockup. |
| **2.4.2 – Paginatitel** | Gebruik handige en duidelijke paginatitels | **Gelukt**. Elke pagina heeft een relevante titel. |
| **2.4.3 – Volgorde** | Logische volgorde | **Gelukt**. De volgorde is zinvol en consistent. |
| **2.4.4 – Doel van de link (in context)** | Het doel van elke link is duidelijk uit zijn context | **Gelukt**. Links en knoppen zijn duidelijk en informatief. |
| **2.5.1 – Aanwijzergebaren** | Functies die bediend worden met complexe gebaren kunnen zonder problemen uitgevoerd worden | **Niet van toepassing**. Geen complexe gebaren vereist in de mockup. |
| **2.5.2 – Aanwijzerannulering** | Klik/touch functies kunnen door de gebruiker afgebroken worden | **Gelukt**. Geen verplichte klik/touch-acties. |
| **2.5.3 – Label in naam** | Het label van besturingselementen met tekst bevat de naam van de zichtbare tekst | **Gelukt**. Besturingselementen hebben een label in de naam. |
| **2.5.4 – Bewegingsactivering** | Functies die via een beweging worden bediend, kunnen ook via een alternatief worden bediend | **Niet van toepassing**. De applicatie vereist geen bewegingsactivering. |
| **3.1.1 – Taal van pagina** | Pagina is geschreven in een begrijpbare taal | **Gelukt**. De taal is consistent en begrijpelijk. |
| **3.2.1 – Focus** | Elementen veranderen niet wanneer ze focus krijgen | **Gelukt**. De interface verandert niet onbedoeld bij focus. |
| **3.2.2 – Invoer elementen** | Elementen veranderen niet wanneer ze invoer ontvangen | **Gelukt**. Geen onbedoelde veranderingen bij invoer. |
| **3.2.6 – Consistente hulp (WCAG 2.2)** | Beschikbare hulp moet overal op dezelfde plaats terugkomen | **Niet van toepassing**. Deze functionaliteit is niet relevant voor deze mockup. |
| **3.3.1 – Fout identificatie** | Identificeer invoerfouten duidelijk | **Gelukt**. Fouten worden helder weergegeven. |
| **3.3.2 – Labels en instructies** | Label elementen en geef instructies | **Gelukt**. Labels zijn aanwezig en helder. |
| **3.3.7 – Overbodige invoer (WCAG 2.2)** | Zorg dat bezoekers informatie die ze al hebben ingevuld, niet nóg een keer hoeven in te voeren | **Niet van toepassing**. Invoerherhaling komt niet voor in deze applicatie. |
| **4.1.1 – Parsing** | Geen grote codefouten | **Gelukt**. Geen parsingfouten aangetroffen. |
| **4.1.2 – Naam, rol, waarde** | Bouw alle elementen voor toegankelijkheid | **Gelukt**. Alle elementen zijn correct opgebouwd voor toegankelijkheid. |


## Persisting Accessibility Errors

Tijdens het testen met de Web Accessibility Evaluation tool kwamen een aantal hardnekkige toegankelijkheidsproblemen naar voren. Deze lijken deels veroorzaakt te worden door de onderliggende Vuetify-componenten:

### 1. Multiple Form Labels
Wanneer alleen de v-label aanwezig is voor een invoerveld dat detecteert de WAVE google chrome extension geen labels maar tegelijkertijd geeft de tool wel een error met het bericht dat er meerdere form labels voor het invoerveld aanwezig zijn. Wanneer zowel `v-label` als `aria-label` worden gebruikt voor een invoerveld, geeft de tool alleen een foutmelding voor "multiple form labels." Het verwijderen van `v-label` lost de fout op, maar beïnvloedt de lay-out. Het probleem lijkt gerelateerd aan de manier waarop Vuetify labels verwerkt.

### 2. Contrast Issues in Select Drop-down Menus
Bij het gebruik van select drop-down menus wordt een foutmelding gegeven voor een laag contrast tussen het label en de achtergrond. Pogingen om dit te wijzigen via CSS selectors waren niet succesvol voor Vuetify select items. Terwijl de contrastproblemen in standaard invoervelden zijn opgelost, blijven ze aanwezig in select items.

### 3. Orphaned Form Labels
De tool geeft aan dat sommige labels niet correct zijn gekoppeld aan hun invoervelden, hoewel ze in de code wel gekoppeld zijn. Dit lijkt een compatibiliteitsprobleem met Vuetify te zijn, dat mogelijk niet alle ARIA-associaties correct doorgeeft aan de tool.

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
