import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowSideBar } from "../../store/actions/layout.actions";
import { SideBarStyle } from "../../styles/Home/SideBarStyled/SideBarStyled";

import "./HomeSideBar.scss";
import SideBarContent from "./SideBarContent/SideBarContent";
export default function HomeSideBar({ isShown }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isShown) {
      document.querySelector("#sideBar").classList.add("sideBar__shown");
    } else {
      document.querySelector("#sideBar").classList.remove("sideBar__shown");
    }
  }, [isShown]);

  return (
    <div id="sideBar">
      <SideBarStyle isShown={isShown}>
        <SideBarContent />
      </SideBarStyle>
      <div
        className="sideBar__overlay"
        onClick={() => dispatch(setShowSideBar(false))}
      ></div>
    </div>
  );
}
