import { AiOutlineFolderOpen, AiOutlineLoading3Quarters } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  min-height: 240px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
`;

export const HeadContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 16px;

  h2 {
    font-size: 2.4rem;
    margin: 0;
  }
`;

export const DataContainer = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0 16px 16px;
  }

  li:not(:first-child) {
    margin-top: 8px;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  text-align: center;

  span {
    margin-top: 8px;
    color: #bbb;
    max-width: 200px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 54px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const EmptyIcon = styled(AiOutlineFolderOpen).attrs({
  size: "5.4rem",
  color: "#ddd",
})``;

export const Spinner = styled(AiOutlineLoading3Quarters).attrs((props) => ({
  size: props.size || "4.2rem",
  color: props.color || "#ddd",
}))`
  animation: ${rotate} 0.6s linear infinite;
`;
