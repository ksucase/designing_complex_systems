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
							{"name" : "self", "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <H44> AND <H45> AND <H46> AND <H47> -> Be Master + Manage Neighborhood <N43>" }]}]},{"name" : "inL" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <L39> -> Be Slave + Manage Neighborhood <L39>" }]}]},
							{"name" : "H44" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N43> -> Be Slave + Manage Home <N43>" }]}]}]},
							{"name" : "H45" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N43> -> Be Slave + Manage Home <N43>" }]}]}]},
							{"name" : "H46" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N43> -> Be Slave + Manage Home <N43>" }]}]}]},
							{"name" : "H47" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N43> -> Be Slave + Manage Home <N43>" }]}]}]}
						]}
			]},
			{"name" : "L40",  "phase" : "A", "children": [
					{"name" : "N48", "children" :[
					{"name" : "self", "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <H49> AND <H50> AND <H51> AND <H52> -> Be Master + Manage Neighborhood <N48>" }]}]},
							{"name" : "H49" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N48> -> Be Slave + Manage Home <N48>" }]}]}]},
							{"name" : "H50" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N48> -> Be Slave + Manage Home <N48>" }]}]}]},
							{"name" : "H51" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N48> -> Be Slave + Manage Home <N48>" }]}]}]},
							{"name" : "H52" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N48> -> Be Slave + Manage Home <N48>" }]}]}]}
						]}
			]},
			{"name" : "L41",  "phase" : "A", "children": [
					{"name" : "N53", "children" :[
					{"name" : "self", "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <H54> AND <H55> AND <H56> AND <H57> -> Be Master + Manage Neighborhood <N53>" }]}]},
							{"name" : "H54" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N53> -> Be Slave + Manage Home <N53>" }]}]}]},
							{"name" : "H55" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N53> -> Be Slave + Manage Home <N53>" }]}]}]},
							{"name" : "H56" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N53> -> Be Slave + Manage Home <N53>" }]}]}]},
							{"name" : "H57" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N53> -> Be Slave + Manage Home <N53>" }]}]}]}
						]}
			]},
			{"name" : "L42",  "phase" : "A", "children": [
					{"name" : "N58", "children" :[
					{"name" : "self", "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <H59> AND <H60> AND <H61> AND <H62> -> Be Master + Manage Neighborhood" }]}]},
							{"name" : "H59" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N58> -> Be Slave + Manage Home <N58>" }]}]}]},
							{"name" : "H60" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N58> -> Be Slave + Manage Home <N58>" }]}]}]},
							{"name" : "H61" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N58> -> Be Slave + Manage Home <N58>" }]}]}]},
							{"name" : "H62" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N58> -> Be Slave + Manage Home <N58>" }]}]}]}
						]}
			]}
		]}
	
	]};