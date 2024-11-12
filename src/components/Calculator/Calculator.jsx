import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError("");
      const sum = 0;
      setResult(sum);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="container">
      <h2>String Calculator</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter numbers (comma-separated)"
          value={input}
          onChange={handleInputChange}
          className="input"
        />
        <button type="submit" className="button">Calculate</button>
      </form>
      {error && <div className="error">Error: {error}</div>}
      {result !== null && (
        <div className="result">Sum: {result}</div>
      )}
    </div>
  );
}

export default Calculator;