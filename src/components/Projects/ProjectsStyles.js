import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:200px;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const GridItem = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-self: stretch;
  width: 33.33%;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 50%;
  };
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  };
`;

export const BlogCard = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
`;

export const ProjectPageContainer = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
`;

export const CarouselSection = styled.div`
  padding: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 0.7em;
  color: #9cc9e3;
  font-size: 1.7rem;
`;

export const HeaderThree = styled.h3`
  margin-top: 16px;
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  font-size: 2.3rem;
  &:hover{
    text-decoration: underline;
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 8px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
margin-top: 2rem;
  width: 100%;
  color: rgba(255, 255, 255, 0.65);
  font-style: 2rem;
  line-height: 24px;
  text-align: left;
  white-space: pre-line;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  }
`;

export const Specs = styled.p`
  width: 100%;
  color: rgba(255, 255, 255, 0.90);
  text-align: left;
  font-size: 2.1rem;
`;

export const FeatureSection = styled.div`
  margin: 16px 0;
  width: 100%;
`;

export const FeatureList = styled.ul`
  padding: 0;
  margin: 2.5rem 0;
`;

export const Feature = styled.li`
  margin-bottom: 16px;
  margin-left: 16px;
  list-style-type: disc;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.75);
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const UtilityListItem = styled.li`
  margin-right: 12px;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 13px;
padding: 6px 12px;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
cursor: pointer;
&:hover{
  background: #801414;
}
`;

export const NoLink = styled.span`
align-self: center;
color:#d4c0c0;
font-size: 13px;
padding: 6px 12px;
border-radius: 15px;
`;

export const TagList = styled.div`
padding: 5px 0;
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
align-items: center;
`;

export const Tag = styled.span`
margin: 5px 10px 5px 0;
padding: 5px;
display: flex;
color: #d8bfbf;
font-size: 1.5rem;
background-color: #ffffff33;
border-radius: 5px;
&:hover {
  text-decoration: underline;
}
`;
