import React, { useState } from "react";
import { ActionSheet, Button, Space } from "antd-mobile";
import type {
  Action,
  //   ActionSheetShowHandler,
} from "antd-mobile/es/components/action-sheet";
const actions: Action[] = [
  { text: "Copy Now", key: "copy" },
  { text: "Edit Now", key: "edit" },
  { text: "Save Now", key: "save" },
];
export default function ActionSheetUi() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Space>
        <Button onClick={() => setVisible(true)}>Click Action Sheet</Button>
        <ActionSheet
        //   style={{
        //     maxWidth: "100vw",
        //     maxHeight: "100vh",
        //     overflow: "auto",
        //   }}
          visible={visible}
          actions={actions}
          onClose={() => setVisible(false)}
          // getContainer={() => document.body}
        />
      </Space>
    </>
  );
}
