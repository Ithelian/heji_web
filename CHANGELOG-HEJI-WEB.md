# 和基投资官网改版说明

> 适用范围：本说明用于本轮 `heji_web` 官网改版验收、内部汇报或 Pull Request 描述。

## 1. 本轮目标

本轮改版围绕“更像一家国内投资公司的正式官网”展开，主要目标包括：

- 延续原和基网站的红白灰企业官网气质；
- 优化首页、团队、业务、案例、新闻等核心页面视觉；
- 将“新闻动态 / 公司新闻”从单页文字堆叠，升级为列表页 + 独立详情页；
- 将原站与公众号新闻正文迁移到站内详情页；
- 按最新验收要求执行图片零文字审查：任何图片不得包含中文、英文、数字、Logo 字样、二维码说明、证书文字、截图文字、海报标语或招牌文字。

## 2. 新增 Demo 页面

新增：

```text
heji_web/demo.html
```

用途：

- 作为全站改版验收入口；
- 集中展示首页、团队、一级市场、二级市场、投资案例、公司新闻、行业洞察；
- 单独列出重点新闻详情页，方便逐条检查；
- 展示本轮核心成果数据：核心页面、新闻详情页、图片零文字审查结果。

建议验收路径：

1. 打开 `demo.html`；
2. 点击“首页”查看整体视觉；
3. 悬停顶部“新闻与洞察”查看下拉菜单；
4. 进入 `news.html` 查看新闻列表；
5. 点击任意新闻进入详情页；
6. 重点检查全站图片是否均为无内嵌文字的纯视觉图片。

## 3. 页面结构调整

### 3.1 核心页面

本轮涉及以下核心页面：

```text
index.html
team.html
primary-market.html
secondary-market.html
portfolio.html
news.html
insights.html
```

调整方向：

- 统一全站导航、页脚、按钮、卡片、栏目标题；
- 强化红白灰配色系统；
- 减少偏西式咨询网站素材感，改为更稳重的本土企业官网表达；
- 首页与子页面形成统一视觉语言。

### 3.2 新闻列表页

修改：

```text
heji_web/news.html
```

主要变化：

- 原先新闻内容不再全部铺在列表页中；
- 每条新闻以卡片形式展示标题、日期、摘要；
- 每条新闻均有“查看详情”跳转；
- 点击后进入独立新闻详情页。

## 4. 新闻详情页新增

新增 12 个新闻详情页：

```text
heji_web/news/huofuni-2026-subjective-long-first.html
heji_web/news/private-fund-award-2026.html
heji_web/news/calterah-shanghai-science-award.html
heji_web/news/jitian-xingzhou-series-b.html
heji_web/news/modelbest-unicorn-financing.html
heji_web/news/calterah-series-e.html
heji_web/news/2022-project-update-5-smecs.html
heji_web/news/2022-project-update-4-longyoung.html
heji_web/news/2022-project-update-3-kepuen.html
heji_web/news/zhang-heqing-jiangxi-university-2018.html
heji_web/news/heji-new-era-investment-forum.html
heji_web/news/zhang-heqing-entrepreneurship-speech-2017.html
```

每个详情页包含：

- 顶部导航；
- 面包屑；
- 新闻分类与日期；
- 新闻标题；
- 正文内容；
- 原文图片，若原文有图；
- 右侧新闻导航；
- 上一篇 / 下一篇入口；
- 页脚。

## 5. 图片零文字审计与处理

根据最新验收要求，全站执行“图片不得带任何文字”的严格规则。

### 5.1 审计口径

以下情况均视为不合格图片：

- 图片内含中文、英文、数字；
- 企业 Logo、品牌字样、公司名；
- 二维码及二维码说明文字；
- 证书、奖牌、表格、截图、公众号海报；
- 建筑招牌、会议背景标语、门头字样；
- 任何疑似可读字符，无法确认时按风险处理。

### 5.2 已处理内容

- 新闻详情页中原先迁移的公众号/旧站图片已全部从页面下线；
- `assets/images/news/` 已移出可部署图片目录并隔离到临时区，避免误引用；
- 投资案例 Logo 墙不再使用图片 Logo，已改为纯 HTML 文字卡片；
- 首页中带文字风险的原站截图/功能图已替换为无文字城市与建筑视觉图；
- 夜景楼宇中疑似存在招牌/Logo 的图片也按风险处理，已从实际引用中替换；
- Demo 页原先引用的缺失 SVG 已替换为实际存在且经审查无文字的图片。

### 5.3 当前图片引用状态

代码审计结果：

```text
网页图片引用：16 处
缺失图片路径：0
新闻图片引用：0
Logo 墙图片引用：0
风险路径命中：0
可部署图片文件：15 个
当前实际引用位图：10 张
视觉/OCR 复核结果：全部无文字
```

### 5.4 当前保留图片类型

当前网页仅保留以下类型图片：

- 苏州城市、园区、建筑类无文字视觉图；
- 团队页人物图，经总览图视觉/OCR 复核未见文字；
- CSS 背景图均使用已复核的无文字图片。

## 6. CSS 样式调整

修改：

```text
heji_web/assets/css/styles.css
```

新增或调整的重点样式包括：

- 新闻列表卡片样式；
- 新闻详情页布局；
- 顶部导航下拉菜单；
- 移动端响应式样式；
- 投资案例纯文字案例墙样式：
  - `.case-text-wall`
  - `.case-text-wall span`

案例墙样式目标：

- 用 HTML 文字卡片替代图片 Logo；
- 保持红白灰官网风格；
- 避免任何图片内嵌文字；
- 移动端不溢出。

## 7. 导航调整

顶部导航中的“新闻与洞察”已调整为悬停菜单：

- 公司新闻；
- 重点新闻快捷入口；
- 行业洞察入口。

效果路径：

```text
新闻与洞察 → 公司新闻 → 点击任意新闻 → 新闻详情页
```

## 8. 当前校验结果

已执行路径与图片审计：

```text
详情页数量：12
网页图片引用：16
缺失图片路径：0
新闻图片引用：0
Logo 墙图片引用：0
风险路径命中：0
当前实际引用位图：10
视觉/OCR 复核：全部无文字
```

结论：

- 全站不再展示新闻原文图片、证书图、二维码图、截图图、企业 Logo 图片；
- 当前网页实际引用图片已按“无内嵌文字”标准复核；
- 带文字风险图片已移出可部署展示路径，避免误引用；
- 图片路径满足静态部署要求。

## 9. 后续建议

后续如继续完善，可考虑：

1. 为 2026 年平台荣誉类新闻补充正式配图或奖项截图；
2. 为“行业洞察”模块补充真实研究文章；
3. 将 Demo 页作为内部验收页，正式上线时可选择隐藏或移除；
4. 若部署到正式域名，建议压缩新闻图片体积以提升加载速度；
5. 若需要长期维护新闻，建议后续抽象为数据文件或 CMS，而不是手写 HTML。

## 10. 主要文件清单

新增：

```text
heji_web/demo.html
heji_web/CHANGELOG-HEJI-WEB.md
heji_web/news/*.html
heji_web/assets/images/news/*
```

修改：

```text
heji_web/news.html
heji_web/assets/css/styles.css
```
