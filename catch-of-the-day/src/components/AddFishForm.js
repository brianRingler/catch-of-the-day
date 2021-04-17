import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imgRef = React.createRef();

  createFish = (event) => {
    // 1. Stops form from submitting
    event.preventDefault();
    // 2. get the text from the input
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imgRef.current.value,
    };

    // 3. Pass fish (name. price, status,desc,image) to App which is two levels up from AddFishForm (App.js)
    this.props.addFish(fish);
    // refresh the form when add fish is clicked
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onClick={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          type="text"
          ref={this.priceRef}
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh❗❗❗</option>
          <option value="unavailable">Sold Out🚫</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input name="image" ref={this.imgRef} type="text" placeholder="Image" />
        <button>➕ Add Fish 🐟</button>
      </form>
    );
  }
}

export default AddFishForm;
