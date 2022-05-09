import Layout from "../../components/Layout/Layout";
import AppProvider from "../../context/AppContext";
import RouterConfig from "../../routes/Routes";

import "./App.css";
import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <AppProvider>
      <Layout>
        <RouterConfig />
      </Layout>
    </AppProvider>
  );
}

export default App;
