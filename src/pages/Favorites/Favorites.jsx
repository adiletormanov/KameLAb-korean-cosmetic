import React from 'react';
import Card from '../../components/Card/Card';
import { CustomContext } from '../../utils/context';

const Favorites = () => {
  const { favorites } = React.useContext(CustomContext);

	React.useEffect(() => {
		window.scrollTo(0, 0);
  }, []);

  if (favorites.length) {
    return (
        <section class="favorites">
          <div class="container">
            <div class="favorites__block">
              <h2 class="favorites__title">Избранные товары</h2>

              <div class="favorites__row">

                {favorites.map((item) => (
                  <React.Fragment key={item.id}>
                    <Card item={item} />
                  </React.Fragment>
                ))}


              </div>
              <div className="favorites__see">
                <button className="favorites__see-all">
                  Показать все хиты
                </button>
              </div>
            </div>
          </div>

      </section>
    );
  } else {
    return <h2 className="favorites__empty">Список избранных пуст</h2>;
  }
};

export default Favorites;
