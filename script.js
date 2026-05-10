/* SAMPLE DATA */
const data = {
    years: [2018, 2019, 2020, 2021, 2022],
    population: [100, 110, 125, 140, 160],
    male: 80,
    female: 80,
    growth: "5.2%",
    literacy: 78,
    employment: 65
};

/* FILL DROPDOWNS */
const yearSelect = document.getElementById("year");
data.years.forEach(y => {
    let opt = document.createElement("option");
    opt.text = y;
    yearSelect.add(opt);
});

/* SUMMARY */
document.getElementById("totalPop").innerText = "160M";
document.getElementById("malePop").innerText = "80M";
document.getElementById("femalePop").innerText = "80M";
document.getElementById("growth").innerText = data.growth;
document.getElementById("literacy").innerText = data.literacy;
document.getElementById("employment").innerText = data.employment;

/* LINE CHART */
new Chart(lineChart, {
    type: "line",
    data: {
        labels: data.years,
        datasets: [{
            label: "Population",
            data: data.population,
            tension: 0.4
        }]
    }
});

/* BAR */
new Chart(barChart, {
    type: "bar",
    data: {
        labels: ["0-14", "15-30", "30-60", "60+"],
        datasets: [{
            data: [30, 50, 60, 20]
        }]
    }
});

/* PIE */
new Chart(pieChart, {
    type: "pie",
    data: {
        labels: ["Male", "Female"],
        datasets: [{
            data: [50, 50]
        }]
    }
});

/* URBAN */
new Chart(urbanChart, {
    type: "doughnut",
    data: {
        labels: ["Urban", "Rural"],
        datasets: [{
            data: [60, 40]
        }]
    }
});

/* MAP */
let map = L.map('map').setView([20.5937, 78.9629], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([28.6139, 77.2090]).addTo(map)
    .bindPopup("Delhi Population: 19M");

/* SEARCH */
document.getElementById("search").addEventListener("input", (e) => {
    console.log("Searching:", e.target.value);
});