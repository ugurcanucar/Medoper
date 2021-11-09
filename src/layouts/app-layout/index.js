import React, { useEffect } from "react";
import { Menu, Breadcrumb, Tooltip, Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import navigationConfig from "configs/NavigationConfig";
import { Link } from "react-router-dom";
import AppViews from "views/app-views";
import { connect } from "react-redux";
import { signOut } from "redux/actions/Auth";
import "./styles.css";
import Aos from "aos";

const menu = (
  <Menu className="mt-2">
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        TR
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        EN
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        FR
      </a>
    </Menu.Item>
  </Menu>
);
export const AppLayout = (props) => {
  const { pageSettings } = props;
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className=" ">
      <div
        className="bg-blue-200 min-w-full w-full relative shadow-md z-50 "
        style={{
          height: "18vh",
          backgroundImage: `url("data:image/jpeg;base64,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")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex px-6   items-center justify-between">
          <div
            className="logo   w-40 h-20"
            style={{
              backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/9/95/Stockx_logo.png")`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="flex gap-7   h-24 items-center ">
            <div className="     ">
              <span className="cursor-pointer transition-all duration-500 hover:text-green-500 fa fa-headphones-alt text-3xl text-gray-50"></span>
            </div>
            <div className=" w-40  ">
              <Button className="bg-transparent  duration-500 transition-all border-white rounded-full w-full h-12 px-5 text-white group hover:border-green-500 hover:text-green-500">
                <span className="text-base">Get a Quote</span>{" "}
                <span className="ml-2 fa fa-arrow-right"></span>
              </Button>
            </div>
            <div className="w-20    ">
              <Dropdown align="center" overlay={menu}>
                <div className="flex text-gray-50 gap-1 cursor-pointer items-center">
                  <span>EN</span> <DownOutlined />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 w-full menu-list ">
          <ul className=" float-right w-full text-xl   ">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className=" self-center">
              <a className="fa fa-search  last"></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="w-14 h-14 fixed bottom-5 z-50 right-5">
          <Button
            shape="circle"
            className="w-14  bg-green-400 border-gray-300 shadow-sm h-14   relative"
          >
            <span className="fa fa-comment text-white"></span>
          </Button>
        </div>

        <AppViews />
      </div>
    </div>
  );
};
const mapStateToProps = ({ subheader }) => {
  const { pageSettings, pageButtons } = subheader;
  return { pageSettings, pageButtons };
};
const mapDispatchToProps = {
  signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(AppLayout));
