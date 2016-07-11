var dataArray = [20, 40, 80, 79, 50];
var width = 500;
var height = 500;

d3.csv('data.csv', function(data){


var widthScale = d3.scale.linear()
					.domain([0, 80])
					.range([0, 500]);

var axis = d3.svg.axis()
			.ticks('8')
			.scale(widthScale);

var colorScale = d3.scale.linear().domain([0, 80]).range(["#000000", "#cccccc"]);

var canvas = d3.select("body")
				.append('svg')
				.attr('width', width)
				.attr('height', width)
				.append("g")
				.attr("transform", "translate(20, 0)");

var bars = canvas.selectAll('rect')
					.data(data)
						.enter()
							.append('rect')
							.attr('width', function(d) { return widthScale(d.age); })
							.attr('height', 48)
							.attr('fill', function(d){ return colorScale(d.age); })
              				.attr('y', function(d, i){ return 50 * i;});


	
canvas.selectAll('text')
		.data(data)
		.enter()
			.append('text')
			.attr('fill', 'white')
			.attr('y', function(d, i){ return 50 * i + 27;})
			.attr('transform','translate(10,0)')
			.text(function(d){ return d.name;})
			
	canvas.append('g')
		.attr("transform", "translate(0, 450)")
		.call(axis);
	}); 

//line

var canvas1 = d3.select('body').append('svg')
				.attr('width', 500)
				.attr('height',500);

data1 = [
	{x:10,y:20},
	{x:100,y:150},
	{x:200,y:250}
]

var group = canvas1.append('g')
			.attr('transform', 'translate(150,150)');

var line = d3.svg.line()
			.x(function(d){ return d.x;})
			.y(function(d){ return d.y;});

var r = 100;
var p = Math.PI *2;


var arc = d3.svg.arc()
		.innerRadius(r-40)
		.outerRadius(r)
		.startAngle(0)
		.endAngle(p);

	group.append('path')
				.attr("d", arc)
				