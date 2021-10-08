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
            This interactive workshop introduces “Graphic Medicine” as a “hands-on” tool to reflect on the joy in clinical practice. Examples of graphic novels by clinicians and patients will be used to introduce the metaphorical potential of graphic narratives. 
            </h4>
            <h4 className={classes.title}>
            Participants will be actively involved throughout the session, (though no artistic ability is required.). Graphic novels will be used to demonstrate use of colour, symbol, repetition and structure in this rich narrative genre.
            </h4>
            <h5 className={classes.description}>
            Demonstration will be used to model an “appreciative enquiry” response to a graphic depiction of a “sparkling moment” from practice. Participants are invited to experiment with techniques to reflect on a “sparkling moment” in a graphic form. Breakout group discussion will provide appreciative feedback. Participants experience the motivational impact of such reflection and benefit from peer appreciative responses.
            </h5>
            <h5 className={classes.description}>
            This original methodology has developed from a “sparkling moment” reflective, supervision workshop and study of narrative medicine particularly graphic form. Previous workshops with trainees, coaches, nurses and GP and trainers have demonstrated that participants found the play- like experience liberating and enabled participants to reconnect with the core value of their work.
            </h5>
            <h5 className={classes.description}>
            Feeling valued and appreciated is motivating, enhances self-compassion and resilience. The method crosses language barriers and appeals to an International audience and is relevant to a variety of disciplines and allied health professionals.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.title}>
            This workshop is focussed on salutogenesis enhancing mental health and well-being by reflecting on positive experiences and appreciation.
            </h5>
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
                  text="A lot of attention has been focused on what lockdown has taken away from us and the challenges of working for the NHS, it was nice to reclaim that narrative and think of the positives."
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
                  text="We have been used to reflective professional practice in the appraisal process. It was interesting and helpful to reflect on one’s wellbeing in a positive way."
                />
              </div>
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
                  text="Really different, joyful and invigorating session."
                />
              </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
