[node version badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[download node.js]: https://nodejs.org/en/download/
[prs welcome badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat
[lsdirsync]: https://github.com/iyowei/ls-dir-sync
[lsdir]: https://github.com/iyowei/ls-dir
[scandireachsync]: https://github.com/iyowei/scan-dir-sync
[scandireach]: https://github.com/iyowei/scan-dir-each
[scandirsync]: https://github.com/iyowei/scan-dir-sync
[scandir]: https://github.com/iyowei/scan-dir

# lsDir(path)

> 并行扫描文件夹。

## 使用

- `path` 待扫描的路径，**必需提供**，{String}
- 返回，扫描结果 { `Promise<Array>` }

```js
import { log } from "console";
import lsDir from "@iyowei/ls-dir";

(async () => {
  log(await lsDir(process.cwd()));

  /**
   * [
   *   {
   *     path: '',
   *     dirent: [Dirent]
   *   },
   *   ...
   * ]
   */
})();
```

## 安装

[![Node Version Badge][node version badge]][download node.js]

```shell
# Pnpm
pnpm add @iyowei/ls-dir

# yarn
yarn add @iyowei/ls-dir

# npm
npm add @iyowei/ls-dir
```

## 相关

- [**`lsDirSync()`**][lsdirsync]，串行扫描文件夹；
- [**`scanDirEachSync()`**][scandireachsync]，可在扫描的同时更新或过滤数据，**串行** 实现；
- [**`scanDirEach()`**][scandireach]，可在扫描的同时更新或过滤数据，**并行** 实现；
- [**`scanDirSync()`**][scanDirSync]，`worker` 选填，有 `worker`，行为同 `scanDirEachSync()` 一致，否则与 `lsDirSync()` 一致，如果项目中同时使用了 `scanDirEachSync()`、`lsDirSync()`，则推荐使用 `scanDirSync()`；
- [**`scanDir()`**][scandir]，`worker` 选填，有 `worker`，行为同 `scanDirEach()` 一致，否则与 `lsDir()` 一致，如果项目中同时使用了 `scanDirEach()`、`lsDir()`，则推荐使用 `scanDir()`；

## 参与贡献

![PRs Welcome][prs welcome badge]
