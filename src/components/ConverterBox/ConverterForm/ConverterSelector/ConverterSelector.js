import React from "react"
import "./ConverterSelector.css"

export default function ConverterSelector(props) {
  const mostPopAcronyms = ["EUR", "USD", "GBP", "JPY", "BRL"]
  const allCurrencies = props.currencyList

  const mostPopCurrencies = allCurrencies.filter((item) =>
    mostPopAcronyms.includes(item.acronym)
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
          min={0}
          placeholder={"0,00"}
          autoComplete={"off"}
          name={`${props.name}Amount`}
          value={props.value}
          onChange={props.onChange}
        ></input>
        <select
          name={`${props.name}Acronym`}
          value={props.rate}
          onChange={props.onChange}
        >
          <option value={0} disabled>
            select
          </option>
          <optgroup label="Most Popular">
            {mostPopCurrencies.map((item) => (
              <option
                key={item.id}
                value={item.rate}
                label={item.acronym}
              ></option>
            ))}
          </optgroup>
          <optgroup label="All Currencies">
            {allCurrencies.map((item) => (
              <option
                key={item.id}
                value={item.rate}
                label={item.acronym}
              ></option>
            ))}
          </optgroup>
        </select>
      </div>
    </div>
  )
}
