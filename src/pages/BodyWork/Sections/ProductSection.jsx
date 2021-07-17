import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Quote from "components/Typography/Quote.jsx";
import Info from "components/Typography/Info.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.title}>
            This session will explore physical movement for our wellbeing and resilience. It will be an opportunity to think through and prioritise effective strategies in terms of supporting others, learn specific body-based skills to support self-regulation, resourcing and strategies to lower the risk of secondary trauma.
            </h5>
            <h5 className={classes.description}>
            This will give an appreciation of how social prescribing of movement and performance activities can also help patients.
            </h5>
            <h5 className={classes.description}>
            Body work will be introduced by Charlie Blowers, Founder & Director of Moving Pieces. Moving Pieces provide courses for people experiencing mental health challenges; performers actively looking to devise theatre performance based on personal experiences; mental health professionals and those interested in drama therapy, physical theatre, applied theatre and arts therapy.            
            </h5>
            <div className={classes.typo}>
                <div className={classes.note}> </div>
                <Info>
                This workshop on movement for wellbeing can also contribute to Continued Professional Development and reflective practice for appraisal as we think about social prescribing of modement and performance activities can help patients. There will be cake.
                </Info>
            </div>
            <h4 className={classes.title}>
              Previous participants enjoyed:
            </h4>
            <div className={classes.typo}>
                <Quote
                  text="Allowed me to do things without realising and feeling the better for it. Well presented and explained."
                />
            </div>
            <div className={classes.typo}>
                <Quote
                  text="Body psychotherapy new to me"
                />
            </div>
            <div className={classes.typo}>
                <Quote
                  text="Slow pace, well guided"
                />
            </div>
            <div className={classes.typo}>
                <Quote
                  text="Opened my eyes to alternative ways of coping with pressure. Learning new ways of releasing tension without too much effort."
                />
            </div>
            <div className={classes.typo}>
                <Quote
                  text="making my shoulders stop aching"
                />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
