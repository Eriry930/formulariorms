import React, { useState, useEffect, useContext } from "react";
import CrudContext from "./context/CrudContext";
import styled from "styled-components";

//valor inicial de las casillas
const inicialForm = {
  id: "null",
  nombre: "",
  direccion: "",
  cedula: "",
  correo: "",
  acciones: "",
};

const CrudForm = () => {
  const { createData, updateData, dataToEdit, setDataToEdit } =
    useContext(CrudContext);
    // estado inicial del formulario
  const [form, setForm] = useState(inicialForm);

  //Efecto, trae los datos y los compara para identificar si el id existe
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(inicialForm);
    }
  }, [dataToEdit]);

  //cambio el valor de la casilla
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  //cambio de estado crear / modificar evento del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //deteccion de casillas incompletas
    if (!form.nombre || !form.direccion) {
      alert("Datos incompletos");
      return;
    }
    if (form.id === null) {
      createData(form); //crea el nuevo registro
    } else {
      updateData(form); // modifica el registro
    }

    handleReset(); //borrael valor de los campos
  };

  //cambio de estado borrar
  const handleReset = (e) => {
    setForm(inicialForm);
    setDataToEdit(null); //null
  };

  //Formulario
  return (
    <div
      style={{ zIndex: 1 }}
      className="position-absolute bg-dark bg-opacity-75 w-100"
    >
      <div className="container bg-light ">
        <div>
          <table border="1" style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th
                  style={{
                    width: "20%",
                    verticalAlign: "bottom",
                    border: "1px solid black",
                  }}
                  rowSpan={3}
                >
                  <img
                    src="https://rms.com.co/wp-content/uploads/2021/11/cropped-logo.png"
                    alt="Logo"
                    width={"120px"}
                  />
                  NIT:830.507.705-2
                </th>
                <th
                  className="text-center"
                  style={{
                    width: "50%",
                    height: "55px",
                    border: "1px solid black",
                  }}
                >
                  RELIABILITY MAINTENANCE SERVICES S.A.S
                </th>
                <th
                  className="text-center"
                  style={{
                    width: "55%",
                    height: "40px",
                    border: "1px solid black",
                  }}
                >
                  GTH-FOR-86
                </th>
              </tr>
              <tr>
                <th
                  className="text-center"
                  rowSpan={2}
                  style={{
                    width: "55%",
                    height: "38px",
                    border: "1px solid black",
                  }}
                >
                  REGISTRO DE INGRESO
                </th>
                <th style={{ fontSize: "20px", border: "1px solid black" }}>
                  Revisión:
                </th>
              </tr>
              <tr>
                <th style={{ fontSize: "20px", border: "1px solid black" }}>
                  Fecha de revisión:
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="form" style={{ border: "3px solid black" }}>
          <form onSubmit={handleSubmit}>
            <table border={1} style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th
                    colSpan={4}
                    style={{
                      borderBottom: "1px solid black",
                      backgroundColor: "#388145",
                      width: "100%",
                    }}
                  >
                    <h2 className="text-center" style={{ fontSize: "15px" }}>
                      DATOS PERSONALES
                    </h2>
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "40%", border: "1px solid black" }}
                  >
                    <label>Nombre:</label>
                    <Input
                      type="text"
                      style={{ width: "87%" }}
                      onChange={handleChange}
                      name="nombre"
                      value={form.nombre}
                    />
                  </th>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Direccion de residencia:</label>
                    <Input
                      type="text"
                      style={{ width: "66%" }}
                      onChange={handleChange}
                      name="direccion"
                      value={form.direccion}
                    />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "20%", border: "1px solid black" }}
                  >
                    <label>Cedula:</label>
                    <Input
                      type="text"
                      style={{ width: "49%" }}
                      onChange={handleChange}
                      name="cedula"
                      value={form.cedula}
                    />

                    <label>de:</label>
                    <Input
                      type="text"
                      style={{ width: "33%" }}
                      onChange={handleChange}
                      name="expedida"
                      value={form.expedida}
                    />
                  </th>
                  <th>
                    <label>ciudad:</label>
                    <Input
                      type="text"
                      style={{ width: "76%" }}
                      onChange={handleChange}
                      name="ciudad"
                      value={form.ciudad}
                    />
                  </th>
                  <th>
                    <label>Barrio:</label>
                    <Input
                      type="text"
                      style={{ width: "75%" }}
                      onChange={handleChange}
                      name="barrio"
                      value={form.barrio}
                    />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Fecha de nacimiento:</label>
                    <Input
                      type="text"
                      style={{ width: "71%" }}
                      onChange={handleChange}
                      name="fechaNacimiento"
                      value={form.fechaNacimiento}
                    />
                  </th>
                  <th>
                    <label>Telefono fijo: </label>
                    <Input
                      type="text"
                      style={{ width: "59%" }}
                      onChange={handleChange}
                      name="phone"
                      value={form.telefono}
                    />
                  </th>
                  <th>
                    <label>Movil:</label>
                    <Input
                      type="text"
                      style={{ width: "77%" }}
                      onChange={handleChange}
                      name="celular"
                      value={form.celular}
                    />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Lugar de nacimiento:</label>
                    <Input type="text" style={{ width: "71%" }} />
                  </th>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Email:</label>
                    <Input
                      type="text"
                      style={{ width: "89%" }}
                      onChange={handleChange}
                      name="correo"
                      value={form.correo}
                    />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Grupo sanguineo:</label>
                    <Input type="text" style={{ width: "75%" }} />
                  </th>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Estado civil:</label>
                    <Input type="text" style={{ width: "81%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Licencia de conducción:</label>
                    <Input type="text" style={{ width: "68%" }} />
                  </th>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Numero de hijos:</label>
                    <Input type="text" style={{ width: "75%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>En caso de emergencia avisar a :</label>
                    <Input type="text" style={{ width: "57%" }} />
                  </th>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Telefono de contacto:</label>
                    <Input type="text" style={{ width: "70%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th colSpan={4} style={{ width: "50%" }}>
                    <label>Parentesco:</label>
                    <Input type="text" style={{ width: "91%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th colSpan={4} style={{ width: "60%" }}>
                    NOTA: Anexar las copias de la Cédula de Ciudadanía y
                    Licencia de Conducción. :
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    rowSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    Beneficiarios para afiliación a EPS y Caja de Compensación:
                  </th>
                  <th>
                    <label>SI:</label>
                    <input type="checkbox" style={{ width: "30%" }} />
                  </th>
                  <th>
                    <label>Parentesco:</label>
                    <Input type="text" style={{ width: "64%" }} />
                  </th>
                  <th>
                    <label>Parentesco:</label>
                    <Input type="text" style={{ width: "64%" }} />
                  </th>
                </tr>
                <tr>
                  <th>
                    <label>NO:</label>
                    <input type="checkbox" style={{ width: "30%" }} />
                  </th>
                  <th>
                    <label>Parentesco:</label>
                    <Input type="text" style={{ width: "64%" }} />
                  </th>
                  <th>
                    <label>Parentesco:</label>
                    <Input type="text" style={{ width: "64%" }} />
                  </th>
                </tr>
                <th
                  colSpan={4}
                  style={{ width: "50%", border: "1px solid black" }}
                >
                  NOTA: En caso de tener beneficiarios, anexar los documentos
                  especificados en la Pág. 2
                </th>
              </tbody>
            </table>

            {/* -------------------------------------------------segunda tabla------------------------------------------------------------ */}

            <table border={1} style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th
                    colSpan={4}
                    style={{
                      borderBottom: "1px solid black",
                      backgroundColor: "#388145",
                      width: "100%",
                    }}
                  >
                    <h2 className="text-center" style={{ fontSize: "17px" }}>
                      DATOS LABORALES
                    </h2>
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={1}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Dirección del sitio de trabajo:</label>
                    <Input type="text" style={{ width: "57%" }} />
                  </th>
                  <th>
                    <label>Sueldo:</label>
                  </th>
                  <th>
                    <label>Basico:</label>
                    <Input type="text" style={{ width: "87%" }} />
                    <label>Integral:</label>
                    <Input type="text" style={{ width: "85%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Ciudad:</label>
                    <Input type="text" style={{ width: "38%" }} />
                    <label>Telefono:</label>
                    <Input type="text" style={{ width: "37%" }} />
                  </th>
                  <th style={{ width: "100%" }}>
                    <h4 className="text-center">
                      Primas extralegales no prestacionales
                    </h4>
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Cargo:</label>
                    <Input type="text" style={{ width: "89%" }} />
                  </th>
                  <th>
                    <label>Telefono fijo: </label>
                    <Input type="text" style={{ width: "79%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Centro de costo: </label>
                    <Input type="text" style={{ width: "77%" }} />
                  </th>
                  <th>
                    <label>Alimentacion:</label>
                    <Input type="text" style={{ width: "78%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Fecha de contratación: </label>
                    <Input type="text" style={{ width: "69%" }} />
                  </th>
                  <th>
                    <label>Localizacion:</label>
                    <Input type="text" style={{ width: "79%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Fecha de vencimiento:</label>
                    <Input type="text" style={{ width: "70%" }} />
                  </th>
                  <th>
                    <label>Movilizacion:</label>
                    <Input type="text" style={{ width: "79%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Tipo de contrato:</label>
                    <Input type="text" style={{ width: "77%" }} />
                  </th>
                  <th>
                    <label>Otro:</label>
                    <Input type="text" style={{ width: "90%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th colSpan={3} style={{ width: "50%" }}>
                    <label>Turno de trabajo:</label>
                    <Input type="text" style={{ width: "87%" }} />
                  </th>
                </tr>
              </tbody>
            </table>

            {/* -------------------------------------------------tercera tabla------------------------------------------------------------ */}

            <table border={1} style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th
                    colSpan={4}
                    style={{
                      borderBottom: "1px solid black",
                      width: "50%",
                      height: "0%",
                    }}
                  ></th>
                </tr>
                <tr>
                  <th
                    colSpan={2}
                    style={{
                      borderBottom: "1px solid black",
                      backgroundColor: "#388145",
                      width: "50%",
                    }}
                  >
                    <h2 className="text-center" style={{ fontSize: "17px" }}>
                      DATOS DE SEGURIDAD SOCIAL
                    </h2>
                  </th>
                  <th
                    colSpan={2}
                    style={{
                      borderBottom: "1px solid black",
                      backgroundColor: "#388145",
                      width: "50%",
                    }}
                  >
                    <h2 className="text-center" style={{ fontSize: "17px" }}>
                      BENEFICIO TRIBUTARIO RETENCION EN LA FUENTE
                    </h2>
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>ARL:</label>
                    <Input type="text" style={{ width: "41%" }} />
                    <label>EPS:</label>
                    <Input type="text" style={{ width: "41%" }} />
                  </th>
                  <th></th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>AFP:</label>
                    <Input type="text" style={{ width: "38%" }} />
                    <label>Cesantias:</label>
                    <Input type="text" style={{ width: "38%" }} />
                  </th>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Intereses de vivienda: </label>

                    <label>SI:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                    <label>NO:</label>
                    <input type="checkbox" />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Caja de compensacion:</label>
                    <Input type="text" style={{ width: "68%" }} />
                  </th>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Estudio y/o salud prepagado: </label>

                    <label>SI:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                    <label>NO:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Pensionado: </label>

                    <label>SI:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                    <label>NO:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                  </th>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Aporte voluntario pensión o AFC </label>

                    <label>SI:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                    <label>NO:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={4}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>
                      NOTA: Para Beneficio Tributario anexar los certificados de
                      las entidades correspondientes:
                    </label>
                  </th>
                </tr>
              </tbody>
            </table>
            {/* -------------------------------------------------cuarta tabla------------------------------------------------------------ */}
            <table border={1} style={{ width: "100%" }}>
              <tbody>
                <tr
                  colSpan={4}
                  style={{
                    borderBottom: "1px solid black",
                    backgroundColor: "#388145",
                    width: "50%",
                  }}
                ></tr>
                <tr>
                  <th
                    colSpan={2}
                    style={{
                      borderBottom: "1px solid black",
                      backgroundColor: "#388145",
                      width: "50%",
                    }}
                  >
                    <h2 className="text-center" style={{ fontSize: "17px" }}>
                      DATOS DOTACIÓN
                    </h2>
                  </th>
                  <th
                    colSpan={2}
                    style={{
                      borderBottom: "1px solid black",
                      backgroundColor: "#388145",
                      width: "50%",
                    }}
                  >
                    <h2 className="text-center" style={{ fontSize: "17px" }}>
                      RECURSOS DE TRABAJO
                    </h2>
                  </th>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={1}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Camisa talla:</label>
                    <Input type="text" style={{ width: "81%" }} />
                  </th>
                  <th
                    colSpan={3}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Computador : </label>
                    <label>SI:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                    <label>NO:</label>
                    <input type="checkbox" style={{ width: "5%" }} />

                    <label>Email y Usuario. : </label>
                    <label>SI:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                    <label>NO:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={1}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Pantalon talla:</label>
                    <Input type="text" style={{ width: "79%" }} />
                  </th>
                  <th
                    colSpan={3}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Laptop : </label>
                    <label>SI:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                    <label>NO:</label>
                    <input type="checkbox" style={{ width: "5%" }} />

                    <label>Puesto de trabajo : </label>
                    <label>SI:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                    <label>NO:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={1}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Botas No:</label>
                    <Input type="text" style={{ width: "85%" }} />
                  </th>
                  <th
                    colSpan={3}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Telefono movil : </label>
                    <label>SI:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                    <label>NO:</label>
                    <input type="checkbox" style={{ width: "5%" }} />

                    <label>Modem. : </label>
                    <label>SI:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                    <label>NO:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={1}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Botas de caucho No:</label>
                    <Input type="text" style={{ width: "72%" }} />
                  </th>
                  <th
                    colSpan={3}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Avantel: </label>
                    <label>SI:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                    <label>NO:</label>
                    <input type="checkbox" style={{ width: "5%" }} />

                    <label>Elementos de oficina : </label>
                    <label>SI:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                    <label>NO:</label>
                    <input type="checkbox" style={{ width: "5%" }} />
                  </th>
                </tr>
              </tbody>
            </table>

            {/* -------------------------------------------------quinta tabla------------------------------------------------------------ */}

            <table border={1} style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th
                    colSpan={4}
                    style={{
                      borderBottom: "1px solid black",
                      backgroundColor: "#388145",
                      width: "100%",
                    }}
                  >
                    <h2 className="text-center" style={{ fontSize: "17px" }}>
                      ACEPTACIÓN DE LOS DATOS DEL EMPLEADO Y AUTORIZACIÓN PAGO
                      DE SALARIO
                    </h2>
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={3}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>
                      Declaro que la información suministrada es real y
                      verídica. Autorizo a RMS S.A.S a consignar mi salario:
                    </label>
                    <Input type="text" style={{ width: "31%" }} />
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Banco:</label>
                    <Input type="text" style={{ width: "89%" }} />
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Cuenta No.:</label>
                    <Input type="text" style={{ width: "82%" }} />
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Ahorro: </label>
                    <Input type="text" style={{ width: "87%" }} />
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Corriente: </label>
                    <Input type="text" style={{ width: "83%" }} />
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    colSpan={2}
                    style={{ width: "50%", border: "1px solid black" }}
                  >
                    <label>Fecha:</label>
                    <Input type="text" style={{ width: "88%" }} />
                  </th>
                  <th>
                    <label>FIRMA DEL EMPLEADO</label>
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th colSpan={4} style={{ width: "50%" }}>
                    <label>
                      NOTA: Anexar el certificado del banco con el número de
                      cuenta:
                    </label>
                  </th>
                </tr>
              </tbody>
            </table>

            {/* -------------------------------------------------sexta tabla------------------------------------------------------------ */}

            <table border={1} style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th
                    colSpan={3}
                    style={{
                      borderBottom: "1px solid black",
                      backgroundColor: "#388145",
                      width: "100%",
                    }}
                  >
                    <h2 className="text-center" style={{ fontSize: "17px" }}>
                      VERIFICACION Y APROBACION
                    </h2>
                  </th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    className="text-center"
                    style={{ width: "30%", border: "1px solid black" }}
                  >
                    <label>AREA FINANCIERA Y CONTABLE</label>
                  </th>
                  <th
                    className="text-center"
                    style={{ width: "30%", border: "1px solid black" }}
                  >
                    <label>AREA TALENTO HUMANO</label>
                  </th>
                  <th
                    className="text-center"
                    style={{ width: "30%", border: "1px solid black" }}
                  >
                    <label>LIDER DEL AREA</label>
                  </th>
                </tr>
                <tr style={{ height: "100px" }}>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}></td>
                </tr>
                <tr colSpan={2} style={{ border: "1px solid black" }}>
                  <th
                    className="text-center"
                    style={{ width: "30%", border: "1px solid black" }}
                  >
                    <label>Nombre | SANDRA ANZOLA</label>
                  </th>
                  <th
                    className="text-center"
                    style={{ width: "30%", border: "1px solid black" }}
                  >
                    <label> Nombre | DIMELSA OROZCO MILLARES</label>
                  </th>
                  <th style={{ width: "30%", border: "1px solid black" }}>
                    <label> Nombre | GERSON PORRAS PINZON</label>
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan={3}
                    style={{
                      width: "100%",
                    }}
                  >
                    <input type="submit" value="enviar" />

                    <input type="reset" value="Limpiar" onClick={handleReset} />
                  </th>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrudForm;

const Input = styled.input`
  margin-right: 1px;
  background-color: #d0e7fc;
  border: none;
`;
