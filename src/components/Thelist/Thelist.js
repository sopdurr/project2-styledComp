import styled, { css } from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
`;
const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;

  ${(props) =>
    css`
      background-color: ${props.even ? 'pink' : 'red'};
    `}
`;

// Geturu sagt mér afhverju props.even virkar ekki hjá mer ? :S

const List = ({ list, className }, index) => {
  return (
    <div>
      <StyledList className={className}>
        {list.map((item) => (
          <li key={item.id}>
            <StyledCard even={index % 2 === 0}>{item.name}</StyledCard>
          </li>
        ))}
      </StyledList>
    </div>
  );
};

export default List;
