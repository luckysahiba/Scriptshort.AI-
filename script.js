
async function generateScript() {
  const topic = document.getElementById("topicInput").value.trim();
  if (!topic) {
    alert("Please enter a topic.");
    return;
  }
  document.getElementById("output").textContent = "⏳ Generating...";

  // Simulated output for demo
  setTimeout(() => {
    document.getElementById("output").textContent =
      "🎬 Title: " + topic + " | Viral Shorts\n" +
      "📝 Description: Watch this amazing shorts on " + topic + "!\n" +
      "📜 Script: Are you ready for " + topic + "? Stay tuned, swipe up!";
  }, 1500);
}
