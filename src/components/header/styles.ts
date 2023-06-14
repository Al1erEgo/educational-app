import { styled } from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1;
  background: #fcfcfc;
  box-shadow: 0 2px 10px rgba(109, 109, 109, 0.3);
`
export const StyledLogo = styled.img`
  color: white;
  width: 140px;
  height: 30px;
  margin-left: 10%;
  margin-bottom: 15px;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
  }
`
export const StyledProfileWidgetWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10%;
`
