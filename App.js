import React, { useState } from 'react';

// Sample train schedule data
const trainScheduleData = [
  { id: 1, trainName: 'Chennai Exp', trainnumber:2344,departureTime: '10:00 AM',seatsAvailable:100,prices:"Rs.150",delayedBy:15 },
  { id: 2, trainName: 'Hyderabad Exp', trainnumber:2341,departureTime: '11:30 AM',seatsAvailable:150,prices:"Rs.100",delayedBy:5 },
  { id: 3, trainName: 'Balari Express ',trainnumber:2345, departureTime: '2:00 PM',seatsAvailable:100,prices:"Rs.150",delayedBy:20 },
];

function App() {
  const [trainSchedule, setTrainSchedule] = useState(trainScheduleData);

  return (
    <div>
      <h1>Train Schedule</h1>
      <table border="2">
        <thead>
          <tr>
            <th align="left">Train Name</th>
            <th>Train Number</th>
            <th>Departure Time</th>
            <th>seatsAvailable</th>
            <th>price Available</th>
            <th>delayedBy</th>
          </tr>
        </thead>
        <tbody>
          {trainSchedule.map((train) => (
            <tr key={train.id}>
              <td>{train.trainName}</td>
              <td>{train.trainnumber}</td>
              <td>{train.departureTime}</td>
              <td>{train.seatsAvailable}</td>
              <td>{train.prices}</td>
              <td>{train.delayedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;