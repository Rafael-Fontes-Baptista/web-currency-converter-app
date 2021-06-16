import React from "react"
import "./ConverterInfo.css"

export default function ConverterInfo() {
  return (
    <div className="converter-info">
      <div className="step-index">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className="step-text">
        <p>
          Select the <strong>base</strong> and <strong>target</strong>{" "}
          currencies
        </p>
        <p>
          Type the <strong>amount</strong> you want to convert
        </p>
        <p>
          Convert in <strong>both directions</strong>
          <br></br>base ⇆ target
        </p>
      </div>
    </div>
  )
}
