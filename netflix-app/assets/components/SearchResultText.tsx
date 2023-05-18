import { styled } from "styled-components";

export default function SearchResultText({ isSearch }: any) {
  return (
    <>
      <ResultWrapper>{isSearch ? "Search Results" : "Top Searches"}</ResultWrapper>
    </>
  );
}

const ResultWrapper = styled.p`
  color: white;
	font-size : 30px;
	font-weight : bold;
`;
