const years = Object.keys(sampleData); // getting years as keys of sampleData
const data = Object.values(sampleData); // data as values of sampleData

const horozontalChartDetails = {
    type: 'bar', // type defines which chart need to draw
    data: {
      labels: years,
      datasets: [
          {
            axis: 'y',
            label: "NYC Water Consumption (Millions gallons per day)",
            data: data,
            backgroundColor: [ 'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.6)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.5)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.3)'], // adding random colors
            borderWidth: 1
          },    
        ]
    },

    options: {
        indexAxis: 'y',
      }
  }

  const doughnutChartDetails = {
    type: 'doughnut',
    data: {
      labels: years,
      datasets: [
          {
            label: "NYC Water Consumption By Year",
            data: data,
            backgroundColor: ['rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.34)',
            'rgba(54, 162, 235, 0.84)',
            'rgba(153, 102, 255, 0.68)',
            'rgba(201, 203, 207, 0.6)',
            'rgba(255, 159, 64, 0.65)',
            'rgba(255, 205, 86, 0.52)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.36)'], // adding random colors
            borderWidth: 1
          },    
          ]
    },

    options: {
        title: {
            display: true,
            text: 'Doughnut Chart'
        },
        legend: { // if true will display legends
            display: true
        },
        tooltips: { // if true will display tooltips
            enabled: true
        },
    }
  }

  

  const barChart = document.getElementById('chartJSContainer').getContext('2d');

  const doughnut = document.getElementById('doughnutChartContainer').getContext('2d');

  const myHorizontalChart = new Chart(barChart, horozontalChartDetails);

  const myDoughnutChart = new Chart(doughnut, doughnutChartDetails)