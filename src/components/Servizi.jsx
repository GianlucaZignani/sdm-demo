import { useState } from 'react'
import servizi from '../data/servizi.json'

export default function Servizi() {
  const [aperto, setAperto] = useState(null)

  if (aperto) {
    return (
      <section className="pagina-servizio">
        <button onClick={() => setAperto(null)}>← Torna ai servizi</button>
        <h2>{aperto.titolo}</h2>
        <p>{aperto.descrizione}</p>

        <h3>Come fare</h3>
        <ol>
          {aperto.passaggi.map((p, i) => <li key={i}>{p}</li>)}
        </ol>

        <h3>Documenti necessari</h3>
        <ul>
          {aperto.documenti.map((d, i) => <li key={i}>{d}</li>)}
        </ul>

        <p><strong>Costo:</strong> {aperto.costo}</p>
        <p><strong>Tempi:</strong> {aperto.tempi}</p>
        <p><strong>Ufficio:</strong> {aperto.ufficio}</p>
        <p className="fonte">Fonte: {aperto.fonte}</p>
      </section>
    )
  }

  return (
    <section>
      <h2>Servizi</h2>
      <ul className="lista-card">
        {servizi.map((s) => (
          <li key={s.id}>
            <button className="card" onClick={() => setAperto(s)}>
              <strong>{s.titolo}</strong>
              <span>{s.descrizione}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
