import{d as n}from"./app.aad050aa.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="githubpages-\u90E8\u7F72\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#githubpages-\u90E8\u7F72\u9879\u76EE" aria-hidden="true">#</a> GitHubPages \u90E8\u7F72\u9879\u76EE</h1><p>\u5728\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA <code>.github\\workflows\\main.yml</code> \u6587\u4EF6\u3002\\main.yml \u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>name: build and deploy

# \u5F53 master \u5206\u652F push \u4EE3\u7801\u7684\u65F6\u5019\u89E6\u53D1 workflow
on:
  push:
    branches:
      - master

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      # \u4E0B\u8F7D\u4ED3\u5E93\u4EE3\u7801
      - name: Checkout
        uses: actions/checkout@v2

      # \u5B89\u88C5\u4F9D\u8D56
      - name: Install and Build
        run: |
          yarn install
          yarn build

      # \u53D1\u5E03\u5230 GitHub Pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4.2.5
        with:
          token: \${{ secrets.ACCESS_TOKEN }} # \u8BBF\u95EE\u79D8\u94A5
          branch: gh-pages # \u63A8\u9001\u5206\u652F
          folder: docs/.vuepress/dist # \u90E8\u7F72\u76EE\u5F55

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,3);function r(l,p){return e}var u=s(a,[["render",r]]);export{u as default};
