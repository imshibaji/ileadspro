(function () {
    window.cid = function(id){
        window.gid = id;
    }
    document.addEventListener("DOMContentLoaded", function () {
        const trackingUrl = "http://localhost:8000/api/tracker";
        const form = document.querySelector("form"); // Target form by ID

        if (!form) {
            console.warn("No form with ID 'leadForm' found on this page.");
            return;
        }

        // Function to get GID from URL parameters
        function getGID() {
            // const urlParams = new URLSearchParams(window.location.search);
            // if(urlParams.get("gid")) return urlParams.get("gid"); // Fallback if no GID found

            const gid = window.gid;
            if(gid) return gid;
            return null;
        }

        // Store GID in a hidden field if needed
        let gid = getGID();
        if(gid){
            let hiddenInput = document.createElement("input");
            hiddenInput.type = "hidden";
            hiddenInput.name = "gid";
            hiddenInput.value = gid;
            form.appendChild(hiddenInput); // Attach hidden field to form

            form.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent default form submission

                let formData = new FormData(form);
                let data = {};

                // Convert FormData to JSON
                formData.forEach((value, key) => {
                    data[key] = value;
                });

                console.log("Captured Lead Data:", data); // Debugging purpose

                // Send data to another website (your tracking system)
                fetch(trackingUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(result => {
                    console.log("Lead data sent successfully:", result);
                    // alert("Form submitted successfully!");
                    form.reset(); // Reset form after submission
                })
                .catch(error => {
                    console.error("Error sending lead data:", error);
                    // alert("Error submitting the form. Please try again.");
                });
            });
        }
    });
})();
