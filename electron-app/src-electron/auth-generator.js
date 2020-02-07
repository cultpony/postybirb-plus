const { app } = require('electron');
const fs = require('fs-extra');
const path = require('path');
const nanoid = require('nanoid');

fs.ensureDirSync(path.join(app.getPath('userData'), 'data'));

const idPath = path.join(app.getPath('userData'), 'data', 'id.txt');
if (!fs.existsSync(idPath)) {
  global.AUTH_ID = nanoid();
  fs.writeFile(idPath, global.AUTH_ID);
} else {
  global.AUTH_ID = fs.readFileSync(idPath).toString();
}
