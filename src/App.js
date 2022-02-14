import './App.sass';

export default function App() {
  return (
    <main className={'main container-fluid'}>
      <img className={'main__logo mx-auto d-block'}
           src="img/logo.svg" alt="Logo"/>

      <div className={'main__outer'}>

          <div className={'main__form-wrap'}>
              <form className={'main__form'}>
                  <span className={'main__form-title d-block'}>
                    Количество пересадок
                  </span>
                  <div className={'input-outer'}>
                      <div className={'input-inner'}>
                          <input className={'main__transfers-checkbox'} type={'checkbox'}
                                 id={'no-transfers'} name={'no-transfers'}/>
                          <label className={'form-label'} htmlFor={'no-transfers'}>
                              Без пересадок
                          </label>
                      </div>
                  </div>
              </form>

              <form className={'main__form'}>
                  <span className={'main__form-title d-block'}>
                      Компания
                  </span>

                  <div className={'input-outer'}>
                      <div className={'input-inner'}>
                          <input className={'main__company-radio'}
                                 type={'radio'} id={'all-companies'}
                                 name={'companies'}
                          />
                          <label className={'form-label'}
                                 htmlFor={'all-companies'}
                          >Все</label>
                      </div>
                      <div className={'input-outer'}>
                          <div className={'input-inner'}>
                              <input className={'main__company-radio'}
                                     type={'radio'} id={'s7-airlines'}
                                     name={'companies'}
                              />
                              <label className={'form-label'}
                                     htmlFor={'s7-airlines'}
                              >S7 Airlines</label>
                          </div>
                      </div>
                      <div className={'input-outer'}>
                          <div className={'input-inner'}>
                              <input className={'main__company-radio'}
                                     type={'radio'} id={'xiamen-air'}
                                     name={'companies'}
                              />
                              <label className={'form-label'}
                                     htmlFor={'xiamen-air'}
                              >XiamenAir</label>
                          </div>
                      </div>
                  </div>

              </form>

          </div>

          <div className={'main__wrap'}>
              <div className={'main__button-wrap'}>
                  <button className={'sort-button left-border-radius active-button'}>
                      Самый дешевый
                  </button>
                  <button className={'sort-button'}>Самый быстрый</button>
                  <button className={'sort-button right-border-radius'}>Оптимальный</button>
              </div>

              <div className={'main__card-outer container-fluid'}>
                  <section className="main__section card">
                      <div className={'main__price-logo-wrap d-flex justify-content-between'}>
                          <span className={'main__price d-block'}>13 400 Р</span>
                          <div className={'main__img-wrap'}>
                              <img className={'main__avia-logo'} src="img/XiamenAir%20Logo.png"
                                   alt="Avia company logo"/>
                          </div>
                      </div>
                      <div className="main__card-wrap row row-cols-3">
                          <div className="col">
                              <span className={'main__card-title d-block'}>MOW - HKT</span>
                              <span className={'main__card-value d-block'}>10:45 - 08:00</span>
                          </div>
                          <div className="col">
                              <span className={'main__card-title d-block'}>MOW - HKT</span>
                              <span className={'main__card-value d-block'}>10:45 - 08:00</span>
                          </div>
                          <div className="col">
                              <span className={'main__card-title d-block'}>MOW - HKT</span>
                              <span className={'main__card-value d-block'}>10:45 - 08:00</span>
                          </div>
                          <div className="col">
                              <span className={'main__card-title d-block'}>MOW - HKT</span>
                              <span className={'main__card-value d-block'}>10:45 - 08:00</span>
                          </div>
                          <div className="col">
                              <span className={'main__card-title d-block'}>MOW - HKT</span>
                              <span className={'main__card-value d-block'}>10:45 - 08:00</span>
                          </div>
                          <div className="col">
                              <span className={'main__card-title d-block'}>MOW - HKT</span>
                              <span className={'main__card-value d-block'}>10:45 - 08:00</span>
                          </div>
                      </div>
                  </section>

                  <section className="main__section card">
                      <div className={'main__price-logo-wrap d-flex justify-content-between'}>
                          <span className={'main__price d-block'}>13 400 Р</span>
                          <div className={'main__img-wrap'}>
                              <img className={'main__avia-logo'} src="img/S7%20Logo.png"
                                   alt="Avia company logo"/>
                          </div>
                      </div>
                      <div className="main__card-wrap row row-cols-3">
                          <div className="col">
                              <span className={'main__card-title d-block'}>MOW - HKT</span>
                              <span className={'main__card-value d-block'}>10:45 - 08:00</span>
                          </div>
                          <div className="col">
                              <span className={'main__card-title d-block'}>MOW - HKT</span>
                              <span className={'main__card-value d-block'}>10:45 - 08:00</span>
                          </div>
                          <div className="col">
                              <span className={'main__card-title d-block'}>MOW - HKT</span>
                              <span className={'main__card-value d-block'}>10:45 - 08:00</span>
                          </div>
                          <div className="col">
                              <span className={'main__card-title d-block'}>MOW - HKT</span>
                              <span className={'main__card-value d-block'}>10:45 - 08:00</span>
                          </div>
                          <div className="col">
                              <span className={'main__card-title d-block'}>MOW - HKT</span>
                              <span className={'main__card-value d-block'}>10:45 - 08:00</span>
                          </div>
                          <div className="col">
                              <span className={'main__card-title d-block'}>MOW - HKT</span>
                              <span className={'main__card-value d-block'}>10:45 - 08:00</span>
                          </div>
                      </div>
                  </section>

                  <div className={'main__button-wrap'}>
                      <button className={'sort-button left-border-radius ' +
                      'right-border-radius active-button w100'}>
                          Показать еще 5 билетов!
                      </button>
                  </div>
              </div>

          </div>

      </div>

    </main>
  );
}
