import image from './media/404Error.png'
import s from './ErrorPage.module.css'

function ErrorPage() {
  return (
    <div className={s.container_404}>
      <img src={image} alt='404'></img>
    </div>
  )
}

export default ErrorPage