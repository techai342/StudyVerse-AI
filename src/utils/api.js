// src/utils/api.js

// Function to call the AI API you shared
export async function fetchAIResponse(question) {
  try {
    const response = await fetch(`https://api.nekolabs.web.id/ai/ai4chat?text=${encodeURIComponent(question)}`);
    const data = await response.json();
    
    if (data.success) {
      return data.result;
    } else {
      return "Sorry, AI could not respond.";
    }
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Error connecting to AI API.";
  }
}
