import React, { useEffect } from "react";
declare let $: any;


const CreateDashboard = () => {
  useEffect(() => {
    $.ig.RevealSdkSettings.setAdditionalHeadersProvider((url: string) => {
      var headers: Record<string, any> = {};
      // headers["countries"] = "single_value";
      headers["countries"] = ["US", "GR"];
      return headers;
     });
    var revealView = new $.ig.RevealView("#revealView");
    revealView.startInEditMode = true;
    revealView.onDataSourcesRequested = (callback: any) => {
      let redshiftDataSource = new $.ig.RVRedshiftDataSource();
      redshiftDataSource.id = "redshift";
      redshiftDataSource.title = "Redshift Datasource";
      // redshiftDataSource.host = "44.240.211.241";
      // redshiftDataSource.port = 5439;
      // redshiftDataSource.database = "blink_test";
      // redshiftDataSource.username = "admin";
      // redshiftDataSource.password = "!(%*Blink1234";

      // Add more items as needed

      const redshiftDataSourceItem1 = new $.ig.RVRedshiftDataSourceItem(
        redshiftDataSource
      );
      redshiftDataSourceItem1.id = "user1";
      redshiftDataSourceItem1.title = "Custom Query Charger Uptime";
      // redshiftDataSourceItem1.subtitle = "charger_uptime";
      // redshiftDataSourceItem1.query = "SELECT * FROM charger_uptime";
      // redshiftDataSourceItem1.table='charger_uptime';
      // redshiftDataSourceItem1.schema='public';

      // const redshiftDataSourceItem2 = new $.ig.RVRedshiftDataSourceItem(
      //   redshiftDataSource
      // );
      // redshiftDataSourceItem2.id = "charger_uptime_summary";
      // redshiftDataSourceItem2.title = "charger_uptime_summary";
      // redshiftDataSourceItem2.subtitle = "charger_uptime_summary";
      // redshiftDataSourceItem2.query = "SELECT * FROM charger_uptime_summary";
      // redshiftDataSourceItem2.table='charger_uptime_summary';
      // redshiftDataSourceItem2.schema='public';


      // const redshiftDataSourceItem3 = new $.ig.RVRedshiftDataSourceItem(
      //   redshiftDataSource
      // );
      // redshiftDataSourceItem3.id = "charger_utilization";
      // redshiftDataSourceItem3.title = "charger_utilization";
      // redshiftDataSourceItem3.subtitle = "charger_utilization";
      // redshiftDataSourceItem3.query = "SELECT * FROM charger_utilization";
      // redshiftDataSourceItem3.table='charger_utilization';
      // redshiftDataSourceItem3.schema='public';


      // const redshiftDataSourceItem4 = new $.ig.RVRedshiftDataSourceItem(
      //   redshiftDataSource
      // );
      // redshiftDataSourceItem4.id = "charging_session";
      // redshiftDataSourceItem4.title = "charging_session";
      // redshiftDataSourceItem4.subtitle = "charging_session";
      // redshiftDataSourceItem4.query = 'SELECT * FROM charging_session';
      // redshiftDataSourceItem4.table='charging_session';
      // redshiftDataSourceItem4.schema='public';



      callback(
        new $.ig.RevealDataSources(
          [redshiftDataSource],
          // [],
          [redshiftDataSourceItem1],
          // [redshiftDataSourceItem1,redshiftDataSourceItem2,redshiftDataSourceItem3,redshiftDataSourceItem4],
          false
        )
      );
    };
  }, []);

  return (
    <div
      id="revealView"
      style={{ height: "calc(100vh - 60px)", width: "100%" }}
    ></div>
  );
};

export default CreateDashboard;
