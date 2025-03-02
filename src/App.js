import { useState, useEffect } from "react";
import './portfolio.css'; // Import the CSS file

export default function Portfolio() {
  const [playerPosition, setPlayerPosition] = useState({ x: 5, y: 5 });
  const gridSize = 10;

  const movePlayer = (dx, dy) => {
    setPlayerPosition((prev) => {
      const newX = Math.max(0, Math.min(gridSize - 1, prev.x + dx));
      const newY = Math.max(0, Math.min(gridSize - 1, prev.y + dy));
      return { x: newX, y: newY };
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
          movePlayer(0, -1);
          break;
        case "ArrowDown":
        case "s":
          movePlayer(0, 1);
          break;
        case "ArrowLeft":
        case "a":
          movePlayer(-1, 0);
          break;
        case "ArrowRight":
        case "d":
          movePlayer(1, 0);
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="portfolio-container">
      <h1>Welcome, Adventurer</h1>
      <p>You have entered my portfolio dungeon.</p>
      <p>Use the arrow keys or WASD to navigate.</p>
      <div className="grid-container">
        {[...Array(gridSize * gridSize)].map((_, index) => {
          const x = index % gridSize;
          const y = Math.floor(index / gridSize);
          return (
            <div
              key={index}
              className={`grid-item ${playerPosition.x === x && playerPosition.y === y ? "player" : ""}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
