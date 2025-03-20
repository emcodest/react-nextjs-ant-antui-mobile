"use client";

// import React, { useRef } from "react";
import { Space, Divider } from "antd-mobile";
import MyActionSheet from "@/app/comp-mobile/ActionSheet";
// import type { ToastHandler } from "antd-mobile/es/components/toast";
export default function MyMobile2() {
  return (
    <>
      <Divider>Action Sheet</Divider>
      <Space align="center">
        <MyActionSheet />
      </Space>
    </>
  );
}
