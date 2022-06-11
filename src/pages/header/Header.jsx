import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.scss";

const headerConstants = [
  { title: "Home", link: "/" },
  { title: "Diary", link: "/diary" },
  { title: "Analytics", link: "/analytics" },
  { title: "My advice", link: "/my-advice" },
];

const Header = () => {
  return (
    <div>
      <nav className="header--regular">
        {headerConstants.map((headItem) => (
          <Link
            key={headItem.title}
            className="header-element"
            to={headItem.link}
          >
            {headItem.title}
          </Link>
        ))}
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
                {headerConstants.map((headItem) => (
                  <div key={headItem.title}>
                    <MenuItem onClick={popupState.close}>
                      <Link className="header-element" to={headItem.link}>
                        {headItem.title}
                      </Link>
                    </MenuItem>
                  </div>
                ))}
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </nav>
    </div>
  );
};

export default Header;
