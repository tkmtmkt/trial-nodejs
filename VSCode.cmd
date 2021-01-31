@echo off
setlocal
set GIT=%~dp0tool\PortableGit-2.30.0-64-bit
set NODE=%~dp0tool\node-v14.15.3-win-x64
set VSCode=%~dp0tool\VSCode-win32-x64-1.52.0
set PATH=%GIT%;%GIT%\cmd;%NODE%;%PATH%

start /MIN %VSCode%\Code.exe
