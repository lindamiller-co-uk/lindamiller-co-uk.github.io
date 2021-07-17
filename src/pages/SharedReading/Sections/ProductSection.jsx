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
            Increasingly Narrative Medicine is part of the undergraduate medical humanities curriculum; stories are essential to the art of practicing medicine. Narrative practice can enhance reflection on work.
            </h5>
            <p>
            This session will incorporate "shared reading", a practice that can be recommended to patients, shown to have benefits for wellbeing and mental health. There will be an opportunity for creative writing and a safe space to share reflections (optional).
            </p>
            <h5 className={classes.description}>
            Research found "four significant ‘mechanisms of action’ involved in the reading group intervention, three of which were essential to its success, the fourth influential”:
            </h5>
            <ul>
              <li>A rich, varied, non-prescriptive diet of serious literature</li>
              <li>The role of the group facilitator in making the literature ‘live’ in the room</li>
              <li>The role of the group in offering support and a sense of community</li>
              <li>The creation of stimulating, non-pressurised, non-judgemental atmosphere (‘not like school’, as one participant emphatically put it) overrode considerations of physical environment</li>
            </ul>
            <div className={classes.typo}>
              <div className={classes.note}> </div>
                <Info>
                 -	An Investigation into the Therapeutic Benefits of Reading in Relation to Depression and Well Being. by Martin Gallagher, 14.9. 2017 https://www.thereader.org.uk/investigation-therapeutic-benefits-reading-relation-depression-well/
                </Info>
            </div>
            <p>
                 
            </p>
            <p>
            We will read extracts from the very funny book “A Spot of Bother” by Mark Haddon as a prompt for thinking about the perception of the GP, anxiety and mental health ,stigma and family dynamics. It is not essential to have read the book before -hand although it would be even better  if you had. (The author also wrote “The Curious Incident of The Dog In the Night-time” ).  
            </p>
            <div className={classes.typo}>
                <div className={classes.note}> </div>
                <Info>
                This session will count as CPD for appraisal as it relates to reflection on clinical work and social prescribing.  </Info>
            </div>
            <h4 className={classes.title}>
              Previous participants enjoyed:            
            </h4>
            <div className={classes.typo}>
                <Quote
                  text="I really enjoyed the initial presentation and learning about the different types of processes like 'shared reading' and narrative medicine. Resources, links were useful. Practical session was great."
                />
            </div>
            <div className={classes.typo}>
                <Quote
                  text="It was a deliberate attempt to take you from the negative to the positive in a very gentle way."
                />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
