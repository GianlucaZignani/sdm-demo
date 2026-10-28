import { useState } from 'react'
import Mappa from './components/Mappa.jsx'
import Filtri from './components/Filtri.jsx'
import Servizi from './components/Servizi.jsx'
import Avvisi from './components/Avvisi.jsx'
import Contatti from './components/Contatti.jsx'
import { CATEGORIE } from './categorie.js'

const TUTTE_LE_CATEGORIE = Object.keys(CATEGORIE)

const SCHEDE = [
  { id: 'mappa', etichetta: 'Mappa' },
  { id: 'servizi', etichetta: 'Servizi' },
  { id: 'avvisi', etichetta: 'Avvisi' },
  { id: 'contatti', etichetta: 'Contatti' },
]

export default function App() {
  const [scheda, setScheda] = useState('mappa')
  const [categorieAttive, setCategorieAttive] = useState(TUTTE_LE_CATEGORIE)
  const [testoGrande, setTestoGrande] = useState(false)
  const [altoContrasto, setAltoContrasto] = useState(false)

  const classi = [
    testoGrande ? 'testo-grande' : '',
    altoContrasto ? 'alto-contrasto' : '',
  ].join(' ')

  return (
    <div className={`app ${classi}`}>
      <header className="intestazione">
        <div>
          <h1>San Donato Milanese</h1>
          <p className="avviso-demo">DEMO NON UFFICIALE: dati di esempio</p>
        </div>
        <div className="impostazioni-accessibilita">
          <button
            onClick={() => setTestoGrande(!testoGrande)}
            aria-pressed={testoGrande}
          >
            Testo grande
          </button>
          <button
            onClick={() => setAltoContrasto(!altoContrasto)}
            aria-pressed={altoContrasto}
          >
            Alto contrasto
          </button>
        </div>
      </header>

      <main className="contenuto">
        {scheda === 'mappa' && (
          <>
            <Filtri
              categorieAttive={categorieAttive}
              setCategorieAttive={setCategorieAttive}
            />
            <Mappa categorieAttive={categorieAttive} />
          </>
        )}
        {scheda === 'servizi' && <Servizi />}
        {scheda === 'avvisi' && <Avvisi />}
        {scheda === 'contatti' && <Contatti />}
      </main>

      <nav className="barra-inferiore" aria-label="Navigazione principale">
        {SCHEDE.map((s) => (
          <button
            key={s.id}
            onClick={() => setScheda(s.id)}
            aria-current={scheda === s.id ? 'page' : undefined}
            className={scheda === s.id ? 'attiva' : ''}
          >
            {s.etichetta}
          </button>
        ))}
      </nav>
    </div>
  )
}
