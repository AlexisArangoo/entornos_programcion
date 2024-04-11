import { Link } from 'react-router-dom'
import './styles/Home.css'

const Home = () => {
  return (
    <section className="home">
        <h1 className="home__title">ENTORNOS DE PROGRAMACIÓN</h1>

        <article className="home__article">
            <Link to='/primitivos' className="home__article-entornos home__article-propiedad">
                <h2>Primitivos</h2>
            </Link>
            <Link to='/libres' className="home__article-entornos home__article-libres">
                <h2>Uso Libre</h2>
            </Link>
        </article>
    </section>
  )
}

export default Home