import s from './CategoryItem.module.css'

function CategoryItem({ id, image, title }) {

    const base_url = 'http://localhost:3333';

  return (
    <div className={s.category_item}>
        <img src={`${base_url}${image}`} alt={title} />
        <h3 className={s.category_title}>{title}</h3>
    </div>
  )
}

export default CategoryItem