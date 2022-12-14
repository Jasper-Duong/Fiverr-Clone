import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import React, { useRef, useState } from "react";
import styled from "styled-components";
const menu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: "1",
      },
      {
        type: "divider",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);

const StyledDownOutLined = styled.div`
  display: flex;
  align-items: center;
  .icon-arrow-down {
    ${({ isOpenMenu }) => (isOpenMenu ? "transform: rotate(-180deg);" : "")}
    transition: all 0.3s;
  }
`;
const DropDownAnt = ({
  title,
  content,
  gap,
  isHover,
  hideArrow,
  container,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const customContainer = () => container || document.body;
  return (
    <Dropdown
      overlay={content || menu}
      trigger={isHover ? ["hover"] : ["click"]}
      placement="bottom"
      onOpenChange={(isOpen) => {
        setIsOpenMenu((prev) => !prev);
      }}
      getPopupContainer={customContainer}
    >
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Space size={gap}>
          {title}
          {!hideArrow && (
            <StyledDownOutLined isOpenMenu={isOpenMenu}>
              <i className="icon-arrow-down fas fa-chevron-down"></i>
            </StyledDownOutLined>
          )}
        </Space>
      </a>
    </Dropdown>
  );
};
export default DropDownAnt;
