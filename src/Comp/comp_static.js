import styled from "styled-components";
import static_img from "../image/general.png"

import {Link} from "react-router-dom";

const Comp = (Props) => {
	return (
		<Block>
			<Img_static src={Props.img} />
			<Word> {Props.txt} </Word>
		</Block>
	);
}

const StaticComp = () => {
	return (
		<SortRow>
			<Link to="/react">
				<Comp img={static_img} txt={"react"} />
			</Link>
			<Link to="/java">
				<Comp img={static_img} txt={"java"} />
			</Link>
			<Link to="/life">
				<Comp img={static_img} txt={"life"} />
			</Link>
			<Link to="/netflix">
				<Comp img={static_img} txt={"netflix"} />
			</Link>
		</SortRow>
	);
}

const SortRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin: 50px 150px;
	padding: 0 50px 0 0;
	width: 100%;
`;

const Block = styled.div`
	margin: 0 150px;
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