const fs = require('fs');

/**
 * 异步获取给定文件夹下的文件信息
 * @param path 文件夹的绝对路径
 */
function files(path) {
  return new Promise((resolve, reject) => {
    let fileInfo = [];
    fs.readdir(path, function (err, files) {
      if (err) {
        reject(err)
        return;
      }
      if (!files) {
        resolve(files);
        return;
      }
      for (let i = 0; i < files.length; i++) {
        let filePath = path + '/' + files[i];
        fs.stat(filePath, function (err, info) {
          if (!err && info && info.isFile()) {
            fileInfo.push({
              name: files[i].split('.')[0] || files[i],
              type: files[i].split('.')[1] || files[i],
              birthtime: info.birthtime,
              mtime: info.mtime,
              size: info.size,
            })
          }
          if (i + 1 === files.length) resolve(fileInfo);
        })
      }
    })
  })
}

module.exports = files