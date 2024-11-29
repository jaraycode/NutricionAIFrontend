import '../index.css';
import Navbar from '../components/navbar';
import Placeholder from '../components/placeholder';
import React from 'react';
import userIcon from '../assets/userIcon.svg';

function Login() {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    console.log('Input value:', newValue);
  };

  return (
    <>
      <div
        style={{
          height: '982px',
          backgroundImage: 'url(src/assets/navbarBackground.svg), url(src/assets/food_image.svg)',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'top, right',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Navbar showButtons={false} />
      </div>
     
      <div
        style={{
          marginTop: '10.75rem',
          marginLeft: '6.32rem',
          zIndex: 2,
          position: 'absolute',
          top: '0',
          left: '0',
          width: '24.43rem',
        }}
      >
        <h3 className='text-h3-bold font-bold text-center'>Registrarse</h3>
        <div>
        <Placeholder label='Nombre' 
        placeholder='ABC'
        value={inputValue}
        icon={<img src={userIcon} alt='user icon' />}
        onChange={handleInputChange}
        />

        </div>


      </div>
    </>
  )
}

export default Login;