import React, { useState } from "react";
import ProfileBanner from "./MainProfileBanner";
import OrderHistory from "./OrderHistory";
import { Button, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import AccountSettings from "./AccountSettings";
import AccountSettingsAddress from "./AccountSettingsAddress";

const index = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="m-auto max-w-[1280px] p-8">
      <div className="profile-wrapper flex gap-4 flex-col">
        <ProfileBanner />
        <Tabs
          variant="unstyled"
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <TabList className="border border-gray-border p-2 rounded-md w-full relative">
            <Tab
              className={`bg-light-white capitalize rounded-sm text-gray font-medium ${
                activeTab === 0 &&
                "active bg-light-white border border-gray-border"
              }`}
              onClick={() => handleTabChange(0)}
            >
              <p className="text-sm">account settings</p>
            </Tab>
            <Tab
              onClick={() => handleTabChange(1)}
              className={`bg-light-white capitalize rounded-sm text-gray font-medium ${
                activeTab === 1 &&
                "active bg-light-white border border-gray-border"
              }`}
            >
              <p className="text-sm">manage password</p>
            </Tab>
            <Tab
              onClick={() => handleTabChange(2)}
              className={`bg-light-white capitalize rounded-sm text-gray font-medium ${
                activeTab === 2 &&
                "active bg-light-white border border-gray-border"
              }`}
            >
              <p className="text-sm">order history</p>
            </Tab>
            <Button  style={{background: "black", display:"flex", position: "absolute", right:"6px"}}><p className="capitalize text-sm text-white">signout</p></Button>
          </TabList>
          <TabPanels>
            <TabPanel padding={0} className="flex flex-col gap-4">
              <AccountSettings />
              <AccountSettingsAddress />
            </TabPanel>
            <TabPanel padding={0}>
              <p className="capitalize font-semibold text-xl p-4 border border-gray-border">
                sorry! can't change bro :) 😈. Go and delete your account hehaha
              </p>
            </TabPanel>
            <TabPanel padding={0}>
              <OrderHistory />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default index;
