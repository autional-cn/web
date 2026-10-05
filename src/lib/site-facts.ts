// 站点事实单一来源（C-01 等）— 与服务端实况一致，改动只在此一处。
// 服务数核对（2026-10-05，五源一致）：infra-ops/docker/entrypoint-monolith.sh（27 hostname）·
// shared/ci/bin/repos.manifest（27 service-*）· sites/reference/scripts/sync-specs-zh.py（27）·
// reference.autional.cn 线上"全部 27" · demo 门户配置 27 slug。
// npm 包清单核对（2026-10-05，npmjs 全量重扫 + 临时目录实装验证 @autional-cn/react 可安装）。

export const SITE_FACTS = {
  serviceCount: 27,
  apiEndpointCount: '1,400+',
  license: 'AGPL-3.0',
  githubOrg: 'https://github.com/autional-cn',
  /** 已发布至 npm 的软件包（以 npm 实查为准；发布新包后同步此表） */
  publishedPackages: [
    { name: '@autional-cn/react', version: '0.1.0-rc' },
    { name: '@autional-cn/onboard', version: '0.1.0' },
    { name: '@autional-cn/ui', version: '0.1.0-rc.38' },
    { name: '@autional-cn/tokens', version: '0.1.0-rc.7' },
    { name: '@autional-cn/tailwind-preset', version: '0.1.0-rc.2' },
    { name: '@autional-cn/shared', version: '0.1.0-rc.26' },
  ],
} as const;
