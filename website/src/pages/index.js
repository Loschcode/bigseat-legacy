import * as React from "react"
import IntroductionImage from "../images/introduction.svg"
// markup
const IndexPage = () => {
  return (
    <main>
      <div className="wrapper">
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
        <div class="row introduction">
          <div class="col-xs-12">
            <div class="row">
              <div class="col-xs-12">
                <h2 class="introduction__punchline">
                  Office hotdesk made simple.
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-6 col-xs-offset-3">
                <div class="introduction__underline">
                  Optimize space, track seats and integrates easily with your company stack.
                </div>
              </div>
            </div>
            <div class="row center-xs">
              <div class="col-xs-8">
                <div class="row middle-xs">
                  <div class="col-xs-4 col-xs-offset-2">
                    <span class="button">
                      Sign up free now
                    </span>
                  </div>
                  <div class="col-xs-4">
                    <div class="link">
                      Learn how we do it
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div class="introduction__image">
                  <img src={IntroductionImage} />
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
