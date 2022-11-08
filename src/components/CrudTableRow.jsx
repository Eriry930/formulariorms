import React, { useContext } from "react";
import styled from "styled-components";
import CrudContext from "./context/CrudContext";


const CrudTableRow = ({ el }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContext);
  let {nombre, direccion, cedula, correo, id} =el;
  return (
    <tr>
      <Td>{nombre}</Td>
      <Td>{direccion}</Td>
      <Td>{cedula}</Td>
      <Td>{correo}</Td>
      

      <Td>
        <button onClick={() => setDataToEdit (el)}>Editar</button>
        <button onClick={() => deleteData (id)}>Eliminar</button> 
      </Td>
    </tr>
  );
};

export default CrudTableRow;


const Td = styled.td`
  position: relative;
  margin-top: 2px;
  margin-right: 20px;
  top: 5px;
  border-bottom: solid #cacaca;
  background: #ffffff;
  font-family:Arial, Helvetica, sans-serif;
  color: #000000;
  padding: 10px;
  align-items: center;

`;

