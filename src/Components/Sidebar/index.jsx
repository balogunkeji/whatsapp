import React from "react";
import { SideBarWrapper } from "./style";
import {FlexibleDiv, Section} from "../Box/style"
import { BiPlus, BiSearch } from "react-icons/bi"
import {Notification, Menu} from "../../assets/SVG/svg"
import Whatsapp1 from "../../assets/images/whatsapp1.jpg"
import {SideItems} from "../../utilities/data"
import { OverFlowScrollBar } from "../OverflowScroll/styles";
import { AiFillPushpin } from "react-icons/ai"
// import { OverFlowScrollBar } from "../OverflowScroll/styles";
function SideBar() {
	return (
		<SideBarWrapper>
   <FlexibleDiv className="side-bar-content">
   <Section className="header" justifyContent="space-between">
  <FlexibleDiv  justifyContent="space-between" className="head">
    <img src={Whatsapp1} alt="img" />
    <div className="icons">
     <Notification/>
     <BiPlus />
     <Menu />
    </div>
			</FlexibleDiv>
   <FlexibleDiv className="search">
   <FlexibleDiv className="input" justifyContent="flex-start">
    <div>
     <BiSearch/>
    <input placeholder="Search or start new chat"/>
    </div>
    </FlexibleDiv>
    </FlexibleDiv>
   </Section>
   <OverFlowScrollBar>
   <div className="bottom-with-scroll">
   <Section className="body">
    {SideItems?.map((item, id) =>(
     <FlexibleDiv key={id}>
      <FlexibleDiv>
       <img src={item.image} alt="img" style={{margin: "10px 0"}} />
      </FlexibleDiv>
      <FlexibleDiv>
       <span className="pin" style={{backgroundColor: item.pin === <AiFillPushpin/> ? "grey" : item.messageCount > 0 ? "green" : "transparent" }}>
         <p>{item.pin}</p>
         <p>{item.messageCount}</p>
       </span>
      </FlexibleDiv>
     </FlexibleDiv>
    ))}
   </Section>
   </div>
   </OverFlowScrollBar>
  </FlexibleDiv>
		</SideBarWrapper>
	);
}

export default SideBar;
