import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.width[0]}%;
  height: ${({ theme }) => theme.height[0]}%;
  display: flex;
  padding-top: ${({ theme }) => theme.padding[0]}px;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.gap[0]}px;

  summary {
    text-align: center;
    cursor: pointer;
  }
`;
