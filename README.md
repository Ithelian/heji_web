# heji_web

和基投资官网静态页面项目。

## 页面结构

- `index.html`：首页，包含公司简介、发展历程、企业文化
- `team.html`：和基团队
- `primary-market.html`：业务版图｜一级市场
- `secondary-market.html`：业务版图｜二级市场
- `portfolio.html`：投资案例
- `news.html`：公司新闻
- `insights.html`：行业洞察

## 功能说明

- 顶部导航采用模块化布局
- “关于我们”支持悬停下拉：和基团队、一级市场、二级市场、投资案例
- “新闻与洞察”支持悬停下拉：公司新闻、行业洞察
- 顶部导航右侧设置站内搜索框
- 行业洞察页面当前仅预留内容模块，后续可继续更新正文
- UI 风格参考原官网视觉气质：和基红、白底浅灰分区、红色渐变栏目标题、深灰页脚、企业官网式新闻列表与稳重版式
- 原站素材已归档在 `assets/images/original/`，当前可参考源域名：`https://di22285418.icoc.vc/`

## 本地预览

直接用浏览器打开 `index.html` 即可预览。

也可以在项目目录启动本地静态服务：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```
