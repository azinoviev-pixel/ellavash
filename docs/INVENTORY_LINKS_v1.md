# INVENTORY LINKS v1 — проверка внутренних ссылок

**Дата:** 29.05.2026
**Проверено индексов:** 2 (`index_v22.html` публичный, `index_az_v2.html` приватный)
**Проверено cross-ссылок:** 4 ключевых HTML (Business Model v8, Sales Strategy v8, Marketing Plan v8, Financial Model v6)

---

## BROKEN LINKS (5)

Файлы, которых нет в `/Users/forril/Documents/ELLAVASH/`:

- `El_Lavash_Business_Model_v8.html` → `href="index.html"` — файл НЕ существует (есть только `index_v22.html`, `index_v21.html`, `index_az_v2.html`)
- `El_Lavash_Sales_Strategy_v8.html` → `href="index.html"` — файл НЕ существует
- `El_Lavash_Marketing_Plan_v8.html` → `href="index.html"` — файл НЕ существует
- `El_Lavash_Financial_Model_v6.html` → `href="index.html"` — файл НЕ существует
- (То же ожидаемо в Battlecard / Market / Competitive / Retail — не проверял, но скорее всего та же ссылка)

Примечание: GitHub Pages по умолчанию делает rewrite `/` → `index.html`. Если в репо НЕТ файла `index.html`, эта ссылка вернёт 404. На сайт надо либо положить копию актуального index_v22 как `index.html`, либо заменить ссылку на `index_v22.html` в каждом файле.

---

## OUTDATED LINKS (18) — ссылка ведёт на старую версию

### index_az_v2.html → старый index

- `index_az_v2.html` → `href="index_v21.html"` — есть `index_v22.html` (latest публичный)

### El_Lavash_Business_Model_v8.html (4 устаревшие)

- → `href="El_Lavash_Competitive_Analysis_v5.html"` — есть v8
- → `href="El_Lavash_Market_Analysis_v6.html"` — есть v9 (и DEEP)
- → `href="El_Lavash_Marketing_Plan_v5.html"` — есть v8
- → `href="El_Lavash_Sales_Strategy_v5.html"` — есть v8

### El_Lavash_Sales_Strategy_v8.html (4 устаревшие)

- → `href="El_Lavash_Business_Model_v5.html"` — есть v8
- → `href="El_Lavash_Competitive_Analysis_v5.html"` — есть v8
- → `href="El_Lavash_Market_Analysis_v6.html"` — есть v9
- → `href="El_Lavash_Marketing_Plan_v5.html"` — есть v8

### El_Lavash_Marketing_Plan_v8.html (4 устаревшие)

- → `href="El_Lavash_Business_Model_v5.html"` — есть v8
- → `href="El_Lavash_Competitive_Analysis_v5.html"` — есть v8
- → `href="El_Lavash_Market_Analysis_v6.html"` — есть v9
- → `href="El_Lavash_Sales_Strategy_v5.html"` — есть v8

### El_Lavash_Financial_Model_v6.html (4 устаревшие)

- → `href="El_Lavash_Business_Model_v5.html"` — есть v8
- → `href="El_Lavash_Market_Analysis_v6.html"` — есть v9
- → `href="El_Lavash_Retail_Prices_v3.html"` — есть v6
- → `href="El_Lavash_Sales_Strategy_v5.html"` — есть v8

---

## OK (33) — рабочие ссылки на latest версии

### Из index_v22.html (публичный, 17 ссылок)

