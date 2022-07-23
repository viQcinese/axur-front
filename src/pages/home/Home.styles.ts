import { AiOutlineLoading3Quarters, AiOutlineSearch } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

type LayoutProps = {
  isSearchOpen: boolean;
};

export const Layout = styled.main<LayoutProps>`
  padding: 8px;
  margin: auto;
  max-width: 500px;
`;

export const SearchActionContainer = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

export const SearchDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;

export const LogoContainer = styled.div`
  & > svg {
    width: 300px;
  }
`;

export const Form = styled.form`
  position: relative;
  margin-top: 64px;
  width: 100%;
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

  &:read-only {
    color: #ccc;
    cursor: default;
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
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red.main};
  padding-left: 12px;
  font-size: 1.4rem;
  margin: 0;
  margin-top: 16px;
`;

export const SearchList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;

  width: 100%;
  max-width: 500px;
  align-items: left;
  text-align: left;
  margin: 0;
  margin-top: 16px;

  & li {
    margin-top: 12px;
    padding: 4px 12px;
    border: 1px solid #bbb;
    border-radius: 50px;
  }

  & li:not(first-child) {
    margin-right: 8px;
  }

  & li:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.orange.dark};
    border-color: ${(props) => props.theme.colors.orange.dark};
  }

  & li[aria-current] {
    color: ${(props) => props.theme.colors.orange.darker};
    border-color: ${(props) => props.theme.colors.orange.darker};
  }
`;

export const SearchIcon = styled(AiOutlineSearch).attrs({ size: "2.4rem" })``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(AiOutlineLoading3Quarters).attrs({
  size: "2.4rem",
})`
  animation: ${rotate} 0.6s linear infinite;
`;
