import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Info from "components/Typography/Info.jsx";
import Quote from "components/Typography/Quote.jsx";


import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.title}>
            Drawing on 11 years’ experience coaching health care practitioners, this prosocial, narrative session encourages peer reflection on positive events. Where the reflective practice demanded by UK healthcare governance focuses on negatives (significant events, complaints, and errors), this workshop reconnects with core values and motivation. 
            </h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <div className={classes.typo}>
                <div className={classes.note}> </div>
                <Info>
                One previous participant refers to her positive zine as "a talisman which reminds her what she loves about being a GP".
                </Info>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description}>
            Zines are a self-made and published mini magazine originating from 1930s science fiction fan fiction. In the 1970s zines developed as underground communication in Punk and feminist subcultures. Contemporary zines often relate to individual examples of physical and mental health pathography. We will review some sample zines before creating our own related to practitioner wellbeing and healthcare.
            </h5>
            <h4 className={classes.title}>
            No artistic ability required!
            </h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
          <div className={classes.typo}>
                <div className={classes.note}> </div>
                <Info>
                This session will count for CPD for your appraisal as it consists of reflective practice, supports resilience, and relates to social prescribing.
                </Info>
                </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.title}>
              Previous participants enjoyed:            
            </h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="Ability to paint a picture with words – brought it to life. Made me feel humbled and grateful. Connect with others"
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="Thanks – introduction to new ideas and books. Host was lovely and warm, connected with others."
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="I really really liked that the session was focused around gratitude and appreciation. It’s a really nice idea to frame it with a positive backdrop so that everybody is in the right frame of mind. More generally, making zines is always a joy!"
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="We have been used to reflective professional practice in the appraisal process. It was interesting and helpful to reflect on one’s wellbeing in a positive way."
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="A lot of attention has been focused on what lockdown has taken away from us and the challenges of working for the NHS, it was nice to reclaim that narrative and think of the positives."
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
          <div className={classes.typo}>
                <div className={classes.note}> </div>
                <Info>
                Previously run nationally and internationally for multi-professional audiences including ICPH Boston 2016, WONCA Istanbul 2015, EAPH Paris 2017, HEE trainee wellbeing conference 2020 (a group of over 60 trainees). Delivered annually for trainee paediatricians "Survive and Thrive day", groups of up to 80.
                </Info>
                </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
