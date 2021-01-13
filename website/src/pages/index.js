import * as React from "react"

// markup
const IndexPage = () => {
  return (
    <main>
      <div className="wrapper">
        <div className="row header">
          <div className="col-xs-6">
            <h1>
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
      </div>
    </main>
  )
}

export default IndexPage
