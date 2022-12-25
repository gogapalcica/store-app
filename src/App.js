import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Customers } from "./pages/AppCustomers";
import { Products } from "./pages/AppProducts";

function App() {
  return (
    <div className ="App">
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to= "/customers">Customers</Link>
          </li>
          <li>
            <Link to = "/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route path="/customers">
        <Customers />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
