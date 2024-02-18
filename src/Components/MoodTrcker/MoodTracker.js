import React, { useState } from 'react';
import './MoodTracker.css'; // Import CSS file for styling

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [notes, setNotes] = useState('');
  const [moodData, setMoodData] = useState([]);

  const handleMoodChange = (event) => {
  
    if (event) {
        setSelectedMood(event);
      }
  };

  const handleEmotionChange = (emotion) => {
    const index = selectedEmotions.indexOf(emotion);
    if (index === -1) {
      setSelectedEmotions([...selectedEmotions, emotion]);
    } else {
      setSelectedEmotions(selectedEmotions.filter((e) => e !== emotion));
    }
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = () => {
    // Here you can store the mood, emotions, and notes for each day
    const currentDate = new Date().toLocaleDateString();
    const newMoodEntry = {
      date: currentDate,
      mood: selectedMood,
      emotions: selectedEmotions,
      notes: notes
    };
    setMoodData([...moodData, newMoodEntry]);
    // Reset form after submission
    setSelectedMood('');
    setSelectedEmotions([]);
    setNotes('');
  };

  return (
    <div className="mood-tracker-container">
      <h2>Mood Tracker</h2>
      <div className="form-group">
        <label htmlFor="mood-select">Select How was you day:</label>
       <div className="emotions-container">
  <button className={selectedMood === '😍' ? 'active' : ''} onClick={() => handleMoodChange('😍')}>Great 😍</button>
  <button className={selectedMood === '😁' ? 'active' : ''} onClick={() => handleMoodChange('😁')}>Good 😁</button>
  <button className={selectedMood === '😊' ? 'active' : ''} onClick={() => handleMoodChange('😊')}>Not Bad 😊</button>
  <button className={selectedMood === '😢' ? 'active' : ''} onClick={() => handleMoodChange('😢')}>Not good 😢</button>
  <button className={selectedMood === '😠' ? 'active' : ''} onClick={() => handleMoodChange('😠')}>Rough Day 😠</button>
</div>
      </div>
      <div className="form-group">
        <label htmlFor="notes">Notes:</label>
        <textarea id="notes" value={notes} onChange={handleNotesChange} />
      </div>
      <button className="submit-button" onClick={handleSubmit}>Add mood</button>

      <div className="mood-grid">
        <h3>Mood History</h3>
        <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Mood</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {moodData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.mood}</td>
              <td>{entry.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      </div>
    </div>
  );
};

export default MoodTracker;
