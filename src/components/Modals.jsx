import React from 'react'
import CrudForm from './CrudForm';
import Modal from "./Modal";
import {useModal} from "./useModal.jsx"
import styled from "styled-components";


const Modals = () => {
  const [isOpenModal1, openModal1,closeModal1] =useModal (false);
  return (
    <div>
      <Boton onClick={openModal1}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-plus"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          <path
            fillRule="evenodd"
            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
          />
        </Svg>
        Crear empleado
      </Boton>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <CrudForm />
      </Modal>
      
    </div>
  );
}

export default Modals ;

const Boton = styled.button`
  border-radius: 20px;
  position: relative;
  margin-top: 20px;
  margin-right: 1px;
  top: 5px;
  width: 150px;
  height: 30px;
  border: none;
  background: #388145;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 25px;
  color: #fff;
  padding: 3px 10px 3px 8px;
  cursor: pointer;
  align-items: center;
  justify-self: right;
`;

const Svg = styled.svg`
  margin-right: 5px;
`;
