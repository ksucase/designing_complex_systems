function loadHolonic(){
 	var radius = 600  ; // / 2;  
 	var diameter = radius * 2.0,
        format = d3.format(",d");
    var svgWidth = radius * 2.0;
    var svgHeight = radius * 2.0;
    var diameter = radius * 2.0,
        format = d3.format(",d");
    
    var pack = d3.layout.pack()
        .size([diameter - 4, diameter - 4])
        .value(function(d) { 
            return d.size; 
          
        });

   
	// create svg canvas area
	var canvas = d3.select("#canvas").append("svg")
		.attr("width", svgWidth)
		.attr("height", svgHeight)
		.append("g")
		    .attr("transform", "translate(2,2)");
	
	// bring data into root
	root = hdata;
	
	var node = canvas.datum(root).selectAll("g.node")
       .data(pack.nodes)
       .enter().append("g")
            .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y +  ")"; })

	

	// append a circle for each node

	node.append("circle")
		.attr("r", function(d) { return d.r; });

	// append text to each node
	node.append("text")
		.attr("dx", function(d) { return d.x < 180 ? 8 : -8; })
		.attr("dy", ".31em")
		.attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
		.attr("transform", function(d) { return d.x < 180 ? null : "rotate(180)"; })
		.text(function(d) { return d.name ; });

	d3.select(self.frameElement).style("height", radius * 2 + "px");
}