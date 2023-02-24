import styled from "styled-components";
import general from "../image/general.png"

const Comp = (Props) => {
	return (
		<Block>
			<Img_gen src={Props.img} />
			<p> {Props.txt} </p>
		</Block>
	);
}

const GenComp = () => {
	return (
		<SortRow>
			<Comp img={general} txt={"1"}/>
			<Comp img={general} txt={"2"}/>
			<Comp img={general} txt={"3"}/>
			<Comp img={general} txt={"4"}/>
			<Comp img={general} txt={"5"}/>
			<Comp img={general} txt={"6"}/>
		</SortRow>
	);
}

const SortRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	flex-wrap: wrap;
	margin: 0 0 0 100px;
`;

const Block = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin: 0 50px;
	/* height: 100px; */
`;

const Img_gen = styled.img`
    width: 200px;
    height: 200px;
    margin: 10px;
`;

export default GenComp;