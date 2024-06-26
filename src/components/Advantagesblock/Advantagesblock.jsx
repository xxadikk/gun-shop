import React from "react";
import "./Advantagesblock.css";
import bookIcon from "../assets/bookIcon.svg";
import chainIcon from "../assets/chainIcon.svg";
import securityIcon from "../assets/securityIcon.svg";
import statKg from "../assets/statKg.svg";
import socialFund from "../assets/socialFund.svg";
import kyrgyzTaxService from "../assets/kyrgyzTaxService.svg";

const Advantagesblock = () => {
  return (
    <div className='advantagesblock'>
      <div className='container'>
        <div className='advantagesblock__body'>
          <div className='container-title'>
            <h4>Преимущества</h4>
          </div>
          <div className='advantagesTop-block'>
            <div className='block__body'>
              <span>Широкий выбор</span>
              <p>
                {" "}
                Мы предлагаем широкий выбор оружия от известных производителей
              </p>
              <div>
                <img src={chainIcon} alt='chainIcon' />
              </div>
            </div>
            <div className='block__body'>
              <span>Конкурентоспособные цены на все наше оружие</span>
              <div>
                <img src={bookIcon} alt='bookIcon' />
              </div>
            </div>
          </div>
          <div className='advantagesCenter-block'>
            <button className='btn'>Начать</button>
          </div>
          <div className='advantagesBottom-block'>
            <div className='block__body'>
              <span>Безопасная доставка</span>
              <p>Мы гарантируем, что ваше оружие будет доставлено безопасно</p>
              <div>
                <img src={securityIcon} alt='securityIcon' />
              </div>
            </div>
            <div className='block__body'>
              <span>Удобные варианты оплаты</span>
              <p>
                Различные варианты оплаты, чтобы вы могли выбрать наиболее
                удобный для вас
              </p>
              <div>
                <img src={chainIcon} alt='chainIcon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantagesblock;
