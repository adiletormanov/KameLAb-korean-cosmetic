import React from 'react';
import CatalogSelect from '../CatalogSelect/CatalogSelect';
import CatalogRange from '../CatalogRange/CatalogRange';
import CatalogSlider from '../CatalogSlider/CatalogSlider';
import { useDispatch } from 'react-redux';

import { setCategory, setSort, setSlider } from '../../../redux/slices/catalogSlice';

const CatalogAside = () => {


  const dispatch = useDispatch();

  const array1 = ['asc', 'desc', 'rate'];

  const array2 = [
    'Для жирной кожи',
    'Для сухой кожи',
    'Комбинированная кожа',
    'Чувствительная кожа',
    'Проблемная кожа',
    'Зрелая кожка',
    'Для тела',
  ];

  const resetFilter = () => {
    dispatch(setSort(''));
    dispatch(setCategory(''));
    setSlider([0, 4000]);
  };

  return (
    <>
      <aside className="aside">
        <h2 className="aside__title-text">Фильтры</h2>

        <div className="aside__price">
          <h2 className="aside__price-title">Цена</h2>

          <div className="aside__price-option">
            <CatalogSlider />
          </div>

          <div className="aside__price-selects">
            <CatalogSelect array1={array1} title="Сортировать" />
          </div>
        </div>

        <div className="aside__product">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="342"
              height="2"
              viewBox="0 0 342 2"
              fill="none"
            >
              <path d="M0 1H342" stroke="black" strokeOpacity="0.2" />
            </svg>
          </div>

          <div className="aside__product-type">
            <h2 className="aside__product-title">Тип продукта</h2>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="342"
              height="2"
              viewBox="0 0 342 2"
              fill="none"
            >
              <path d="M0 1H342" stroke="black" strokeOpacity="0.2" />
            </svg>
          </div>
        </div>

        <div className="aside__brand">
          <CatalogRange array2={array2} title="Все категории" />
        </div>

        <div className="aside__product">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="342"
              height="2"
              viewBox="0 0 342 2"
              fill="none"
            >
              <path d="M0 1H342" stroke="black" strokeOpacity="0.2" />
            </svg>
          </div>

          <div className="aside__product-type">
            <h2 className="aside__product-title">Эффект</h2>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="342"
              height="2"
              viewBox="0 0 342 2"
              fill="none"
            >
              <path d="M0 1H342" stroke="black" strokeOpacity="0.2" />
            </svg>
          </div>
        </div>

        <div className="aside__button">
          <button className="aside__button-ok">Применить</button>
          <button
            onClick={resetFilter}
            variant="contained"
            className="aside__button-clear"
          >
            Сбросить фильтры
          </button>
        </div>
      </aside>
    </>
  );
};

export default CatalogAside;
