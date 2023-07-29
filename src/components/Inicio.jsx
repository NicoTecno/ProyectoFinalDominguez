import { Container } from "react-bootstrap";

export const Inicio = () => {
  return (
    // <div>Inicioooo</div>
    <div className="container text-center">
      <h1>Nuestros productos destacados</h1>
      <div className="row justify-content-around tarjeta">
        <div className="col-lg-12 col-xs-12 text-center card_generica">
          <div className="destacados">
            <Container className="d-flex flex-row  flex-wrap mt-2 justify-content-center">
              <img
                className="destacados_pc"
                src="https://firebasestorage.googleapis.com/v0/b/nicotech-8fdb5.appspot.com/o/Pcs%2Fpc_pro_gamer_2.png?alt=media&token=9b9f43d5-9104-4628-bd56-98a94af0a236"
                alt=""
              />
              <img
                className="destacados_margin_der"
                src="https://firebasestorage.googleapis.com/v0/b/nicotech-8fdb5.appspot.com/o/Monitores%2Fmonitor_destacado.png?alt=media&token=cc3c9691-aa44-499b-b713-558bf2610786"
                alt=""
              />
              <img
                className="destacados_teclado"
                src="https://firebasestorage.googleapis.com/v0/b/nicotech-8fdb5.appspot.com/o/Teclados%2Fteclado_gamer_3.png?alt=media&token=14306466-8d41-4e0f-8d7a-99a386f592b5"
                alt=""
              />
            </Container>
          </div>
        </div>
      </div>

      <div className="row justify-content-around mt-5">
        <div className="col-12 text-start">
          <h1>
            Donde estamos?
            <img className="mapa" src="imgs/extras/mapa.png" alt="" />
          </h1>
        </div>
      </div>
      <div className="row justify-content-around align-items-center mt-2">
        <div className="col-xl-8 text-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.096287911435!2d-58.37705318425712!3d-34.60172661490068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacc6024ae8f%3A0xbc47e8a6b4102241!2sFlorida%20537%2C%20C1005%20CABA!5e0!3m2!1ses-419!2sar!4v1674826650635!5m2!1ses-419!2sar"
            className="mapa_google"
          ></iframe>
        </div>
        <div className="col-xl-4 text-center fs-4 donde">
          <p className="">
            Nos podes encontrar en Galería Jardín, Florida 537, en el local 9 y
            3/4, junto a las escaleras mecánicas
          </p>
        </div>
      </div>
    </div>
  );
};
