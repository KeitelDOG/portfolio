import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const UserAvatar = styled.img`
  margin: 0 16px 10px 0;
  float: left;
  width: 205px;
  height: 205px;
  border-radius: 50%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 170px;
    height: 170px;
  }
`;
