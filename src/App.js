import styled from 'styled-components';
import LogoSrc from './image/logo_mini.png';
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
    <Left>
       {/*title*/}
       
        <Title>
          sujin's <br/>
          Blog
        </Title>
      
       {/*icon*/}
       <SortRow>
        <Logo src={LogoSrc} />
        <Logo src={LogoSrc} />
        <Logo src={LogoSrc} />
        <Logo src={LogoSrc} />
      </SortRow>
    </Left>
  );
}

const RightComp = () => {
  return (
    // <Right>
      <SortCol>
        <StaticComp />
        <GenComp />
      </SortCol>
    // </Right>
 );
}

const Left = styled.div` //왼쪽 component
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgb(50, 50, 255);
  width: 30% // 이상함 (3:7 비율하고 싶음)
  position: fixed;
`;

const Right = styled.div` //오른쪽 component
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgb(50, 50, 255);
  width: 100% // 이상함 (3:7 비율하고 싶음)
  /* position: fixed; */
`;

const SortCol = styled.div` //세로 정렬
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; //변화가 왜 없을까요
  margin: 0 0 0 180px;
`;

const SortRow = styled.div` //가로 정렬
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Title = styled.div`
  /* height: 200px; */
  /* width: 50px; //넓이는 일정 범위 내에서는 값이 변해도 결과 동일한데 상관 없나? */
  margin: 50px;
  font-size: 70px;
  color: white;
  justify-content: flex-end; //오른쪽 정렬이 안 됨
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  padding: 40px;
`;

export default App;