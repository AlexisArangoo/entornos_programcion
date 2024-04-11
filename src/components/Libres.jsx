import { useState } from "react"

import './styles/Libres.css'
import { Link } from "react-router-dom"

const Libres = ({icon, icondescription}) => {
  const [currentIcon, setCurrentIcon] = useState(1)

  const imgDescription = icondescription.filter(description => description.id === currentIcon)

  return (
    <section className="libres">
      <article className="libres__container">
        <ul className="libres__list">
          {
            icon.map(icon => (
              <li key={icon.id} className="libres__icon" onClick={() => setCurrentIcon(icon.id)}> 
                <img  src={icon.url} alt="" />
              </li>
            ))
          }
        </ul>
        <div className="libres__description">
          <img src={imgDescription[0].url} alt="" />
        </div>
      </article>
      <Link to="/"><img src="/img/icon/flecha-atras.webp" className="flecha-atras" alt="" /></Link>
    </section>
  )
}

export default Libres