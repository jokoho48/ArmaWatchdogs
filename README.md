# Arma Watchdog Toolbox

## Requirements
 - Arma 3 
 - NodeJs
 
## Setup
 - run `npm i` in main folder to install all Nodejs Dependencys
 - create `.env` from `.env.Example` and Modify settings to your liking
 - Setup Test Missions with init.sqf and mission.sqm
 - Create Autotest.cfg file and enter wanted test missions
 - Set Screenshot folder Maximum size in Profile to the amount you think you need https://community.bistudio.com/wiki/screenshot
 - Run `node ./index.js` to execute system
 
 
 ## Settings
 `.env`
```
# Path where Arma saves the Screenshots
SCREENSHOT_PATH=C:\Users\USERNAME\Documents\Arma 3 - Other Profiles\USERNAME\Screenshots 

# Arma Executable that gets exectued and used
ARMA_PATH=E:\Programme\SteamLibrary\steamapps\common\Arma 3\arma3profiling_x64.exe

# Enter Arma Startup Parameters and Mods you want to load
ARMA_STARTUP_PARAMETERS=-noPause;-window;-maxMem=3071;-cpuCount=12;-exThreads=7;-hugepages;-nosplash;-enableHT

# Threshold where the system detects a change. Bigger number means more drasitc color change require
DIFF_THRESHOLD=0.1 

# Path to Arma Autotest Config file, it is Importent that this Path is without Spaces else arma does not detect the file
ARMA_AUTOTESTCONFIG=E:\Arma3\autotest\testConfig.cfg

# The Path where the Frontend life so the files can get copyed over
FRONTEND_PATH=.\frontend
```

`Autotest.cfg` the Documentation can be found here: https://community.bistudio.com/wiki/Arma_3_Startup_Parameters#autotest

`init.sqf`
Every Entry in JK_TestData is a Screenshot that gets shoot.
```
/*
 * 0: Position where the Camera will be Positioned
 * 1: Position that the Camera will look at
 * 2: The name of the Screenshot !!Importent this name must be without Spaces!!
 * 3: Elevation of the Screenshot (Default: Position of object) This setting is Optinal and can be skipped the camera will use than the Elevation of the Position entered
 */
JK_TestData pushBack [My_AwsomeCameraPosition, My_AwsomeCameraViewPoint, "TestName", 100];
```

## TODO
- Finish Frontend
- Add ability to "Spawn" Objects/Vehicles/Units/Groups as Objects to make it more Dynamic
