import React, { useEffect } from 'react';
import Choices from 'choices.js';

export const SelectTags = ({ id, name = '', label, options = [], search = false, multiple = false }) => {
  useEffect(() => {
    if (document.getElementById(id)) {
      var element = document.getElementById(id);
      new Choices(element, {
        searchEnabled: search,
        removeItemButton: true,
      });
    }
  }, []);

  return (
    <>
      <label>{label}</label>
      <select class="form-control" name={name} id={id} multiple>
        <option value="" selected="">
          Seleccionar
        </option>
        <option value="Choice 2">Vinilo</option>
        <option value="Choice 3">Cintas</option>
        <option value="Choice 4">Cerraduras</option>
        <option value="Choice 5">Otros</option>
      </select>
    </>
  );
};
