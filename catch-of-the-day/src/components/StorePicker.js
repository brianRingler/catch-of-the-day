import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  // If we need to access "this" inside a custom method, as below
  // using an arrow function eliminates the need for constructor, super, bind
  // Create custom method - Using arrow functions binds "this" to property goToStore
  goToStore = (event) => {
    // 1. Stops form from submitting
    event.preventDefault();
    // 2. get the text from the input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store ➡</button>
      </form>
    );
  }
}

export default StorePicker;
