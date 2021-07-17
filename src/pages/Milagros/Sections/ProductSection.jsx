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
              <div className={classes.typo}>
                <Quote
                  text="Milagros, meaning miracle: In Mexico and among Hispanic Americans: a small object, frequently an ornament or piece of jewellery, representing the subject of a petitionary prayer, usually fastened to the image of the Virgin or of a saint to strengthen the petition or to give thanks that the petition has been granted." 
                  author="Oxford English Dictionary"
                />
              </div>
            <h5 className={classes.title}>
            In this session we will create Milagros and use the creative process as a prompt for reflection regarding our patients and our own experiences.             
            </h5>
            <h5 className={classes.description}>
            These objects are often in the shape of an organ or limb of the body and may constitute a petition for healing or a symbol of gratitude. Others in the shape of animals or objects have different meanings. Milagros may be carried as good luck charms. We will consider the metaphorical power of objects and talismans.
            </h5>
            <h5 className={classes.title}>
            It is recognised that small group discussions accompanying art and craft making have a unique quality and generate fresh insights.            </h5>
            <h5 className={classes.description}>
            Positive psychology research confirms that expressions of gratitude have a positive impact on mental well-being. Expressing gratitude with patients can have a powerful impact on doctor patient interactions and colleagues are more likely to feel valued in a culture where gratitude is expressed. Roger Neighbour author of the “Inner Consultation” is one proponent of the value of expressing gratitude to patients.            
            </h5>
            <h5 className={classes.description}>
            Materials; Tin foil and a variety of pens and pencils and blunt implements.
            </h5>
            <div className={classes.typo}>
                <div className={classes.note}> </div>
                <Info>
                This session can constitute CPD for appraisal as it relates to reflective practice, cultural understanding, arts in health, and self-care. There will be cake.                </Info>
            </div>
            <h4 className={classes.title}>
              Previous participants enjoyed:
            </h4>
            <div className={classes.typo}>
                <Quote
                  text="Having a creative activity helps encourage conversation and generated a feeling of focus on the purpose (hands busy so no phone distraction)"
                />
            </div>
            <div className={classes.typo}>
                <Quote
                  text="Encouraged me to reflect on my experience and my role. Nice to hear about people’s experiences and art. Feel inspired to look into it more"
                />
            </div>
            <div className={classes.typo}>
                <Quote
                  text="Interesting way to reflect, using hands and craft enabled different bits of brain to be engaged"
                />
            </div>
            <div className={classes.typo}>
                <Quote
                  text="Learning about the art form and techniques, sharing experiences. Reminded me of good and positive things."
                />
            </div>
            <div className={classes.typo}>
                <Quote
                  text="Whatever we see or experience in our life will linger in the mind and can be reflective."
                />
            </div>
            <div className={classes.typo}>
                <Quote
                  text="Just setting aside time to focus on making something whilst in a group, hearing about others experiences"
                />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
          <div className={classes.typo}>
                <div className={classes.note}> </div>
                <Info>
                Image courtesy Fishepat000, CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0, via Wikimedia Commons
                </Info>
          </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
