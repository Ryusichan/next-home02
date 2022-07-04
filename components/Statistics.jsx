import React from "react";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <div className="counter">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Counter */}
            <div id="counter">
              <div className="cell">
                <i className="fas fa-users"></i>
                <CountUp
                  className="counter-value number-count"
                  start={0}
                  end={231}
                />
                <p className="counter-info">Happy Users</p>
              </div>
              <div className="cell">
                <i className="fas fa-code green"></i>
                <CountUp
                  className="counter-value number-count"
                  start={0}
                  end={385}
                />
                <p className="counter-info">Issues Solved</p>
              </div>
              <div className="cell">
                <i className="fas fa-cog red"></i>
                <CountUp
                  className="counter-value number-count"
                  start={0}
                  end={159}
                />
                <p className="counter-info">Good Reviews</p>
              </div>
              <div className="cell">
                <i className="fas fa-comments yellow"></i>
                <CountUp
                  className="counter-value number-count"
                  start={0}
                  end={127}
                />
                <p className="counter-info">Case Studies</p>
              </div>
              <div className="cell">
                <i className="fas fa-rocket blue"></i>
                <CountUp
                  className="counter-value number-count"
                  start={0}
                  end={211}
                />
                <p className="counter-info">Orders Received</p>
              </div>
            </div>
            {/* end of counter */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
