export const FormularioContacto = () => {
  return (
    <>
      <form
        action="#"
        method="#"
        className="flex flex-col"
        encType="text/plain"
      >
        <div>
          <h2 className="text-light text-2xl font-primary">Contactanos!</h2>
        </div>

        <div className="mt-5">
          <label
            htmlFor="mail_duda"
            className="text-primaryLight text-lg block font-primary"
          >
            Ingresa tu mail, asi podemos responderte
          </label>
          <input
            type="mail"
            name="mail_duda"
            id="mail_duda"
            className="mt-2 w-[100%] block font-primary"
          />
        </div>

        <div className="mt-5 w-100">
          <label
            htmlFor="consulta"
            className="text-primaryLight text-lg font-primary"
          >
            Comentanos tu duda
          </label>
          <textarea
            name="consulta"
            id="consulta"
            rows="10"
            className="mt-2 font-primary w-[100%]"
          ></textarea>
        </div>

        <div className="mt-5 flex justify-center">
          <button
            className="border-2 border-contrast text-light font-primary text-lg px-10 py-1 mx-auto rounded-lg"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};
