import styled from 'styled-components';
import LogoSrc from './logo.jpg';
import StaticComp from './comp_static';
import GenComp from './comp_general';

const App = () => {

 return (
    <>
      <SortRow>
        <LeftComp />
        <RightComp />
      </SortRow>
      
    </>
  );
}

const LeftComp = () => {
  return (
    <SortCol>
       {/*title*/}
       
        <Title>
          sujin's
          Blog
        </Title>
      
       {/*icon*/}
       <SortRow>
        <Logo src={LogoSrc} />
        <Logo src={LogoSrc} />
        <Logo src={LogoSrc} />
        <Logo src={LogoSrc} />
      </SortRow>
    </SortCol>
  );
}

const RightComp = () => {
  return (
    <SortCol>
      <StaticComp />
      <GenComp />
    </SortCol>
 );
}

const SortCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SortRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.p`
  height: 200px:
  width: 550px;
  margin: 50px;
  font-size: 50px;
  color: blue;
  align-items: baseline;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 15px;
`;

export default App;