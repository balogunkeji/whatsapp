import React from "react";
import SideBar from "../Sidebar";
import { OverFlowScrollBar } from "../OverflowScroll/styles";
import { HomeWrapper } from "./style";
import Main from "../Main";

function Home() {
	return (
		<HomeWrapper>
			<div className="flex">
				<OverFlowScrollBar>
					<div className="sideBar" >
					<SideBar/>
					</div>
				</OverFlowScrollBar>
				
					<div className="main">
					<Main />
					</div>
				
			</div>
		</HomeWrapper>
	);
}

export default Home;
