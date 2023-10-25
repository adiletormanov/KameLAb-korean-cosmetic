import React from 'react';
import { Link } from 'react-router-dom';

const Popular = () => {
  return (
    <div className="popular">
      <div className="container">
        <h2 className="popular__title">Популярные категории</h2>
        <div className="popular__block">
          <Link
            to="/catalog"
            style={{ background: '#f3e494' }}
            className="popular__block-category"
          >
            Для жирной кожи
          </Link>
          <Link
            to="/catalog"
            style={{ background: '#f3c2c2' }}
            className="popular__block-category"
          >
            Для сухой кожи
          </Link>
          <Link
            to="/catalog"
            style={{ background: '#b6f4ab' }}
            className="popular__block-category"
          >
            Комбинированная кожа
          </Link>
          <Link
            to="/catalog"
            style={{ background: '#86eaf3' }}
            className="popular__block-category"
          >
            Чувствительная кожа
          </Link>
          <Link
            to="/catalog"
            style={{ background: '#94aff3' }}
            className="popular__block-category"
          >
            Проблемная кожа
          </Link>
          <Link
            to="/catalog"
            style={{ background: '#db94f3' }}
            className="popular__block-category"
          >
            Зрелая кожка
          </Link>
          <Link
            to="/catalog"
            style={{ background: '#f394a0' }}
            className="popular__block-category"
          >
            Для тела
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popular;
