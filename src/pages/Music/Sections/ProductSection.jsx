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
            <h4 className={classes.title}>
            Led by GP appraiser Linda Miller and Talibah Rivers Graham of the, very friendly, Vauxhall Tuneless Choir. This session introduces the power of social prescribing with music. Learn about the research evidence for musical interventions for neonates, mental health, the homeless, those who have had a CVA or Parkinson’s, postnatal depression and dementia. 
            </h4>
            <h5 className={classes.description}>
            Experience the benefits of a non-judgmental choir - no auditions, solos, or grand arias. The ethos is fun and laughter, more like singing Karaoke with friends than a formal choir.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="Tuneless Choirs are for those who LOVE singing but lack the ability, practice or confidence to do so.   Research tells us that singing in groups brings physical, emotional and social benefits and so we believe everyone has a right to sing whatever their voice!  We sing purely for the pleasure of it – with no pressure to improve – and just aim for everyone to leave their Tuneless Choir session feeling uplifted! The first Tuneless Choir started in West Bridgford (Nottingham) in January 2016."
                  author="tunelesschoir.com" 
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
          <div className={classes.typo}>
                <div className={classes.note}> </div>
                <Info>
                  Think about how you can incorporate music in your working week for personal well-being. This session can constitute CPD for appraisals as it considers social prescribing, so it will be fun and formative. And there will be cake!
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
                  text="Great introduction with some science and then led by a superb vocalist"
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="A holistic approach that was novel and informative for both us as clinicians and our patients"
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="Singing songs that I enjoy and being with like-minded people."
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="It was fun and easy to do!"
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="Seeing other colleagues in good spirit"
                />
              </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
