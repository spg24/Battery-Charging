let batteryLevel = 0;
let chargingInterval;

function startCharging() {
    if (chargingInterval) return; // Prevent multiple charging intervals

    chargingInterval = setInterval(() => {
        if (batteryLevel >= 100) {
            clearInterval(chargingInterval);
            chargingInterval = null;
            document.getElementById('batteryStatus').textContent = 'Battery Fully Charged!';
        } else {
            batteryLevel += 5;
            document.getElementById('batteryLevel').style.width = batteryLevel + '%';
            document.getElementById('batteryStatus').textContent = `Charging: ${batteryLevel}%`;
        }
    }, 500); // Adjust charging speed here
}
