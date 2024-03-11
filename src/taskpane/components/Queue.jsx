import React, { useState, useEffect } from "react";
import "./styles/Queue.css";
import SearchImage from "../../../public/Search.png";
import SortImage from "../../../public/sort.png";
import "@fontsource/orbitron"; // Defaults to weight 400
import "@fontsource/orbitron/400.css"; // Specify weight
import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { Subject } from "@mui/icons-material";

const Queue = () => {
  const history = useHistory();
  // Dummy data
  
  const [queueData, setQueueData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchQueueData = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/api/QueueDetails/"
        );
        setQueueData(res.data.data)
        console.log("Queue Data API response from backend: ", res.data);
      } catch (error) {
        console.error("Error occurred while calling API:", error);
      }
    };
    
    fetchQueueData(); // Call the fetch function here, not inside itself
  }, []); 

  // Filter data based on the search query
  const filteredData = queueData.filter((rowData) =>
    rowData.customer_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  

  // const handleStatusClick = (customerName, customerEmail, customerSubject) => {
  //   history.push(`/pending?customerName=${customerName}&customerEmail=${customerEmail}&customerSubject=${customerSubject}`);
  // };
  
  const handleStatusClick = (customerName, customerEmail, customerSubject) => {
    const encodedSubject = encodeURIComponent(customerSubject); // Encode the subject
    history.push(`/pending?customerName=${customerName}&customerEmail=${customerEmail}&customerSubject=${encodedSubject}`);
    console.log("queue sub 1", customerSubject)
    console.log("queue sub 2", encodedSubject)
  };
  


  

  return (
    <div className="queuePage">
      {/* TOP - BAR */}
      <Topbar />

      <Navbar />

      {/* Search - Bar */}

      <div className="queueSearch">
        <div className="queueSearch-sec1">
          <div className="queueSearch-sec1-A">
            <img src={SearchImage} alt="Logo" className="searchImage" />
          </div>
          <input
            type="text"
            className="SearchText"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="queueSearch-sec1-Sort">
          <img src={SortImage} alt="Logo" className="queueSearch-sec1-Sort-2" />
        </div>
      </div>

      {/* Section - 3 */}

      <div className="queueMiddle">
        {/* mid - 1 */}
        <div className="QueueMid">
          {/* RFQ */}
          <div className="QueueRFQDiv">
            <div className="QueueRFQParent">
              <div className="QueueRFQChild">
                <div className="QueueRFQ">RFQ</div>
              </div>
            </div>
            <div className="QueueMid-1">
              <div className="QueueMid-1Child"></div>
            </div>
          </div>
          {/* Status */}
          <div className="QueueStatusDiv">
            <div className="QueueStatusParent">
              <div className="QueueStatusChild">
                <div className="QueueStatus">Status</div>
              </div>
            </div>
            <div className="QueueMid-2">
              <div className="QueueMid-2Child"></div>
            </div>
          </div>
          {/* Date */}
          <div className="QueueDateDiv">
            <div className="QueueDateParent">
              <div className="QueueDateChild">
                <div className="QueueDate">Date</div>
              </div>
            </div>
            <div className="QueueMid-3">
              <div className="QueueMid-3Child"></div>
            </div>
          </div>
        </div>

        {/* mid - 2 */}
        <div className="QueueRow">
          {filteredData.map((rowData, index) => (
            <div className="QueueRowParent-1" key={index}>
              <div className="QueueRowParent-1a">
                <div className="QueueRowChild-1b">
                  <div className="QueueRowCell-1a">{rowData.customer_name}</div>
                  <div className="QueueRowCell-1b">{rowData.RFQ_ID}</div>
                </div>
              </div>
              <div className="QueueRowParent-2a">
                <div className="QueueRowChild-2b">
                  <div
                    className="QueueRowCell-2a"
                    style={{
                      color:
                        rowData.status === "Sent"
                          ? "#000000" // Black color for "Sent"
                          : rowData.status === "Vendor quote pending"
                          ? "rgba(249, 138, 9, 1)" // Orange color for "Vendor quote pending"
                          : rowData.status === "Received quotes"
                          ? "rgba(52, 168, 83, 1)" // Green color for "Received quotes"
                          : "inherit", // Default color
                    }}
                    onClick={() => {
                      if (rowData.status === "Sent" && rowData.customer_subject !== null) {
                         handleStatusClick(rowData.customer_name, rowData.customer_email, rowData.customer_subject);
                        // <Pending customerName={rowData.customer_name} customerEmail={rowData.customer_email} />
                       
                      }
                    }}
                  >
                    {rowData.status}
                  </div>
                  {rowData.status !== "Sent" && (
                    <div className="QueueRowCell-2b">{rowData.day}</div>
                  )}
                </div>
              </div>
              <div className="QueueRowParent-3a">
                <div className="QueueRowChild-3b">
                  <div className="QueueRowCellParent-3">
                    <div className="QueueRowCell-3a">{rowData.date}</div>
                  </div>
                  <div className="QueueRowCell-3b">{rowData.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Queue;
