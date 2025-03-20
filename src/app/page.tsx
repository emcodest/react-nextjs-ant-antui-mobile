"use client";
import {
  Flex,
  Layout,
  Col,
  Row,
  Divider,
  Button,
  Watermark,
  Alert,
} from "antd";
const { Header, Footer, Sider, Content } = Layout;
import ModalDialog from "@/app/components/Modal";
import Notification from "@/app/components/Notify";
import Segment from "@/app/components/Segment";
import Menu from "@/app/components/Menu";
// import { useState } from "react";
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  minWidth: "100%",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  // backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
  height: "100%",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  // width: "calc(50% - 8px)",
  // maxWidth: "calc(50% - 8px)",
};
export default function Home() {
  // const [size, setSize] = useState<SizeType>("large"); // default is 'middle
  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Button type="primary" href="/mobile">
            Go to Mobile
          </Button>
          <Button type="primary" href="/mobile2">
            Mobile 2
          </Button>
        </Header>
        <Layout>
          <Sider width="15%" style={siderStyle}>
            <Row>
              <Col>
                <Menu />
              </Col>
            </Row>
          </Sider>
          <Content style={contentStyle}>
            <Row>
              <Col
                span={12}
                className="text-amber-500 border-8 text-black gutter-row"
              >
                <div className="text-4xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur debitis iste odit deleniti similique, illum
                  dolores voluptatibus temporibus tempora eaque sunt, labore
                  rerum fugiat eveniet, maiores natus enim. Eius, tempore.
                </div>
              </Col>
              <Col
                span={12}
                className="text-amber-500 border-8  text-black gutter-row"
              >
                <div className="text-4xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit sequi, distinctio, dignissimos ducimus adipisci
                  voluptatem dolor quis quidem non magnam a officiis provident
                  quae dolorem quas facere iusto ipsam animi.
                </div>
              </Col>
            </Row>
            <Divider orientation="left">Horizontal</Divider>
            <Row gutter={32}>
              <Col lg={12} span={24} className="gutter-row">
                <div className="text-amber-500 border-8 text-4xl text-black ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  fugit quisquam repellendus doloribus libero, numquam iure
                  itaque, natus labore sint temporibus corrupti inventore minus
                  aut adipisci? Nam non itaque fuga?
                </div>
              </Col>
              <Col lg={12} span={24} className="gutter-row">
                <div className="text-amber-500 border-8 text-4xl text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  fugit quisquam repellendus doloribus libero, numquam iure
                  itaque, natus labore sint temporibus corrupti inventore minus
                  aut adipisci? Nam non itaque fuga?
                </div>
              </Col>
            </Row>
            <Divider orientation="left">Horizontal</Divider>
            <Row>
              <Col span={24}>
                <Watermark content="Ant Design">
                  <Flex justify={"space-evenly"} gap="small">
                    <Button type="primary" size={"large"}>
                      Primary
                    </Button>
                    <Button type="primary" size={"large"}>
                      Primary
                    </Button>
                  </Flex>
                </Watermark>
              </Col>
            </Row>
            <Divider orientation="left">Horizontal</Divider>
            <Row>
              <Col span={12}>
                <Button style={{ width: "50%" }} type="primary">
                  Go to Home
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  href="/about"
                  style={{ width: "50%", backgroundColor: "red" }}
                  type="primary"
                >
                  Go to About
                </Button>
              </Col>
            </Row>
            <Divider orientation="left">Horizontal</Divider>
            <Row>
              <Col span={12}>
                <Alert message="Success Text" type="success" />;
                <Alert
                  message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                  type="warning"
                  closable
                  onClose={() => console.log("good!!!")}
                />
              </Col>
              <Col span={12}></Col>
            </Row>
            <Divider>Modal</Divider>
            <Row>
              <Col>
                <ModalDialog />
              </Col>
              <Col>
                <Notification />
              </Col>
            </Row>
            <Divider>Segment</Divider>
            <Row>
              <Col>
                <Segment />
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Flex>
  );
}
