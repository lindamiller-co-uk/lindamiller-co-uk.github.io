import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description}>
            It is recognised that small group discussions accompanying art and craft making have a unique quality and generate fresh insights.Milagros; These objects are often in the shape of an organ or limb of the body and may constitute a petition for healing or a symbol of gratitude. Others in the shape of animals or objects have different meanings. Milagros may be carried as good luck charms .We will consider the metaphorical power of objects and talismans. 
            Positive psychology research confirms that expressions of gratitude have a positive impact on mental well-being. Expressing gratitude with patients  can have a powerful impact on doctor patient interactions and colleagues are more likely to feel valued in a culture where gratitude is expressed. Roger Neighbour author of the "Inner Consultation "is one proponent of the value of expressing gratitude to patients. 
            This session will constitute CPD for appraisal as it relates to reflective practice, cultural understanding, arts in health and self-care. 
            Materials;Tin foil and a variety of pens and pencils and blunt implements. 
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
