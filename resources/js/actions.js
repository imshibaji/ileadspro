(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const trackingEndpoint = "https://your-tracking-server.com/track"; // Replace with your tracking URL
        let idleTimer, userActive = true;

        // 📌 Function to send tracking data
        function sendTrackingData(eventType, eventData = {}) {
            let trackingData = {
                eventType: eventType,
                eventData: eventData,
                url: window.location.href,
                timestamp: new Date().toISOString()
            };

            console.log("Tracking Event:", trackingData); // Debugging

            fetch(trackingEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(trackingData)
            }).catch(error => console.error("Tracking Error:", error));
        }

        // 📍 Track Page Views
        sendTrackingData("page_view", { referrer: document.referrer });

        // 🎯 Track Button Clicks (Customizable)
        document.body.addEventListener("click", function (event) {
            if (event.target.matches("button, .track-button")) { // Track all buttons or class-based
                sendTrackingData("button_click", { buttonText: event.target.innerText });
            }
        });

        // 🔗 Track Link Clicks
        document.body.addEventListener("click", function (event) {
            if (event.target.tagName === "A") {
                let link = event.target.href;
                sendTrackingData("link_click", { link });
            }
        });

        // 📝 Track Form Submissions
        document.body.addEventListener("submit", function (event) {
            if (event.target.matches("form")) {
                event.preventDefault();
                let formData = new FormData(event.target);
                let formObj = {};
                formData.forEach((value, key) => { formObj[key] = value; });

                sendTrackingData("form_submission", formObj);

                setTimeout(() => event.target.submit(), 500); // Delay submission
            }
        });

        // 📊 Track Scroll Depth
        window.addEventListener("scroll", function () {
            let scrollPercent = Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);
            if (scrollPercent % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                sendTrackingData("scroll_depth", { percentage: scrollPercent });
            }
        });

        // 🖱️ Track Mouse Movements (User Active/Idle Detection)
        function resetIdleTimer() {
            if (!userActive) {
                sendTrackingData("user_active", { message: "User returned" });
                userActive = true;
            }
            clearTimeout(idleTimer);
            idleTimer = setTimeout(() => {
                sendTrackingData("user_idle", { message: "User is idle" });
                userActive = false;
            }, 60000); // Idle after 60 sec
        }
        ["mousemove", "keydown", "scroll", "click"].forEach(event => document.addEventListener(event, resetIdleTimer));
        resetIdleTimer(); // Start timer

    });
})();
