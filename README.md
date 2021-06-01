# 介紹
基於 Bootstrap 4 和 Shards-UI 的自製模板

# 編譯設定
使用 [node-sass](https://github.com/sass/node-sass) 套件

指令： $ `npm run build:css`

TODO: 自動偵測檔案變更並編譯：https://github.com/sass/node-sass-middleware

# 頁面一覽
### 佈景主題
- [側邊欄](sidebar.html)
- [元件展示](theme.html)

### 會員中心
- [登入](signin.html)
- [註冊](signup.html)
- 忘記密碼
- [編輯會員資訊](edit-account.html)

# SCSS Structure
```
.
├── _config.scss
├── base.scss
├── components
│   ├── _alert.scss
│   ├── _badge.scss
│   ├── _button.scss
│   ├── _form.scss
│   ├── _line-awesome.scss
│   ├── _modal.scss
│   ├── _sidebar.scss
│   ├── _table.scss
├── helpers
│   └── _helpers.scss
├── pages
│   ├── _account.scss
│   ├── _document.scss
│   ├── _error.scss
│   └── _signin.scss
├── theme
│   ├── _custom-extensions.scss
│   └── _import.scss
└── theme.scss
```
