import { css } from "styled-components";

export const mobile = (props) => {
	return css`
		@media screen and (max-width: 767px) {
			${props}
		}
	`;
};
export const small = (props) => {
	return css`
		@media (min-width: 768px) and (max-width: 991px) {
			${props}
		}
	`;
};
export const mid = (props) => {
	return css`
		@media (min-width: 992px) and (max-width: 1199px) {
			${props}
		}
	`;
};
