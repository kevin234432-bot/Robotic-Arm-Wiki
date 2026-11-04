# Robotic Arm Wiki｜機械手臂技術與研究知識庫

一個以繁體中文整理機械手臂技術的靜態網站，提供六大分類、全文關鍵字搜尋、分類篩選和統一文章模板，核心目的在於示範 AI 依照 `AGENTS.md` 持續擴充網站。

## 六大分類
機械手臂基礎、運動學與數學、控制與路徑規劃、感測與智慧化、多機械手臂協作、實作與研究專案。部分分類尚無文章，供未來擴充。

## 文章清單（首批五篇及 AI 規範擴充測試）
- [機械手臂基礎與自由度](pages/robot-arm-basics.html)
- [正向運動學（FK）](pages/forward-kinematics.html)
- [逆向運動學（IK）](pages/inverse-kinematics.html)（依 AGENTS.md 新增）
- [齊次轉換矩陣](pages/homogeneous-transform.html)
- [機械手臂 PID 控制](pages/pid-control.html)
- [異質雙機械手臂座標協作](pages/heterogeneous-dual-arm.html)

## 本機測試
解壓縮並開啟 `index.html` 即可瀏覽；使用原生 HTML、CSS、JavaScript，不必安裝套件。可使用 `python3 -m http.server 8000` 後開啟 `http://localhost:8000/`，更接近正式網站環境。

## GitHub Pages 部署
1. 在 GitHub 建立公開 Repository：`Robotic-Arm-Wiki`。
2. 將**本資料夾內**所有檔案上傳到 repository 根目錄（確認 `index.html` 直接位於根目錄）。
3. 前往 Settings → Pages → Build and deployment → Source: Deploy from a branch。
4. 選擇 Branch `main`、Folder `/(root)`，按 Save。
5. 網址通常為 `https://<github-username>.github.io/Robotic-Arm-Wiki/`；請從 GitHub Pages 設定畫面確認正式連結。

## 如何透過 AGENTS.md 擴充
請 AI 先讀 `AGENTS.md`，複製 `templates/article-template.html` 到 `pages/<slug>.html`，依六節格式撰文；加入一筆 `js/articles.js` 索引並更新此 README，再測試搜尋、分類、手機版及連結。避免修改無關功能。

**擴充驗證：** 已依 `AGENTS.md` 的模板建立「逆向運動學（IK）」文章、加入 `js/articles.js` 索引並更新 README；部署後請實測首頁搜尋 `IK`、分類「運動學與數學」及新文章連結。

## 研究內容狀態
異質雙臂案例中，共同座標系、基本轉換及兩臂各自五點巡點已完成；跨手臂互換點位後巡點待驗證，雙臂同步控制與共同搬運屬未來規劃。

## 注意
網站內容是教育與研究整理，並非安全認證的機械手臂控制程序。對實體機器操作須依設備手冊與實驗室安全規範進行。
