import React from "react";
import "../RatesBlock/RatesBlock.css";
import oneGun from "../assets/1G.webp";
import twoGun from "../assets/2G.webp";
import threeGun from "../assets/3G.webp";
import fourGun from "../assets/4G.webp";
import sevenGun from "../assets/7G.webp";
import eightGun from "../assets/8G.webp";
import nineGun from "../assets/9G.webp";
import tenGun from "../assets/10G.webp";
import elevenGun from "../assets/11G.webp";
import twelveGun from "../assets/12G.webp";

const RatesBlock = () => {
  return (
    <div className='RatesBlock'>
      <div className='container'>
        <div className='RatesBlock__body'>
          <div className='container-title'>
            <h4>Каталог оружий</h4>
          </div>
          <div className='RatesBlock-section'>
            <div className='RatesBlock-section__block'>
              <div>
                <img src={oneGun} alt='oneGun' />
              </div>
              <span>Grand Power T12-FM2 10x28 </span>
              <h5>74 490 руб</h5>
              <p>в наличии 40шт</p>
              <button className='btn'>Заказать</button>
            </div>
            <div className='RatesBlock-section__block'>
              <div>
                <img src={twoGun} alt='twoGun' />
              </div>
              <span>Grand Power T15-F к.45x30</span>
              <h5>69 290 руб</h5>
              <p>в наличии 25шт</p>
              <button className='btn'>Заказать</button>
            </div>
            <div className='RatesBlock-section__block'>
              <div>
                <img src={threeGun} alt='threeGun' />
              </div>
              <span>Grand Power TQ1 10x28</span>
              <h5>69 890 руб</h5>
              <p>в наличии 10шт</p>
              <button className='btn'>Заказать</button>
            </div>
            <div className='RatesBlock-section__block'>
              <div>
                <img src={fourGun} alt='fourGun' />
              </div>
              <span>Grand Power TQ2 10x28 (ОООП)</span>
              <h5>69 890 руб</h5>
              <p>в наличии 10шт</p>
              <button className='btn'>Заказать</button>
            </div>
            <div className='RatesBlock-section__block'>
              <div>
                <img src={sevenGun} alt='sevenGun' />
              </div>
              <span>PPT KURS 9мм Р.А</span>
              <h5>34 500 руб</h5>
              <p>в наличии 20шт</p>
              <button className='btn'>Заказать</button>
            </div>
            <div className='RatesBlock-section__block'>
              <div>
                <img src={eightGun} alt='eightGun' />
              </div>
              <span>Гроза-3А 9мм</span>
              <h5>49 900 руб</h5>
              <p>в наличии 220шт</p>
              <button className='btn'>Заказать</button>
            </div>
            <div className='RatesBlock-section__block'>
              <div>
                <img src={nineGun} alt='nineGun' />
              </div>
              <span>Гроза-3А 9мм с деревянными накладками</span>
              <h5>49 900 руб</h5>
              <p>в наличии 200шт</p>
              <button className='btn'>Заказать</button>
            </div>
            <div className='RatesBlock-section__block'>
              <div>
                <img src={tenGun} alt='tenGun' />
              </div>
              <span>М9К (ОООП) к 9мм РА</span>
              <h5>43 500 руб</h5>
              <p>в наличии 0шт</p>
              <button className='btn'>Заказать</button>
            </div>
            <div className='RatesBlock-section__block'>
              <div>
                <img src={elevenGun} alt='elevenGun' />
              </div>
              <span>М9К (ОООП) к 9мм РА</span>
              <h5>43 500 руб</h5>
              <p>в наличии 12шт</p>
              <button className='btn'>Заказать</button>
            </div>
            <div className='RatesBlock-section__block'>
              <div>
                <img src={twelveGun} alt='twelveGun' />
              </div>
              <span>ПСС 9РА (Стечкин)</span>
              <h5>58 800 руб</h5>
              <p>в наличии 40шт</p>
              <button className='btn'>Заказать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatesBlock;
