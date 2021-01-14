import * as React from "react"
import IntroductionImage from "../images/introduction.svg"
import AccessibilityImage from "../images/accessibility.svg"
import AnalyticsImage from "../images/analytics.svg"
import IntegrationsImage from "../images/integrations.svg"
import DownImage from "../images/down.svg"
import CheckImage from "../images/check.svg"
import CheckHighlightImage from "../images/check-highlight.svg"
import TheCompanyImage from "../images/the-company.svg"
import TheProjectImage from "../images/the-project.svg"


const plans = { text: String, highlight: Boolean}
const plansAdvantages = {
  smallOffice: [
    { text: 'Unlimited rooms'},
    { text: 'Unlimited analytics' },
    { text: 'Unlimited integrations' },
    { text: 'Up to 10 seats available' }
  ],
  growingOffice: [
    { text: 'Unlimited rooms'},
    { text: 'Unlimited analytics' },
    { text: 'Unlimited integrations' },
    { text: 'Up to 50 seats available', highlight: true }
  ],
  bigOffice: [
    { text: 'Unlimited rooms'},
    { text: 'Unlimited analytics' },
    { text: 'Unlimited integrations' },
    { text: 'Unlimited seats', highlight: true }
  ]
}

const advantagesList = (plan: Array<{ highlight?: boolean, text: string}>) => {
  return plan.map((advantage) => (
    <div className="row">
      <div className="col-xs-12">
        <div className={(advantage.highlight ? 'pricing-block__check--highlight' : '')}>
          <span className="pricing-block__check "><img src={(advantage.highlight ? CheckHighlightImage : CheckImage)} /></span> {advantage.text}
        </div>
      </div>
    </div>
  ))
}

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
              <div className="row">
                <div className="col-xs-12">
                  <div className="introduction__down">
                    <img src={DownImage} />
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
                  <div className="features-block__image">
                    <img src={AccessibilityImage} />
                  </div>
                </div>
              </div>
              <div className="row features-block middle-xs">
              <div className="col-xs-5">
                  <div className="features-block__image">
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
                  <div className="features-block__image">
                    <img src={IntegrationsImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing */}
        <div className="container-fluid">
          <div className="row pricing">
            <div className="col-xs-8 col-xs-offset-2">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="pricing__punchline">
                    A plan for each size.
                  </h2>
                </div>
              </div>
              <div className="row">
                {/* Small office */}
                <div className="col-xs-4">
                  <div className="pricing-block">
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__title">
                          Small office
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__price">
                          Free
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__price-frequency">
                          forever
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="pricing-block__description">
                          This is our most basic plan. It provides unlimited rooms, analytics and integrations and and a few available seats to place.
                        </div>
                      </div>
                    </div>
                    {advantagesList(plansAdvantages.smallOffice)}
                    <div className="row">
                      <div className="col-xs-12 center-xs">
                        <div className="pricing-block__button">
                          <div className="button button--white">
                            Sign up free now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Growing office */}
                <div className="col-xs-4">
                  <div className="pricing-block">
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__title">
                          Growing office
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__price">
                          $19<span className="pricing-block__price--cents">.90</span>
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__price-frequency">
                          per month
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="pricing-block__description">
                          If you’re a growing company and have too many employees for our free version, this one will fit you perfectly.
                        </div>
                      </div>
                    </div>
                    {advantagesList(plansAdvantages.growingOffice)}
                    <div className="row">
                      <div className="col-xs-12 center-xs">
                        <div className="pricing-block__button">
                          <div className="button">
                            Select this plan
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Big office */}
                <div className="col-xs-4">
                  <div className="pricing-block">
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__title">
                          Big office
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__price">
                          $49<span className="pricing-block__price--cents">.90</span>
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__price-frequency">
                          per month
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="pricing-block__description">
                        You’re a bigger, more established company which needs an unlimited amount of seats? No worry, here’s the perfect fit for you.
                        </div>
                      </div>
                    </div>
                    {advantagesList(plansAdvantages.bigOffice)}
                    <div className="row">
                      <div className="col-xs-12 center-xs">
                        <div className="pricing-block__button">
                          <div className="button">
                            Select this plan
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About us */}
        <div className="container-fluid">
          <div className="row features">
            <div className="col-xs-8 col-xs-offset-2">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="features__punchline">
                    About us.
                  </h2>
                </div>
              </div>
              <div className="row features-block middle-xs">
                <div className="col-xs-5">
                  <h3 className="features-block__title">The company</h3>
                  <p className="features-block__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="col-xs-5 col-xs-offset-2">
                  <div className="features-block__image">
                    <img src={TheCompanyImage} />
                  </div>
                </div>
              </div>
              <div className="row features-block middle-xs">
              <div className="col-xs-5">
                  <div className="features-block__image">
                    <img src={TheProjectImage} />
                  </div>
                </div>
                <div className="col-xs-5 col-xs-offset-2">
                  <h3 className="features-block__title">The project.</h3>
                  <p className="features-block__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Get started now */}
        <div className="banner">
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-8">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="banner__punchline">
                      Get started now.
                    </div>
                  </div>
                </div>
                <div className="row center-xs">
                  <div className="col-xs-6">
                    <div className="banner__underline">
                      It takes you less than <span className="banner__underline--time">5 minutes</span> to sign-up and start using ou product.
                    </div>
                  </div>
                </div>
                <div className="row center-xs">
                  <div className="col-xs-4">
                    <div className="button button--white">
                      Sign up free now
                    </div>
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
