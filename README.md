# Progetto - React Food per Start2Impact

## Descrizione
Lo scopo del progetto è quello di creare una Single Page Application che, sfruttando le API messe a disposizione da [Spoonacular](https://spoonacular.com/food-api/docs), sia in grado di aiutare l'utente nella ricerca di ricette vegetariane.

L'applicazione una volta lanciata mostra a schermo una serie di ricette scelte casualmente. Successivamente, l'utente può direzionare la ricerca verso ciò che desidera grazie all'utilizzo del campo di ricerca presente a schermo. Una volta inserite le parole chiave desiderate, l'applicazione le utilizzerà per avviare una chiamata API personalizzata e mostrare infine all'utente alcune ricette afferenti alle parole da egli digitate.

Ogni ricetta viene mostrata a schermo in una card che riporta le informazioni base della suddetta, ovvero:
- titolo della ricetta
- tag descrittivi
- piccola descrizione
- bottone di approfondimento della ricetta.

Cliccando sul bottone di approfondimento l'app cambierà rotta e mostrerà a schermo una nuova pagina con all'interno le informazioni dettagliate della ricetta selezionata.

## Screenshots
![desktop-home](/src/assets/screenshots/desktop-home-preview.png)
![desktop-recipe](/src/assets/screenshots/desktop-recipe-preview.png)
![desktop-error](/src/assets/screenshots/desktop-error-preview.png)
![mobile-home](/src/assets/screenshots/mobile-home-preview.png)
![mobile-recipe](/src/assets/screenshots/mobile-recipe-preview.png)
![mobile-error](/src/assets/screenshots/mobile-error-preview.png)

## Costruito con:

- Vite
- React
- TailwindCSS
- NPM

## Link

[Versione live del progetto - Netlify](https://my-veggie-cookbook.netlify.app/)

## Istruzioni per clonare

Aprire Git Bash o la shell della propria distro Linux WSL, cambiare la Working Directory con la posizione dove si intende clonare il progetto, poi digitare il seguente comando:

```bash
git clone https://github.com/Paciott/Progetto-React-Spoonacular-S2i.git
```

Muoversi all'interno della cartella creata e installare le dipendenze necessarie al funzionamento dell'app con il seguente comando:

```bash
npm install
```

Editare il file `.env` presente nel progetto e inserire dove indicato la propria `API_KEY` di Spoonacular.

Infine, far partire il server con il seguente comando:

```bash
npm run dev
```