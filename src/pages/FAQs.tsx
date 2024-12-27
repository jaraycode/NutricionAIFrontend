import "../index.css";
import Navbar from "../components/navbar";
import React, { useState } from 'react';

const faqs = [
  {
    question: "¿Cómo estimamos el valor nutricional?",
    answer: "Utilizamos una combinación de datos de alimentos y algoritmos avanzados para estimar el valor nutricional de los alimentos."
  },
  {
    question: "¿Qué es una dieta balanceada?",
    answer: "Una dieta balanceada incluye una variedad de alimentos en las proporciones correctas para mantener la salud y el bienestar."
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div
        style={{
          height: "982px",
          backgroundImage: "url(src/assets/navbarBackground.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Navbar showButtons={false}/>
      </div>

      <div
        style={{
          marginTop: "10.75rem",
          marginLeft: "2rem",
          zIndex: 2,
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <div style={{ width: "50%" }}>
          <h3 className="text-h3-bold font-bold text-center">
            Preguntas Frecuentes
          </h3>
          <section>
            {faqs.map((faq, index) => (
              <div key={index} style={{ padding: "1rem", border: "3px solid green", borderRadius: "0.5rem", marginTop: "2rem", marginBottom: "1rem", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span>{faq.question}</span>
                  <button
                    onClick={() => handleToggle(index)}
                    style={{
                      backgroundColor: openIndex === index ? "green" : "white",
                      color: openIndex === index ? "white" : "green",
                      border: "none",
                      borderRadius: "50%",
                      width: "2rem",
                      height: "2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {openIndex === index ? 'v' : '>'}
                  </button>
                </div>
                <div style={{
                  maxHeight: openIndex === index ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 1s ease",
                }}>
                  {openIndex === index && (
                    <p style={{ marginTop: "1rem" }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
        <div style={{  marginTop: "-13rem", marginLeft: "-7rem" }}>
          <img src="src/assets/naranjas.svg" alt="naranjas" style={{height:"1000px",borderRadius:"10%"}}/>
        </div>
      </div>
    </>
  );
}

export default FAQs;