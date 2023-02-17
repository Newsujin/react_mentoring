import styled from "styled-components";
import static1 from "./static1.JPG"
import static2 from "./static2.JPG"
import static3 from "./static3.JPG"
import static4 from "./static4.JPG"

const Comp1 = () => {
	return (
		<>
  	    	<Img_static src={static1} />
			<Word> 프로젝트 </Word>
		</>
	);
}

const Comp2 = () => {
	return (
		<>
        	<Img_static src={static2} />
			<Word> 공부 </Word>
		</>
	);
}

const Comp3 = () => {
	return (
		<>
			<Img_static src={static3} />
			<Word> 42 </Word>
		</>
	);
}

const Comp4 = () => {
	return (
		<>
		<Img_static src={static4} />
			<Word> 취미 </Word>
		</>
	);
}

const StaticComp = () => {
	return (
		<>
		<SortRow>
			<Comp1 />
			<Comp2 />
		</SortRow>

		<SortRow>
			<Comp3 />
			<Comp4 />
		</SortRow>
		</>
	);
}

const SortCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const SortRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 100px;
`;

const Img_static = styled.img`
    width: 200px;
    height: 200px;
`;

const Word = styled.p`
	font-size: 30px;
	color: blue;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export default StaticComp;