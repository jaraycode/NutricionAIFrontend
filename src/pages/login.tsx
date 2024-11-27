
import '../index.css';
import Navbar from '../components/navbar';


function Login() {
  return (
    <>
      <div
        style={{
          height: '982px',
          backgroundImage: 'url(src/assets/navbarBackground.svg), url(src/assets/food_image.svg)',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'top, right', // Position the first image at the center and the second image on the right
        }}
      >
        <Navbar showButtons={false} />
        
      </div>
    </>
  )
}

export default Login;