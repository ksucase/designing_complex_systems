// code for index.html
// See http://bl.ocks.org/robschmuecker/7880033.

// Resizing..........
// http://eyeseast.github.io/visible-data/2013/08/26/responsive-d3/

var hwratio = 1.0;

var root;
var disp;

// advanced drawing
var totalNodes = 0;
var maxLabelLength = 0;
var selectedNode = null;
var draggingNode = null;
var panSpeed = 200;
var panBoundary = 20; // Within 20px from edges will pan when dragging.
var viewerWidth = $(document).width();
var viewerHeight = $(document).height();

$(document).ready(function () {
    $(".btn-group").click(function () {
    console.log('clicked');
	disp =   $(event.target).find('input')[0].id;

	nodes = [];
	links = [];

	d3.select("svg").remove();
	canvas = null;
	tree = null;
	source = null;
	if (disp === "1") { loadRadial();}
		else if (disp === "2") {loadFlat();	}
		else if (disp === "3") {loadHolonic();	}
		else {	loadCollapsible(); }
    });
});

/* Larger screens get expanded layer control */
if (document.body.clientWidth <= 767) {	var isCollapsed = true;}
else {	var isCollapsed = false;}

// RADIAL .................. RADIAL .................. RADIAL ..................

 function loadRadial(){
 	var radius = 600  ; // / 2;  
 	var diameter = radius * 2.0;
   
	// create svg canvas area
	var canvas = d3.select("#canvas").append("svg")
		.attr("width", diameter)
		.attr("height", diameter)
		.append("g")
			.attr("transform", "translate("+radius+", "+radius+")");

	// Create a cluster layout (like a tree)" |"
	var radialSpan_degrees = 360;
 	var treeRadius = 450; // radius - 160;
	cluster = d3.layout.cluster()
		.size([radialSpan_degrees, treeRadius]);

	// define a d3 diagonal projection for use by the node paths later
	var diagonal = d3.svg.diagonal.radial()
		.projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

	// node coordinates
	var nodes = cluster.nodes(topology);

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
	var nodeRadius = 4.0;
	node.append("circle")
		.attr("r", nodeRadius);

	// append text to each node
	node.append("text")
		.attr("dx", function(d) { return d.x < 180 ? 8 : -8; })
		.attr("dy", ".31em")
		.attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
		.attr("transform", function(d) { return d.x < 180 ? null : "rotate(180)"; })
		.text(function(d) { return d.name ; });

	d3.select(self.frameElement).style("height", diameter + "px");
}

// FLAT .................. FLAT ..................FLAT ..................

function loadFlat(){

	var width = 1200;  // needs to  be wide enough that node names are not compressed
	var height = 4850; // needs to be tall enough that node names are not compressed/too spread out
   
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
	var nodes = cluster.nodes(topology,name);

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
	var nodeRadius = 3.5;
	node.append("circle")
		.attr("r", nodeRadius);

	// append text to each node
	node.append("text")
		.attr("dx", function(d) { return d.children ? -8 : 8; })
		.attr("dy", ".31em")
		.style("text-anchor", function(d) { return d.children ? "end" : "start"; })
		.text(function(d) { return d.name; });

	d3.select(self.frameElement).style("height", height + "px");
}

