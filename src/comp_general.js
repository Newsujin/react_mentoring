import styled from "styled-components";
import general from "./image/general.png"

const Comp = (Props) => {
	return (
		<SortCol>
			<Img_gen src={Props.img} />
			<p> {Props.txt} </p>
		</SortCol>
	);
}

const GenComp = () => {
	return (
		<SortRow>
			<Comp img={general} txt={"0"}/>
			<Comp img={general} txt={"2"}/>
			<Comp img={general} txt={"3"}/>
			<Comp img={general} txt={"4"}/>
		</SortRow>
	);
}

const SortRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end; //글씨 정렬
  /* flex-wrap: wrap; //왜 이상해지는가 */
  /* padding: 200px; */
`;

const SortCol = styled.div` //세로 정렬
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; //변화가 왜 없을까요
`;

const Img_gen = styled.img`
    width: 200px;
    height: 200px;
    margin: 10px;
`;

export default GenComp;