# 第十週作業：一次實際執行與驗收紀錄

> 紀錄日期：2026-11-12。這份紀錄區分 GitHub 原始碼檢查、使用者瀏覽器測試、仍未完成的驗證。不把推測寫成已測試通過。

## 已執行流程

1. **Ingest：** 建立 `sources/ingest-records.json`，包含 SRC-001～SRC-006 六筆教材摘要；並建立 `sources/source-map.md` 對照既有六篇 Wiki 文章。
2. **查詢與整理：** 利用現有六篇 Wiki 文章（基礎、FK、IK、座標轉換、PID、異質雙臂）編排八頁教學內容。
3. **生成：** 新增 `slides.html`、`css/slides.css`、`js/slides.js`，不更動既有 Wiki 搜尋與文章頁面。
4. **第一次驗收：** 使用者回報簡報網址、八頁切換、上／下一頁、Wiki 文章連結及縮小視窗排版均通過；SRC 來源標示為「未確認或失敗」。
5. **問題確認：** 使用者提供截圖：點入 SRC-001 等來源會顯示 `ingest-records.json` 原始內容。這代表來源資料可存取，但引用閱讀體驗不佳。
6. **局部修正：** 保留 JSON 原始紀錄，新建 `sources/index.html` 人類可讀的來源頁面，並僅修改 `slides.html` 的 SRC 引用網址。
7. **再次驗收：** 使用者回報「可以了」。GitHub 重新讀取顯示新的 `slides.html` 與 `sources/index.html` 確實存在於 `main` 分支。

## 檢查結果

| 測試項目 | 方法／證據 | 結果 |
|---|---|---|
| 來源數量至少五筆 | GitHub `ingest-records.json` 的 `source_count=6` | 通過（原始碼） |
| 6 個 SRC ID 與 Wiki 文章對應 | GitHub `source-map.md` | 通過（原始碼） |
| 可開啟教學簡報 | 使用者回報 | 通過（瀏覽器） |
| 八頁切換 | 使用者回報 | 通過（瀏覽器） |
| 上／下一頁按鈕 | 使用者回報 | 通過（瀏覽器） |
| Wiki 文章連結 | 使用者回報 | 通過（瀏覽器） |
| 手機或縮小視窗排版 | 使用者回報 | 通過（瀏覽器） |
| SRC 原連結可讀性 | 使用者截圖顯示 JSON 原文 | 第一次未通過 |
| SRC 修正後點擊 | 使用者回報「可以了」 | 通過（使用者確認） |
| 修正版檔案已上傳 | GitHub `slides.html` 與 `sources/index.html` 可讀 | 通過（原始碼） |
| 全部外部教材網址可連線 | 未逐一從使用者瀏覽器實測 | 未驗證 |

## 此次 Loop 的差異紀錄

**第一次：** `slides.html` → SRC 連結 → `sources/ingest-records.json`（內容正確但呈現為原始 JSON）

**第二次：** `slides.html` → SRC 連結 → `sources/index.html#SRC-001`（可讀摘要、原始教材連結、Wiki 對應）

**修改範圍：** 一個既有檔案 `slides.html` 的引用連結，加上一個新檔案 `sources/index.html`。既有 `js/main.js`、`js/slides.js` 與六篇 Wiki 未更動。

## 結論與限制

本次流程完成了摘要型 ingest → Wiki 對應 → 教學簡報 → 使用者驗收 → 引用頁修正。這是人工＋LLM 的實際執行紀錄，不是自動化 Agent 的運作日誌；尚未完成的外部網址測試不列為通過。
