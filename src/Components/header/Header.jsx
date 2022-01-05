import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";

const Header = () => {
  return (
    <div>
      <nav className="header--regular">
        <Link className="header-element" to="/">
          Home
        </Link>
        <Link className="header-element" to="/diary">
          Diary
        </Link>
        <Link className="header-element" to="/analytics">
          Analytics
        </Link>
      </nav>

      <nav className="header--mobile">
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button
                color="success"
                variant="outlined"
                {...bindTrigger(popupState)}
              >
                <MenuIcon />
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>
                  <Link className="header-element" to="/">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <Link className="header-element" to="/diary">
                    Diary
                  </Link>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <Link className="header-element" to="/analytics">
                    Analytics
                  </Link>
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </nav>
    </div>
  );
};

export default Header;
