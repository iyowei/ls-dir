import { readdir } from "fs";
import { join } from "path";

export default function lsDir(path) {
  return new Promise((resolve, reject) => {
    readdir(path, { withFileTypes: true }, (err, files) => {
      if (!err) {
        files.forEach((dirent, index) => {
          files[index] = {
            path: join(path, dirent.name),
            dirent,
          };
        });

        resolve(files);
      }

      reject(err);
    });
  });
}
