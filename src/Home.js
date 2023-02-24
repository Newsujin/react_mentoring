import styled from 'styled-components';
import LogoSrc from './image/logo_mini.png';
import StaticComp from './Comp/comp_static';
import GenComp from './Comp/comp_general';

const Home = () => {
 return (
    <SortRow>
        <LeftComp />
        <RightComp />
    </SortRow>
  );
}

const LeftComp = () => {
  return (
    <Left>
       {/*title*/}
       
        <Title>
          sujin's <br/> {/*p로 넣어주는 게 좋다!*/}
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
    <Right>
      <StaticComp />
      <GenComp />
    </Right>
 );
}

const SortRow = styled.div` //전체 가로 정렬
  display: flex;
  flex-direction: row;
`;

const Left = styled.div` //왼쪽 component
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgb(50, 50, 255);
  width: 30%;
  height: 100vh;
  position: fixed;
`;

const Right = styled.div` //오른쪽 component
  display: flex;
  flex-direction: column;
  margin: 0 0 0 390px;
  width: 100vw; //vw 인데 왜 스크롤 생성?
`;

const Title = styled.div`
  /* height: 200px; */
  /* width: 200px; */
  margin: 50px;
  font-size: 70px;
  color: white;
  text-align: right;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  padding: 40px;
`;

export default Home;