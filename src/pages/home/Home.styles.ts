import { AiOutlineLoading3Quarters, AiOutlineSearch } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

export const Layout = styled.main`
  margin: 8px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    width: 300px;
    margin-top: 200px;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  margin-top: 64px;
  width: 100%;
  max-width: 500px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 16px;
  max-width: 500px;
  outline: none;
  height: 44px;
  padding-left: 12px;
  padding-right: 64px;
  border-radius: 16px;
  border: 1px solid #bbb;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  padding: 0 12px;
  background: none;
  outline: none;
  border: 1px solid #bbb;
  border-radius: 0 16px 16px 0;
  color: #fff;
  height: 44px;
  cursor: pointer;
  background: ${(props) => props.theme.colors.orange.main};

  &:hover {
    background: ${(props) => props.theme.colors.orange.dark};
  }

  &:active {
    background: ${(props) => props.theme.colors.orange.darker};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.orange.main};
    opacity: 0.4;
    cursor: default;
  }

  &[data-loading] {
    background: ${(props) => props.theme.colors.orange.main};
    opacity: 0.4;
    cursor: default;
    svg {
      animation: ${rotate} 0.6s linear infinite;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red.main};
  padding-left: 12px;
  font-size: 1.4rem;
`;

export const SearchIcon = styled(AiOutlineSearch).attrs({ size: "2.4rem" })``;

export const Spinner = styled(AiOutlineLoading3Quarters).attrs({
  size: "2.4rem",
})``;
