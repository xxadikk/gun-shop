import React from "react";
import "../ProductsInfo/ProductsInfo.css";

const ProductsInfo = () => {
  return (
    <div className='productsInfo'>
      <div className='container'>
        <div className='productsInfo__body'>
          <div className='productsInfo-blocks'>
            <div className='productsInfo-block'>
              <h4>Надежность: </h4>
              <span>
                Изготовлены из прочной стали и оснащены надежными замками,
                обеспечивая сохранность вашего оружия от несанкционированного
                доступа.
              </span>
            </div>
            <div className='productsInfo-block'>
              <h4>Разнообразие: </h4>
              <span>
                Широкий выбор моделей различных размеров, типов и функций, чтобы
                соответствовать вашим индивидуальным потребностям.
              </span>
            </div>
            <div className='productsInfo-block'>
              <h4>Пистолетные сейфы: </h4>
              <span>
                Компактные сейфы для хранения пистолетов, револьверов и других
                небольших единиц оружия.
              </span>
            </div>
            <div className='productsInfo-block'>
              <h4>Где купить оружейный сейф "Арсенал":</h4>
              <span>
                В нашем магазине: Посетите наш магазин, чтобы ознакомиться с
                полным ассортиментом сейфов "Арсенал" и получить консультацию от
                наших специалистов. На нашем сайте: Выберите сейф в нашем
                онлайн-каталоге и закажите его с доставкой по всей стране.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsInfo;
