import React from "react";
import image from "../../assets/reserved table.jpg";
import axios from "axios";
import { message } from "antd";

class Reservation extends React.Component {
  state = {
    realTimeDate: this.getCurrentDate(),
    realTimeTime: this.getCurrentTime(),

    FullName: "",
    email: "",
    datetime: "",
    noofpeople: "",
    tables: "",
    phno: "",
    specialrequest: "",
  };

  getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "https://signup-login-data-a4f69-default-rtdb.firebaseio.com/tablebooking.json",
        {
          realTimeDate: this.state.realTimeDate,
          realTimeTime: this.state.realTimeTime,
          FullName: this.state.FullName,
          email: this.state.email,
          datetime: this.state.datetime,
          noofpeople: this.state.noofpeople,
          tables: this.state.tables,
          phno: this.state.phno,
          specialrequest: this.state.specialrequest,
        }
      );

      message.success("Table booked successfully");
      this.setState({
        FullName: "",
        email: "",
        datetime: "",
        noofpeople: "",
        tables: "",
        phno: "",
        specialrequest: "",
      });
    } catch (error) {
      message.error("Something went wrong. Please try again.", error);
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        realTimeDate: this.getCurrentDate(),
        realTimeTime: this.getCurrentTime(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="container w-full lg:px-28 md:px-16 sm:px-7 px-4  py-5">
        <div className="grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1">
          <div className="md:block hidden h-full">
            <img
              src={image}
              alt="table"
              className="w-full h-full object-cover object-center rounded-l-xl  space-y-6"
            />
          </div>
          <div className="w-full bg-zinc-800 md:p-8 p-4 flex items-center justify-center md:rounded-r-xl md:rounded-l-none rounded-r-xl rounded-l-xl">
            <div className="w-full space-y-6">
              <form onSubmit={this.handleSubmit}>
                <div className="space-y-1">
                  <h5 className="text-base text-yellow-500 font-normal">
                    Reservation
                  </h5>
                  <h1 className="text-xl text-neutral-100 font-bold">
                    Book a table online
                  </h1>

                  <p className="text-sm text-neutral-400">
                    Date: {this.state.realTimeDate}
                  </p>
                  <p className="text-sm text-neutral-400">
                    Time: {this.state.realTimeTime}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="FullName"
                      className="text-base text-neutral-400 font-normal-block"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="FullName"
                      id="FullName"
                      value={this.state.FullName}
                      onChange={this.handleChange}
                      placeholder="e.g. Surname. Name"
                      className="w-full h-12 border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-base text-neutral-400 font-normal-block"
                    >
                      E-mail Id
                    </label>
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      name="email"
                      id="email"
                      placeholder="e.g. name@gmail.com"
                      className="w-full h-12 border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="datetime"
                      className="text-base text-neutral-400 font-normal-block"
                    >
                      Time & Date
                    </label>
                    <input
                      type="datetime-local"
                      value={this.state.datetime}
                      onChange={this.handleChange}
                      name="datetime"
                      id="datetime"
                      className="w-full h-12 border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="noofpeople"
                      className="text-base text-neutral-400 font-normal-block"
                    >
                      No Of People
                    </label>
                    <select
                      name="noofpeople"
                      id="noofpeople"
                      value={this.state.noofpeople}
                      onChange={this.handleChange}
                      className="w-full h-12 border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300"
                      required
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="tables"
                      className="text-base text-neutral-400 font-normal-block"
                    >
                      Reserve Table
                    </label>
                    <select
                      name="tables"
                      id="tables"
                      value={this.state.tables}
                      onChange={this.handleChange}
                      className="w-full h-12 border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300"
                      required
                    >
                      <option value="1">1</option>
                      <option value="2" disabled>
                        2
                      </option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5" disabled>
                        5
                      </option>
                      <option value="6">6</option>
                      <option value="7" disabled>
                        7
                      </option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10" disabled>
                        10
                      </option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phno"
                      className="text-base text-neutral-400 font-normal-block"
                    >
                      Phone No
                    </label>

                    <input
                      type="tel"
                      name="phno"
                      value={this.state.phno}
                      onChange={this.handleChange}
                      id="phno"
                      placeholder="e.g. 99xxxx4152"
                      className="w-full h-12 border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="specialrequest"
                    className="text-base text-neutral-400 font-normal-block"
                  >
                    Any Special Request?
                  </label>
                  <textarea
                    name="specialrequest"
                    value={this.state.specialrequest}
                    onChange={this.handleChange}
                    id="specialrequest"
                    rows="4"
                    placeholder="e.g. Decorate table for a 2nd anniversary"
                    className="w-full h-28 border-neutral-400/40 bg-neutral-900/5 px-3 py-2 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-yellow-600 hover:bg-yellow-600/80 !mb-3 text-neutral-100 font-medium ease-in-out duration-300"
                >
                  Book a Table Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Reservation;
