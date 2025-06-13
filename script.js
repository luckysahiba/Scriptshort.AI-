
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
}const SUPABASE_URL =https://pliebcpyhnozajwzysog.supabase.co
const SUPABASE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsaWViY3B5aG5vemFqd3p5c29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3OTU0ODYsImV4cCI6MjA2NTM3MTQ4Nn0.z3kYwGJ5jJB4JwbsG8qn-rYd4UzEza5NBCBZaZvcGdA
