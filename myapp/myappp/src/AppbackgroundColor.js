import './App.css'; // Ensure this file exists

function AppColor(props) {
  function greetUser(e) {
    // Change the background color
    document.body.style.background = e.target.value;

    // Display an alert with the input value
    alert("Welcome, " + document.getElementById(props.color).value);
  }

  return (
    <div className="App">
      <h1>{props.heading}</h1>
      <p style={{ color: 'blue', fontSize: '20px' }}>
        Click the button to change the background color.
      </p>
      <label>{props.lbl}</label>
      <input id={props.color} type="text" placeholder="Enter your name" />
      <button value={props.color} onClick={greetUser}>
        Change Background to {props.color}
      </button>
    </div>
  );
}

export default AppColor;
