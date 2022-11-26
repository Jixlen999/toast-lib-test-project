import styled from 'styled-components';

export const BtnsWrapper = styled.div`
  width: ${({ theme }) => theme.width[1]}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width[0]}px;
  height: ${({ theme }) => theme.height[1]}px;
  padding: ${({ theme }) => theme.padding[1]}px;
  border: ${({ theme }) => theme.border[0]}px solid ${(props) => props.color};
  color: ${(props) => props.color};
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition[0]}s ease;
  &:hover {
    transform: scale(${({ theme }) => theme.scale[0]});
  }
`;
