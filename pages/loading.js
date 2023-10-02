import React, { useEffect, useState } from 'react';

const LoadingPage = () => {
  const [message, setMessage] = useState('Validando a senha.');

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setMessage('Estabelecendo conexão segura.');
    }, 3000);

    const timeout2 = setTimeout(() => {
      setMessage('Carregando...');
    }, 7000);

    const redirectTimeout = setTimeout(() => {
      // Redireciona para a página desejada após o tempo de carregamento
      // Aqui você pode substituir "/assinatura" pela rota que deseja redirecionar
      window.location.href = "/assinatura";
    }, 9000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div className="loading-page">
      <header className="header">
        <img src="mLogomenor.png" alt="Logo" className="logo" />
      </header>
      <div className="loading-content">
        <img src="load.svg" alt="Spinner" className="spinner w-16" />
        <h1 className="loading-text" style={{ color: 'rgb(114, 114, 114)', fontSize: '16px', marginTop: '20px'}}>
            {message}
        </h1>
      </div>
    </div>
  );
};

export default LoadingPage;
