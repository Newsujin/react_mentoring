import styled from "styled-components";
import general from "./general.png"

const Comp1 = () => {
	return (
		<Img_static src={general} />
	);
}

const Comp2 = () => {
	return (
		<Img_static src={general} />
	);
}

const Comp3 = () => {
	return (
		<Img_static src={general} />
	);
}

const GenComp = () => {
	return (
		<SortRow>
			<Comp1 />
			<Comp2 />
			<Comp3 />
		</SortRow>
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

const Img_static = styled.img`
    width: 200px;
    height: 200px;
    margin: 10px;
`;

export default GenComp;