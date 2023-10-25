import React from 'react';

import notfound from '../../assets/img/NotFound.png';

const NotFound = () => {



  return (
    <section className="notFound">
      <div className="notFound__container">
        <h2 className="notFound__title">Страница не найдена</h2>
				<img className='notFound__img' src={notfound} alt="" />

      </div>
    </section>
  );

};

export default NotFound;
