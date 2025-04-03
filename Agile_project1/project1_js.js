//引入扇形图画图的链接Introduce a link for drawing fan-shaped graphs
google.charts.load('current', { 'packages': ['corechart'] });

// 成绩扇形图Score Fan Chart
function drawCharts1() {
    const data1 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['my grades', 85],
        ['remaining', 15],

    ]);

    const options1 = {
        title: 'My GPA during my undergraduate studies'
    };

    const chart1 = new google.visualization.PieChart(document.getElementById('myChart1'));
    chart1.draw(data1, options1);
}
function drawCharts2() {
    const data2 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['my grades', 70],
        ['remaining', 30],

    ]);

    const options2 = {
        title: 'My GPA during my postgraduate studies'
    };

    const chart2 = new google.visualization.PieChart(document.getElementById('myChart2'));
    chart2.draw(data2, options2);
}

function toggleCharts() {
    let chartsContainer = document.getElementById('chartsContainer');

    if (chartsContainer.style.display === 'none') {
        chartsContainer.style.display = 'flex';
        google.charts.setOnLoadCallback(drawCharts1);
        google.charts.setOnLoadCallback(drawCharts2);
        document.getElementById("toggleButton").textContent = "Hide my GPA Charts";
        
    } else {
        chartsContainer.style.display = 'none';
        document.getElementById("toggleButton").textContent = "Show my GPA Charts";
    }
}

//主要技能雷达图Main Skill Radar Chart
let ctx = document.getElementById('radarChart').getContext('2d');
let myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels:
            ['python', 'MySQL', 'C language',
            'Java', 'Excel'],
        datasets: [{
            label: 'Hard Power',
            data: [75, 82, 72, 75, 70],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 3,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointRadius: 5, // 数据点大小
            pointHoverRadius: 7, // 悬停时放大
        }]
    },
    options: {
        scale: {
            pointLabels: {
                fontSize: 16,
            }
        }
    }
});

//技能横向条形图Horizontal bar chart of skills
const xArray = [3, 4, 3.5, 3.5, 4.5];
const yArray = ["Leadership", "Creativity","Interaction","Decisiveness", "Adaptability"];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"h",
  marker: {color:'rgb(123, 181, 242)'}
}];

const layout = {title:"soft power"};

Plotly.newPlot("skillChart", data, layout);

