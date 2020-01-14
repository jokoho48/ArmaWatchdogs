diag_log format ["Test Mission"];
hideObject player;
JK_TestData = [];

for "_i" from 0 to 40 do {
	JK_TestData pushBack [[random 5000, random 5000, 50], [random 5000, random 5000, random 5], "TestName" + str _i];
};

JK_LastMission = true;

JK_fnc_getPos = {
	switch (typeName _this) do {
		case ("ARRAY"): {
			_this
		};
		case ("LOCATION");
		case ("GROUP");
		case ("OBJECT"): {
			getPos _this;
		};
		case ("STRING"): {
			getMarkerPos _this;
		};
		case ("TASK"): {
			taskDestination _this;
		};
		default {
			LOG("unkown Type in GetPos with: " + (typeName _this));
			[0, 0, 0]
		};
	};
};

0 spawn {
	private _cam = "camera" camCreate [0,0,0];
	_cam cameraEffect ["internal", "back"];
	_cam camSetFocus [-1,-1];
	_cam camCommit 0;
	{
		_x params ["_pos", "_aimPos", "_name", "_elevation"];
		private _p = (_pos call JK_fnc_getPos);
		if !(isNil "_elevation") then {
			_p set [2, _elevation];
		};
		_cam camSetPos _p;
		_cam camSetDir (_p vectorFromTo (_aimPos call JK_fnc_getPos));
		_cam camCommit 0;
		waitUntil {preloadCamera _p;};
		sleep 1;
		screenshot (_name + ".png");
	} forEach JK_TestData;
	camDestroy _cam;
	endMission "END1";
};