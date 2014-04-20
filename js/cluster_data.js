//JSON object containing data

var cluster_data = 
	{"name" : "A", "info" : "tst", "children" : 
	[
		{"name" : "A1", "children" : [
				{"name" : "A12" },
				{"name" : "A13" },
				{"name" : "A14" },
				{"name" : "A15" }
			
		] },
		{"name" : "A2", "children" : [
				{"name" : "A21" },
				{"name" : "A22", "children" : [
					{"name" : "A221" },
					{"name" : "A222" },
					{"name" : "A223" },
					{"name" : "A22" }
				]},
				{"name" : "A23" },
				{"name" : "A24" },
				{"name" : "A25" }] },
		{"name" : "F32",  "phase" : "ABC", "children" : [
			{"name" : "L39", "children": [
					{"name" : "N43", "children" :[
							{"name" : "self", "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <H44> AND <H45> AND <H46> AND <H47> -> Be Master <N43> + Manage Neighborhood" }]}]},
							{"name" : "H44" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N43> -> Be Slave + Manage Home" }]}]}]},
							{"name" : "H45" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N43> -> Be Slave + Manage Home" }]}]}]},
							{"name" : "H46" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N43> -> Be Slave + Manage Home" }]}]}]},
							{"name" : "H47" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N43> -> Be Slave + Manage Home" }]}]}]}
						]}
			]},
			{"name" : "L40",  "phase" : "A", "children": [
					{"name" : "N48", "children" :[
					{"name" : "self", "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <H49> AND <H50> AND <H51> AND <H52> -> Be Master <N48> + Manage Neighborhood" }]}]},
							{"name" : "H49" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N48> -> Be Slave + Manage Home" }]}]}]},
							{"name" : "H50" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N48> -> Be Slave + Manage Home" }]}]}]},
							{"name" : "H51" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N48> -> Be Slave + Manage Home" }]}]}]},
							{"name" : "H52" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N48> -> Be Slave + Manage Home" }]}]}]}
						]}
			]},
			{"name" : "L41",  "phase" : "A", "children": [
					{"name" : "N53", "children" :[
					{"name" : "self", "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <H54> AND <H55> AND <H56> AND <H57> -> Be Master <N53> + Manage Neighborhood" }]}]},
							{"name" : "H54" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N53> -> Be Slave + Manage Home" }]}]}]},
							{"name" : "H55" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N53> -> Be Slave + Manage Home" }]}]}]},
							{"name" : "H56" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N53> -> Be Slave + Manage Home" }]}]}]},
							{"name" : "H57" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N53> -> Be Slave + Manage Home" }]}]}]}
						]}
			]},
			{"name" : "L42",  "phase" : "A", "children": [
					{"name" : "N58", "children" :[
					{"name" : "self", "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <H59> AND <H60> AND <H61> AND <H62> -> Be Master <N58> + Manage Neighborhood" }]}]},
							{"name" : "H59" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N58> -> Be Slave + Manage Home" }]}]}]},
							{"name" : "H60" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N58> -> Be Slave + Manage Home" }]}]}]},
							{"name" : "H61" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N58> -> Be Slave + Manage Home" }]}]}]},
							{"name" : "H62" , "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "Connect <N58> -> Be Slave + Manage Home" }]}]}]}
						]}
			]}
		]}
	
	]};