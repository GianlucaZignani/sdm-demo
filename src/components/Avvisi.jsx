import avvisi from '../data/avvisi.json'

export default function Avvisi() {
  return (
    <section>
      <h2>Avvisi</h2>
      <ul className="lista-card">
        {avvisi.map((a) => (
          <li key={a.id} className={a.tipo === 'urgente' ? 'avviso urgente' : 'avviso'}>
            <p className="etichetta">
              {a.tipo === 'urgente' ? 'URGENTE' : 'Informazione'} · {a.data}
            </p>
            <h3>{a.titolo}</h3>
            <p>{a.testo}</p>
            <p className="fonte">Fonte: {a.fonte}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
