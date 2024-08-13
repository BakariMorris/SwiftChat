import styled from "styled-components";
import { SvgIcon } from "../../common/SvgIcon";

export const TopLeftImg = styled(SvgIcon)`
    z-index: -1;
    position: fixed;
    left: -4%;
    top: -4%;
    filter: blur(260px);
`;

export const BottomRightImg = styled(SvgIcon)`
    position: fixed;
    right: -4%;
    bottom: -4%;
    z-index: -1;
    filter: blur(260px);
`;
  
