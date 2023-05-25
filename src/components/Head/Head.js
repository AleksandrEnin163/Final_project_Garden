import s from './Head.module.css'
import garten from './media/garten.png'

function Head() {
  return (
    <div className={s.head_container}>
        <div className={s.head_sale}>
            <h1>Sale</h1>
            <h2>New season</h2>
            <button>Sale</button>
        </div>
        <img className={s.head_img} src={garten} alt='garten'></img>
    </div>
  )
}

export default Head