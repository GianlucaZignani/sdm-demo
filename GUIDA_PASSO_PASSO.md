# Guida passo passo: pubblicare la demo su GitHub (senza saper programmare)

Obiettivo: avere un link pubblico tipo
`https://TUO-NOME-UTENTE.github.io/sdm-demo/`
che apre la demo dal telefono o dal computer.

Non serve installare nulla, né usare il terminale.

---

## Parte 1: creare un account GitHub

1. Apri il browser e vai su **github.com**.
2. Clicca su **Sign up**.
3. Inserisci email, password e un nome utente (es. `mario-rossi-demo`). Il nome utente compare nel link finale.
4. Conferma l'email con il codice che ricevi.

Hai ora un account. Tieni a mente il nome utente.

---

## Parte 2: creare il repository (la cartella online)

Un **repository** è una cartella online che contiene i file del progetto.

1. Dopo il login, in alto a destra clicca sul **+** e poi su **New repository**.
2. Compila:
   - **Repository name**: `sdm-demo` (esattamente questo nome, perché il link lo usa)
   - **Description**: "Demo non ufficiale San Donato Milanese" (facoltativo)
   - **Visibility**: scegli **Public** (GitHub Pages gratuito funziona solo con repository pubblici)
   - Non spuntare nulla sotto (niente README, niente .gitignore, niente licenza)
3. Clicca **Create repository**.

Ti ritrovi su una pagina quasi vuota, con un testo tipo "Quick setup". Va bene così.

---

## Parte 3: caricare i file del progetto

1. Scarica il file **sdm-demo.zip** allegato a questa conversazione.
2. Sul computer, **decomprimi** lo ZIP (doppio clic su Windows o Mac). Ottieni una cartella chiamata `sdm-demo`.
3. Dentro la cartella ci sono questi elementi:
   - `package.json`, `vite.config.js`, `index.html`, `.gitignore`, `README.md`
   - la cartella `src` (con la mappa, i componenti e i dati)
   - la cartella `.github` (con il file di pubblicazione automatica)
4. Torna alla pagina del repository su GitHub. Clicca sul link **uploading an existing file**, oppure, se non lo vedi, clicca su **Add file** e poi su **Upload files**.
5. **Trascina dentro la finestra** tutto il contenuto della cartella `sdm-demo` (non la cartella stessa, ma i file e le cartelle che contiene: `src`, `package.json`, eccetera).
6. In basso, nel campo **Commit changes**, scrivi "Primo caricamento" e clicca **Commit changes**.

### Attenzione alla cartella `.github`

La cartella `.github` inizia con un punto e su alcuni computer è nascosta. Se dopo il caricamento non la vedi, usa questo metodo alternativo:

1. Nella pagina del repository clicca **Add file → Create new file**.
2. Nel campo del nome scrivi esattamente: `.github/workflows/deploy.yml`
   (le barre `/` creano le cartelle da sole).
3. Apri sul computer il file `.github/workflows/deploy.yml` con il Blocco note (Windows) o TextEdit (Mac), copia tutto il contenuto e incollalo nella pagina di GitHub.
4. Clicca **Commit changes**.

### Controllo

Nella pagina del repository devi vedere: `src`, `.github`, `index.html`, `package.json`, `vite.config.js`, `README.md`.

---

## Parte 4: attivare GitHub Pages

Questo passaggio dice a GitHub di pubblicare il sito con il workflow.

1. Nel repository clicca **Settings** (in alto, a destra della scheda Code).
2. Nel menu a sinistra clicca **Pages** (sezione "Code and automation").
3. Sotto **Build and deployment**, nel campo **Source**, scegli **GitHub Actions**.

Non serve cliccare altro: la scelta viene salvata da sola.

---

## Parte 5: attendere la prima pubblicazione

1. Clicca la scheda **Actions** in alto nel repository.
2. Vedi un elenco con il nome **Pubblica su GitHub Pages**. Il primo caricamento l'ha già avviato.
3. Clicca sul nome per aprire i dettagli. Vedi due passaggi: **build** e **deploy**.
4. Attendi 2-4 minuti. Un segno verde ✓ significa che è tutto a posto.

