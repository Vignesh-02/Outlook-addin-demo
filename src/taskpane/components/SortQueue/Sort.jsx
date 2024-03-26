import React, { useRef, useEffect } from "react";
import "./Sort.css";

const Sort = ({ close, onSelectSort 
}) => {

    const handleSortClick = (option) => {
        console.log("Selected Sort Option:", option);
        onSelectSort(option);
        close(); // Close the sort popup
      };

    const sortRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (sortRef.current && !sortRef.current.contains(event.target)) {
          close();
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [close]);
  return (
    <div className="queueSort-Page">
    <div className="queueSort-Div-1">
        <div className="queueSort-Div-A1" onClick={() => handleSortClick("Date (ascending)")}>
            <div className="queueSort-Div-B1">
                <div className="queueSort-Div-Text">Date (Ascending) </div>
            </div>
        </div>
        <div className="queueSort-Div-A1" onClick={() => handleSortClick("Date (descending)")}>
            <div className="queueSort-Div-B1">
                <div className="queueSort-Div-Text">Date (Descending) </div>
            </div>
        </div>
        <div className="queueSort-Div-A2" onClick={() => handleSortClick("Customer name (ascending)")}>
        <div className="queueSort-Div-B1">
                <div className="queueSort-Div-Text">Customer name (Ascending) </div>
            </div>
        </div>
        <div className="queueSort-Div-A2" onClick={() => handleSortClick("Customer name (descending)")}>
        <div className="queueSort-Div-B1">
                <div className="queueSort-Div-Text">Customer name (Descending) </div>
            </div>
        </div>
        <div className="queueSort-Div-A1" onClick={() => handleSortClick("Vendor quote pending")}>
            <div className="queueSort-Div-B1">
                <div className="queueSort-Div-Text">Status Vendor Quote Pending</div>
            </div>
        </div>
        <div className="queueSort-Div-A1" onClick={() => handleSortClick("Received quotes")}>
            <div className="queueSort-Div-B1">
                <div className="queueSort-Div-Text">Status Received Quotes</div>
            </div>
        </div>
        <div className="queueSort-Div-A1" onClick={() => handleSortClick("Sent")}>
            <div className="queueSort-Div-B1">
                <div className="queueSort-Div-Text">Status Sent</div>
            </div>
        </div>
        <div className="queueSort-Div-A1" onClick={() => handleSortClick("Clarification Pending")}>
            <div className="queueSort-Div-B1">
                <div className="queueSort-Div-Text">Status Clarification Pending</div>
            </div>
        </div>
        <div className="queueSort-Div-A1">
            <div className="queueSort-Div-B1">
                <div className="queueSort-Div-Text">Status Clarification Received</div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Sort;
