import React, { useState, useEffect } from "react";
import "./styles/Queue.css";
import SearchImage from "../../../public/Search.png";
import SortImage from "../../../public/sort.png";
import "@fontsource/orbitron"; // Defaults to weight 400
import "@fontsource/orbitron/400.css"; // Specify weight
import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Model from "react-modal";
import Sort from "./SortQueue/Sort";

const Queue = () => {
  const history = useHistory();

  const { accessToken } = useSelector((state) => state.accessToken);

  const [searchQuery, setSearchQuery] = useState("");
  const [queueData, setQueueData] = useState([]);

  const location = useLocation();
  const { selectedOrganization } = location.state || {};

  console.log("queueselect5",selectedOrganization);
  
  const [isPopupOpenSort, setIsPopupOpenSort] = useState(false);
  const togglePopupSort = () => {
    setIsPopupOpenSort(!isPopupOpenSort);
  };

  const [selectedSortOption, setSelectedSortOption] = useState(null);

  useEffect(() => {
    const fetchQueueData = async () => {
      try {
        const res = await axios.get("https://api-dev.wise-sales.com/backend/api/QueueDetails/");
        setQueueData(res.data.data);
        console.log("Queue Data API response from backend: ", res.data);

        // res.data.data.map(async (queueItem) => {
        res.data.data.map(async (queueItem, index) => {
          if (queueItem.vendor_responses) {
            queueItem.vendor_responses.map(async (vendorItem) => {
              console.log("VendorItem", vendorItem);
              const vendorReply = await axios.get(
                `https://graph.microsoft.com/v1.0/me/messages?search="subject:RE: ${vendorItem.Subject}  from:${vendorItem.Vendor_Email}"`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                  },
                }
              );

              // storing the first reply mail from the vendor
              const fetchedVendorReplyContent = vendorReply.data.value[0].bodyPreview;

              const extractedReply = extractBeforeNewline(fetchedVendorReplyContent);

              console.log("extracted vendor reply", extractedReply);

              const vendorReplyObject = {
                Body: extractedReply,
                Subject: `RE: ${vendorItem.Subject}`,
                Vendor_Email: vendorItem.Vendor_Email,
              };

              const url = `https://api-dev.wise-sales.com/backend/api/QueueDetails/${index + 1}/`; // Replace with your actual endpoint URL
              const requestData = {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ vendor_replies: vendorReplyObject }),
              };

              const response = await fetch(url, requestData);

              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              const data = await response.json(); // Assuming the server responds with JSON
              console.log("Success:", data);

              console.log("vendor reply", vendorReply);
            });
          }
        });
        // const vendorReply = await axios.get(`https://graph.microsoft.com/v1.0/me/messages?search="subject:RE: Request for Quote - PVC Material from:vignesh@onelabventures.com"`, {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //     "Content-Type": "application/json",
        //   },
        // });
        // console.log("This is a vendor reply ", vendorReply);
        // })
      } catch (error) {
        console.error("Error occurred while calling API:", error);
      }
    };

    fetchQueueData(); // Call the fetch function here, not inside itself
  }, []); // Empty dependency array to run the effect only once on component mount

  console.log("QueueData", queueData);

  // Filter data based on the search query
  // const filteredData = queueData.filter((rowData) =>
  //   rowData.customer_name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const handleStatusClick = () => {
  //   navigate("/pending");
  // };

  // const handleStatusClick = (customerName) => {
  //   navigate("/pending", { state: { customerName } });
  // };

  // const handleStatusClick = (customerName, customerEmail) => {
  //   navigate("/pending", { state: { customerName, customerEmail } });
  // };
  // const [rfq, setRfq] = useState(null);
  const handleStatusClick = (customerName, customerEmail, RFQ_ID, date, time, customer_response_subject) => {
    // navigate("/pending", { state: { customerName, customerEmail, RFQ_ID, date, time} });
    history.push(
      `/pending?customerName=${customerName}&customerEmail=${customerEmail}&RFQ_ID=${RFQ_ID}&date=${date}&time=${time}&customer_response_subject=${customer_response_subject}`
    );
    console.log("RFQ: ", RFQ_ID);
    console.log("QueueDate: ", date);
    // setRfq(RFQ_ID)
  };

  const ClarifyStatusClick = (customerName, customerEmail, RFQ_ID, date, time, customer_response_subject, day) => {
    // navigate("/pending", { state: { customerName, customerEmail, RFQ_ID, date, time} });
    history.push(
      `/clarify?customerName=${customerName}&customerEmail=${customerEmail}&RFQ_ID=${RFQ_ID}&date=${date}&time=${time}&customer_response_subject=${customer_response_subject}&day=${day}`
    );
    console.log("RFQ: ", RFQ_ID);
    console.log("QueueDate: ", date);
    // setRfq(RFQ_ID)
  };

  // Function to handle sorting selection
  const handleSortSelection = (option) => {
    setSelectedSortOption(option);
    setIsPopupOpenSort(false); // Close the sort popup
  };

  // Apply sorting and filtering based on the selected sorting option
