/**
 * 和基投资 - 全局站点脚本
 * 搜索、滚动动画、导航增强
 */

// ===== 搜索功能 =====
const pages = [
  { title: '首页 公司简介 发展历程 企业文化', url: 'index.html' },
  { title: '和基团队 关于我们 管理团队 运营团队', url: 'team.html' },
  { title: '一级市场 私募股权投资 PE VC 人工智能 半导体 智能装备 新材料 云计算', url: 'primary-market.html' },
  { title: '二级市场 私募证券投资 A股 港股 美股 和基齐物1号 和基金球成长1号', url: 'secondary-market.html' },
  { title: '投资案例 加特兰 得一微 面壁智能 斯坦德机器人 中微公司 摩尔线程', url: 'portfolio.html' },
  { title: '公司新闻 火富牛 主观多头 私募基金风云榜 新锐突破奖', url: 'news.html' },
  { title: '行业洞察 产业研究 模块', url: 'insights.html' }
];

function siteSearch(event) {
  event.preventDefault();
  const input = document.getElementById('site-search');
  const keyword = (input?.value || '').trim().toLowerCase();
  if (!keyword) return false;
  const hit = pages.find(page => page.title.toLowerCase().includes(keyword));
  if (hit) {
    window.location.href = hit.url;
  } else {
    alert('未找到相关内容，请尝试搜索：投资案例、公司新闻、一级市场、二级市场');
  }
  return false;
}

// ===== 滚动动画（Fade-in-up） =====
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-in-up');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  els.forEach(el => observer.observe(el));
}

// ===== 移动端导航增强 =====
function initMobileNav() {
  // 在窄屏下点击下拉父项切换展开
  const dropdownItems = document.querySelectorAll('.has-dropdown > a');
  dropdownItems.forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        const parent = this.parentElement;
        parent.classList.toggle('dropdown-open');
      }
    });
  });
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
  initMobileNav();
});
