// var Chart = require("chart.js");

window.onload = function() {
  console.log("onload");
  Chart.defaults.radar.fill = false;

  Chart.defaults.global.elements.line.borderWidth = 1;

  var ctx1 = document.getElementById("celfChart");
  var myChart = new Chart(ctx1, {
    type: "radar",
    data: {
      labels: [
        "ZB",
        "WS",
        "AW",
        "BAV",
        "ZH",
        "EC",
        "WC-R",
        "WC-E",
        "WC-T",
        "ZHC",
        "FB"
      ],
      datasets: [
        {
          label: "gemiddeld",
          data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
          fill: false,
          backgroundColor: "transparent",
          borderColor: "lightblue",
          borderWidth: 1
        },
        {
          label: "min",
          data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
          fill: false,
          backgroundColor: "transparent",
          borderColor: "yellow",
          borderWidth: 1
        },
        {
          label: "max",
          data: [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
          fill: false,
          backgroundColor: "transparent",
          borderColor: "yellow",
          borderWidth: 1
        },
        {
          label: "19-03-2018",
          data: [5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0],
          fill: false,
          backgroundColor: "transparent",
          borderColor: "red",
          borderWidth: 4
        },
        {
          label: "16-07-2018",
          data: [9, 8, 6, 7, 5, 0, 8, 10, 10, 7, 6],
          fill: false,
          backgroundColor: "transparent",
          borderColor: "green",
          borderWidth: 4
        }
      ]
    },
    options: {
      scale: {
        gridLines: {
          circular: true,
          lineWidth: [0.3]
        }
      },
      responsive: true,
      lineWidth: 7,
      legend: {
        labels: {
          filter: function(legendItem, chartData) {
            // return true or false based on legendItem's datasetIndex (legendItem.datasetIndex)
            switch (legendItem.text) {
              case "gemiddeld":
              case "min":
              case "max":
                return false;

                break;
              default:
                return true;
            }
          }
        }
      }
    }
  });

  var data1 = {
    label: "19-03-2018",
    data: [5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    backgroundColor: "red",
    borderColor: "red",
    yAxisID: "y-axis"
  };

  var data2 = {
    label: "16-07-2018",
    data: [9, 8, 6, 7, 5, 0, 8, 10, 10, 7, 6],
    backgroundColor: "green",
    borderColor: "green",
    yAxisID: "y-axis",
    fill: false
  };
  var data3 = {
    label: "gemiddeld",
    data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    backgroundColor: "lightblue",
    borderColor: "lightblue",
    yAxisID: "y-axis",
    type: "line",
    fill: false,
    pointRadius: 0
  };
  var data4 = {
    label: "min",
    data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    backgroundColor: "yellow",
    borderColor: "yellow",
    yAxisID: "y-axis",
    type: "line",
    fill: false,
    pointRadius: 0
  };
  var data5 = {
    label: "max",
    data: [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
    backgroundColor: "yellow",
    borderColor: "yellow",
    yAxisID: "y-axis",
    type: "line",
    fill: false,
    pointRadius: 0
  };

  var planetData = {
    labels: [
      "ZB",
      "WS",
      "AW",
      "BAV",
      "ZH",
      "EC",
      "WC-R",
      "WC-E",
      "WC-T",
      "ZHC",
      "FB"
    ],
    datasets: [data1, data2, data3, data4, data5]
  };

  var chartOptions = {
    scales: {
      xAxes: [
        {
          barPercentage: 0.4,
          categoryPercentage: 0.5
        }
      ],
      yAxes: [
        {
          id: "y-axis"
        }
      ]
    },
    legend: {
      labels: {
        filter: function(legendItem, chartData) {
          // return true or false based on legendItem's datasetIndex (legendItem.datasetIndex)
          switch (legendItem.text) {
            case "gemiddeld":
            case "min":
            case "max":
              return false;

              break;
            default:
              return true;
          }
        }
      }
    }
  };

  var ctx2 = document.getElementById("celfChart2");
  var myChart2 = new Chart(ctx2, {
    type: "bar",
    data: planetData,
    options: chartOptions
  });
};
