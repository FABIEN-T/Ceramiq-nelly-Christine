import Navbar from './Navbar'
// import LogoRed from '../../assets/LOGO_Kasa.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="contentHeader">
        {/* <h1>            
        <img
          src={LogoRed}
          alt="Logo de l'entreprise Kasa"
          className="headerLogo"
        />
      </h1> */}
        <h1>Christine, Nelly, céramistes</h1>
        <Navbar />
      </div>
    </header>
  )
}
