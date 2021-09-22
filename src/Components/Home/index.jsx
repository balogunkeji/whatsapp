import React from "react";
import { Section, FlexibleDiv } from "../Box/style";
import {OverFlowScrollBar} from '../OverflowScroll/styles'
import { HomeWrapper } from "./style";

function Home() {
	return (
		<HomeWrapper>
			<Section>
				<OverFlowScrollBar>
					<FlexibleDiv className="sideBar"></FlexibleDiv>
				</OverFlowScrollBar>
				<OverFlowScrollBar>
					<FlexibleDiv className="main"></FlexibleDiv>
				</OverFlowScrollBar>
			</Section>
		</HomeWrapper>
	);
}

export default Home;
