console.log("🚀 content.js loaded!");

// Wait until the video element exists
function initOverlay() {
  const video = document.querySelector("video");
  const player = document.querySelector(".html5-video-player");

  if (video && player) {
    console.log("✅ Found video & player, adding overlay...");

    // If label not already added
    if (!document.getElementById("end-time-label")) {
      const label = document.createElement("div");
      label.id = "end-time-label";
      label.style.cssText = `
        position: absolute;
        bottom: 60px;
        left: 20px;
        font-size: 16px;
        font-weight: bold;
        color: white;
        background: rgba(0,0,0,0.5);
        padding: 4px 8px;
        border-radius: 6px;
        z-index: 999999 !important;
        transition: opacity 0.3s ease;
      `;
      player.appendChild(label);

      // Update time left every second
      setInterval(() => {
        if (video.duration && !isNaN(video.duration)) {
          const timeLeft = video.duration - video.currentTime;
          const endTime = new Date(Date.now() + timeLeft * 1000);
          const endStr = endTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
          });
          label.innerText = `⏱ Ends at: ${endStr}`;
        }

        // Show only when controls are visible
        if (player.classList.contains("ytp-autohide")) {
          label.style.opacity = "0";
        } else {
          label.style.opacity = "1";
        }
      }, 1000);
    }
  } else {
    console.log("⏳ Waiting for video/player...");
    setTimeout(initOverlay, 1000);
  }
}

initOverlay();
