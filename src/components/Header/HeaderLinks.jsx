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
import { Apps, CloudDownload, Group } from "@material-ui/icons";

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
          buttonIcon={Group}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Magical wellbeing
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Graphic medicine "Sparkling moments"
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              SET wellbeing: Milagros
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
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
