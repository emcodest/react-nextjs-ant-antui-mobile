import React from "react";
import { Segmented } from "antd";
export default function Segmento() {
  return (
    <Segmented<string>
      options={["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]}
      onChange={(value) => {
        console.log(value); // string
      }}
    />
  );
}
