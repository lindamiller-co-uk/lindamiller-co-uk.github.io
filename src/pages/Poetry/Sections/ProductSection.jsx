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
            Asked about the value of poetry in times of crisis, Seamus Heaney answered  “It is precisely at such moments that people realize they need more to live than economics: If poetry and the arts do anything,” he said, “they can fortify your inner life, your inwardness" 
            </h5>
            <p className={classes.description}><a href="https://www.poetryfoundation.org/poets/seamus-heaney" target="_blank" rel="noopener noreferrer">- poetryfoundation.org/poets/seamus-heaney</a></p>
            <h5 className={classes.description}>
            In this session we will use poetry for reflection. We’ll explore how hospital and community programmes including the UCLH obstetrics department, Cambridge Hospitals, and general practice are advocating poetry for patients. There is good evidence for the benefits of synchronous shared reading in groups for mental health; we will read aloud together a selection of poems which relate to different perspectives on working as a doctor and experiencing the pandemic.
            </h5>
            <h5 className={classes.description}>
            Sources of poetry relevant to those working in healthcare will be introduced e.g. The book Tools of the Trade which is issued to all new doctors in Scotland.
            </h5>
            <div className={classes.typo}>
              <Quote
                text="Poetry has a special capacity to facilitate the reintegration of ignored aspects of ourselves so that we can again function as whole, fully integrated persons."
                author="-	Poetry as Self-Care and Palliative Care, Steven Radwany et al. JOURNAL OF PALLIATIVE MEDICINE Volume 15, Number 12, 2012"
              />
            </div>
            <h5 className={classes.description}>
            In the second half a structure for creating poetry from supervision will be used to experiment with reflective prose and poetry with sharing optional. There will be cake.
            </h5>
          <div className={classes.typo}>
          <div className={classes.note}> </div>
                <Info>
                This workshop on poetry for reflection can also contribute to Continued Professional Development and reflective practice for appraisal as we think about how social prescribing of poetry can help patients.
                </Info>
          </div>
          <h4 className={classes.title}>
              Previous participants enjoyed:            
            </h4>
            <div className={classes.typo}>
                <Quote
                  text="I enjoyed reading the poetry which was of a good standard and touched upon medical issues."
                />
            </div>
            <div className={classes.typo}>
                <Quote
                  text="I was intrigued as to how interested other clinicians were in poetry as a form of reflective narrative on their healthcare experiences."
                />
            </div>
            <div className={classes.typo}>
                <Quote
                  text="People space sharing safety"
                />
            </div>
            <div className={classes.typo}>
                <Quote
                  text="Well it was the first time I have been in a literary group composed of practitioners."
                />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
