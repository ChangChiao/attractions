import { createGlobalStyle } from "styled-components";
import { COLOR } from ".";
export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    list-style: none;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
}

html {
    // height: 100vh;
    line-height: 16px;
    width: 100%;
    -webkit-font-smoothing: antialiased;

}

body {
    width: 100%;
    font-family: 'Noto Sans TC', sans-serif;
}
a{
    text-decoration: none;
    cursor: pointer;
    color: ${COLOR.green};
    &:active{
        text-decoration: none;
        outline:none;
    }
    @include pc-width{
        text-decoration: none;
        transition: all .3s;
        &:hover, &:active{
            outline:none;
        }
    }
}

html, body, div, span, iframe,
h1, h2, h3, h4, h5, h6, p, a, em,
strong, sub, sup, b, u, dl, dt, dd, ol, ul, li,
table, tbody, tfoot, thead, tr, th, td{
    color: ${COLOR.baseFont};
}


button{
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    border-radius: 8px;
    overflow: hidden;
    outline: none;
    background-color: ${COLOR.green};
    color: #fff;
}

input{
    background: #fff;
    border: none;
    color: ${COLOR.baseFont};
    padding: 0px 5px;
    border-radius: 6px;
    border:1px solid ${COLOR.line};
    overflow: hidden;
    min-height: 30px;
    padding: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:focus {
        outline: none;
    }
    &::placeholder{
        color: ${COLOR.baseFont};
        opacity: 0.7;
    }
    @include small-phone-width(){
        width: 100%;
        margin-top: 10px;
    }
}

textarea {
    border:none;
}

.block{
    background: #fff;
    border-radius: 16px;
    box-shadow: 0px 6px 6px rgba($color: #000000, $alpha: 0.1);
}

.wrapper {
  width: 90vw;
  margin: 0 auto;
  padding-bottom: 100px;
  min-height: 90vh;
}

.container {
  width: 80%;
  margin: 50px auto 0;
}

.date {
  font-size: 14px;
  color: #646464;
  padding-bottom: 5px;
}

.item-title{
    font-weight: 900;
    font-size: 20px;
}

.location {
  font-size: 14px;
  color: #646464;
  svg {
    margin-right: 5px;
  }
}

.intro{
    font-size: 14px;
    color: #646464;
    svg {
        margin-left: 5px;
    }
}

.load {
    position: fixed;
    top: 0;left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.5);
    .load-container{
        position: absolute;
        top: 0;right: 0;bottom: 0;left: 0;
        margin: auto;
    }
    .letter{
        animation-name: loading;
        animation-duration: 1.6s;
        animation-iteration-count: infinite;
        animation-direction: linear;
    }

    @for $i from 1 to 10 {
        .l-#{$i} {
            animation-delay: 0.48s + $i*0.12s;
        }
  }
}

@keyframes loading {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}


.title{
    font-size: 36px;
}

.more{
    font-size: 14px;
    color: var(--red);
    cursor: pointer;
    transition-duration: 0.3s;
    &:hover {
        transform: translate(5px, 0);
    }
}


`;
