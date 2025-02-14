import React from "react"
import { project } from "../data/dummydata"
import CountUp from "react-countup"
import "./Counter.css"

export const Counter = () => {
  return (
    <>
      <div className="counter">
        <div className="container">
          {project.map((item) => (
            <div className="box" key={item.id} data-aos="zoom-in">
              <h1 className="counter-number">
                <CountUp enableScrollSpy duration={2} end={item.num} />
              </h1>
              <h3 className="counter-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
