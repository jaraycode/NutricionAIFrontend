import Navbar from "./components/navbar";
import "./index.css";

function App() {
  return (
    <>
      <div
        style={{
          height: "1620px",
          backgroundImage: "url(src/assets/homeRectangle.svg)",
          backgroundRepeat: "no-repeat",
   
        }}
      >
        <Navbar showButtons={true} />
      </div>
    </>
  );
}

export default App;
