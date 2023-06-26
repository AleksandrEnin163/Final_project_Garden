import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { filterCategoryProductsByRangeAction, filterCategoryProductsBySaleAction, sortCategoryProductsByDefaultAction, sortCategoryProductsByNameAction, sortCategoryProductsByPriceAscAction, sortCategoryProductsByPriceDescAction } from '../../store/reducers/productsOfCategoryReducer';
import { filterByRangeAction, filterBySaleAction, sortByDefaultAction, sortByNameAction, sortByPriceAscAction, sortByPriceDescAction } from '../../store/reducers/productsReducer';
import s from './Filter.module.css'

export default function Filter({ show_discont_sort, location }) {
  const dispatch = useDispatch()
  const handlerDiscount = (e) => {
    dispatch(location === 'category_products' ? filterCategoryProductsBySaleAction(e.target.checked) : filterBySaleAction(e.target.checked))
  }

  const handleSortOption = (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case 'default':
        dispatch(location === 'category_products' ? sortCategoryProductsByDefaultAction() : sortByDefaultAction())
        break;

      case 'priceDesc':
        dispatch(location === 'category_products' ? sortCategoryProductsByPriceDescAction() : sortByPriceDescAction())
        break

      case 'priceAsc':
        dispatch(location === 'category_products' ? sortCategoryProductsByPriceAscAction() : sortByPriceAscAction())
        break

      case 'name':
        dispatch(location === 'category_products' ? sortCategoryProductsByNameAction() : sortByNameAction())
        break

      default:
        break;
    }
  }

  const fromValueRef = useRef("");
  const toValueRef = useRef("");

  const handleChange = () => {
    const range = {
      from:
        fromValueRef.current.value !== ""
          ? Number(fromValueRef.current.value)
          : undefined,
      to:
        toValueRef.current.value !== ""
          ? Number(toValueRef.current.value)
          : undefined,
    };
    dispatch(
      location === "category_products"
        ? filterCategoryProductsByRangeAction(range)
        : filterByRangeAction(range)
    );
  };

  return (
    <div className={s.filter_container}>
      <div className={s.filter_price}>
        <label>Price</label>
        <input type='number'
          placeholder='from'
          name='from'
          min='0'
          ref={fromValueRef} onChange={handleChange} />
        <input type='number'
          placeholder='to'
          name='to'
          min='0'
          ref={toValueRef}
          onChange={handleChange}
        />
      </div>
      {show_discont_sort && <div className={s.filter_discount}>
        <label>Discounted items</label>
          <input
            className={s.check_box}
            type='checkbox'
            name='check_discount'
            onClick={handlerDiscount}
          />
      </div>}
      <div className={s.filter_sort}>
        <label>Sorted</label>
        <select name='sort_by' onInput={handleSortOption}>
          <option value='default'>by default</option>
          <option value='priceDesc'>price descending</option>
          <option value='priceAsc'>price ascending</option>
          <option value='name'>by name</option>
        </select>
      </div>
    </div>
  )
}