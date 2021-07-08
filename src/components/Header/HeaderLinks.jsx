/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons

// React icons
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Workshops"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/GraphicMedicine" className={classes.dropdownLink}>
            Cartooning "Sparkling moments"
            </Link>,
            <Link to="/Magic" className={classes.dropdownLink}>
              Magical wellbeing
            </Link>,
            <Link to="/Milagros" className={classes.dropdownLink}>
              Milagros creative workshops
            </Link>,
            <Link to="/Comedy" className={classes.dropdownLink}>
            Comedy
            </Link>,
            <Link to="/Poetry" className={classes.dropdownLink}>
            Poetry
            </Link>,
            <Link to="/SharedReading" className={classes.dropdownLink}>
            Shared reading and creative writing
            </Link>,
            <Link to="/Music" className={classes.dropdownLink}>
            Music
            </Link>,
            <Link to="/BodyWork" className={classes.dropdownLink}>
            Body Work
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/profile-page"
          color="transparent"
          className={classes.navLink}
        >
           Coaching
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/profile-page"
          color="transparent"
          className={classes.navLink}
        >
           Coach supervision
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/profile-page"
          color="transparent"
          className={classes.navLink}
        >
           Medical educator
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkedin-tooltip"
          title="Find me on LinkedIn"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.linkedin.com/in/linda-miller-3a512510b/"
            target="_blank"
            className={classes.navLink}
          >
            <FaLinkedin/>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
