import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <div style=
      {
        {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
          padding: '0 2rem',
        }
      }
    >
      <p style={{ fontSize: '48px', fontWeight: '700', color: 'deeppink', margin: '0' }}>404</p>
      <h1>Такой страницы не существует!</h1>
      <p>Пожалуйста, проверьте введённый адрес!</p>
      <Link
        to='/'
        style={{ color: 'deepskyblue', textDecoration: 'underline' }}
      >
        Вернуться на главную страницу.
      </Link>
    </div>
  );
}
