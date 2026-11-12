#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Validate structured summaries and file paths without network requests."""
import json
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'sources' / 'ingest-records.json'
record = json.loads(DATA.read_text(encoding='utf-8'))
entries = record['source_records']
errors = []
required = ('id', 'title', 'organization', 'url', 'summary', 'key_facts', 'wiki_pages', 'retrieved_on', 'ingest_method', 'ingest_status')
if len(entries) < 5:
    errors.append('來源不足五份')
if record.get('source_count') != len(entries):
    errors.append('source_count 與來源清單不一致')
ids = [e.get('id') for e in entries]
if len(set(ids)) != len(ids):
    errors.append('source ID 重複')
covered = set()
for e in entries:
    for field in required:
        if not e.get(field):
            errors.append(f"{e.get('id', '?')} 缺少 {field}")
    url = urlparse(e.get('url', ''))
    if url.scheme != 'https' or not url.netloc:
        errors.append(f"{e.get('id')} URL 不是有效 HTTPS 網址")
    for page in e.get('wiki_pages', []):
        covered.add(page)
        if not (ROOT / page).is_file():
            errors.append(f'{e.get("id")} 對應 Wiki 檔案不存在: {page}')
for page in record['wiki_pages_expected']:
    if page not in covered:
        errors.append(f'文章未有對應來源: {page}')
print(f'來源數量: {len(entries)}')
print(f'涵蓋 Wiki 文章: {len(covered)}')
print(f'結構化資料檔: {DATA.relative_to(ROOT)}')
if errors:
    for problem in errors:
        print('FAIL:', problem)
    raise SystemExit(1)
print('PASS: 資料結構、來源數量及六篇 Wiki 檔案對應檢查通過')
print('NOTE: 不代表原始網址 HTTP、內容學術正確性、GitHub Pages 部署已驗證')