### Se compare un segno rosso ✗

- Clicca sul passaggio rosso e leggi l'ultimo messaggio di errore.
- Più spesso il problema è il nome del repository: deve essere esattamente `sdm-demo`, perché il file `vite.config.js` ha `base: '/sdm-demo/'`.
- Se il nome è diverso, cambialo in **Settings → General → Repository name**, oppure modifica la riga `base` in `vite.config.js` con il nome scelto.
- Se l'errore riguarda `deploy`, controlla di aver scelto **GitHub Actions** come Source (Parte 4).

---

## Parte 6: aprire il sito

1. Torna in **Settings → Pages**. In alto compare un riquadro con il link del sito.
2. Il link è: `https://TUO-NOME-UTENTE.github.io/sdm-demo/`
3. Aprilo. Dovresti vedere la mappa con i pin colorati, i filtri, la barra in basso con Mappa, Servizi, Avvisi e Contatti.

Il link può essere inviato a chiunque: lo apri da telefono e computer senza installare nulla.

---

## Parte 7: modificare un contenuto (es. un luogo o un avviso)

Esempio: cambiare il nome di una scuola.

1. Nella pagina del repository vai in **src → data**.
2. Clicca su **luoghi.json**.
3. Clicca sull'icona della **matita** in alto a destra (Edit this file).
4. Modifica il testo tra le virgolette. Ad esempio, cambia `"Scuola primaria di esempio"` in `"Scuola dimostrativa"`.
5. Attenzione alle virgolette `"`, alle virgole `,` e alle parentesi `{ }` e `[ ]`: vanno lasciate come sono, altrimenti il sito non si aggiorna.
6. Clicca **Commit changes** e conferma.
7. Dopo 2-3 minuti ricarica il sito: la modifica è visibile.

Lo stesso metodo vale per `avvisi.json` e `servizi.json`.

### Aggiungere un nuovo avviso

In `avvisi.json` copia un blocco esistente, cambia `id` (deve essere unico, es. `"a3"`), titolo e testo, poi salva. Il blocco sta dentro le parentesi quadre `[ ]`, separato dagli altri da una virgola.

---

## Parte 8: problemi frequenti

| Problema | Causa probabile | Soluzione |
|---|---|---|
| Il link dà errore 404 | GitHub Pages non è attivo o il workflow non è finito | Controlla Parte 4 e la scheda Actions |
| Il sito appare senza stile o vuoto | Il nome del repository non corrisponde a `base` in `vite.config.js` | Allinea il nome o la riga `base` |
| La mappa è grigia o senza tile | La rete blocca le mappe o il servizio è lento | Ricarica la pagina; è normale in demo |
| La modifica non si vede | Il sito si aggiorna in 2-3 minuti; il browser può tenere la vecchia versione | Attendi e ricarica con Ctrl+F5 (Windows) o Cmd+Shift+R (Mac) |
| Errore dopo una modifica al JSON | Manca una virgola o una virgoletta | Ripristina il file: nella cronologia del file, apri la versione precedente |

---

## Parte 9: regole d'oro

- Il repository è **pubblico**: non inserire mai dati personali, numeri di persone reali o password.
- Ogni dato è fittizio e segnato come tale. Non usare il logo del Comune senza autorizzazione.
- Prima di mostrare la demo al Comune, verifica sul sito ufficiale i contatti e riscrivi i testi dei servizi con quelli reali forniti dagli uffici.

---

## Glossario minimo

- **Repository**: la cartella del progetto su GitHub.
- **Commit**: il salvataggio di una modifica, con un messaggio che la descrive.
- **Actions**: il sistema di GitHub che costruisce e pubblica il sito in automatico.
- **Pages**: il servizio di GitHub che ospita il sito sul web.
- **Build**: la trasformazione dei file del progetto in un sito pronto da aprire.
- **JSON**: il formato dei file dati (testo tra virgolette, parentesi e virgole).
