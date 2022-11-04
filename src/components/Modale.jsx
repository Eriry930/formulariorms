import React from "react";
import CrudForm from "./CrudForm";
import Modaleditar from "./Modaleditar";
import { useModal } from "./useModal.jsx";
import styled from "styled-components";

const Modals = () => {
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  return (
    <div>
      <Boton onClick={openModal2}>Editar</Boton>
      <Modaleditar isOpen={isOpenModal2} closeModal={closeModal2}>
        <CrudForm />
      </Modaleditar>
    </div>
  );
};

export default Modals;

const Boton = styled.button`


`;


