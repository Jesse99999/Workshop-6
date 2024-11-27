// Exercise 1
function getData() {
    const destination = document.getElementById("destination").value;
    const arrival = document.getElementById("arrival").value;

    const services = [];
    const checkboxes = document.querySelectorAll('#services input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        services.push(checkbox.value);
    });

    // Tallenna data localStorageen
    localStorage.setItem("destination", destination);
    localStorage.setItem("arrival", arrival);
    localStorage.setItem("services", JSON.stringify(services)); // Store as JSON string
}

// Exercise 2
window.onload = function() {
    const destination = localStorage.getItem("destination");
    const arrival = localStorage.getItem("arrival");
    const services = JSON.parse(localStorage.getItem("services"));

    
    if (destination && arrival) {
        document.getElementById("sessiondata").innerHTML = `
            <p>Destination: ${destination}</p>
            <p>Arrival Date: ${arrival}</p>
            <p>Services: ${services ? services.join(", ") : "None"}</p>
        `;
    }

    // Exercise 3: SessionStorage 
    const sessionDestination = sessionStorage.getItem("destination");
    const sessionArrival = sessionStorage.getItem("arrival");
    const sessionServices = JSON.parse(sessionStorage.getItem("services"));

    
    if (sessionDestination && sessionArrival) {
        document.getElementById("sessiondata").innerHTML += `
            <p><strong>Session Data:</strong></p>
            <p>Destination: ${sessionDestination}</p>
            <p>Arrival Date: ${sessionArrival}</p>
            <p>Services: ${sessionServices ? sessionServices.join(", ") : "None"}</p>
        `;
    }

}
