import Layout from "../src/components/Layout/Layout"
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
