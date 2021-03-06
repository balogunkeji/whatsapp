import React from "react";
import { OverFlowScrollBar } from "../OverflowScroll/styles";
import { Section } from "../Box/style";
import { MenuWrapper } from "./style";
import Whatsapp1 from "../../assets/images/whatsapp5.jpg";
import { BiSearch } from "react-icons/bi";
import { Menu, Download, Microphone } from "../../assets/SVG/svg";
import { GrEmoji } from "react-icons/gr";

function Main() {
	return (
		<MenuWrapper>
			<div className="menu-content">
				<div className="header">
					<div className="header-flex">
						<div className="flex">
							<img src={Whatsapp1} alt="" />
							<h4>Dimðð</h4>
						</div>
						<div className="flex1">
							<BiSearch />
							<Menu />
						</div>
					</div>
				</div>

				<Section className="menu-content">
					<OverFlowScrollBar>
						<div className="body-with-scroll">
							<div className="flex">
								<p>Hey!</p>
								<p>Can you please help out?</p>
							</div>
							<div className="flex1">
							<p>Yea,sure</p>
							<p>and how may I help you</p>
							</div>
						</div>
					</OverFlowScrollBar>
				</Section>

				<div className="footer">
					<div className="footer-flex">
						<div className="flex">
							<GrEmoji />
							<Download />
						</div>
						<div className="search">
							<div className="input" >
								<div>
									<BiSearch />
									<input placeholder="Search or start new chat" />
								</div>
							</div>
						</div>
						<div className="flex1">
							<Microphone />
						</div>
					</div>
				</div>
			</div>
		</MenuWrapper>
	);
}

export default Main;
