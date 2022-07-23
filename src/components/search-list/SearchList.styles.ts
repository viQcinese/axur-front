import styled from "styled-components";

export const Container = styled.ul`
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
