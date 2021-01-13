import * as React from "react"

// styles
const pageStyles = {
  // color: "#232129",
  // padding: "96px",
  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div className="row">
        <div className="col-xs-6">
          BigSeat.
        </div>
        <div className="col-xs-6">
          <div className="row">
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
              Sign-in
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
