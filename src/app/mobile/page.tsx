// import { Row, Col, Flex } from "antd";
"use client";
import {
  AppOutline,
  MessageOutline,
  // MessageFill,
  // UnorderedListOutline,
  // UserOutline,
} from "antd-mobile-icons";
import {
  Button,
  Grid,
  SafeArea,
  Space,
  Divider,
  AutoCenter,
  CapsuleTabs,
  JumboTabs,
  TabBar,
  Tabs,
  DotLoading
} from "antd-mobile";
import MyActionSheet from "@/app/comp-mobile/ActionSheet"

export default function Mobile() {
  return (
    <>
      <div style={{ background: "#ffcfac" }}>
        <SafeArea position="top" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus
        qui. Porro cupiditate veniam mollitia maxime sit commodi, nulla
        similique, dolorem corrupti reprehenderit excepturi accusantium a
        debitis fugit ut unde?
      </div>
      <Space wrap>
        <Button>Button 1</Button>
        <Button>Button 1</Button>
        <Button>Button 1</Button>
        <Button>Button 1</Button>
        <Button>Button 1</Button>
        <Button>Button 1</Button>
        <Button>Button 1</Button>
        <Button>Button 1</Button>
      </Space>
      <Divider>Next Content</Divider>
      <Space>
        <AutoCenter>Hey this is mobile short text</AutoCenter>
      </Space>
      <Divider>Next Content</Divider>
      <Space>
        <CapsuleTabs>
          <CapsuleTabs.Tab title="Nav Onex" key="fruits">
            zzz
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title="Nav Onex" key="vegetables">
            yyyy
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title="Nav Twox" key="animals">
            xxx
          </CapsuleTabs.Tab>
        </CapsuleTabs>
      </Space>
      <Divider>Working on Jump Tabs</Divider>
      <Space>
        <JumboTabs>
          <JumboTabs.Tab title="Tab One" description="desc one" key="fruits">
            xxx
          </JumboTabs.Tab>
          <JumboTabs.Tab title="Tab One" description="desc one" key="fruits_1">
            xxx
          </JumboTabs.Tab>
          <JumboTabs.Tab title="Tab One" description="desc one" key="fruits_2">
            xxx
          </JumboTabs.Tab>
        </JumboTabs>
      </Space>
      <Divider>Tab bars</Divider>
      <Space>
        <TabBar safeArea>
          <TabBar.Item key="1" icon={<AppOutline />} title="Nice title" />
          <TabBar.Item
            key="2"
            icon={<MessageOutline />}
            title="User 2"
            badge="99+"
          />
        </TabBar>
      </Space>
      <Divider>Tab Only</Divider>
      <Space>
        <Tabs stretch={false} activeLineMode="full"
          style={{
            "--title-font-size": "13px",   
            borderBottom: "1px solid var(--adm-color-border)"
          }}
        >
          <Tabs.Tab title="My Tabber1" key="fruits">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              soluta corrupti quasi, quos temporibus veniam nemo quod cumque
              nisi magnam odio sit eius ipsa porro cupiditate molestias numquam
              a similique!
            </div>
          </Tabs.Tab>
          <Tabs.Tab title="My Tabber 2" key="fruits_2">
            Content of fruite 2
          </Tabs.Tab>
          <Tabs.Tab title="My Tabber 3" key="fruits_3">
            Emma
          </Tabs.Tab>
        </Tabs>
      </Space>
      <Divider>Next ...</Divider>
      <Space>
      <span style={{ fontSize: 14 }}>
          <DotLoading />
        </span>
        <span style={{ fontSize: 18 }}>
          <DotLoading />
        </span>
      </Space>
      <Space>
    
      </Space>
      <Grid columns={1} gap={0}>
    
        <Grid.Item>  
            <MyActionSheet />
          <div>
            <h1 className="text-4xl">An item </h1>
            <Button>Mobile btn ...</Button>
          </div>
        </Grid.Item>
        <Grid.Item>
          <div>
            <h1 className="text-4xl">An item </h1>
            <Button>Mobile btn ...</Button>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quia et alias neque quis corporis optio laboriosam
            quaerat ex aut eligendi delectus nesciunt aperiam recusandae tempora
            voluptas, voluptate quae necessitatibus!
          </div>
        </Grid.Item>
      </Grid>
      <div style={{ background: "red" }}>
        <SafeArea position="bottom" />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, ipsa
        accusamus tempora, culpa optio quia aperiam cupiditate distinctio minus,
        illo non doloribus voluptate possimus facilis cumque excepturi provident
        dolores illum.
      </div>
    </>
  );
}
