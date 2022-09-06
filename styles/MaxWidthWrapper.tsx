import styled from "styled-components";
import { QUERIES } from "./breakpointContants";

const MaxWidthWrapper = styled.div`
	position: relative;
	max-width: min(100%, (1200px + 32px * 2));
	margin-left: auto;
	margin-right: auto;
	padding-left: 16px;
	padding-right: 16px;

	@media ${QUERIES.tabletAndUp} {
		padding-left: 32px;
		padding-right: 32px;
	}
`;

export default MaxWidthWrapper;
