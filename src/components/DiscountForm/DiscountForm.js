import s from './DiscountForm.module.css'
import gnom from './media/gnom.png'

function DiscountForm() {
    const getDiscount = (e) => {
		e.preventDefault();
		e.target.reset();
	};
  return (
    <div className={s.discount_form_container}>
        <img src={gnom} alt='gnom'></img>
        <div className={s.discount_form}>
            <p>5% off</p>
            <p>on the first order</p>
            <form onSubmit={getDiscount}>
                <input type='text' name='number' placeholder='+49' minLength='12' maxLength='12'/>
                <button className={s.discount_form_btn}>Get a discount</button>
            </form>
        </div>
    </div>
  )
}

export default DiscountForm