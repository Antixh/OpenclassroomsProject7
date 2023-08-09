import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <a href="/" ><img src={ logo } alt="Kasa"/></a>
      <nav>
        <a href="/">Accueil</a>
        <a href="/about">À propos</a>
      </nav>
    </header>
  )
}

export default Header;