import React, { useContext } from "react";
import CrudTableRow from "./CrudTableRow";
import styled from "styled-components";
import CrudContext from "./context/CrudContext";

const CrudTable = () => {
  const { db: data } = useContext(CrudContext);
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <Table>
        <thead>
          <tr>
            <th>NOMBRE </th>
            <th>DIRECCION</th>
            <th>CEDULA</th>
            <th>CORREO ELECTRONICO</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudTable;

const Table = styled.table`
  position: relative;
  margin-top: 20px;
  top: 5px;
  width: 99%;
  height: 100px;
  border: none;
  background: #ffffff;
  cursor: pointer;
  transition: 0.3s ease all;
  color: #000000;
  padding: 10px;
  align-items: center;
  justify-self: center;
`;
