// code for goals.html

var input = 800;
var root;

$(document).ready(function () {
    $(".btn-group").click(function () {
    console.log('clicked');
	var disp =   $(event.target).find('input')[0].id;

	nodes = [];
	links = [];

	d3.select("svg").remove();
	canvas = null;
	tree = null;
	source = null;
	if (disp === "1") { loadRadial();}
		else if (disp === "2") {loadFlat();	}
		else {	loadCollapsible(); }
    });
});

/* Larger screens get expanded layer control */
if (document.body.clientWidth <= 767) {	var isCollapsed = true;}
else {	var isCollapsed = false;}

 function loadRadial(){
 	var radius = input / 2;  
   
	// create svg canvas area
	var canvas = d3.select("#canvas").append("svg")
		.attr("width", input)
		.attr("height", input)
		.append("g")
			.attr("transform", "translate("+radius+", "+radius+")");

	// Create a cluster layout (like a tree)" |"
	cluster = d3.layout.cluster()
		.size([360, radius - 120]);

	// create path
	var diagonal = d3.svg.diagonal.radial()
		.projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

	// node coordinates
	var nodes = cluster.nodes(cluster_data);

	// links need nodes for input has source and target
	var links = cluster.links(nodes);

	var link = canvas.selectAll("pathlink")
		.data(links)
		.enter().append("svg:path")
		.attr("class", "link")
		.attr("d", diagonal)

	var node = canvas.selectAll("g.node")
		.data(nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

	// append a circle to each node
	node.append("circle")
		.attr("r", 3.5);

	// append text to each node
	node.append("text")
		.attr("dx", function(d) { return d.x < 180 ? 8 : -8; })
		.attr("dy", ".31em")
		.attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
		.attr("transform", function(d) { return d.x < 180 ? null : "rotate(180)"; })
		.text(function(d) { return d.name ; });

	d3.select(self.frameElement).style("height", radius * 2 + "px");
}


function loadFlat(){
	var width = input;
	var height = input ;
   
	// create an svg canvas area
	var canvas = d3.select("#canvas").append("svg")
		.attr("width", width)
		.attr("height", height)
		.append("g")
			.attr("transform", "translate(40,0)");

	// Create a cluster layout (like a tree)" |"
	var cluster = d3.layout.cluster()
		 .size([height, width - 160]);

	// create path
	var diagonal = d3.svg.diagonal()
		.projection(function(d) { return [d.y, d.x]; });

	// node coordinates
	var nodes = cluster.nodes(cluster_data,name);

	// links need nodes for input has source and target
	var links = cluster.links(nodes);

	var link = canvas.selectAll("pathlink")
		.data(links)
		.enter().append("path")
		.attr("class", "link")
		.attr("d", diagonal)

	var node = canvas.selectAll("g.node")
		.data(nodes)
		.enter().append("g")
			.attr("class", "node")
			 .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

	// append a circle to each node
	node.append("circle")
		.attr("r", 3.5);

	// append text to each node
	node.append("text")
		.attr("dx", function(d) { return d.children ? -8 : 8; })
		.attr("dy", ".31em")
		.style("text-anchor", function(d) { return d.children ? "end" : "start"; })
		.text(function(d) { return d.name; });

	d3.select(self.frameElement).style("height", height + "px");
}

function toggleAll(d) {
	if (d.children) {
		d.children.forEach(toggleAll);
		toggle(d);
	}
}

// Toggle children.
function toggle(d) {
	if (d.children) {
		d._children = d.children;
		d.children = null;
	} else {
		d.children = d._children;
		d._children = null;
	}
}

