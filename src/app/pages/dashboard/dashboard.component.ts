import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Choice } from 'app/models/choice';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';
import { Feedback } from 'app/models/feedback';
import { Restaurant } from 'app/models/restaurant';
import { Kobiton } from 'protractor/built/driverProviders';
import { Donate } from 'app/models/donate';
import { element } from 'protractor';

@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  public canvas: any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  public LabelsArr = [];
  public dataArr = [];
  public feedArr = [];
  public ratingfeedArr = [];
  public Restarr = [];
  public visitors = [];
  public timer: number = 0;

  public count: number = 0;
  public accessed: number = 0;

  public MoneyFlow: number = 0;
  barchart: any;
  names: any;
  Player: any;
  Run: any;
  donArr = [];
  max: number = 0;
  constructor(public http: HttpClient) {

    setTimeout(() => {
      this.num = this.num + 1;
    }, 1000);
  }
  public num: number = 0;
  public helpers: number = 0;

  donaters() {
    console.log("Counting Helpers" + this.helpers);
  }

  top = []; topdata = [];
  f(a = [], b = []) {
    this.chartColor = "#FFFFFF";
    console.log("popo::::" + a[0]);
    this.canvas = document.getElementById("chartHours");
    this.ctx = this.canvas.getContext("2d");
    //b.forEach(element => {
    // this.revenue=this.revenue+element;
    //console.log("UUUUUUUUUUUUUUUUUUUUUUUURevenue"+this.revenue);
    //});
    b.forEach(element => {
      this.max = this.max > element ? this.max : element;

      console.log("U in Max matching" + this.max);
    });
    b.forEach(element => {
      this.topdata.push(element > this.max / 2 ? element : this.max / 2);
      
    });

    console.log("UUUUUUUUUUUUUUUUUUUUUUUURevenue" + this.max);

    this.chartHours = new Chart(this.ctx, {
      type: 'line',

      data: {
        labels: [a[a.length-1],a[a.length-2],a[a.length-3],a[a.length-4]],
        datasets: [{
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [b[b.length-1], b[b.length-2], b[b.length-3], b[b.length-4]]
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: []},            {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [this.max,this.max/2,this.max/3,this.max/4]
        }
        ]
      },
      options: {
        legend: {
          display: false
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              fontColor: "#9f9f9f",
              beginAtZero: false,
              maxTicksLimit: 5,
              //padding: 20
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "#ccc",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent",
              display: false,
            },
            ticks: {
              padding: 20,
              fontColor: "#9f9f9f"
            }
          }]
        },
      }
    });






  }
  o(a = [], b = []) {
    var speedCanvas = document.getElementById("speedChart");

    var dataFirst = {
      data: [b[0], b[1], b[2], b[3]],
      fill: false,
      borderColor: '#fbc658',
      backgroundColor: 'transparent',
      pointBorderColor: '#fbc658',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    };

    var dataSecond = {
      data: [b[0] + (0.1 * b[0]), b[1] + (0.2), b[2] * (1.3), b[3] * (0.7 * b[3])],
      fill: false,
      borderColor: '#51CACF',
      backgroundColor: 'transparent',
      pointBorderColor: '#51CACF',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };

    var speedData = {
      labels: [a[0], a[1], a[2], a[3], a[4]],
      datasets: [dataFirst, dataSecond]
    };

    var chartOptions = {
      legend: {
        display: false,
        position: 'top'
      }
    };

    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      hover: false,
      data: speedData,
      options: chartOptions
    });
  }

  g(a = [], b = []) {
    this
    this.barchart = new Chart('canvas2', {
      type: 'polarArea',
      data: {
        heading: a,
        labels: a,
        datasets: [
          {
            data: b,
            borderColor: '#3cba9f',
            backgroundColor: [
              "#fdcc0d",
              "#20ff41",
              "#11a7ae",
              "#2a5d38",
              "#7687e1",
              "#dd9277",
              "#ff2052",
              "pink",
              "blue",
              "violet",
              "purple"
            ],
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });




  }
  l(a = [], b = []) {


    this
    this.barchart = new Chart('canvas', {
      type: 'bar',
      data: {
        heading: a,
        labels: a,
        datasets: [
          {
            data: b,
            borderColor: '#3cba9f',
            backgroundColor: [
              "#fdcc0d",
              "#20ff41",
              "#11a7ae",
              "#2a5d38",
              "#7687e1",
              "#dd9277",
              "#ff2052",
              "pink",
              "blue",
              "violet",
              "purple"
            ],
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });



  }

  ngOnInit() {


    setInterval(() => {
      this.num = this.num + 1;
    }, 1000);
    this.http.get("http://localhost:8000/api/donate").subscribe((result: Feedback[]) => {
      result.forEach(x => {
        this.donArr.push("Count");
        this.helpers++;
      });
    });



    console.log("YYYYYYYYY" + this.LabelsArr);
    this.http.get("http://localhost:8000/api/order").subscribe((result: Choice[]) => {
      result.forEach(x => {
        this.LabelsArr.push(x.name);
        this.MoneyFlow += x.bill;
        this.count += 1;
        this.dataArr.push(x.bill);
        console.log("XXXXXXXXXXXXXXX" + this.LabelsArr);
        this.f(this.LabelsArr, this.dataArr);
        console.log("CAlling l" + this.dataArr)
        this.l(this.LabelsArr, this.dataArr);
        console.log("Called l")
      });
    });
    console.log("Fetching" + this.feedArr);
    console.log("YYYYYYYYY" + this.ratingfeedArr);
    this.http.get("http://localhost:8000/api/feedback/allfeeds").subscribe((result: Feedback[]) => {
      result.forEach(x => {
        this.feedArr.push(x.name);
        this.ratingfeedArr.push(x.rating);
        console.log("feedback se-->" + this.feedArr);
        this.g(this.feedArr, this.ratingfeedArr);
      });
    });
    //Restaurant
    this.http.get("http://localhost:8000/api/restaurant").subscribe((result: Restaurant[]) => {
      result.forEach(x => {
        this.Restarr.push(x.name);
        this.visitors.push(x.accessed);
        this.accessed = this.accessed + x.accessed;
        console.log("feedback se-->" + this.feedArr);
        this.o(this.Restarr, this.visitors);
      });
    });



    this.donaters();
    /*
console.log("XXXXXXXXXXXXXXX"+this.LabelsArr);

    console.log("XXXXXX---After fetching---XXXXXXXXX"+this.LabelsArr);
    console.log("XXXXXXX----After label fetching----XXXXXXXX"+this.dataArr);
    

    this.chartColor = "#FFFFFF";

    this.canvas = document.getElementById("chartHours");
    this.ctx = this.canvas.getContext("2d");

    this.chartHours = new Chart(this.ctx, {
      type: 'line',

      data: {
        labels: [this.LabelsArr],
        datasets: [{
            borderColor: "#6bd098",
            backgroundColor: "#6bd098",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: [this.dataArr]
          },
          console.log(this.dataArr),
            
          {
            borderColor: "#f17e5d",
            backgroundColor: "#f17e5d",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: [this.dataArr]},
          {
            borderColor: "#fcc468",
            backgroundColor: "#fcc468",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: [this.dataArr]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              fontColor: "#9f9f9f",
              beginAtZero: false,
              maxTicksLimit: 5,
              //padding: 20
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "#ccc",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent",
              display: false,
            },
            ticks: {
              padding: 20,
              fontColor: "#9f9f9f"
            }
          }]
        },
      }
    });

  });
   

   
this.f();

console.log("After being called------->"+this.LabelsArr);
*/




    this.g(this.LabelsArr, this.dataArr);

  }


  /*import { Component, OnInit } from '@angular/core';
  import Chart from 'chart.js';
  
  
  @Component({
      selector: 'dashboard-cmp',
      moduleId: module.id,
      templateUrl: 'dashboard.component.html'
  })
  
  export class DashboardComponent implements OnInit{
  
    public canvas : any;
    public ctx;
    public chartColor;
    public chartEmail;
    public chartHours;
  
      ngOnInit(){
  
  
  
  
  
  
  
  
  
  
  
  
        
        this.chartColor = "#FFFFFF";
  
        this.canvas = document.getElementById("chartHours");
        this.ctx = this.canvas.getContext("2d");
  
        this.chartHours = new Chart(this.ctx, {
          type: 'line',
  
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
            datasets: [{
                borderColor: "#6bd098",
                backgroundColor: "#6bd098",
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 3,
                data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
              },
              {
                borderColor: "#f17e5d",
                backgroundColor: "#f17e5d",
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 3,
                data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
              },
              {
                borderColor: "#fcc468",
                backgroundColor: "#fcc468",
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 3,
                data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
  
            tooltips: {
              enabled: false
            },
  
            scales: {
              yAxes: [{
  
                ticks: {
                  fontColor: "#9f9f9f",
                  beginAtZero: false,
                  maxTicksLimit: 5,
                  //padding: 20
                },
                gridLines: {
                  drawBorder: false,
                  zeroLineColor: "#ccc",
                  color: 'rgba(255,255,255,0.05)'
                }
  
              }],
  
              xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(255,255,255,0.1)',
                  zeroLineColor: "transparent",
                  display: false,
                },
                ticks: {
                  padding: 20,
                  fontColor: "#9f9f9f"
                }
              }]
            },
          }
        });
  
  
        this.canvas = document.getElementById("chartEmail");
        this.ctx = this.canvas.getContext("2d");
        this.chartEmail = new Chart(this.ctx, {
          type: 'pie',
          data: {
            labels: [1, 2, 3],
            datasets: [{
              label: "Emails",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: [
                '#e3e3e3',
                '#4acccd',
                '#fcc468',
                '#ef8157'
              ],
              borderWidth: 0,
              data: [342, 480, 530, 120]
            }]
          },
  
          options: {
  
            legend: {
              display: false
            },
  
            pieceLabel: {
              render: 'percentage',
              fontColor: ['white'],
              precision: 2
            },
  
            tooltips: {
              enabled: false
            },
  
            scales: {
              yAxes: [{
  
                ticks: {
                  display: false
                },
                gridLines: {
                  drawBorder: false,
                  zeroLineColor: "transparent",
                  color: 'rgba(255,255,255,0.05)'
                }
  
              }],
  
              xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(255,255,255,0.1)',
                  zeroLineColor: "transparent"
                },
                ticks: {
                  display: false,
                }
              }]
            },
          }
        });
  
        var speedCanvas = document.getElementById("speedChart");
  
        var dataFirst = {
          data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
          fill: false,
          borderColor: '#fbc658',
          backgroundColor: 'transparent',
          pointBorderColor: '#fbc658',
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
        };
  
        var dataSecond = {
          data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
          fill: false,
          borderColor: '#51CACF',
          backgroundColor: 'transparent',
          pointBorderColor: '#51CACF',
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8
        };
  
        var speedData = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [dataFirst, dataSecond]
        };
  
        var chartOptions = {
          legend: {
            display: false,
            position: 'top'
          }
        };
  
        var lineChart = new Chart(speedCanvas, {
          type: 'line',
          hover: false,
          data: speedData,
          options: chartOptions
        });
      }
  }
   */
}