import styled from 'styled-components';

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 4rem;

  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.sm}{
    padding: 15px;
  }

  @media ${props => props.theme.breakpoints.xs}{
    display: flex;
    flex-direction: column;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 4px;
  &:hover {
    text-decoration: underline;
  }
`;

export const ListParagraph = styled.div`
  font-size: 15px;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.75);
`;

export const ListItem = styled.li`
  max-width: 520px;
  display: flex;
  flex-direction: row;

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
}
`;

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;

export const ProjectSection = styled.div`
  width: 100%;
`;

export const ProjectList = styled.ul`
`;

export const ProjectItem = styled.li`
  margin-left: 16px;
  list-style-type: disc;
  font-size: 14px;
`;
