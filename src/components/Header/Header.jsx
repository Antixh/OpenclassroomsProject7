import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <img src={ logo } alt="Kasa"/>
      <nav>
        <a href="/">Accueil</a>
        <a href="/about">À propos</a>
      </nav>
    </header>
  )
}

export default Header;