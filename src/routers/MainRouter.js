import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Footer } from '../components/UI/Footer';
import { Navbar } from '../components/UI/Navbar/Navbar';
import { Sidenav } from '../components/UI/Sidenav/Sidenav';
import { ClientsScreen } from '../pages/Clients/ClientsScreen';
import { ConfigurationsScreen } from '../pages/Configurations/ConfigurationsScreen';
import { DashboardScreen } from '../pages/Dashboard/DashboardScreen';
import { HomeScreen } from '../pages/Home/HomeScreen';
import { InventoryProducts } from '../pages/Inventory/InventoryProducts';
import { InventoryRawMaterial } from '../pages/Inventory/InventoryRawMaterial';
import { PosScreen } from '../pages/POS/PosScreen';
import { QuoteByPositionScreen } from '../pages/Quote/QuoteByPositionScreen';
import { QuoteProductsScreen } from '../pages/Quote/QuoteProductsScreen';
import { QuoteScreen } from '../pages/Quote/QuoteScreen';
import { UsersScreen } from '../pages/Users/UsersScreen';

export const MainRouter = () => {
  return (
    <div className="g-sidenav-show  bg-gray-100">
      <Sidenav />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Navbar />
        <div class="container-fluid py-4">
          <Switch>
            <Route path="/dashboard" component={DashboardScreen} />
            <Route path="/configuraciones" component={ConfigurationsScreen} />
            <Route path="/usuarios" component={UsersScreen} />
            <Route path="/cotizador-puesto" component={QuoteByPositionScreen} />
            <Route path="/cotizador-productos" component={QuoteProductsScreen} />

            <Route path="/pos" component={PosScreen} />
            <Route path="/inventario-materia-prima" component={InventoryRawMaterial} />
            <Route path="/inventario-productos" component={InventoryProducts} />
            <Route path="/clientes" component={ClientsScreen} />
            {/* <Route exact path="/hero/:heroId" component={HeroScreen} />
      <Route exact path="/dc" component={DcScreen} />
      <Route exact path="/search" component={SearchScreen} /> */}
            <Redirect to="/dashboard" />
          </Switch>
          <Footer />
        </div>
      </main>
    </div>
  );
};
