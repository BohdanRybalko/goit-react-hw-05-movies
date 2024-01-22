import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px;
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const MovieItem = styled.li`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const SearchContainer = styled.div`
  padding: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

export const MovieResults = styled.ul`
  list-style: none;
`;

export const MovieResultItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieDetailsContainer = styled.div`
  padding: 20px;
`;

export const MovieDetailsHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const MovieDetailsContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const MovieDetailsPoster = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 8px;
`;

export const MovieDetailsInfo = styled.div`
  flex: 1;
  margin-left: 20px;
`;
