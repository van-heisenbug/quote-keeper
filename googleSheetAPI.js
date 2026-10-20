//

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbyALQM8So_kycoMdYNpvt4wEuhNz03hnhJBOgTeL-BBIiYUYke39AhtmHlu0Rvo_qyr/exec";

export async function fetchSheetData() {
  try {
    const response = await fetch(WEB_APP_URL);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("data-container").innerText =
      "Failed to load data.";
  }
}

export async function writeDataToSheet(data) {
  try {
    // Send the POST request
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      mode: "cors", // Explicitly handle cross-origin requests
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
        // Note: Using 'text/plain' bypasses aggressive CORS preflight checks
        // which Apps Script Web Apps handle much better natively.
      },
      body: JSON.stringify(data), // # My payload.
    });

    const result = await response.json();

    if (result.status === "success") {
      console.log("Success");
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Submission error:", error);
  } finally {
    // Re-enable button
  }
}
