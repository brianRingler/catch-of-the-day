import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  // 1) First set state based on what it will look like before initial mount
  // Here we will have two objects nested within the state object.

  state = {
    fishes: {},
    order: {},
  };

  // The methods that update state and state must always live in the same component
  // How do we call the addFish method and call it from two levels deep. We want to run it from AddFishForm??
  // The answer is "props" - We can pass it to inventory
  addFish = (fish) => {
    // 1. Take a copy of the existing state (we do not want to reach directly into "state") and modify directly. This is called mutation.

    // using object spread ... creates a copy (ES6)
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({
      //ES6 if passing the same name for key:value we can drop the value
      fishes: fishes,
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <div className="fish-form">
          {/* passing method/function addFish to Inventory via props */}
          <Inventory addFish={this.addFish} />
        </div>
      </div>
    );
  }
}

export default App;
