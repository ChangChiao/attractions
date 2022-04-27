import { createGlobalStyle } from "styled-components";
import { COLOR } from "..";
export const ButtonStyle = createGlobalStyle`
.btn{
    margin-left: 8px;
    padding: 0 12px;
    text-align: center;
    height: 32px;
    border-radius: 10px;
    line-height: 32px;
    cursor: pointer;
    color: #fff;
    box-shadow: inset 1px 1px rgba($color: #000000, $alpha: 0.1);

}

.rounded{
    border: 20px;
}


.blue-btn{
    background: ${COLOR.blue};
    border:1px solid #35a6fd;
}

.blue-light-btn{
    background: ${COLOR.blue_light};
    border:1px solid #35a6fd;
}

.purple-btn{
    background: ${COLOR.purple};
    border:1px solid #8e9fff;
}

.purple-light-btn{
    background: ${COLOR.purple_light};
    border:1px solid #8e9fff;
}

.red-btn{
    background: ${COLOR.red};
    border:1px solid #ff8484;
}


.orange{
    background: ${COLOR.orange};
    border:1px solid #f18a13;
}

.orange-light{
    background: ${COLOR.orange_light};
    border:1px solid #f18a13;
}

.gray{
    background: ${COLOR.gray};
    border:1px solid #b4b4b4;
}

.gray-light{
    background: ${COLOR.gray_light};
    border:1px solid #b4b4b4;
}

.green{
    background: ${COLOR.green};
    border:1px solid #46c797;
}
.green-light{
    background: ${COLOR.green_light};
    border:1px solid #46c797;
}


`;
