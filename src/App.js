import { Layout, Typography } from "antd";
import "antd/dist/antd.css";

import Main from "./components/Main";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout justify="center" align="center">
      <Header>
        <Title type="danger" level={1}>
          Tango Challenge
        </Title>
      </Header>
      <Content>
        <Main />
      </Content>
      <Footer>With 💛 MigueMartelo</Footer>
    </Layout>
  );
}

export default App;
