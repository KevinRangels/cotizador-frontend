import React, { useEffect } from 'react';
import Choices from 'choices.js';

export const Select = ({ id, name = '', label, options = [], search = false }) => {
  useEffect(() => {
    if (document.getElementById(id)) {
      var element = document.getElementById(id);
      new Choices(element, {
        searchEnabled: search,
      });
    }
  }, []);
  return (
    <>
      <label>{label}</label>
      <select class="form-control" name={name} id={id}>
        <option value="" selected="">
          Seleccionar
        </option>
        <option value="Choice 2">Real Estate</option>
        <option value="Choice 3">Electronics</option>
        <option value="Choice 4">Clothing</option>
        <option value="Choice 5">Others</option>
      </select>
    </>
  );
};
