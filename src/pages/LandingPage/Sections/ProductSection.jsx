import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import BrushIcon from "@material-ui/icons/Brush";
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Button from "components/CustomButtons/Button.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="left">
          <GridItem xs={12} sm={12} md={10}>
            <h3 className={classes.title}>
              As a practicing GP of over 20 years, Linda is a passionate advocate for health care practioner wellbeing. She offers workshops, coaching, and education with a unique angle on the arts in health.
            </h3>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Arts in health workshops"
                description="Creative reflective practice workshops using Arts in Health and Health humanities approaches. Suitable for practioner CPD, trainers, trainees and team away days. Available as a series or individually."
                icon={BrushIcon}
                iconColor="info"
                vertical
              />
              <Button color="info" size="sm" href="/Milagros">Milagros</Button>
              <Button color="info" size="sm" href="/Cartooning">Cartooning</Button>
              <Button color="info" size="sm" href="/Zines">Zines</Button>
              <Button color="info" size="sm" href="/Magic">Magic</Button>
              <Button color="info" size="sm" href="/Comedy">Comedy</Button>
              <Button color="info" size="sm" href="/Poetry">Poetry</Button>
              <Button color="info" size="sm" href="/SharedReading">Reading</Button>
              <Button color="info" size="sm" href="/Music">Music</Button>
              <Button color="info" size="sm" href="/BodyWork">Body work</Button>

            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Coaching & Coach supervision"
                description="Executive coaching and leadership mentoring for leaders in health care, education, finance, law and design. Provides a variety of methods based on coachee strengths and values. Also, Coach supervision, a place for coaches and mentors to reflect on their coaching."
                icon={PeopleIcon}
                iconColor="success"
                vertical
              />
              <Button color="success" size="sm" href="/Coaching">Coaching</Button>
              <Button color="success" size="sm" href="/CoachSupervision">Coach supervision</Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Medical educator"
                description="Certified undergraduate tutor in Communication skills, Clinical Decision Making, Ethics, First Clinical Attachment and Problem Based Learning. Educator in Clinical Supervision and more. "
                icon={SchoolIcon}
                iconColor="rose"
                vertical
              />
              <Button color="rose" size="sm" href="/MedicalEducator">Medical educator</Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
