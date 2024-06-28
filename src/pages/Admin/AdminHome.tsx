import React from "react";
import WeeklyReport from "../../Components/dashboard/analytics/WeeklyReport";
import AdminHeader from "../../Components/dashboard/AdminHeader";
import UserTable from "../../Components/dashboard/UserTable";
import VendorRequestList from "../../Components/dashboard/VendorRequestList";
import InteractionCard from "../../Components/dashboard/InteractionCard";

function AdminHome() {
  return (
    <>
      <div>
        {/* <InteractionCard data={{}} />
        <InteractionCard data={{}} />
        <InteractionCard data={{}} />
        <InteractionCard data={{}} /> */}
      </div>
      <div className="">
        <WeeklyReport />
      </div>
      <div className="flex flex-row">
        <div className="w-[50%] mt-5 p-4">
          <UserTable
            users={[]}
            onRemove={function (email: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <div className="w-[50%] mt-5 mr-4 p-4">
          <VendorRequestList users={[]} />
        </div>
      </div>
    </>
  );
}

export default AdminHome;
