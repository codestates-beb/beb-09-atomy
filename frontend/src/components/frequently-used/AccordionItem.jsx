import React from 'react';
import styled from 'styled-components';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const Accordion = styled.div`
  width: 102%;
  height: auto;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 25px;
  margin-bottom: 30px;
  padding: 13px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 2px solid #616161;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const AccordionTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 15px;
  cursor: pointer;
  text-align: left;

  svg {
    margin-left: auto;
  }
`;

const AccordionContent = styled.div`
  font-size: 16px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
  text-align: center;
  transition: max-height 0.3s ease;
  overflow: hidden;
`;

const AccordionItem = ({ text, title, isOpen, onClick }) => (
  <Accordion onClick={onClick}>
    <AccordionTitle>
      <span>{title}</span>
      {isOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
    </AccordionTitle>
    <AccordionContent isOpen={isOpen}>
      {isOpen && (
        <>
          <span>{text}</span>
          <br />
          Accordion Content
        </>
      )}
    </AccordionContent>
  </Accordion>
);

export default AccordionItem;