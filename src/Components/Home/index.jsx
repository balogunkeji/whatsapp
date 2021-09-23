import React from "react";
import { Section, FlexibleDiv } from "../Box/style";
import { OverFlowScrollBar } from "../OverflowScroll/styles";
import { HomeWrapper } from "./style";

function Home() {
	return (
		<HomeWrapper>
			<div className="flex">
				<OverFlowScrollBar>
					<div className="sideBar" >
						<h1>Tomisin</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Recusandae, repellat nemo hic, deleniti asperiores, quidem
							molestiae nihil voluptatibus accusamus quia sed praesentium neque
							laudantium illum tempora excepturi provident inventore cum.
						</p>
					</div>
				</OverFlowScrollBar>
				<OverFlowScrollBar>
					<div className="main">
					<h1>Tomisin</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Recusandae, repellat nemo hic, deleniti asperiores, quidem
							molestiae nihil voluptatibus accusamus quia sed praesentium neque
							laudantium illum tempora excepturi provident inventore cum.
						</p>
					</div>
				</OverFlowScrollBar>
			</div>
		</HomeWrapper>
	);
}

export default Home;
