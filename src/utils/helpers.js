// src/utils/helpers.js

// Format time like "17:00" → "5:00 PM"
export function formatTime(timeString) {
  const [hour, minute] = timeString.split(":").map(Number);
  const ampm = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${formattedHour}:${minute.toString().padStart(2, "0")} ${ampm}`;
}

// Count completed tasks
export function countCompletedTasks(tasks) {
  return tasks.filter(task => task.completed).length;
}
