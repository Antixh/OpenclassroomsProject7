import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <img src={ logo } alt="Kasa"/>
      <nav>
        <p>Accueil</p>
        <p>À propos</p>
      </nav>
    </header>
  )
}

export default Header;