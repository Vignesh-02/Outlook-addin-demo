import React, { useState } from "react";
import "./Queue.css";
import SearchImage from "../../../public/Search.png";
import "@fontsource/orbitron"; // Defaults to weight 400
import "@fontsource/orbitron/400.css"; // Specify weight

const Queue = () => {
  // Dummy data
  const data = [
    {
      name: "Afshan",
      code: "ABC30OFF",
      status: "Vendor quote pending",
      day: "3 days",
      date: "16/01/2024",
      time: "10:00 am",
    },
    {
      name: "Ryan Alu",
      code: "ABC30OFF",
      status: "Sent",
      day: "3 days",
      date: "16/01/2024",
      time: "10:00 am",
    },
    {
      name: "Rahul",
      code: "ABC30OFF",
      status: "Vendor quote pending",
      day: "3 days",
      date: "16/01/2024",
      time: "10:00 am",
    },

    {
      name: "Lina",
      code: "ABC30OFF",
      status: "Vendor quote pending",
      day: "3 days",
      date: "16/01/2024",
      time: "10:00 am",
    },
    {
      name: "Aditya",
      code: "ABC30OFF",
      status: "Vendor quote pending",
      day: "3 days",
      date: "16/01/2024",
      time: "10:00 am",
    },
    {
      name: "Vignesh",
      code: "ABC30OFF",
      status: "Vendor quote pending",
      day: "3 days",
      date: "16/01/2024",
      time: "10:00 am",
    },
    {
      name: "John Deo",
      code: "ABC30OFF",
      status: "Vendor quote pending",
      day: "3 days",
      date: "16/01/2024",
      time: "10:00 am",
    },
    {
      name: "Santiago",
      code: "ABC30OFF",
      status: "Vendor quote pending",
      day: "3 days",
      date: "16/01/2024",
      time: "10:00 am",
    },
    {
      name: "Merim",
      code: "ABC30OYU",
      status: "Vendor quote pending",
      day: "3 days",
      date: "19/02/2024",
      time: "12:00 pm",
    },
    {
      name: "Suraksha",
      code: "ABC50OMN",
      status: "Sent",
      day: "3 days",
      date: "15/03/2024",
      time: "02:00 pm",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

//   const handleCrossClick = () => {
//     // Close the extension when the cross is clicked
//     window.close();
//   };

  // Filter data based on the search query
  const filteredData = data.filter((rowData) =>
    rowData.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="queuePage">
      {/* TOP - BAR */}
      <div className="topbar-frame">

        {/* <div className="topbar">
          <div className="topframe">
            <img src={W_Image} alt="Logo" />
            <div className="topframe-b">
              <img src={WiseImage} alt="Logo" id="b1" />
              <img src={InsideImage} alt="Logo" id="b2" />
            </div>
          </div>
          <div onClick={handleCrossClick} className="topframe-c">
            <img src={cross} alt="Logo" />
          </div>
        </div> */}

        {/* Section - 2 */}

        <div className="topbar2">
          <div className="navbar">
            <div className="delegate-div">
              <div className="delegate">Delegate</div>
            </div>
            <div className="Queue-queue-div">
              <div className="Queue-queue">Queue</div>
            </div>
            <div className="contact-div">
              <div className="contact">Contact Us</div>
            </div>
          </div>
          <div className="A-div">
            <div className="A">A</div>
          </div>
        </div>
      </div>

      {/* Search - Bar */}

      <div className="SearchBar">
        <div className="SearchParent">
          <div className="SearchChild">
            <img src={SearchImage} alt="Logo" />
          </div>
        </div>
        <input
          type="text"
          className="SearchText"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
                  <div className="QueueRowCell-1a">{rowData.name}</div>
                  <div className="QueueRowCell-1b">{rowData.code}</div>
                </div>
              </div>
              <div className="QueueRowParent-2a">
                <div className="QueueRowChild-2b">
                  <div
                    className="QueueRowCell-2a"
                    style={{
                      color: rowData.status === "Sent" ? "#74D446" : "inherit",
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
    </div>
  );
};

export default Queue;
