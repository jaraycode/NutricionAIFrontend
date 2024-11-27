import React from 'react';
import logo from '../assets/logo.svg';
import Button from './button';
import { useNavigate } from 'react-router-dom';

type NavbarProps = {
  showButtons?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({showButtons = true}) => {
    const navigate = useNavigate();

function handleClick( event: React.MouseEvent<HTMLButtonElement>) {
    const buttonText = event.currentTarget.textContent;
    if (buttonText === 'Iniciar Sesión') {
        navigate('/login');
      } else if (buttonText === 'Registrarse') {
        navigate('/signin');
      }
}
  return (
    <nav className='absolute top-8 left-0 w-full'>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
            <img src={logo} alt="logo" className="h-5 w-21" />
            <div className='flex space-x-5'>
            <a href="/" className="text-p1-regular font-regular text-black-300 hover:text-primary-darkGreen">Inicio</a>
            <a href="/FAQs" className="text-p1-regular font-regular text-black-300 hover:text-primary-darkGreen">Preguntas Frecuentes</a>
            </div>

        </div>
        {showButtons && (
        <div className="space-x-4 flex">
        <Button type='outline' onClick={handleClick}>Iniciar Sesión</Button>
        <Button type='solid' onClick={handleClick}>Registrarse</Button>
    </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;