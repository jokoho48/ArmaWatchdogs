diag_log format ["Test Mission"];
hideObject player;
JK_TestData = [];
JK_TestData pushBack [[100, 100, 100], [300, 200, 20], "TestName"];
JK_TestData pushBack [[200, 200, 100], [400, 500, 20], "TestName2"];

0 spawn {
	sleep 5;
	private _cam = "camera" camCreate [0,0,0];
	_cam cameraEffect ["internal", "back"];
	_cam camSetFocus [-1,-1];
	_cam camCommit 0;
	{
		_x params ["_pos", "_aimPos", "_name"];
		_cam camSetPos _pos;
		_cam camSetDir (_pos vectorFromTo _aimPos);
		_cam camCommit 0;
		waitUntil {preloadCamera _pos;};
		sleep 1;
		screenshot (_name + ".png");
	} forEach JK_TestData;
	camDestroy _cam;
	(findDisplay 46) closeDisplay 0;
};