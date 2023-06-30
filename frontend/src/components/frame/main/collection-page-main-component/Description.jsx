import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  FaDiscord,
  FaTelegram,
  FaGithub,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";

const DescriptionComponent = ({
  name,
  chain_identifier,
  created_date,
  description,
}) => {
  const [expanded, setExpanded] = useState(false);

  const getMonth = () => {
    let month = created_date.slice(5, 7).replace(/^0+/, "");
    switch (month) {
      case "1":
        return "JAN";
      case "2":
        return "FEB";
      case "3":
        return "MAR";
      case "4":
        return "APR";
      case "5":
        return "MAY";
      case "6":
        return "JUN";
      case "7":
        return "JUL";
      case "8":
        return "AUG";
      case "9":
        return "SEP";
      case "10":
        return "OCT";
      case "11":
        return "NOV";
      case "12":
        return "DEC";
      default:
        return "JAN";
    }
  };
  const day = created_date.slice(8, 10).replace(/^0+/, "");

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <DescriptionContainer>
      <Title text={name}>
        <ResponsiveSocialIcons>
          <a href="https://discord.com/your-discord-url">
            <FaDiscord />
          </a>
          <a href="https://telegram.me/your-telegram-url">
            <FaTelegram />
          </a>
          <a href="https://github.com/">
            <FaGithub />
          </a>
        </ResponsiveSocialIcons>
      </Title>
      <Text1>
        <TextContainer1>
          <TextSpan>Created</TextSpan>
          <BoldText>{`${getMonth()} ${day}`}</BoldText>
        </TextContainer1>
        <TextContainer2>
          <TextSpan>Chain</TextSpan>
          <BoldText>
            {chain_identifier === "ethereum" ? "ETH" : chain_identifier}
          </BoldText>
        </TextContainer2>
      </Text1>
      <AccordionContainer>
        <DescriptionText expanded={expanded}>{description}</DescriptionText>
        <ToggleIconButton onClick={handleToggle}>
          {expanded ? <FaAngleUp /> : <FaAngleDown />}
        </ToggleIconButton>
      </AccordionContainer>
    </DescriptionContainer>
  );
};

const DescriptionContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  margin-top: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = ({ text, children }) => {
  return (
    <TitleContainer>
      {text}
      {children}
    </TitleContainer>
  );
};

const TitleContainer = styled.h2`
  font-size: 40px;
  color: #333;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 95px;
  text-align: left;
  display: flex;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: 750px;
  cursor: pointer;

  a {
    margin-left: 20px;
    color: #333;
    text-decoration: none;
  }

  svg {
    width: 35px;
    height: 35px;
  }
`;

const Text1 = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 19px;
  color: #000;
  text-align: left;
  margin-top: 20px;
  margin-left: 95px;
  max-width: 800px;
  margin-bottom: 100px;
`;

const TextContainer1 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

const TextContainer2 = styled.div`
  display: flex;
  align-items: center;
`;

const TextSpan = styled.span`
  margin-right: 5px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const AccordionContainer = styled.div`
  width: 50%;
  height: auto;
  margin-top: -140px;
  margin-left: 42%;
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
  ${({ expanded }) =>
    expanded &&
    css`
      max-height: 500px;
    `}
`;

const DescriptionText = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: #000;
  margin-bottom: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ expanded }) =>
    expanded &&
    css`
      white-space: normal;
    `}
`;

const ToggleIconButton = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  color: #000;
  cursor: pointer;
  margin-left: 320px;
  position: relative;
  top: -35px;
`;

const breakpoints = {
  small: "600px",
  medium: "960px",
  large: "1280px",
};

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const ResponsiveSocialIcons = styled(SocialIcons)`
  ${media.small`
    margin-left: auto;
    margin-right: 20px;
  `}
`;

export default DescriptionComponent;
