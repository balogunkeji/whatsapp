import React from "react";
import { SideBarWrapper } from "./style";
import { FlexibleDiv, Section } from "../Box/style";
import { BiPlus, BiSearch } from "react-icons/bi";
import { Notification, Menu } from "../../assets/SVG/svg";
import Whatsapp1 from "../../assets/images/whatsapp1.jpg";
import { SideItems } from "../../utilities/data";
import { OverFlowScrollBar } from "../OverflowScroll/styles";

function SideBar() {
	return (
		<SideBarWrapper>
			<div className="side-bar-content">
				<Section className="header" justifyContent="space-between">
					<FlexibleDiv justifyContent="space-between" className="head">
						<img src={Whatsapp1} alt="img" />
						<div className="icons">
							<Notification />
							<BiPlus />
							<Menu />
						</div>
					</FlexibleDiv>
					<FlexibleDiv className="search">
						<FlexibleDiv className="input" justifyContent="flex-start">
							<div>
								<BiSearch />
								<input placeholder="Search or start new chat" />
							</div>
						</FlexibleDiv>
					</FlexibleDiv>
				</Section>

				<Section className="side-bar-content">
					<OverFlowScrollBar>
						<div className="bottom-with-scroll">
							<div className="body">
								{SideItems?.map((item, id) => (
									<div key={id} className="messageWrapper">
										<div justifyContent="flex-start" className="img">
											<img
												src={item.image}
												alt="img"
												style={{ margin: "10px 0" }}
											/>
										</div>
									
                    <div justifyContent="" className="messageContent">
											<div className="messageBody">
                        <h4>{item.title}</h4>
                        <p>{item.timeStamp}</p>
                      </div>
                      <div className="messageBody">
                        <p>{item.subtitle}</p>
                        <span className="span"
                        style={{
													backgroundColor: item.messageCount
														? "#009688"
														: item.pin
														? "grey"
														: "transparent",
													borderRadius: "20px",
													width: "15px",
													height: "15px",
													textAlign: "center",
													padding: "5px",
													fontSize: "12px",
                          color: item.messageCount ? "#f9f9fce6" : item.pin ? "#333333e6" : "transparent"
												}}>
												{<span>{item.pin || item.messageCount}</span>}
                        </span>
                      </div>
										</div>
										</div>
									
								))}
							</div>
						</div>
					</OverFlowScrollBar>
				</Section>
			</div>
		</SideBarWrapper>
	);
}

export default SideBar;