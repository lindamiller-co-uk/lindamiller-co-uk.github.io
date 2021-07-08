import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Quote from "components/Typography/Quote.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description}>
              Music text 
            </h5>
            <h5 className={classes.description}>
            Music text 
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="Music text "
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description}>
            Music text 
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
