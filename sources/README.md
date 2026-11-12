# 第十週：LLM Wiki 資料 Ingest（階段一）

## 定義與範圍

本階段使用 **6 份可追溯的官方來源**（要求至少 5 份），將每份原始網頁的技術內容「重新摘要、保留來源、建立 Wiki 對應」，寫入 `ingest-records.json`。
這是**摘要型的本機知識庫 ingest**，不等於匯入完整網頁全文，也**未**建置向量資料庫或檢索 API。現有 `index.html`、`js/main.js`、六篇 `pages/*.html` 均不需修改。

## 資料格式

每筆 `source_records` 包含：`id`、`title`、`organization`、`authors`、`url`、`retrieved_on`、`summary`、`key_facts`、`wiki_pages`、`slide_topics`、`ingest_method`、`ingest_status` 和 `limitations`。

## 來源對應

詳見 [source-map.md](source-map.md)。六篇原有文章均可找到至少一個外部來源；不代表文章的每一句話都經過驗證。

## 如何執行本階段驗證

在 repository 根目錄執行：

```bash
python3 sources/validate_ingest.py
```

檢查來源數量、URL 格式、必填欄位、來源 ID 唯一性、六篇原有 Wiki 路徑的對應，以及 `pages/` 檔案是否存在。此腳本**不會**自動查網站 HTTP、學術正確性或部署狀態。

## 後續簡報如何使用

生成簡報時，先讀取 `sources/ingest-records.json`，再搭配現有 Wiki 六篇文章，輸出每頁對應的 `source_id` 與 Wiki 檔案。若內容有來源不一致或推論過度，返回重整內容，不直接輸出到 `slides.html`。

## 學術與著作權

紀錄為重新組織的簡短技術摘要與來源連結，不複製原文完整段落。雙手臂特定實驗結果須引用自己的原始實驗紀錄，不可將一般教材冒充雙臂實驗證據。
