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
            <h5 className={classes.title}>
            Remember how much you enjoyed writing material for or watching the Medics Revue at medical school? How it created a sense of camaraderie? And how your face aches after a really good evening watching live comedy? 
            </h5>
            <h5 className={classes.description}>
            Research has shown that the most effective medical teams have 2 things in common; ethical sensitivity (the ability to spot that there is an ethical dilemma) and a GSH, a good sense of humour. Maintaining an awareness of the surreal and funny things around you can be beneficial for mental health. Laughter is contagious, releases endorphins and may be a good way to counter the equally contagious detachment and cynicism associated with burnout. 
            </h5>
            <h5 className={classes.description}>
            This taster of tried and tested stand-up comedy-generating games with GP and stand-up comedian Linda Miller will help you reconnect with your funny self. This session will enable you to experience the joy of creating material in a safe space, whether you have always fancied trying stand-up or would just like to feel more confident speaking in public, or just fancy a laugh, this session will deliver.
            </h5>
            <div className={classes.typo}>
                <div className={classes.note}> </div>
                <Info>
                This workshop on stand-up comedy for wellbeing can also contribute to Continued Professional Development and reflective practice for appraisal as we think about positive psychology, communication and social prescribing for ourselves and our patients. There will be cake.
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
                  text="Talking to new people and engaging in the games – and the laughter!"
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="Rapidly changing activities challenging different parts of the brain"
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="It used humour in a way I hadn’t thought you could."
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="Have always enjoyed comedy passively but been interested in the creative side and helpful and fun to be guided through it"
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="Enjoyable structure, breakouts worked well, everyone was very funny!"
                />
              </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
