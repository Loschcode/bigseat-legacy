import * as React from "react"
import IntroductionImage from "../images/introduction.svg"
import AccessibilityImage from "../images/accessibility.svg"
import AnalyticsImage from "../images/analytics.svg"
import IntegrationsImage from "../images/integrations.svg"

// markup
const IndexPage = () => {
  return (
    <main>
      <div className="wrapper">
        {/* Header */}
        <div className="container-fluid">
          <div className="row header">
            <div className="col-xs-6">
              <h1 className="header__logo">
                BigSeat.
              </h1>
            </div>
            <div className="col-xs-6">
              <div className="row menu">
                <div className="col-xs-3">
                  Features
                </div>
                <div className="col-xs-3">
                  Pricing
                </div>
                <div className="col-xs-3">
                  About
                </div>
                <div className="col-xs-3">
                  <span className="menu__button">
                    Sign-in
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row introduction">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="introduction__punchline">
                    Office hotdesk made simple.
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-xs-offset-3">
                  <div className="introduction__underline">
                    Optimize space, track seats and integrate easily with your company stack.
                  </div>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-8">
                  <div className="row middle-xs">
                    <div className="col-xs-4 col-xs-offset-2">
                      <span className="button">
                        Sign up free now
                      </span>
                    </div>
                    <div className="col-xs-4">
                      <div className="link">
                        Learn how we do it
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="introduction__image">
                    <img src={IntroductionImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="container-fluid">
          <div className="row features">
            <div className="col-xs-8 col-xs-offset-2">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="features__punchline">
                    It's that simple.
                  </h2>
                </div>
              </div>
              <div className="row features-block middle-xs">
                <div className="col-xs-5">
                  <h3 className="features-block__title">Accessibility.</h3>
                  <p className="features-block__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="col-xs-5 col-xs-offset-2">
                  <div class="features-block__image">
                    <img src={AccessibilityImage} />
                  </div>
                </div>
              </div>
              <div className="row features-block middle-xs">
              <div className="col-xs-5">
                  <div class="features-block__image">
                    <img src={AnalyticsImage} />
                  </div>
                </div>
                <div className="col-xs-5 col-xs-offset-2">
                  <h3 className="features-block__title">Analytics.</h3>
                  <p className="features-block__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
              </div>
              <div className="row features-block middle-xs">
                <div className="col-xs-5">
                  <h3 className="features-block__title">Integrations.</h3>
                  <p className="features-block__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="col-xs-5 col-xs-offset-2">
                  <div class="features-block__image">
                    <img src={IntegrationsImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
