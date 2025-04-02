// Initialize Google Map
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -1.1659, lng: 36.8356 }, // Kiambu County Coordinates
        zoom: 10
    });

    // Fetch hospital data from database
    fetch("fetch_hospitals.php")
        .then(response => response.json())
        .then(data => {
            let hospitalList = document.getElementById("hospitalList");

            data.forEach(hospital => {
                // Create list item
                let li = document.createElement("li");
                li.textContent = `${hospital.name} - ${hospital.location}`;
                hospitalList.appendChild(li);

                // Add marker on Google Map
                let marker = new google.maps.Marker({
                    position: { lat: parseFloat(hospital.latitude), lng: parseFloat(hospital.longitude) },
                    map: map,
                    title: hospital.name
                });
            });
        });
}

// Search hospitals
function searchHospitals() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let hospitals = document.querySelectorAll("#hospitalList li");

    hospitals.forEach(hospital => {
        if (hospital.textContent.toLowerCase().includes(input)) {
            hospital.style.display = "block";
        } else {
            hospital.style.display = "none";
        }
    });
                  }
