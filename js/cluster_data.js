//JSON object containing data

var cluster_data = 
	{"name" : "S1", "type":"agent", "info" : "illustration", "children" :
	[
		{"name" : "F32", "type":"agent",   "phase" : "ABC", "children" : [
		
			{"name" : "L39", "type":"agent", "children": [
				{"name" : "N43",  "type":"agent", "children" :[
					{"name" : "H44" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inH" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "M(Own) N<H44>" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N43>->S.MP<N43>" }]}]}]},
					{"name" : "H45" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inH" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "M(Own) N<H45>" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N43>->S.MP<N43>" }]}]}]},
					{"name" : "H46" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inH" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "M(Own) N<H46>" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N43>->S.MP<N43>" }]}]}]},
					{"name" : "H47" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inH" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "M(Own) N<H47>" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N43>->S.MP<N43>" }]}]}]}
				]}
			]},
			{"name" : "L40", "type":"agent",   "phase" : "A", "children": [
					{"name" : "N48", "children" :[
					{"name" : "H49" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N48> -> Be Slave + Manage P<N48>" }]}]}]},
					{"name" : "H50" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N48> -> Be Slave + Manage P<N48>" }]}]}]},
					{"name" : "H51" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N48> -> Be Slave + Manage P<N48>" }]}]}]},
					{"name" : "H52" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N48> -> Be Slave + Manage P<N48>" }]}]}]}
				]}
			]},
			{"name" : "L41", "type":"agent",   "phase" : "A", "children": [
					{"name" : "N53", "children" :[
					{"name" : "H54" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N53> -> Be Slave + Manage Prosumer <N53>" }]}]}]},
					{"name" : "H55" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N53> -> Be Slave + Manage Prosumer <N53>" }]}]}]},
					{"name" : "H56" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N53> -> Be Slave + Manage Prosumer <N53>" }]}]}]},
					{"name" : "H57" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N53> -> Be Slave + Manage Prosumer <N53>" }]}]}]}
				]}
			]},
			{"name" : "L42", "type":"agent",   "phase" : "A", "children": [
					{"name" : "N58", "children" :[
					{"name" : "H59" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N58> -> Be Slave + Manage Prosumer <N58>" }]}]}]},
					{"name" : "H60" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N58> -> Be Slave + Manage Prosumer <N58>" }]}]}]},
					{"name" : "H61" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N58> -> Be Slave + Manage Prosumer <N58>" }]}]}]},
					{"name" : "H62" , "type":"agent",  "phase" : "A", "children" : [{"name" : "self" , "phase" : "A", "children" : [{"name" : "CC", "children" : [{"name" : "SelfMaster" }] },{"name" : "EC" , "children" : [{"name" : "ConnectAll" }]}]},{"name" : "inN" , "phase" : "A",  "children" : [{"name" : "CC", "children" : [{"name" : "SelfSlave" }] },{"name" : "EC" , "children" : [{"name" : "C<N58> -> Be Slave + Manage Prosumer <N58>" }]}]}]}
				]}
			]}
		]}
	
	]};