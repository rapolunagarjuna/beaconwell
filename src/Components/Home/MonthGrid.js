import React, {useState, useEffect } from 'react'

export default function MonthGrid() {
    const currentDate = new Date();
    const monthNumber = currentDate.getMonth();
    const dayNumber = currentDate.getDay();

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const monthLimit = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const [moods, setMoods] = useState(Array(31).fill("Neutral")); // Initial mood for each day
    const [gridData, setGridData] = useState([]);
    const columns = 7;
      const rows = 5;
  
    // Function to return color based on mood
    const getColorForMood = (mood) => {
      switch (mood) {
        case "Happy": return "green";
        case "Sad": return "blue";
        case "Neutral": return "gray";
        case "Excited": return "yellow";
        default: return "gray";
      }
    };
  
    useEffect(() => {
      // Transform the linear moods array into a 7x5 (cols x rows) structure
      
      let grid = Array.from({ length: columns }, () => Array.from({ length: rows }));
      for (let day = 0; day < moods.length; day++) {
        const colIndex = Math.floor(day / rows);
        const rowIndex = day % rows;
        grid[colIndex][rowIndex] = moods[day];
      }
      setGridData(grid);
    }, [moods]); // Recalculate gridData when moods change
  
    return (
      <div className="w-fit h-fit p-4 mx-auto">
        <span>{monthNames[monthNumber]}</span>
        <div className="grid grid-cols-7 gap-1 w-fit">
          {gridData.map((col, colIndex) => (
            
            
            col.map((mood, rowIndex) => (
                    

              (colIndex * rows + rowIndex + 1 <= monthLimit[monthNumber])?
              <div
                key={`${colIndex}-${rowIndex}`}
                style={{ backgroundColor: getColorForMood(mood) }}
                className="w-10 h-10 flex justify-center items-center text-white"
              >

                {colIndex * rows + rowIndex + 1}
              </div>
              : null
            ))
          ))}
        </div>
      </div>
    );
}
