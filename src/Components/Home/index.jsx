import React from "react";
import SideBar from "../Sidebar";
import { HomeWrapper } from "./style";
import Main from "../Main";

function Home() {
	return (
		<HomeWrapper>
			<div className="flex">
				
					<div className="sideBar" >
					<SideBar/>
					</div>
				
				
					<div className="main">
					<Main />
					</div>
				
			</div>
		</HomeWrapper>
	);
}

export default Home;
