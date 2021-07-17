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
            <h4 className={classes.title}>
              Learn how to create instant rapport with your younger patients! Learn some magic tricks.
            </h4>
            <h4 className={classes.title}>
              Hear about the psychology of magic and how it is being incorporated into medical education and practice and wellbeing.
            </h4>
            <h5 className={classes.description}>    
              All GPs are familiar with the "magical thinking" that people do in terms of their health and wellbeing.
              The covid19 pandemic has illustrated the magical thinking around practitioner health and wellbeing; 
              doctors are equally vulnerable to infection, or more so considering the higher viral loads to which we are exposed. 
              Both practitioners and patients are guilty of believing in professional mystique, the perception that healthcare 
              practitioners are "super heroes", infallible and invulnerable. 
            </h5>
            <h5 className={classes.description}>
              This workshop will consider the use of magic in social prescribing for example supporting the confidence 
              and manual dexterity of young people with cerebral palsy.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="For children, motor disorders such as hemiplegia and other forms of paralysis can be physically and socially debilitating. Breathe Magic offers rehabilitation through magic."
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description}>
              Magic can be used to remind us of the importance of the positive emotions of wonder and awe 
              for resilience and wellbeing. 
            </h5>
            <h5 className={classes.description}>
              Magician Tracy Wise (writer, speaker, storytelling magician, edutainer and mystorian) will introduce the magic 
              as a means to manage stress, anxiety and social isolation. She will also introduce how magic workshops 
              might benefit those with cognitive decline/dysfunction.
            </h5>
            <h6 className={classes.title}>
            Be inspired to learn some simple magic tricks and indulge in some magical thinking!
            </h6>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.title}>
              Previous participants enjoyed:            
            </h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="Useful to look at things in a different way and also as a visual way of changing patients thoughts and behaviours"
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="Getting involved and learning some magic"
                />
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
              <div className={classes.typo}>
                <Quote
                  text="Is more physical and visual and was a lot of fun"
                />
              </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
