import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('Campo requerido').email('Correo electrónico inválido'),
  password: yup.string().required('Campo requerido').min(8, 'Debe tener mínimo 8 caracteres'),
});
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    let request = {
      email: data.email,
      password: data.password,
    };
    reset({ password: '' });
  };
  return (
    <form className="text-start">
      <div className="mb-3">
        <input type="email" className="form-control" placeholder="Correo electrónico" aria-label="Email" />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" placeholder="Contraseña" aria-label="Password" />
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="rememberMe" />
        <label className="form-check-label" for="rememberMe">
          Recordar
        </label>
      </div>
      <div className="text-center">
        <button type="button" className="btn bg-gradient-info w-100 my-4 mb-2">
          Ingresar
        </button>
      </div>
    </form>
  );
};
