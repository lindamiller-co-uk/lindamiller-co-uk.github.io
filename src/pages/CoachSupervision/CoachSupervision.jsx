import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// React icons
import { FaLinkedin } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Quote from "components/Typography/Quote.jsx";


import profile from "assets/img/faces/Linda-03.png";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Linda Miller"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Linda Miller</h3>
                      <h6 className={classes.description}>Coach Supervisor</h6>
                      <Button justIcon link className={classes.margin5} href="https://www.linkedin.com/in/linda-miller-3a512510b/">
                        <FaLinkedin/>
                      </Button>
                    </div>
                  </div>
                  <div className={classes.description}>
                <h4 className={classes.description}>
                  About coach supervision
                </h4>
                <p className={classes.description}>
                  Linda offers individual and group supervision sessions for coaches and mentors.
                </p>
                <p className={classes.description}>
                Supervision sessions can be conducted virtually to suit time zones. Post pandemic, Linda suggests central London venues, with green space sessions an option.
                </p>
              </div>
              <div className={classes.description}>
                <h4 className={classes.description}>
                  Coach supervision qualifications
                </h4>
                <p className={classes.description}>
                  Linda has been awarded the Coaching Supervision Academy Diploma.
                </p>
                <h4 className={classes.description}>
                  Testimonials
                </h4>
                <div className={classes.typo}>
                <Quote
                  text="Highly useful – energising, inspirational. Something I feel I would like to return to in the future. Perhaps should be considered much more routine in everyone’s life? Like visiting a spa or “massage” for the mind and spirit."
                  author="Core medical specialty trainee"
                />
                </div>
                <div className={classes.typo}>
                <Quote
                  text="Very helpful. And enjoyable!"
                  author="Senior academic"
                />
                </div>
                <div className={classes.typo}>
                <Quote
                  text="Uses tools that help the individual and ensures that the experience is good… I recommend coaching to my colleagues and trainees."
                  author="Senior educationalist"
                />
                </div>
                <div className={classes.typo}>
                <Quote
                  text="Helped make vague /abstract ideas more concrete and specific… Insightful, Good listener, challenges mentee appropriately."
                  author="Consultant anaesthetist"
                />
                </div>
                <div className={classes.typo}>
                <Quote
                  text="A nice way to spend some time, thinking and planning about what you want and what is important to you."
                  author="Junior Doctor (F2)"
                />
                </div>
              </div>
                </GridItem>
              </GridContainer>
            
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
