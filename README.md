# SDM Demo: San Donato Milanese

**Demo non ufficiale.** Questa applicazione è un prototipo dimostrativo.
Tutti i luoghi, gli avvisi e i servizi sono dati di esempio, contrassegnati come "dato fittizio".
Non è un servizio del Comune di San Donato Milanese e non va usata per pratiche reali.

## Cosa contiene

- Mappa con pin colorati, filtri per categoria e schede dei luoghi
- Sezione Servizi con una pratica di esempio completa
- Avvisi, con un esempio urgente
- Contatti pubblici presi dal sito ufficiale del Comune
- Impostazioni di accessibilità: testo grande e alto contrasto

## Dove sono i dati

Tutti i contenuti stanno nella cartella `src/data/`:

- `luoghi.json`: luoghi sulla mappa
- `servizi.json`: pratiche e servizi
- `avvisi.json`: avvisi e comunicazioni

Per modificarli si usa l'editor di GitHub: apri il file, clicca sull'icona a matita, modifica e salva con **Commit changes**.
Dopo circa 2-3 minuti il sito si aggiorna da solo.

## Pubblicazione

Ogni modifica caricata sul ramo `main` viene pubblicata automaticamente da GitHub Actions
(file `.github/workflows/deploy.yml`).
