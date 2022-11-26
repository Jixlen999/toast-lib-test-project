import styled from 'styled-components';

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.padding[2]}px;
  display: flex;
  border: ${({ theme }) => theme.border[0]}px solid ${({ theme }) => theme.whiteColor};
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gap[1]}px;

  input,
  select {
    background-color: ${({ theme }) => theme.inputColor};
    border-radius: ${({ theme }) => theme.borderRadius[1]}px;
    border-style: inset;
    padding: ${({ theme }) => theme.padding[1]}px;
    color: ${({ theme }) => theme.whiteColor};
  }

  span {
    margin-right: ${({ theme }) => theme.margin[0]}px;
  }

  button {
    width: ${({ theme }) => theme.width[2]}px;
    height: ${({ theme }) => theme.height[2]}px;
    background-color: ${({ theme }) => theme.inputColor};
    color: ${({ theme }) => theme.whiteColor};
    border-radius: ${({ theme }) => theme.borderRadius[1]}px;
    border: ${({ theme }) => theme.border[0]}px solid ${({ theme }) => theme.whiteColor};
    align-self: center;
    cursor: pointer;
    transition: all ${({ theme }) => theme.transition[1]}s ease;
    font-size: ${({ theme }) => theme.fontSize[0]}px;
    &:hover {
      transform: scale(${({ theme }) => theme.scale[0]});
    }
  }
`;

export default Wrapper;
