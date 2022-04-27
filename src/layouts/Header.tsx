import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { MENU_LIST } from "../global/constant";
import { useDispatch, Search } from "../store/";
import { MEDIA_QUERY } from "@/style";

const titleStyle = css`
  color: var(--green);
  letter-spacing: 5px;
  font-size: 20px;
  cursor: pointer;
`;

const HeaderComp = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  border-bottom: 1px solid #ccc;
  ${MEDIA_QUERY.lg} {
    display: none;
  }
  h1 {
    ${titleStyle}
  }
  .logo {
    cursor: pointer;
  }
`;

const MenuComp = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    display: none;
  }
  li {
    margin: 0 10px;
    cursor: pointer;
    &:hover {
      color: var(--green);
    }
  }
`;

const MobileComp = styled.header`
  width: 100%;
  height: 50px;
  text-align: center;
  position: relative;
  line-height: 50px;
  display: none;
  h1 {
    ${titleStyle}
  }
  .logo {
    cursor: pointer;
    padding-top: 10px;
  }
  ${MEDIA_QUERY.lg} {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  height: calc(100vh - 50px);
  position: fixed;
  top: 50px;
  z-index: 100;
  background: var(--green);
  li {
    color: #fff;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid var(--line);
  }
`;

type HamberProps = {
  active: boolean;
};

const HamburgerComp = styled.div<HamberProps>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  position: absolute;
  right: 10px;
  top: 5px;
  background: var(--green);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.active &&
    css`
      .line {
        &:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: translateY(-10px) rotate(-45deg);
        }
      }
    `}

  .line {
    width: 30px;
    height: 3px;
    background-color: #ecf0f1;
    display: block;
    margin: 3px 0;
    transition: all 0.3s ease-in-out;
  }
`;
export function Header() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (path: string) => {
    const dataObj = {
      type: path,
    };
    dispatch(Search.setSearchData(dataObj));
    setActive(false);
    navigate(`/search`);
  };

  const goHome = () => {
    setActive(false);
    navigate(`/`);
  };

  const controlMenu = () => {
    setActive((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
    if (active) {
      body.style.setProperty("position", "fixed");
    } else {
      body.style.setProperty("position", "");
    }
  }, [active]);
  return (
    <>
      <HeaderComp>
        <img className="logo" onClick={goHome} src={process.env.PUBLIC_URL + `/image/logo.png`} />
        {/* <h1 onClick={goHome}>台灣走走 • Tai Walk</h1> */}
        <MenuComp>
          {MENU_LIST.map((vo) => {
            return (
              <li
                key={vo.label}
                onClick={() => {
                  handleClick(vo.value);
                }}
              >
                {vo.label}
              </li>
            );
          })}
        </MenuComp>
      </HeaderComp>
      <MobileComp>
        <img className="logo" onClick={goHome} src={process.env.PUBLIC_URL + `/image/logo-mobile.png`} />
        <HamburgerComp active={active} onClick={controlMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </HamburgerComp>
      </MobileComp>
      {active && (
        <MobileMenu>
          {MENU_LIST.map((vo) => {
            return (
              <li
                key={"m" + vo.label}
                onClick={() => {
                  handleClick(vo.value);
                }}
              >
                {vo.label}
              </li>
            );
          })}
        </MobileMenu>
      )}
    </>
  );
}
