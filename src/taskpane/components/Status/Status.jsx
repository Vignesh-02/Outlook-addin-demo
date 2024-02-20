import React from 'react'
import "./Status.css";
const Status = () => {
  return (
    <div className="Quote-StocksDiv">
            <div className="Quote-StocksDiv-Child-1">
              <div className="Quote-StocksDiv-Child-1-a"></div>
              <div className="Quote-StocksDiv-Child-1-b">In stock</div>
            </div>
            <div className="Quote-StocksDiv-Child-2">
              <div className="Quote-StocksDiv-Child-2-a"></div>
              <div className="Quote-StocksDiv-Child-2-b">Partial In stock</div>
            </div>
            <div className="Quote-StocksDiv-Child-3">
              <div className="Quote-StocksDiv-Child-3-a"></div>
              <div className="Quote-StocksDiv-Child-3-b">Out of stock</div>
            </div>
          </div>
  )
}

export default Status
