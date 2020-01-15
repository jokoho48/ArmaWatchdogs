# Arma Watchdog Toolbox

## Requirements
 - Arma 3 
 - NodeJs
 
## Setup
 - run `npm i` in main folder to install all Nodejs Dependencys
 - create `.env` from `.env.Example` and Modify settings to your liking
 - Setup Test Missions with init.sqf and mission.sqm
 - Create Autotest.cfg file and enter wanted test missions
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
