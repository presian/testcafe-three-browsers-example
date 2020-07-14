# TestcafeThreeWindowsExample

To reproduce the issue with same id for the parent and child window should execute following steps:

1. Clone this repository
2. In the terminal navigate to the repository folder (where the package.json is located)
3. In the terminal run `npm install` (to install all dependencies)
4. In the terminal run  `npm run start`
5. In the terminal run `npm run testcafe:chrome` (There is only one test that checks the parent's window id against the child's window id, and it fails because they are the same)
6. In the terminal run `npm run testcafe:ie` (This one actually hangs on retrieving the current window after the child window is open)
