import { Row, Col, Flex } from "antd";
export default function FlexBox() {
  return (
    <Flex  justify="center" className = "border-4"  style = {{justifyItems: "center", alignContent: "center", alignItems: "center", minHeight: "100vh"}}>
      <Row>
        <Col  lg={12} span = {24} className = "p-3">
          <h1 className="text-5xl">This is a mobile page</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            quis accusamus, quae libero nisi soluta quo? Esse officia facilis
            eaque eum culpa modi, fugit asperiores consequatur aliquid totam?
            Quia, deserunt.
          </div>
        </Col>
        <Col lg={12} span = {24}  className = "p-3">
          <h1 className="text-5xl">This is a mobile page</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            quis accusamus, quae libero nisi soluta quo? Esse officia facilis
            eaque eum culpa modi, fugit asperiores consequatur aliquid totam?
            Quia, deserunt.
          </div>
        </Col>
      </Row>
      </Flex>
  
  );
}
