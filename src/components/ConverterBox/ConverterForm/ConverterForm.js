import React, { useState } from "react"
import ConverterSelector from "./ConverterSelector/ConverterSelector"
import "./ConverterForm.css"

export default function ConverterForm(props) {
  const [baseAmount, set_baseAmount] = useState("")
  const [baseRate, set_baseRate] = useState(0)
  const [targetAmount, set_targetAmount] = useState("")
  const [targetRate, set_targetRate] = useState(0)

  const convertFromTargetToBase = (amount, base_rate, target_rate) => {
    if (base_rate && target_rate && amount) {
      set_baseAmount(
        (parseFloat(amount) * (base_rate / target_rate)).toFixed(2)
      )
    }
  }

  const convertFromBaseToTarget = (amount, base_rate, target_rate) => {
    if (base_rate && target_rate && amount) {
      set_targetAmount(
        (parseFloat(amount) * (target_rate / base_rate)).toFixed(2)
      )
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "baseAmount") {
      set_baseAmount(value)
      convertFromBaseToTarget(value, baseRate, targetRate)
    } else if (name === "baseAcronym") {
      set_baseRate(value)
      if (targetAmount && targetRate && !baseAmount) {
        convertFromTargetToBase(targetAmount, value, targetRate)
      }
      convertFromBaseToTarget(baseAmount, value, targetRate)
    } else if (name === "targetAcronym") {
      set_targetRate(value)
      if (targetAmount && baseRate && !baseAmount) {
        convertFromTargetToBase(targetAmount, baseRate, value)
      }
      convertFromBaseToTarget(baseAmount, baseRate, value)
    } else if (name === "targetAmount") {
      set_targetAmount(value)
      convertFromTargetToBase(value, baseRate, targetRate)
    }
  }

  return (
    <div className="converter-form">
      <ConverterSelector
        name="base"
        value={baseAmount}
        rate={baseRate}
        onChange={handleChange}
        currencyList={props.currencyList}
      />
      <ConverterSelector
        name="target"
        value={targetAmount}
        rate={targetRate}
        onChange={handleChange}
        currencyList={props.currencyList}
      />
    </div>
  )
}
