import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>text</h2>
            <h5 className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida augue nisl, in tincidunt purus condimentum sed. Vestibulum gravida rhoncus nibh id maximus. Vestibulum sed suscipit massa. Phasellus sapien turpis, varius ut feugiat in, blandit in orci. Proin orci lacus, maximus at bibendum sed, vulputate et metus.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Thing 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida augue nisl, in tincidunt purus condimentum sed."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Thing 2"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida augue nisl, in tincidunt purus condimentum sed."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Thing 3"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida augue nisl, in tincidunt purus condimentum sed."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
