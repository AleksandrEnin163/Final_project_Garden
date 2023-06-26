import s from './Header.module.css';
import logo from './media/logo.png';
import cart from './media/cart.png'
import { useSelector } from "react-redux";

function Header() {
    const menu_li = [
        { title: "Main Page", link: "/" },
        { title: "All products", link: "/products/all" },
        { title: "All sales", link: "/sales/all" }
      ];

      const cart_info = useSelector((store) => store.cart);
      const counter = cart_info.reduce((accum, elem) => accum + elem.count, 0);

  return (
    <div className={s.header}>
        <div className={s.logo_button_container}>
            <a href='/'><img src={logo} alt="logo" /></a>
            <a href='/categories/all'><button>Catalog</button></a>
        </div>
        <div className={s.nav_menu}>
            {menu_li.map((elem, index) => <a href={elem.link} key={index}>{elem.title}</a>)}
        </div>
        <div className={s.cart}>
        <a href='/cart'>
            <img src={cart} alt='cart_image' />
            {counter > 0 && (
            <div className={s.cart_counter}>
                <p>{counter}</p>
            </div>
            )}
        </a>
        </div>
  </div>
  )
}

export default Header