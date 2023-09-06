import { useState, useEffect } from 'react';
import './App.css';

function ShowTime({ time }) {
  return <h1>{time}</h1>;
}

function App() {
  const [time, setTime] = useState(50);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalId);
    }
  }, [time, intervalId]);

  function parseTime() {
		if (intervalId != null) return;
    const id = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    setIntervalId(id);
  }

  function stopTime() {
    clearInterval(intervalId);
		setIntervalId(null);
  }

	return (
		<div className="card">
			<div className="card-header">
				<h1>Timer App</h1>
			</div>
			<div className="card-body">
				<ShowTime time={time} />
				<button onClick={parseTime}>Start</button>
				<button onClick={stopTime}>Stop</button>
			</div>
		</div>
	);
}

export default App;

// import React, { Component } from 'react';
// import './App.css';
// 
// class ShowTime extends Component {
//   render() {
//     return <h1>{this.props.time}</h1>;
//   }
// }
// 
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: 50,
//       intervalId: null,
//     };
//   }
// 
//   parseTime = () => {
//     const intervalId = setInterval(() => {
//       this.setState((prevState) => ({
//         time: prevState.time - 1,
//       }));
// 
//       if (this.state.time === 0) {
//         clearInterval(intervalId);
//       }
//     }, 1000);
// 
//     this.setState({ intervalId });
//   };
// 
//   stopTime = () => {
//     clearInterval(this.state.intervalId);
//   };
// 
//   render() {
//     return (
//       <div>
//         <ShowTime time={this.state.time} />
//         <button onClick={this.parseTime}>start</button>
//         <button onClick={this.stopTime}>stop</button>
//       </div>
//     );
//   }
// }
// 
// export default App;
// 
