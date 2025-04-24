import { useState, useEffect } from 'react';
import './App.css';
import FundingBarChart from './components/FundingBarChart';
import IndustryTrendChart from './components/IndustryTrendChart';

function App() {
  const [fundingData, setFundingData] = useState([]);

  useEffect(() => {
    fetch('/funding.json')
      .then((response) => response.json())
      .then((data) => setFundingData(data))
      .catch((error) => console.error('Error loading funding data:', error));
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Funding Tracker</h1>
        <p>Visualize startup funding trends over time.</p>
      </header>
      <main>
        <div className="charts-container">
          <section className="chart">
            <h2>Bar Chart: Total Funding by Year</h2>
            <FundingBarChart data={fundingData} />
          </section>
          <section className="chart">
            <h2>Line Chart: Funding Trends by Industry</h2>
            <IndustryTrendChart data={fundingData} />
          </section>
        </div>
      </main>
      <footer>
        <p>&copy; 2025 Funding Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
