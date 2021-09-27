import styled from "styled-components";
import img from "../../assets/images/what.png"
export const MenuWrapper = styled.div`
	position: relative;

	img {
		border-radius: 50%;
		width: 50px;
		height: 50px;
		align-self: center;
	}

	svg {
		margin-left: 10px;
		width: 24px;
		height: 24px;
		transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
		color: #828689;
		align-self: center;
	}

	.menu-content {
		height: 100vh;

		.header {
			position: fixed;
			background-color: #2a2f32;
			width: 100%;
			height: 59px;
			max-width: 100%;
			overflow: hidden;
		}

		.header {
			top: 0;
			.header-flex {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 1150px;
				max-width: 100%;
				margin: 5px 20px;
				@media (max-width: 1500px){
					width: 980px;
				}
				@media (max-width: 1300px) {
							width: 67%;
						}
						@media (max-width: 1100px) {
							width: 60%;
						}
						@media (max-width: 975px) {
							width: 55%;
						}
						@media (max-width: 920px) {
							width: 53%;
						}
					 @media (max-width: 772px){
							width: 48%;
						}
					
				.flex {
					
					h4 {
						align-self: center;
						margin-left: 10px;
					}
				}

				.flex1 {
					display: flex;
					align-items: center;
				}
			}
		}

		.footer {
			bottom: 0;
			position: fixed;
			background-color: #2a2f32;
			width: 100%;
			height: 63px;
			max-width: 100%;
			overflow: hidden;
			display: flex;
			align-items: center;
			.footer-flex {
				display: flex;
				align-items: center;
				/* justify-content: space-between; */
				width: 1150px;
				max-width: 100%;
				margin:  10px;
				@media (max-width: 1500px){
					width: 980px;
				}
				@media (max-width: 1300px) {
							width: 67%;
						}
						@media (max-width: 1100px) {
							width: 60%;
						}
						@media (max-width: 975px) {
							width: 55%;
						}
						@media (max-width: 920px) {
							width: 52%;
						}
						@media (max-width: 880px) {
							width: 50%;
						}
						
				.search {
					margin: 0 auto;
					.input {
					
						display: flex;
						justify-content: flex-start;
						align-items: center;
						background-color: #323739;
						height: 40px;
						border-radius: 20px;
						width: 700px;
						max-width: 100%;
						padding: 0 20px;
						@media (max-width: 1500px) {
							width: 500px;
						}
						@media (max-width: 1100px) {
							width: 420px;
						}
						@media (max-width: 980px) {
							width: 350px;
						}
						
						@media (max-width: 920px) {
							width: 320px;
						}
						@media (max-width: 880px) {
							width: 300px;
						}
						@media (max-width: 850px){
							width: 250px;
						}
						@media (max-width: 750px){
							width: 190px;
						}
						div {
							display: flex;
							input {
								border: none;
								outline: none;
								background-color: transparent;
								margin-left: 20px;
								color: white;
							}
						}
					}
				}
			}
		}
	}

	.body-with-scroll {
		height: 100%;
		overflow-y: scroll;
		padding: 70px 20px;
		.flex{
			display: flex;
			flex-direction: column;
			p{
				background-color:#262d31;
				margin-top: 5px;
				width: fit-content;
				max-width: 100%;
				padding: 10px 12px;
				border-radius: 10px;
			}
		}
		.flex1{
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			p{
				background-color:#056162;
				margin-top: 5px;
				max-width: 100%;
				padding: 10px;
				width: fit-content;
				
				padding: 10px 12px;
				border-radius: 10px;
			}
		}
	}
`;
