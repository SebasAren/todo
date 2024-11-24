# Todo

## Keuzes
### framework
Als framework heb ik gekozen voor nuxt 3 (sidebase.io starter). Reden hiervoor is dat ik hier het meeste ervaring mee heb. De siebase.io versie komt meteen met een aantal handige oplossingen, waaronder een auth module, die in heel korte tijd oauth2 via github kon regelen.

Verder kwam deze setup met prisma, trpc en tailwind en NaiveUI. Het leek mij leuk te kijken hoe naiveUI werkt, maar daar kreeg ik redelijk snel spijt van. NaiveUI werkt niet heel fijn samen met tailwind en het probleem ontstond dat ik eigenlijk de naive components zelf moest aanpassen of lange tijd zoeken in de documentatie (die zeer pover is). Volgende keer zou ik gewoon weer puur tailwind gebruiken, met bijvoorbeeld daisyUI.

### auth
De authorisatie gaat eigenlijk automatisch met de nuxt-auth (gebaseerd op next-auth). Ik heb gekozen voor github als Oauth, omdat dat mij hier de meest voor de hand liggende is. Deze gegevens worden niet direct opgeslagen in de database, maar alleen het email wordt opgeslagen bij de todos als identificatie.

### tests
Ik heb uiteindelijk geen tests geschreven. Voor de frontend hoefde dit niet, maar de backend wel. Het probleem is alleen dat de backend bijna geen echte "units" heeft. De 3 endpoints zijn puur crud via sql en bevatten geen logica.

Er gebeurt in de "composables" in de frontend wel iets wat testbaar is. Namelijk de flow van het creeeren van todos. Ik liep hier alleen direct tegen een vaker terugkerend probleem met nuxt. Doordat het auto-imports heeft is het extreem hinderlijk om bepaalde functies te mocken. In dit geval was de `$client` van `useNuxtApp()` bijzonder hinderlijk te mocken. Dit is wel te doen, maar niet in 4 uur.

### layout
Ik heb spijt van de keuze voor NaiveUI. Ik dacht toen ik dit koos dat er veel betere tailwind integratie was, maar dat viel vies tegen. Het resultaat is nu dat de app niet mooi scaled naar grotere schermen en er eigenlijk alleen redelijk uitziet op kleine schermen.

### extra's
Ik heb de app gehost op todo.arendsen.dev via een docker-based setup op een VPS. Heb niet de tijd gevonden om dit via een CI/CD pipeline te doen.

De app is een volledige pwa

Tijd bezig is op basis van git commit timestamps.
