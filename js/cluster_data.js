//JSON object containing data

var cluster_data = 
	{"name" : "S1", "info" : "illustration", "children" : 
	[
		{"name" : "F32",  "phase" : "ABC", "children" : [
			{"name" : "L31", "phase" : "C"},
			{"name" : "L32", "phase" : "C"},
			{"name" : "L33", "phase" : "C"},
			{"name" : "L34", "phase" : "C"},
			{"name" : "L35", "phase" : "B"},
			{"name" : "L36", "phase" : "B"},
			{"name" : "L37", "phase" : "B"},
			{"name" : "L38", "phase" : "B"},
			{"name" : "L39", "children": [
				{"name" : "N43", "children" :[
					{"name" : "self", "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},
					{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<H44 H45 H46 H47> -> MMN<N43>", "children" : [{"name" : "ORG<N43>", "children" : [{"name" : "<N43>" , "children" : [{"name" : "CC", children: [{"name":"Master"}] },{"name" : "EC", children: [{"name":"MN<N44>"}] }]},{"name" : "<H44>",  "children" : [{"name" : "CC", children: [{"name":"Slave"}] }, {"name" : "EC", children: [{"name":"MP<H44>"}] }] },{"name" : "<H45>", "children" : [{"name" : "CC", children: [{"name":"Slave"}] },{"name" : "EC" , children: [{"name":"MP<H45>"}]}] }, {"name" : "<H46>" , "children" : [{"name" : "CC", children: [{"name":"Slave"}] }, {"name" : "EC", children: [{"name":"MP<H46>"}] }]}, {"name" : "<H47>" , "children" : [{"name" : "CC", children: [{"name":"Slave"}] }, {"name" : "EC", children: [{"name":"MP<H47>"}] }]}] }] }]}]},
					{"name" : "inL" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<L39> -> Be Slave + Manage N<L39>" }]}]},
					{"name" : "H44" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inH" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "MM(Own) N<H44>" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N43> -> Be Slave + Manage Prosumer <N43>" }]}]}]},
					{"name" : "H45" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inH" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "MM(Own) N<H45>" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N43> -> Be Slave + Manage Prosumer <N43>" }]}]}]},
					{"name" : "H46" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inH" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "MM(Own) N<H46>" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N43> -> Be Slave + Manage Prosumer <N43>" }]}]}]},
					{"name" : "H47" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inH" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "MM(Own) N<H47>" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N43> -> Be Slave + Manage Prosumer <N43>" }]}]}]}
				]}
			]},
			{"name" : "L40",  "phase" : "A", "children": [
					{"name" : "N48", "children" :[
					{"name" : "self", "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},
					{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<H49 H50 H51 H52> -> MMN<N48>" }]}]},
					{"name" : "inL" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<L39> -> Be Slave + Manage N<L39>" }]}]},
					{"name" : "H49" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N48> -> Be Slave + Manage P<N48>" }]}]}]},
					{"name" : "H50" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N48> -> Be Slave + Manage P<N48>" }]}]}]},
					{"name" : "H51" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N48> -> Be Slave + Manage P<N48>" }]}]}]},
					{"name" : "H52" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N48> -> Be Slave + Manage P<N48>" }]}]}]}
				]}
			]},
			{"name" : "L41",  "phase" : "A", "children": [
					{"name" : "N53", "children" :[
					{"name" : "self", "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},
					{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<H54 H55 H56 H57> -> MMN<N53>" }]}]},
					{"name" : "inL" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<L39> -> Be Slave + Manage N<L39>" }]}]},
					{"name" : "H54" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N53> -> Be Slave + Manage Prosumer <N53>" }]}]}]},
					{"name" : "H55" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N53> -> Be Slave + Manage Prosumer <N53>" }]}]}]},
					{"name" : "H56" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N53> -> Be Slave + Manage Prosumer <N53>" }]}]}]},
					{"name" : "H57" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N53> -> Be Slave + Manage Prosumer <N53>" }]}]}]}
				]}
			]},
			{"name" : "L42",  "phase" : "A", "children": [
					{"name" : "N58", "children" :[
					{"name" : "self", "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},
					{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<H59 H60 H61 H62> -> MMNeighborhood" }]}]},
					{"name" : "inL" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<L39> -> Be Slave + Manage N<L39>" }]}]},
					{"name" : "H59" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N58> -> Be Slave + Manage Prosumer <N58>" }]}]}]},
					{"name" : "H60" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N58> -> Be Slave + Manage Prosumer <N58>" }]}]}]},
					{"name" : "H61" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N58> -> Be Slave + Manage Prosumer <N58>" }]}]}]},
					{"name" : "H62" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N58> -> Be Slave + Manage Prosumer <N58>" }]}]}]}
				]}
			]}
		]}
	
	]};