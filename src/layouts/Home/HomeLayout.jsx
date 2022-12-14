import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { breakpoints } from "../../constants/common";
import Footer from "../../modules/Footer/Footer";
import Header from "../../modules/Header/Header";
import HomeSideBar from "../../modules/HomeSideBar/HomeSideBar";
import {
  setOverflowNavbar,
  setScreenWidth,
} from "../../store/actions/layout.actions";

export default function HomeLayout() {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  window.onresize = () => {
    // console.log({ viewWidth });
    setViewWidth(window.innerWidth);
  };
  const layoutState = useSelector((state) => state.layoutReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const homeEle = document.querySelector("#HOME");
    if (viewWidth >= breakpoints.categoriesBar) {
      dispatch(
        setScreenWidth({ screenType: breakpoints.extraLarge, overflow: false })
      );
    } else if (viewWidth >= breakpoints.extraLarge) {
      homeEle.className = "view-xl";
      dispatch(
        setScreenWidth({ screenType: breakpoints.extraLarge, overflow: true })
      );
    } else if (viewWidth >= breakpoints.large) {
      // console.log("view-lg");
      homeEle.className = "view-lg";
      dispatch(
        setScreenWidth({ screenType: breakpoints.large, overflow: true })
      );
    } else if (viewWidth >= breakpoints.medium) {
      // console.log("view-md");
      homeEle.className = "view-md";
      dispatch(
        setScreenWidth({ screenType: breakpoints.medium, overflow: true })
      );
    } else {
      // console.log("view-sm");
      homeEle.className = "view-sm";
      dispatch(
        setScreenWidth({ screenType: breakpoints.small, overflow: true })
      );
    }
  }, [viewWidth]);

  return (
    <div id="HOME">
      <Header />
      <Outlet />
      <HomeSideBar isShown={layoutState.showSideBar} />
      <Footer />
    </div>
  );
}
