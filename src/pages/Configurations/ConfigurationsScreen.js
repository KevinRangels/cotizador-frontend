import React, { useState } from 'react';
import { BasicInfo } from '../../components/Configurations/BasicInfo/BasicInfo';
import { Categories } from '../../components/Configurations/Categories/Categories';
import { MenuConfigurations } from '../../components/Configurations/Categories/MenuConfigurations';
import { ChangePassword } from '../../components/Configurations/ChangePassword/ChangePassword';
import { Notifications } from '../../components/Configurations/Notifications/Notifications';

export const ConfigurationsScreen = () => {
  const [menuSelected, setMenuSelected] = useState('basic-info');

  const handleChangeMenu = (section) => {
    console.log('section', section);
    setMenuSelected(section);
  };

  return (
    <>
      <div>
        <h5 class="mb-0">Configuraciones</h5>
        {/* <p class="text-sm mb-0">Agrega los productos a cotizar</p> */}
      </div>
      <div class="container-fluid my-3 py-3">
        <div class="row mb-5">
          <div class="col-lg-3">
            <MenuConfigurations handleSelectMenu={handleChangeMenu} />
          </div>
          <div class="col-lg-9 mt-lg-0">
            {menuSelected === 'basic-info' && <BasicInfo />}
            {menuSelected === 'password' && <ChangePassword />}
            {menuSelected === 'categories' && <Notifications />}
            {menuSelected === 'notifications' && <Categories />}
          </div>
        </div>
      </div>
    </>
  );
};
