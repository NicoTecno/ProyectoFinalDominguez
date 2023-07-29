export const Consulta = () => {
  return (
    <div>
      <h1 class="text-center">Hacenos tu consulta !</h1>
      <section class="container my-2 text-light p-2">
        <form class="conteiner_form_consulta p-2">
          <div class="row">
            <div class="col-md-6">
              <label for="validationDefault01" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control input_estilo"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mt-3">
              <label for="validationDefault02" class="form-label">
                Apelldio
              </label>
              <input
                type="text"
                class="form-control input_estilo"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mt-3">
              <label for="validationDefaultUsername" class="form-label">
                Email
              </label>
              <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">
                  @
                </span>
                <input
                  type="text"
                  class="form-control input_estilo"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <label for="exampleFormControlInput1" class="form-label">
                Consulta
              </label>
              <textarea
                class="form-control input_estilo"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>

          <div class="col-12 mt-3">
            <button className="BotonEnviarConsulta">Enviar</button>
          </div>
        </form>
      </section>
    </div>
  );
};
