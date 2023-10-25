import React from 'react';
import api from './api.js';

export const CustomContext = React.createContext();

const Context = (props) => {
  const [sales, setSales] = React.useState([]);
  const [news, setNews] = React.useState([]);
  const [hits, setHits] = React.useState([]);
  const [shop, setShop] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [carts, setCarts] = React.useState([]);
  const [myOrders, setMyOrders] = React.useState([]);
  const [product, setProduct] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const [items, setItems] = React.useState([]);
  const [category, setCategory] = React.useState('');
  const [sort, setSort] = React.useState('');
  const [slider, setSlider] = React.useState([0, 3000]);
  const [page, setPage] = React.useState(1);

  const [skeleton, setSkeleton] = React.useState(true);

  const changeCategory = (event) => {
    setCategory(event.target.value);
    setPage(1);
  };

  const getAllItems = async () => {
    let queryParamsApi = `?${category.length ? `category=${category}&` : ''}${
      sort.length && sort !== 'rate'
        ? `_sort=price&_order=${sort}&`
        : sort.length
        ? `_sort=rate&_order=desc&`
        : ''
    }`;

    // let queryParamsFromTo = `price_gte=${slider[0]}`;

    try {
      const res = await api(`products${queryParamsApi}_limit=78`);
      setItems(res.data);
    } catch (error) {
      alert('Ошибка при получении товаров');
      console.log('ERROR', error);
    } finally {
      setSkeleton(false);
    }
  };

  const changeSort = (event) => {
    setSort(event.target.value);
    setPage(1);
  };

  const getSameProducts = () => {
    api(`products?_limit=6`)
      .then((res) => setShop(res.data))
      .catch((err) => console.log(err));
  };

  const getSaleProducts = (limit = 12) => {
    api(`products?_sort=sale&_order=desc&_limit=${limit}`)
      .then((res) => {
        setSales(res.data);
        setSkeleton(false);
      })
      .catch((err) => console.log(err));
  };

  const getNewProducts = () => {
    api(`products?_sort=new&_order=asc&_limit=6`)
      .then((res) => setNews(res.data))
      .catch((err) => console.log(err));
  };

  const getHitProducts = () => {
    api(`products?_sort=hits&_order=desc&_limit=6`).then((res) =>
      setHits(res.data),
    );
  };

  const favoritesHandler = (item) => {
    let findProduct = favorites.some((el) => el.id === item.id);

    if (findProduct) {
      setFavorites((prev) => prev.filter((el) => el.id !== item.id));
    } else {
      setFavorites((prev) => [...prev, item]);
    }
  };

  const cartsHandler = (product) => {
    let findProduct = carts.some((el) => el.id === product.id);

    if (findProduct) {
      setCarts((prev) => prev.filter((el) => el.id !== product.id));
    } else {
      setCarts((prev) => [
        ...prev,
        {
          ...product,
          count: 1,
        },
      ]);
    }
  };

  const cartCountPlus = (id) => {
    setCarts((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      }),
    );
  };

  const cartCountMinus = (id) => {
    let count = carts.find((item) => item.id === id).count;

    if (count === 1) {
      setCarts((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCarts((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        }),
      );
    }
  };

  const delCart = (id) => {
    setCarts((prev) => prev.filter((item) => item.id !== id));
  };

  const value = {
    getAllItems,
    changeSort,
    changeCategory,
    delCart,
    cartCountMinus,
    cartCountPlus,
    getHitProducts,
    getSaleProducts,
    getNewProducts,
    getSameProducts,
    favoritesHandler,
    cartsHandler,
    sales,
    news,
    hits,
    shop,
    product,
    setProduct,
    favorites,
    carts,
    setCarts,
    show,
    setShow,
    search,
    setSearch,
    myOrders,
    setMyOrders,
    page,
    setPage,
    items,
    setItems,
    category,
    setCategory,
    sort,
    setSort,
    slider,
    setSlider,
    skeleton,
    setSkeleton,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
export default Context;
