import useSWR from "swr";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, mutate } = useSWR("https://api.adviceslip.com/advice", fetcher);

  function onRefresh() {
    mutate();
  }

  return (
    <StyledBackground>
      <StyledDiv>
        {data ? (
          <StyledHeading>ADVICE #{data.slip.id}</StyledHeading>
        ) : (
          <StyledHeading>Loading...</StyledHeading>
        )}
        {data ? (
          <StyledAdvice>{data.slip.advice}</StyledAdvice>
        ) : (
          <StyledAdvice>Loading...</StyledAdvice>
        )}
      </StyledDiv>
      <StyledButton type="button" onClick={onRefresh}>
        Refresh
      </StyledButton>
    </StyledBackground>
  );
}

const StyledBackground = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 7.5em;
`;

const StyledDiv = styled.div`
  background-color: grey;
  border-radius: 3%;
  padding: 2.5em;
  width: calc(100% - 1.5em);
  height: 20em;
`;

const StyledHeading = styled.h1`
  color: green;
  font-size: 0.8em;
`;

const StyledAdvice = styled.p`
  color: white;
  font-size: 1.8em;
`;

const StyledButton = styled.button`
  background-color: green;
`;
