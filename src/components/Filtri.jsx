import { CATEGORIE } from '../categorie.js'

export default function Filtri({ categorieAttive, setCategorieAttive }) {
  const tutte = Object.keys(CATEGORIE)

  function attivaDisattiva(id) {
    if (categorieAttive.includes(id)) {
      setCategorieAttive(categorieAttive.filter((c) => c !== id))
    } else {
      setCategorieAttive([...categorieAttive, id])
    }
  }

  return (
    <section className="filtri" aria-label="Filtri della mappa">
      <div className="filtri-azioni">
        <button onClick={() => setCategorieAttive(tutte)}>Tutti</button>
        <button onClick={() => setCategorieAttive([])}>Nessuno</button>
      </div>
      <ul className="legenda">
        {tutte.map((id) => (
          <li key={id}>
            <label>
              <input
                type="checkbox"
                checked={categorieAttive.includes(id)}
                onChange={() => attivaDisattiva(id)}
              />
              <span
                className="pallino"
                style={{ background: CATEGORIE[id].colore }}
                aria-hidden="true"
              />
              <span aria-hidden="true">{CATEGORIE[id].icona}</span>
              <span>{CATEGORIE[id].etichetta}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}
