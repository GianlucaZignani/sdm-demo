import { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import luoghi from '../data/luoghi.json'
import { CATEGORIE } from '../categorie.js'

// Centro indicativo di San Donato Milanese
const CENTRO = [9.2744, 45.4017]

export default function Mappa({ categorieAttive }) {
  const contenitoreRef = useRef(null)
  const mappaRef = useRef(null)
  const pinRef = useRef([])
  const [luogoSelezionato, setLuogoSelezionato] = useState(null)

  // Crea la mappa una sola volta
  useEffect(() => {
    const mappa = new maplibregl.Map({
      container: contenitoreRef.current,
      style: {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors',
          },
        },
        layers: [{ id: 'osm', type: 'raster', source: 'osm' }],
      },
      center: CENTRO,
      zoom: 14,
    })
    mappa.addControl(new maplibregl.NavigationControl(), 'top-right')
    mappaRef.current = mappa
    return () => mappa.remove()
  }, [])

  // Aggiorna i pin quando cambiano i filtri
  useEffect(() => {
    const mappa = mappaRef.current
    if (!mappa) return
    pinRef.current.forEach((pin) => pin.remove())
    pinRef.current = []

    luoghi
      .filter((l) => categorieAttive.includes(l.categoria))
      .forEach((luogo) => {
        const pin = new maplibregl.Marker({ color: CATEGORIE[luogo.categoria].colore })
          .setLngLat([luogo.lng, luogo.lat])
          .addTo(mappa)
        pin.getElement().setAttribute('role', 'button')
        pin.getElement().setAttribute('aria-label', luogo.nome)
        pin.getElement().addEventListener('click', () => setLuogoSelezionato(luogo))
        pinRef.current.push(pin)
      })
  }, [categorieAttive])

  return (
    <div className="mappa-contenitore">
      <div ref={contenitoreRef} className="mappa" />
      {luogoSelezionato && (
        <article className="scheda-luogo" role="dialog" aria-label="Scheda del luogo">
          <h2>{luogoSelezionato.nome}</h2>
          <p><strong>Categoria:</strong> {CATEGORIE[luogoSelezionato.categoria].etichetta}</p>
          <p><strong>Indirizzo:</strong> {luogoSelezionato.indirizzo}</p>
          <p><strong>Orari:</strong> {luogoSelezionato.orari}</p>
          {luogoSelezionato.telefono && (
            <p><strong>Telefono:</strong> {luogoSelezionato.telefono}</p>
          )}
          <p>
            <strong>Accessibilità:</strong>{' '}
            {luogoSelezionato.accessibile ? 'sì' : 'da verificare'}
          </p>
          <p className="fonte">Fonte: {luogoSelezionato.fonte}</p>
          <button onClick={() => setLuogoSelezionato(null)}>Chiudi</button>
        </article>
      )}
    </div>
  )
}
