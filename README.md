⏱ YouTube Video End Time Extension

A simple Chrome extension that displays the estimated finishing time of the currently playing YouTube video.
It adds a small overlay on the player showing when the video will end, updating live as the video plays.

✨ Features

Shows “Ends at: hh: mm AM/PM” based on the remaining video duration.
Updates in real time.
Overlay hides when YouTube controls disappear, and reappears when they are shown.
Works on all YouTube videos.

📦 Installation

Clone or download this repository.
git clone https://github.com/yourusername/youtube-end-time-extension.git
Open Chrome and go to chrome://extensions/.
Enable Developer mode (located in the top-right corner).
Click Load unpacked and select the project folder.
Open YouTube and play a video → the extension will show the estimated finish time.

📂 Project Structure
youtube-end-time-extension/
│── manifest.json        # Extension configuration
│── content.js           # Main logic (detects video & shows end time)
│── icon.png             # (Optional) Extension icon
│── README.md            # Documentation

⚙️ How It Works

Detects the <video> element on YouTube.
Calculates endTime = currentTime + remainingDuration.
Converts end time to 12-hour AM/PM format.
Displays it in a styled overlay.
Hides overlay when YouTube auto-hides controls.

🚀 Future Improvements
Add an option to show remaining time (e.g., “Ends in 12m 30s”).
Add an option to position the overlay inside the YouTube progress bar.
Support for other video platforms.
