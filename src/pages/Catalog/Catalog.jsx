import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CatalogAside from './CatalogAside/CatalogAside';
import Skeleton from '../../components/Skeleton/Skeleton';
import { getAllItems, setPage } from '../../redux/slices/catalogSlice';

import CatalogRow from './CatalogRow/CatalogRow';

const Catalog = () => {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.catalogSlice.search);

  const items = useSelector((state) => state.catalogSlice.items);
  const status = useSelector((state) => state.catalogSlice.status);
  const category = useSelector((state) => state.catalogSlice.category);
  const sort = useSelector((state) => state.catalogSlice.sort);
  const slider = useSelector((state) => state.catalogSlice.slider);
  const page = useSelector((state) => state.catalogSlice.page);

  // console.log(new Array(Math.ceil(items.length / 6)));

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const queryParamsFromTo = `price_gte=${slider[0]}`;
    const queryParamsApi = `?${category.length ? `category=${category}&` : ''}${
      sort.length && sort !== 'rate'
        ? `_sort=price&_order=${sort}&`
        : sort.length
        ? `_sort=rate&_order=desc&`
        : ''
    }`;
    dispatch(getAllItems({ queryParamsApi, queryParamsFromTo }));
  }, [category, sort, slider]);

  return (
    <>
      <div className="catalog">
        <CatalogAside />
        <div className="catalog__container">
          <div className="catalog__row">
            {status === 'rejected'
              ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
              : status === 'loading'
              ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
              : items
                  .filter((el, idx) => {
                    return page === 1
                      ? idx < 6
                      : idx < page * 6 && idx > page * 6 - 7;
                  })
                  .filter((obj) => {
                    if (
                      obj.title.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return true;
                    }
                    return false;
                  })
                  .map((item) => (
                    <React.Fragment key={item.id}>
                      <CatalogRow item={item} />
                    </React.Fragment>
                  ))}
          </div>
        </div>
      </div>
      <div className="container">
        <ul className="catalog__pagination">
          {new Array(Math.ceil(items.length / 6))
            .fill(null)
            .map((item, idx) => (
              <li
                onClick={() => dispatch(setPage(idx + 1))}
                key={idx}
                className={`catalog__page ${page === idx + 1 ? 'active' : ''}`}
              >
                {idx + 1}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Catalog;
