// Display Date and Time
function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = now.toLocaleString();
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call

// Mobile Device Detection
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    alert("Please visit this site on a PC for the best experience.");
    document.body.innerHTML = "<h1 style='text-align: center; margin-top: 50vh;'>Please use a PC to access this website.</h1>";
}

console.log('API Response:', data); // Existing log

if (data.error) {
  console.error('API Error:', data.error);
  return `Error: ${data.error.message || 'Unknown error occurred.'}`;
}
