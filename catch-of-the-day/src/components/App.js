import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import fishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  // 1) First set state based on what it will look like before initial mount
  // Here we will have two objects nested within the state object.

  state = {
    fishes: {},
    order: {},
  };

  // The methods that update state and state must always live in the same component
  addFish = (fish) => {
    // 1. Take a copy of the existing state (we do not want to reach directly into "state") and modify directly. This is called mutation.
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes: fishes });
  };

  // We want to update state with sample fishes via button in Inventory section
  // We use update state in the component where the state lives
  loadSampleFishes = () => {
    this.setState({ fishes: fishes });
  };

  // custom function that will change state "order"
  addToOrder = (key) => {
    // 1. create a copy of order
    const order = { ...this.state.order };
    // 2. either add to the order, or update the number in our order
    // order[key] is going to be fish1, fish2, etc
    order[key] = order[key] + 1 || 1; // if order.fish1 exists add 1 or it does not return 1
    // 3. call setState to update our state object values
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {/* index={key} don't get this 9:45 vid 16*/}
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
