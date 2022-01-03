import React from 'react';

export const ChangePassword = () => {
  return (
    <div class="card" id="password">
      <div class="card-header">
        <h5>Cambiar contraseña</h5>
      </div>
      <div class="card-body pt-0">
        <label class="form-label">Constraseña actual</label>
        <div class="form-group">
          <input class="form-control" type="password" placeholder="Current password" />
        </div>
        <label class="form-label">Nueva contraseña</label>
        <div class="form-group">
          <input class="form-control" type="password" placeholder="New password" />
        </div>
        <label class="form-label">Confirmar constraseña</label>
        <div class="form-group">
          <input class="form-control" type="password" placeholder="Confirm password" />
        </div>
        <button class="btn bg-gradient-dark btn-sm float-end mt-3 mb-0">Actualizar contraseña</button>
      </div>
    </div>
  );
};
