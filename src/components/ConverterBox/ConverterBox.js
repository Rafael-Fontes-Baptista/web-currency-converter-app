import React, { useState, useEffect } from "react"
import axios from "axios"
import ConverterTitle from "./ConverterTitle/ConverterTitle"
import ConverterInfo from "./ConverterInfo/ConverterInfo"
import "./ConverterBox.css"

export default function ConverterBox() {
  // const [currencyList, set_currencyList] = useState([])

  // useEffect(() => {
  //   const fetchRatesList = async () => {
  //     try {
  //       const API_key = process.env.REACT_APP_EXCHANGE_RATES_API_KEY
  //       const API_url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_key}`

  //       const response = await axios.get(API_url)

  //       const currencies = Object.keys(response.data.rates)
  //       const currenciesAndRate = currencies.map((key) => ({
  //         acronym: key,
  //         rate: response.data.rates[key],
  //       }))

  //       set_currencyList(currenciesAndRate)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchRatesList()
  // }, [])

  return (
    <div className="converter-box">
      <ConverterTitle />
      <ConverterInfo />
    </div>
  )
}
