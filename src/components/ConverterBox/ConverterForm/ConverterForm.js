import React, { useState } from "react"
import ConverterSelector from "./ConverterSelector/ConverterSelector"
import "./ConverterForm.css"

export default function ConverterForm(props) {
  const [baseAmount, set_baseAmount] = useState("")
  const [baseRate, set_baseRate] = useState(0)
  const [targetAmount, set_targetAmount] = useState("")
  const [targetRate, set_targetRate] = useState(0)

  const executeConversion = (name, amount, base_rate, target_rate) => {
    if (name === "targetAmount") {
      if (base_rate && target_rate && amount) {
        set_baseAmount(
          (parseFloat(amount) * (base_rate / target_rate)).toFixed(2)
        )
      }
    } else {
      if (base_rate && target_rate && amount) {
        set_targetAmount(
          (parseFloat(amount) * (target_rate / base_rate)).toFixed(2)
        )
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (!value) {
      if (name === "baseAmount") return set_baseAmount("")
      if (name === "targetAmount") return set_targetAmount("")
    }

    if (name === "baseAmount") {
      set_baseAmount(parseFloat(value))
      executeConversion(name, value, baseRate, targetRate)
    } else if (name === "baseAcronym") {
      set_baseRate(value)
      executeConversion(name, baseAmount, value, targetRate)
    } else if (name === "targetAcronym") {
      set_targetRate(value)
      executeConversion(name, baseAmount, baseRate, value)
    } else if (name === "targetAmount") {
      set_targetAmount(parseFloat(value))
      executeConversion(name, value, baseRate, targetRate)
    }
  }

  return (
    <div>
      <form className="converter-form">
        <ConverterSelector
          name="base"
          value={baseAmount}
          rate={baseRate}
          inputOnChange={(e) => handleChange(e)}
          selectOnChange={(e) => handleChange(e)}
          currencyList={props.currencyList}
        />
        <ConverterSelector
          name="target"
          value={targetAmount}
          rate={targetRate}
          inputOnChange={(e) => handleChange(e)}
          selectOnChange={(e) => handleChange(e)}
          currencyList={props.currencyList}
        />
      </form>
    </div>
  )
}
