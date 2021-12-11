import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '../../components/UI/Login/Navbar';
import { LoginForm } from '../../components/UI/Login/LoginForm';
import { Footer } from '../../components/UI/Login/Footer';

export const LoginScreen = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="main-content  mt-0">
        <div
          class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
          style={{
            backgroundImage: 'url(../../../assets/img/curved-images/curved9.jpg)',
          }}
        >
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 text-center mx-auto">
                <h1 className="text-white mb-2 mt-5">Bienvenido!</h1>
                <p className="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
              <div className="card z-index-0">
                <div className="card-header text-center pt-4">
                  <h5>Ingresar</h5>
                </div>
                <div className="card-body">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
