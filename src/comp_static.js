import styled from "styled-components";
import static_img from "./image/general.png"

const Comp = (Props) => {
	return (
		<>
			<Img_static src={Props.img} />
			<Word> {Props.txt} </Word>
		</>
	);
}

const StaticComp = () => {
	return (
		<SortRow>
			<Comp img={static_img} txt={"text"} />
			<Comp img={static_img} txt={"text"} />
			<Comp img={static_img} txt={"text"} />
			<Comp img={static_img} txt={"text"} />
		</SortRow>
	);
}

const SortRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 50px 100px;
  padding: 0 50px 0 0;
`;

const Img_static = styled.img`
    width: 200px;
    height: 200px;
`;

const Word = styled.p`
	font-size: 20px;
	color: black;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export default StaticComp;