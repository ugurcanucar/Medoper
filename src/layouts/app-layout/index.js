import React from "react";
import { Menu, Breadcrumb, Tooltip } from "antd";
import navigationConfig from "configs/NavigationConfig";
import { Link } from "react-router-dom";
import AppViews from "views/app-views";
import { connect } from "react-redux";
import { signOut } from "redux/actions/Auth";

export const AppLayout = (props) => {
  const { pageSettings } = props;

  return (
    <React.Fragment>
      <AppViews />
    </React.Fragment>
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
