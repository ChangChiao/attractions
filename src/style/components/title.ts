import { createGlobalStyle } from "styled-components";
import { COLOR } from "..";
export const TitleStyle = createGlobalStyle`
.title{
    font-size: 36px;
}

.more{
    font-size: 14px;
    color: ${COLOR.red};
    cursor: pointer;
    transition-duration: 0.3s;
    &:hover {
        transform: translate(5px, 0);
    }
}

`;
