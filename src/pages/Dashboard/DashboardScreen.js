import React from 'react';
import { Calendar } from '../../components/Dashboard/Calendar/Calendar';

export const DashboardScreen = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="row">
            <h4>Ventas</h4>
            <div className="col-sm-4">
              <div className="card overflow-hidden">
                <div className="card-header p-3 pb-0">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">Diarias</p>
                  <h5 className="font-weight-bolder mb-0">
                    5,927
                    <span className="text-success text-sm font-weight-bolder">+55%</span>
                  </h5>
                </div>
                <div className="card-body p-0">
                  <div className="chart">
                    <canvas id="chart-line-1" className="chart-canvas" height="100"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mt-sm-0 mt-4">
              <div className="card overflow-hidden">
                <div className="card-header p-3 pb-0">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">Semanales</p>
                  <h5 className="font-weight-bolder mb-0">
                    $130,832
                    <span className="text-success text-sm font-weight-bolder">+90%</span>
                  </h5>
                </div>
                <div className="card-body p-0">
                  <div className="chart">
                    <canvas id="chart-line-2" className="chart-canvas" height="100"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mt-sm-0 mt-4">
              <div className="card overflow-hidden">
                <div className="card-header p-3 pb-0">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">Mensuales</p>
                  <h5 className="font-weight-bolder mb-0">
                    $130,832
                    <span className="text-success text-sm font-weight-bolder">+90%</span>
                  </h5>
                </div>
                <div className="card-body p-0">
                  <div className="chart">
                    <canvas id="chart-line-2" className="chart-canvas" height="100"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <Calendar />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 mt-lg-0 mt-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="card p-3">
                <div
                  className="overflow-hidden position-relative border-radius-lg bg-cover h-100"
                  style={{
                    backgroundImage: 'url(../../assets/img/ivancik.jpg);',
                  }}
                >
                  <span className="mask bg-gradient-dark"></span>
                  <div className="card-body position-relative z-index-1 h-100 p-3">
                    <h6 className="text-white font-weight-bolder mb-3">Hey Sheldom!</h6>
                    <p className="text-white mb-3">Aquí tendrás una vista previa de las últimas noticias y actualizaciones de Softla ERP</p>
                    <a className="btn btn-round btn-outline-white mb-0" href="javascript:;">
                      Ver más
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-sm-6">
              <div className="card mt-4">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-4">
                      <img src="../../assets/img/kal-visuals-square.jpg" alt="kal" className="border-radius-lg shadow w-100" />
                    </div>
                    <div className="col-8 my-auto">
                      <p className="text-muted text-sm font-weight-bold">Contactar con soporte</p>
                      <a href="javascript:;" className="btn btn-sm bg-gradient-dark mb-0">
                        Enviar mensaje
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-sm-6">
          <div className="card h-100">
            <div className="card-header pb-0 p-3">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="mb-0">Últimas ventas</h6>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                  <i className="far fa-calendar-alt me-2"></i>
                  <small>23 - 30 March 2021</small>
                </div>
              </div>
            </div>
            <div className="card-body p-3">
              <ul className="list-group">
                <li className="list-group-item border-0 justify-content-between ps-0 pb-0 border-radius-lg">
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i className="fas fa-arrow-down"></i>
                      </button>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">Netflix</h6>
                        <span className="text-xs">27 March 2020, at 12:30 PM</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold ms-auto">- $ 2,500</div>
                  </div>
                  <hr className="horizontal dark mt-3 mb-2" />
                </li>
                <li className="list-group-item border-0 justify-content-between ps-0 pb-0 border-radius-lg">
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i className="fas fa-arrow-up"></i>
                      </button>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">Apple</h6>
                        <span className="text-xs">23 March 2020, at 04:30 AM</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold ms-auto">+ $ 2,000</div>
                  </div>
                  <hr className="horizontal dark mt-3 mb-2" />
                </li>
                <li className="list-group-item border-0 justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i className="fas fa-arrow-up"></i>
                      </button>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">Partner #22213</h6>
                        <span className="text-xs">19 March 2020, at 02:50 AM</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold ms-auto">+ $ 1,400</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-sm-0 mt-4">
          <div className="card h-100">
            <div className="card-header pb-0 p-3">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="mb-0">Últimas cotizaciones</h6>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                  <i className="far fa-calendar-alt me-2"></i>
                  <small>01 - 07 June 2021</small>
                </div>
              </div>
            </div>
            <div className="card-body p-3">
              <ul className="list-group">
                <li className="list-group-item border-0 justify-content-between ps-0 pb-0 border-radius-lg">
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i className="fas fa-arrow-up"></i>
                      </button>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">via PayPal</h6>
                        <span className="text-xs">07 June 2021, at 09:00 AM</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold ms-auto">+ $ 4,999</div>
                  </div>
                  <hr className="horizontal dark mt-3 mb-2" />
                </li>
                <li className="list-group-item border-0 justify-content-between ps-0 pb-0 border-radius-lg">
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i className="fas fa-arrow-up"></i>
                      </button>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">Partner #90211</h6>
                        <span className="text-xs">07 June 2021, at 05:50 AM</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold ms-auto">+ $ 700</div>
                  </div>
                  <hr className="horizontal dark mt-3 mb-2" />
                </li>
                <li className="list-group-item border-0 justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i className="fas fa-arrow-down"></i>
                      </button>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">Services</h6>
                        <span className="text-xs">07 June 2021, at 07:10 PM</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold ms-auto">- $ 1,800</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
