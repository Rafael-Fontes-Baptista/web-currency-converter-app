import React from "react"
import "./ConverterSelector.css"

export default function ConverterSelector(props) {
  const inputName = `${props.name}Amount`
  const selectName = `${props.name}Acronym`
  const currencyList = props.currencyList
  const mostPopularAcronyms = ["EUR", "USD", "GBP", "JPY", "AUD", "BRL"]
  const mostPopularCurrencies = currencyList.filter((item) =>
    mostPopularAcronyms.includes(item.acronym)
  )

  return (
    <div>
      <div className="converter-selector-title">
        <p>
          <strong>{props.name}</strong> currency
        </p>
      </div>
      <div className="converter-selector">
        <input
          type="number"
          step={10}
          min={0}
          placeholder={"0,00"}
          autoComplete={"off"}
          name={inputName}
          value={props.value}
          onChange={props.inputOnChange}
        ></input>
        <select
          name={selectName}
          value={props.rate}
          onChange={props.selectOnChange}
        >
          <option value={0} disabled>
            select
          </option>
          <optgroup label="Most Popular">
            {mostPopularCurrencies.map((item, index) => (
              <option key={index} value={item.rate}>
                {item.acronym}
              </option>
            ))}
          </optgroup>
          <optgroup label="All Currencies">
            {currencyList.map((item, index) => (
              <option key={index} value={item.rate}>
                {item.acronym}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
    </div>
  )
}