// HOLONIC .................. HOLONIC .................. HOLONIC ..................
function loadHolonic(){

 	var holonicRadius = 600  ; // / 2;  
 	var holonicDiameter = holonicRadius * 2.0;
    var holonicMargin = 20.0;
    
    //http://www.w3.org/TR/SVG/types.html#ColorKeywords
    
    var color = d3.scale.linear()
    .domain([-1, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl);
    
    var pack = d3.layout.pack()
        .padding(2)
        .size([holonicDiameter - holonicMargin, holonicDiameter - holonicMargin])
        .value(function(d) { 
            if (d.type === "H") return 6;
            if (d.type === "N") return 25;
            if (d.type === "L") return 50;
            if (d.type === "F") return 70;
            return d.size;         
        });
   
	// create svg canvas area
	var svg = d3.select("#canvas").append("svg")
		.attr("width", holonicDiameter)
		.attr("height", holonicDiameter)
		.append("g")
		   .attr("transform", "translate(" + holonicDiameter / 2 + "," + holonicDiameter / 2 + ")");
	
	// bring data into root
	hroot = holarchy;
	
	 var focus = hroot;
     var hnodes = pack.nodes(hroot);
     var view;
     
	var circle = svg.selectAll("circle")
            .data(hnodes)
        .enter().append("circle")
            .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
            .style("fill", function(d) { return d.children ? color(d.depth) : null; })
            .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

    var text = svg.selectAll("text")
            .data(hnodes)
        .enter().append("text")
	        .style("fill-opacity", function(d) { return d.parent === hroot ? 1 : 0; })   // changed first arg to 0 also
	        .style("display", function(d) { return d.parent === hroot ? null : "none"; }) // changed from none to inline
	        .text(function(d) { return d.name; }); 
     
     var hnode = svg.selectAll("circle,text");   
     
     d3.select("#canvas")
        .on("click", function() {  zoom(hroot); });

    zoomTo([hroot.x, hroot.y, hroot.r * 2 + holonicMargin]); 
    
    function zoom(d) {
        var focus0 = focus; focus = d;
	
        var packTransition = d3.transition()
		     //   .duration(d3.event.altKey ? 7500 : 750)
		        .duration(d3.event.altKey ? 5000 : 500)
		        .tween("zoom", function(d) {
		          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + holonicMargin]);
		          return function(t) { zoomTo(i(t)); };
		        });
	
		packTransition.selectAll("text")
	            .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
			        .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 1; })
			        .each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
			        .each("end",   function(d) { if (d.parent !== focus) this.style.display = "inline"; });  // changed from none to always show
		 
    }

  function zoomTo(v) {
    var k = holonicDiameter / v[2]; view = v;
    hnode.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
    circle.attr("r", function(d) { return d.r * k; });
  }
	d3.select(self.frameElement).style("height", holonicDiameter + "px");
	
}  // end loadHolonic

// Toggle all.
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

// functions from http://bl.ocks.org/robschmuecker/7880033

function pan(domNode, direction) {
	var speed = panSpeed;
	if (panTimer) {
		clearTimeout(panTimer);
		translateCoords = d3.transform(svgGroup.attr("transform"));
		if (direction == 'left' || direction == 'right') {
			translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
			translateY = translateCoords.translate[1];
		} else if (direction == 'up' || direction == 'down') {
			translateX = translateCoords.translate[0];
			translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
		}
		scaleX = translateCoords.scale[0];
		scaleY = translateCoords.scale[1];
		scale = zoomListener.scale();
		svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
		d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
		zoomListener.scale(zoomListener.scale());
		zoomListener.translate([translateX, translateY]);
		panTimer = setTimeout(function() {
			pan(domNode, speed, direction);
		}, 50);
	}
}

 // Define the zoom function for the zoomable tree

function zoom() {
	svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}

// A recursive helper function for performing some setup by walking through all nodes

function visit(parent, visitFn, childrenFn) {
	if (!parent) return;
	visitFn(parent);
	var children = childrenFn(parent);
	if (children) {
		var count = children.length;
		for (var i = 0; i < count; i++) {
			visit(children[i], visitFn, childrenFn);
		}
	}
}
 // Helper functions for collapsing and expanding nodes.

function collapse(d) {
	if (d.children) {
		d._children = d.children;
		d._children.forEach(collapse);
		d.children = null;
	}
}

function expand(d) {
	if (d._children) {
		d.children = d._children;
		d.children.forEach(expand);
		d._children = null;
	}
}
// Function to update the temporary connector indicating dragging affiliation
    var updateTempConnector = function() {
        var data = [];
        if (draggingNode !== null && selectedNode !== null) {
            // have to flip the source coordinates since we did this for the existing connectors on the original tree
            data = [{
                source: {
                    x: selectedNode.y0,
                    y: selectedNode.x0
                },
                target: {
                    x: draggingNode.y0,
                    y: draggingNode.x0
                }
            }];
        }
        var link = svgGroup.selectAll(".templink").data(data);

        link.enter().append("path")
            .attr("class", "templink")
            .attr("d", d3.svg.diagonal())
            .attr('pointer-events', 'none');

        link.attr("d", d3.svg.diagonal());

        link.exit().remove();
    };

// Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

    function centerNode(source) {
        scale = zoomListener.scale();
        x = -source.y0;
        y = -source.x0;
        x = x * scale + viewerWidth / 2;
        y = y * scale + viewerHeight / 2;
        d3.select('g').transition()
            .duration(duration)
            .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
        zoomListener.scale(scale);
        zoomListener.translate([x, y]);
    }
