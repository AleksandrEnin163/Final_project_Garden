import CategoryItem from '../CategoryItem/CategoryItem'
import s from './CategoriesList.module.css'

function CategoriesList({ categories, title, btn }) {
  return (
    <div className={s.categories_list_container}>
        <div className={s.categories_list_head}>
            <h2>{title}</h2>
            {btn && <a href='/catalog'><button>All categories</button></a>}
        </div>
        <div className={s.categories_grid}>
            {categories.map(elem => <a href={`/categories/${elem.id}`} key={elem.id}><CategoryItem {...elem} /></a>)}
        </div>
    </div>
  )
}

export default CategoriesList