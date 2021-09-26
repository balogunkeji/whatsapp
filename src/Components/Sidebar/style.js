import styled from "styled-components";
export const SideBarWrapper = styled.div`
	position: relative;

	img {
		border-radius: 55%;
		width: 55px;
		height: 55px;
		display: block;
	}

	.side-bar-content {
		height: 100vh;

		.header {
			position: fixed;
			background-color: #131c21;
			width: 500px;
			height: 120px;
			max-width: 100%;
			top: 0;
			border-bottom: 1px solid #323739;
			@media (max-width: 1200px) {
				width: 400px;
			}
			@media (max-width: 744px) {
				width: 100%;
			}
			.head {
				padding: 10px 18px 5px 20px;
				background-color: #2a2f32;
				margin-top: -10px;

				.icons {
					display: flex;
					svg {
						margin-left: 30px;
						width: 30px;
						height: 30px;
						justify-self: baseline;
						transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
						color: #828689;
					}
				}
				.icon {
					width: 23px;
					height: 23px;
				}
				@media (max-width: 1200px) {
					padding: 5px 18px 5px 20px;
				}

				svg {
					margin-left: 20px;
				}
			}
			/* search */
			.search {
				.input {
					margin: 2px auto 2px auto;
					background-color: #323739;
					height: 40px;
					border-radius: 20px;
					width: 430px;
					max-width: 100%;
					padding: 0 20px;
					@media (max-width: 1200px) {
						width: 320px;
					}
					@media (max-width: 744px) {
						width: 600px;
					}
					@media (max-width: 480px) {
						width: 300px;
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
		/* bottom-with-scroll */
		.bottom-with-scroll {
			height: 100%;
			overflow-y: auto;
			background-color: #131c21;
			.body {
				padding: 140px 15px 30px 20px;
				@media (max-width: 1200px) {
					padding: 140px 15px 30px 15px;
				}
				@media (max-width: 744px) {
					padding: 140px 10px 30px 10px;
				}
				.messageWrapper {
					display: flex;
					flex-direction: row;
					height: 73px;
					letter-spacing: 1;

					.messageContent {
						display: flex;
						flex-basis: auto;
						flex-direction: column;
						flex-grow: 1;
						justify-content: center;
						min-width: 0;
						border-bottom: 1px solid #323739;
						margin-left: 15px;
						@media (max-width: 1200px) {
							margin-left: 10px;
						}
					}

					.messageBody {
						display: flex;
						justify-content: space-between;
						align-items: center;
						line-height: 1.5;

						p {
							font-size: 12px;
							color: #f9f9fce6;
						}
					}
				}
			}
		}
	}
`;