const sortedAndFilteredData = queueData
.filter((rowData) =>
  rowData.customer_name.toLowerCase().includes(searchQuery.toLowerCase())
)
.filter((rowData) => {
  if (selectedSortOption) {
    switch (selectedSortOption) {
      case "Date (ascending)":
      case "Date (descending)":
        return true; // No filtering needed
      case "Customer name (ascending)":
        return true; // No filtering needed
      case "Customer name (descending)":
        return true; // No filtering needed
      case "Sent":
        return rowData.status === "Sent";
      case "Vendor quote pending":
        return rowData.status === "Vendor quote pending";
      case "Received quotes":
        return rowData.status === "Received quotes";
      case "Clarification Pending":
        return rowData.status === "Clarification Pending";
      default:
        return false;
    }
  } else {
    // If no sorting option is selected, return all rows
    return true;
  }
})
.sort((a, b) => {
  switch (selectedSortOption) {
    case "Date (ascending)":
      return new Date(a.date) - new Date(b.date);
    case "Date (descending)":
      return new Date(b.date) - new Date(a.date);
    case "Customer name (ascending)":
      return a.customer_name.localeCompare(b.customer_name);
    case "Customer name (descending)":
      return b.customer_name.localeCompare(a.customer_name);
    case "Sent":
      return a.status === "Sent" ? -1 : 1;
    case "Vendor quote pending":
      return a.status === "Vendor quote pending" ? -1 : 1;
    case "Received quotes":
      return a.status === "Received quotes" ? -1 : 1;
    case "Clarification Pending":
      return a.status === "Clarification Pending" ? -1 : 1;
    default:
      return 0;
  }
});

  return (
    <div className="queuePage">
      {/* TOP - BAR */}
      <Topbar selectedOrganization={selectedOrganization} />

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
        <div className="queueSearch-sec1-Sort" onClick={() => setIsPopupOpenSort(!isPopupOpenSort)}>
          <img src={SortImage} alt="Logo" className="queueSearch-sec1-Sort-2" />
          {isPopupOpenSort && (
            <Model isOpen={isPopupOpenSort} onRequestClose={() => setIsPopupOpenSort(false)} className="overlayQueueSort">
              <Sort close={() => setIsPopupOpenSort(false)} onSelectSort={handleSortSelection} />
            </Model>
          )}
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
          {sortedAndFilteredData.map((rowData, index) => (
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
                      if (rowData.status === "Sent") {
                        // navigate("/pending",
                        // { customerName: rowData.customer_name })
                        // ;
                        // handleStatusClick(rowData.customer_name);
                        // handleStatusClick(rowData.customer_name, rowData.customer_email);
                        handleStatusClick(
                          rowData.customer_name,
                          rowData.customer_response,
                          rowData.RFQ_ID,
                          rowData.date,
                          rowData.time,
                          rowData.customer_response_subject
                        );
                      } else if (rowData.status === "Clarification Pending") {
                        ClarifyStatusClick(
                          rowData.customer_name,
                          rowData.customer_response,
                          rowData.RFQ_ID,
                          rowData.date,
                          rowData.time,
                          rowData.customer_response_subject,
                          rowData.day
                        );
                      }
                    }}
                  >
                    {rowData.status}
                  </div>

                  {rowData.status !== "Sent" && <div className="QueueRowCell-2b">{rowData.day}</div>}
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
