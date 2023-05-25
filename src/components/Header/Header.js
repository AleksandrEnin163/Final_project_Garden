import s from './Header.module.css';
import logo from './media/logo.png';
import cart from './media/cart.png'

function Header() {
    const menu_li = [
        { title: "Main Page", link: "/" },
        { title: "All products", link: "/products/all" },
        { title: "All sales", link: "/sales/all" }
      ];
  return (
    <div className={s.header}>
        <div className={s.logo_button_container}>
            <a href='/'><img src={logo} alt="logo" /></a>
            <button>Catalog</button>
        </div>
        <div className={s.nav_menu}>
            {menu_li.map((elem, index) => <a href={elem.link} key={index}>{elem.title}</a>)}
        </div>
        <a href='/cart'><img src={cart} alt='cart_image' /></a>
  </div>
  )
}

export default Header