- `El_Lavash_Starter_10_v1.html` — OK (нет более новой)
- `El_Lavash_TOP_Action_Today_v1.html` — OK (нет более новой)
- `protocol_v13.html` — OK (v13 = latest из v1-v13)
- `roadmap_v8.html` — OK (v8 = latest из v1-v8)
- `El_Lavash_Market_Analysis_v9.html` — OK (v9 = latest)
- `El_Lavash_Market_Analysis_DEEP.html` — OK
- `El_Lavash_Competitive_Analysis_v8.html` — OK (v8 = latest)
- `El_Lavash_Battlecard_v1.html` — OK (нет более новой)
- `El_Lavash_Retail_Prices_v6.html` — OK (v6 = latest)
- `El_Lavash_Business_Model_v8.html` — OK (v8 = latest)
- `El_Lavash_Sales_Strategy_v8.html` — OK (v8 = latest)
- `El_Lavash_Marketing_Plan_v8.html` — OK (v8 = latest)
- `El_Lavash_Financial_Model_v6.html` — OK (v6 = latest)
- `El_Lavash_Delivery_Plan_v4.html` — OK (v4 = latest)
- `El_Lavash_Delivery_Platforms_Guide.html` — OK (нет версионированной html)
- `El_Lavash_Distribution_DB_v15.xlsx` — OK (v15 = latest)
- `El_Lavash_Business_Plan_v1.xlsx` — OK (нет более новой)

### Из index_az_v2.html (приватный, 15 рабочих)

- `El_Lavash_Critical_Review_v14_v1.html` — OK
- `El_Lavash_Verification_Report_v14_v1.html` — OK
- `El_Lavash_Cold_Calling_Analysis.html` — OK
- `El_Lavash_Tools_Stack.html` — OK
- `El_Lavash_Food_Brokers_Spain.html` — OK
- `El_Lavash_Account_Research_Top5.html` — OK
- `El_Lavash_Production_Costs.html` — OK
- `El_Lavash_Delivery_Services_Research.html` — OK
- `El_Lavash_Distribution_Strategy.html` — OK
- `El_Lavash_TODO.html` — OK
- `El_Lavash_SEO_Spain.html` — OK
- `El_Lavash_SEO_Europe.html` — OK
- `Transkripciya_v1.md` — OK
- `PROJECT_RULES_v2.md` — OK (v2 = latest)
- `CLAUDE.md` — OK

---

## ИТОГ

| Категория | Кол-во | Где править |
|---|---|---|
| BROKEN | 5 | 4 файла со ссылкой `index.html` (Business/Sales/Marketing/Financial) — либо создать `index.html` на сайте, либо заменить ссылки на `index_v22.html`. Скорее всего та же проблема в Battlecard/Market/Competitive/Retail — стоит проверить отдельно. |
| OUTDATED | 18 | 5 файлов: `index_az_v2.html` (→ v22) + 4 ключевых HTML (v8/v6) ссылаются друг на друга через старые v5/v6/v3. Cross-ссылки между Business/Sales/Marketing/Financial рассинхронизированы. |
| OK | 33 | Все ссылки публичного `index_v22.html` ведут на latest. |

### Главные риски

1. **Cross-ссылки между 4 стратегическими HTML устарели на 3 версии** (v5 в текстах при наличии v8). Если Элен в Marketing_Plan_v8 кликает «см. Sales Strategy» — попадает на v5, не v8.
2. **`index.html` не существует** — кнопка «← Назад к панели» во всех ключевых документах сломана.
3. **`index_az_v2` → `index_v21`** — приватный хаб ведёт на устаревший публичный.

### Что предлагается сделать (для фазы 2)

1. В 4 ключевых HTML (Business_Model_v8, Sales_Strategy_v8, Marketing_Plan_v8, Financial_Model_v6) — заменить все cross-ссылки на актуальные v8/v9/v6 + `href="index.html"` → `href="index_v22.html"` (либо создать `index.html` копией v22 на деплое).
2. В `index_az_v2.html` — заменить `index_v21.html` → `index_v22.html` (или создать v3 индекс az).
3. Дополнительно проверить тот же паттерн в: Battlecard_v1, Market_Analysis_v9, Market_Analysis_DEEP, Competitive_Analysis_v8, Retail_Prices_v6, Delivery_Plan_v4, Delivery_Platforms_Guide, roadmap_v8, protocol_v13 — там может быть тот же `index.html` и устаревшие cross-refs.
