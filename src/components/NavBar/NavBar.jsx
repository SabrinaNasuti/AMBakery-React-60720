import { CartWidget } from "../CartWidget/CartWidget"
import logo from "./assets/logo.png"
import navBarStyle from "./navBarStyle/navBar.module.css"

export const NavBar = () => {
  return (
    <nav>      
      <h3>AM Bakery</h3>
      <img src={ logo } alt="logo-AMBakery" className={ navBarStyle.logo }/>
      <div>
        <button>Tortas</button>
        <button>Macarons</button>
        <button>Alfajores</button>        
      </div>
      <CartWidget />
    </nav>
  )
}
