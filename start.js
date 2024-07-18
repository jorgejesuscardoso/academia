const { spawn } = require('child_process');
const path = require('path');
const treeKill = require('tree-kill');

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const electronCmd = process.platform === 'win32' ? 'electron.cmd' : 'electron';

const processes = [];

function startProcess(command, args, name) {
  const process = spawn(command, args, { stdio: 'inherit' });
  processes.push(process);

  process.on('close', (code) => {
    if (code !== 0) {
      console.error(`${name} process exited with code ${code}`);
    }
  });

  return process;
}

const backend = startProcess(npmCmd, ['run', 'db'], 'Backend');
const frontend = startProcess(npmCmd, ['run', 'dev'], 'Frontend');

// Start Electron after a delay to ensure frontend and backend are running
setTimeout(() => {
  const electron = startProcess(electronCmd, ['.'], 'Electron');
  electron.on('close', () => {
    // Kill all processes when Electron is closed
    processes.forEach((proc) => {
      treeKill(proc.pid);
    });
  });
}, 5000); // Adjust the delay as necessary
