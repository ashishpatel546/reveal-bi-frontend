import React, { useEffect, useState } from "react";

declare let $: any;

const apiURL = "http://localhost:5111/dashboards";

const ViewDashboard = (props: any) => {
  const [dashboardId, setDashboardId] = useState("");
  const [dashboards, setDashboards] = useState([]);

  let changeDashboard = (e: any) => {
    setDashboardId(e.target.value);
  };

  // useEffect(() => {
  //     fetch(apiURL, { method: 'GET' })
  //         .then((res: any) => res.json())
  //         .then((dashboards: any) => {
  //             setDashboards(dashboards);
  //             // Set the initial dashboardId to the first one in the list
  //             if (dashboards.length > 0) {
  //                 setDashboardId(dashboards[0].name);
  //             }
  //         });
  // }, []);
  useEffect(() => {
    fetch(apiURL, { method: "GET" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((dashboards: any) => {
        setDashboards(dashboards);
        if (dashboards.length > 0) {
          setDashboardId(dashboards[0].name);
        }
      })
      .catch((error) => {
        console.error("Error fetching dashboards:", error);
      });
  }, []);

  useEffect(() => {
    // Load the selected dashboard
    if (dashboardId) {
      $.ig.RVDashboard.loadDashboard(dashboardId).then((dashboard: any) => {
        var revealView = new $.ig.RevealView("#revealView");
        revealView.interactiveFilteringEnabled = true; 
        // revealView.showExportToPDF = false;
        // revealView.showExportToExcel = false;
        // revealView.showExportImage = false;
        revealView.showExportToPowerPoint = false;
        // $.ig.RevealSdkSettings.enableActionsOnHoverTooltip = true 
        revealView.dashboard = dashboard;
      });
    }
  }, [dashboardId]);

  return (
    <div>
      <div>
        <h3>Load Dashboard</h3>
        <select
          name="dashboards"
          id="dashboards-select"
          value={dashboardId}
          onChange={changeDashboard}
        >
          {dashboards.map((dashboard: any, index: number) => {
            return (
              <option key={index} value={dashboard.name}>
                {dashboard.name}
              </option>
            );
          })}
        </select>
      </div>
      <div
        id="revealView"
        style={{ height: "calc(100vh - 130px)", width: "100%" }}
      ></div>
    </div>
  );
};

export default ViewDashboard;
