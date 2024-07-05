import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AdminHeader = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [pageTitle, setPageTitle] = useState("Dashboard");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime =
        now.toLocaleDateString("en-US") +
        " " +
        now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
      setCurrentDateTime(formattedDateTime);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const location = useLocation();
  const pathName = location.pathname;
  const userData: any = useAuthUser();

  useEffect(() => {
    if (pathName === "/admin/sellers") {
      setPageTitle("Sellers Page");
    } else if (pathName === "/admin/users") {
      setPageTitle("Users Page");
    } else if (pathName === "/admin/analytics") {
      setPageTitle("Analytics Page");
    } else if (pathName === "/admin/settings") {
      setPageTitle("Settings Page");
    } else {
      setPageTitle("Dashboard Page");
    }
  }, [pathName]);
  const { t } = useTranslation();
  return (
    <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-[85%]">
      <div className="flex items-center">
        <div className="flex flex-col">
          <span className="text-gray-600 mr-4 font-bold text-lg">
            {t("Administration")}
          </span>
          <span className="text-gray-500  text-sm">{currentDateTime}</span>
        </div>
      </div>
      <div className="flex justify-center text-gray-600 font-bold text-lg uppercase">
        {pageTitle}
      </div>
      <div className="flex">
        <div className="flex items-center space-x-2 bg-gray-100  rounded-lg py-2 px-4">
          <div className="bg-secondary rounded-full p-2 flex items-center justify-center h-8 w-8 text-white">
            <span className="text-xs font-medium">
              {`${userData?.name}`
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">{userData?.name}</span>
            <span className="text-xs text-gray-500">{t("Administrator")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
