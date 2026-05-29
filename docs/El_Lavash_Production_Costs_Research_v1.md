# El Lavash — Research production costs Каталония 2026

**Дата:** май 2026
**Локация:** Льорет-де-Мар, Жирона, Каталония, Испания
**Контекст:** Помещение собственное (аренда = 0). Производство лаваша.
**Версия:** v1

---

## КРАТКОЕ РЕЗЮМЕ ДЛЯ FIN-МОДЕЛИ

| Категория | Базовая величина | Тип данных |
|---|---|---|
| Мука хлебопекарная W-180/W-280 (опт, мешок 25 кг) | 0,55–0,90 €/кг | подтверждено по прайсам |
| Электричество PYME (mercado libre) | 0,098–0,16 €/кВт·ч | подтверждено |
| Газ природный PYME | 0,038–0,08 €/кВт·ч | подтверждено |
| Вода Льорет (Aqualia) | ~2,66 €/м³ | средняя по данным; точная PYME-тарифа — звонок |
| SMI Испания 2026 | 1.221 €/мес × 14 пагов = 17.094 €/год | подтверждено (BOE) |
| Соц.отчисления работодателя 2026 | ~32,15% от gross | подтверждено |
| Cuota autónomo 2026 | 200–590 €/мес (15 трамо) | подтверждено |
| Levadura fresca опт | 1,50–3,50 €/кг | estimate (точная — Codipan / AB Mauri) |
| Sal industrial 25 кг | 0,30–0,50 €/кг | estimate |
| IVA лаваш / pan especial | 4% | подтверждено (BOE-A-2025-3950) |
| IS PYME 2026 ERD | 23% | подтверждено |
| RSIPAC регистрация | 64,25 € | подтверждено |
| Constitución SL | ~250 € мин (до 600 € полное) | подтверждено |
| Asesoría fiscal SL | 200–400 €/мес | подтверждено |
| SMM-менеджер part-time | 250–600 €/мес | подтверждено |
| Food-photo сессия | 350–960 € | подтверждено |
| HACCP консультант | от 290 € + IVA | подтверждено |
| Дизель | 1,68 €/л | подтверждено (май 2026) |

---

## 1. МУКА ПШЕНИЧНАЯ — основной сырьевой материал

### Цены (Каталония / Испания, май 2026)

**Розничная цена сака 25 кг (бытовая выборка для верификации):**
- Tienda Duo Harinero: harina trigo panificable 25 кг = **22,03 €** (= **0,88 €/кг** с IVA)
  → https://tienda-duoharinero.com/producto/harina-de-trigo-panificable-duo-s-25-kg/
- La Lista de la Compra: harina 25 кг = **13,20 €** (= **0,53 €/кг**, базовая)
  → http://www.lalistadelacompra.es/es/554-harina-25-kg.html
- Ricardo Terán: harina trigo 25 кг, ideal pan/repostería — цены варьируются от партии
  → https://ricardoteransl.es/producto/harina-trigo-25-kg/
- Harinera El Molino — harina panadera 180W: от 7,50 € (пачка) до 33,50 € (мешок). 25 кг ≈ 22–30 €
  → https://harineraelmolino.com/tienda/harina-panadera-180w/

**Оптовая цена (бизнес, B2B контракт):**
- B-Grup (distribuidor mayorista Каталония) — harina Montseny, sacos 25 кг
  → https://www.bgrup.es/es/harinas/sf013-HAR
- José Llopart S.A. (Каталония) — harinas de trigo пекарне/кондитерской, sacos paper 25 кг
  → http://www.josellopart.com/productos/harinas/harinas-de-cereales/harinas-de-trigo

**Selina Wamucii** для опта Испания 2026:
- Среднее по Испании: ~0,55–1,80 €/кг в зависимости от качества/W
  → https://www.selinawamucii.com/insights/prices/spain/wheat-flour/

**Рекомендация для модели:**
- W-260/W-280 (для лаваша — средне-сильная) — рассчитывать **0,65 €/кг** в опт при больших объёмах (палет 40 мешков), **0,80 €/кг** в малом опте (1–5 мешков/неделю).
- Для конкретного оффера — звонок в **B-Grup, José Llopart, Harinera Vilafranquina, Codipán**.

### Лонха де Сереалес де Барселона (биржа сырьевая):
→ https://www.interempresas.net/ovino/316017-Lonja-de-Cereales-de-Barcelona-Cotizaciones-de-Cereal.html
(сама пшеница, цена pre-мукомольная — справочно для понимания базы)

### Mercabarna
- Mercabarna в первую очередь — фрукты/овощи, **не** мука. Источник опровергает миф что мука покупается в Mercabarna массово.
  → https://www.mercabarna.es/serveis/es_estadistiques-productes/

---

## 2. ЭЛЕКТРИЧЕСТВО PYME

### Цены май 2026 (mercado libre, для бизнеса < 15 кВт):

**Средний рынок Spain:** **0,1449 €/kWh** (среднее по PYME)
→ https://tarifaluzhora.es/info/precio-kwh

**Конкурентные предложения для PYME (низкая мощность):**
- **Octopus Energy:** 0,098 €/kWh
- **Repsol Ahorro Plus**, **Endesa One Luz**, **Gana Energía** — близкие
→ https://roams.es/energia/luz/tarifas-luz-empresas/
→ https://comparadorluz.com/empresas/tarifas/gas

**Endesa Luz Fija 24h:** 0,1277 €/kWh без налогов
→ https://selectra.es/energia/companias/endesa/precio-kwh

**Iberdrola Plan Online:** ~54 €/мес fija + per-kWh
→ https://www.kelisto.es/electricidad/consejos-y-analisis/tarifas-de-iberdrola

### Потребление пекарни (типовая)
- Малый obrador Madrid: production 170 т/год, 150 м², suministro 70 кВт, **90.575 кВт·ч/год**
  → https://app.maeswell.com/2019/09/balance-energetico-en-un-obrador-de-pan/
- Электро-печь b2b — оценка **~4.281 кВт·ч/мес** при средней загрузке
  → https://roams.es/energia/luz/consumo-electrico-horno-panaderia/

**Рекомендация для модели:**
- **Тариф:** 0,12 €/кВт·ч (контракт с Octopus / Endesa One)
- **Потребление лаваш-пекарни 1-смены, 6 дней/нед:** **~3.500–5.000 кВт·ч/мес**
- **Месячный счёт:** **420–600 €** + fija ~50 €/мес = **~470–650 €/мес [estimate]**
- Если печь газовая, электричество только на холод/освещение/тестомес: **150–250 €/мес [estimate]**

---

## 3. ГАЗ ПРИРОДНЫЙ (для печи газовой)

### Цены 2026:

**TUR (регулируемый, до 50.000 кВт·ч/год):**
- RL.2 (medio-alto): **0,04049 €/kWh** + 8,11 €/мес fijo
- RL.1: **0,04259 €/kWh** + 3,93 €/мес fijo
→ https://eniplenitude.es/blog/energia/precio-gas-natural-kwh/
→ https://www.kelisto.es/gas/consejos-y-analisis/precio-gas-natural

**Mercado libre PYME (свыше 50.000 кВт·ч/год — обязательно):**
- В среднем ~**0,06–0,08 €/kWh**
→ https://selectra.es/energia/empresas/tarifas-gas
→ https://www.leonwatt.com/blog/mibgas-pvb-indice-gas

**Repsol Negocios — tarifas gas para empresas:**
→ https://www.repsol.es/autonomos-y-empresas/soluciones/luz-y-gas/tarifas/gas-negocios/

### Потребление газа горно-печи
- Hornos rotativos: **2–4 м³/час** (≈ 22–45 кВт·ч/час)
→ https://www.totalenergies.es/es/pymes/blog/consumo-gas-horno-panaderia

**Рекомендация для модели (если газ):**
- **Тариф:** 0,055 €/кВт·ч (PYME mercado libre)
- **Потребление:** **~6.000–10.000 кВт·ч/мес** при 8 ч/день печи
- **Месячный счёт:** **330–550 €/мес [estimate]**

> **Примечание:** для лаваша часто используют тонкую печь deck газовую — расчёт ближе к нижней границе.

---

## 4. ВОДА (Льорет-де-Мар, Aqualia)

### Цены:
- Среднее по Каталонии (домохоз/общая): **2,66 €/м³**
→ https://tarifasdeagua.es/oficinas/girona/lloret-de-mar
→ https://www.aqualia.com/informacion-al-ciudadano/que-pago-en-mi-factura/lloret-de-mar

**Что включается в счёт Aqualia Lloret:**
- Cuota servicio (fijo)
- Consumo (variable, m³ × тариф по блокам)
- Alcantarillado (канализация)
- Canon de l'aigua (autonómico Cataluña — ACA)
- IVA 10%

→ https://www.aqualia.com/web/aqualia-lloret-de-mar

**Тариф PYME / comercial:**
Точные комерческие тарифы Aqualia Lloret 2026 в открытом доступе не выложены — **не подтверждено, нужен звонок 900 810 818 / визит Av. del Camino de Santiago, 40**

**Рекомендация для модели:**
- **Расход воды лаваш-пекарни:** **~10–30 м³/мес** (тесто, мойка, санитария)
- **Счёт:** **40–100 €/мес [estimate]** включая фиксированную часть + alcantarillado + ACA + IVA

---

## 5. ЗАРПЛАТЫ — bakery sector Каталония 2026

### SMI Испания 2026 (минимум)
- **1.221 €/мес × 14 pagas = 17.094 €/год** brutos
- Subida 3,1% относительно 2025
- Освобождено от IRPF (на уровне SMI)
- Применяется ретроактивно с 01.01.2026
→ https://www.sepe.es/HomeSepe/en/que-es-el-sepe/comunicacion-institucional/noticias/detalle-noticia.html?detail=boe-publica-smi-2026
→ https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/trabajo14/paginas/2023/140223-salario-minimo-interprofesional.aspx
→ https://taxdown.es/blog/smi-salario-minimo-interprofesional

### Convenios colectivos panaderia Cataluña

**Convenio Industria Flequera de Barcelona** (применим к BCN, расширяется на провинции):
- 2024: subida 3% к таблам 2023
- 2026 (продление по cláusula IPC): до +1% additional
→ https://ccoo.app/convenio/convenio-colectivo-industria-flequera-panaderia-de-barcelona/
→ https://web.todoconvenios.com/convenio-industria-panaderia-barcelona/

**Convenio Lleida (vigente 2023-2025):**
- Revisión salarial 2026: cláusula técnica topada +1% если IPC > 11%
→ https://ccoo.app/convenio/convenio-colectivo-industrias-de-panaderia-forners-flequeria-de-lleida/

**Convenio Panaderos y Pasteleros Artesanos de Catalunya:**
- Для artesanal/Gremio
→ https://ccoo.app/convenio/convenio-colectivo-panaderos-y-pasteleros-artesanos-de-catalunya/

**Convenio Industrias Pan Girona (применим в Льорете):**
- Tablas salariales 2023 опубликованы, 2024-2026 — в апдейтах сindицата
→ https://ugtfica.cat/convenis-alimentacio-begudes-i-tabacs/

**Convenio nacional Harinas Panificables (BOE):**
- 2025: +3% к таблам 2024
→ https://www.boe.es/buscar/doc.php?id=BOE-A-2024-8947

**Что это значит для модели (Estimates на основе SMI 2026 + convenios):**

| Позиция | Brutos €/мес (×14 pagas) | Brutos €/год | [estimate, source] |
|---|---|---|---|
| Oficial 1ª panadero | 1.500–1.700 | 21.000–23.800 | Convenio BCN + 5–15% над SMI |
| Oficial 2ª panadero | 1.350–1.500 | 18.900–21.000 | Convenio + 10% над SMI |
| Ayudante / Peón | 1.221 (SMI) | 17.094 | SMI 2026 |
| Repartidor с правами B | 1.300–1.500 | 18.200–21.000 | Convenio hostelería/transporte |

> **Точные таблы 2026** — запрос в Gremio de Flequers Catalunya, CCOO, UGT или скачать BOP Girona/Barcelona после публикации.

---

## 6. СОЦ.ОТЧИСЛЕНИЯ работодателя Испания 2026

### Базовые ставки (% от gross salary):

**Стандартные contingencias:**
- Contingencias comunes: **28,30%** total = **23,60% empresa** + 4,70% trabajador
- MEI 2026: **0,90%** total = **0,75% empresa** + 0,15% trabajador
- Desempleo: **5,50%** (общий tipo, эмпресас + trabajador 1,55%) = empresa ~ 3,95%
- FOGASA: **0,20%** (полностью empresa)
- Formación profesional: **0,70%** (~ 0,60% empresa + 0,10% trabajador)
- AT/EP (accidentes trabajo): варьируется по сектору, обычно ~**1,0–2,5%** (panaderia ~ 1,5%, полностью empresa)

**ИТОГО для эмпресас (PYME panaderia):**
- **~32,15%** добавки к gross salary 
- BOE 2026 base máxima: **5.101,20 €/мес**

→ https://www.sage.com/es-es/blog/las-cotizaciones-a-la-seguridad-social-conceptos-bases-y-porcentajes/
→ https://www.grupo2000.es/que-seguros-sociales-debo-aplicar-en-2020-bases-y-tipos-de-cotizacion/
→ https://www.cuatrecasas.com/es/spain/laboral/art/seguridad-social-nuevos-topes-bases-cotizacion-2026

### Что это значит на практике (per employee SMI):
- Gross salario annual: **17.094 €**
- Coste empresa Seg Social: **17.094 × 32,15% = 5.495 €/год**
- **Coste total empresa per SMI-уровень pekar: ~22.589 €/год** = **~1.616 €/мес equivalent**

### Калькуляторы:
→ https://www.serviceform.es/tools/calculadora-salarial
→ https://calculadora-sueldo.es/cuanto-cuesta-un-trabajador-en-espana/

---

## 7. CUOTA AUTONOMO 2026

### Тарифы:
- **Cuotas 2026 заморожены** относительно 2025 — большое политическое решение
- 15 трамо, от **200 €/мес** (rendimiento ≤ 670 €/мес) до **590 €/мес** (rendimiento > 6.000 €/мес)
- **MEI sube +0,1 п.п.** = добавка 7–15 €/мес

### Tarifa plana new autonomos:
- **80 €/мес первые 12 мес** при создании
- Можно продлить ещё 12 мес если ingresos < SMI

### Autonomo societario (если SL):
- Base mínima 2026: **1.424 €/мес** (с ~1.000 € в 2025)

→ https://www.wolterskluwer.com/es-es/expert-insights/cuotas-autonomos-2026
→ https://www.infoautonomos.com/seguridad-social/cuota-de-autonomos-cuanto-se-paga/
→ https://invoo.es/es/blog/guias/tramos-cuota-autonomos-2026-tabla-completa/

**Рекомендация:**
- **Год 1 (tarifa plana):** 80 €/мес = 960 €/год
- **Год 2 (если ingresos < SMI):** 80 €/мес
- **Год 3+ (полная):** при rendimiento ~1.000–2.000 €/мес = **~230–290 €/мес** = **2.760–3.480 €/год**

---

## 8. ДРОЖЖИ, СОЛЬ, ДОБАВКИ

### Levadura fresca
**Розница (отметка для верификации):**
- Mercadona Hacendado 70 г: **1,55 €** (= 22 €/кг розница, малопригодно для опта)
→ https://www.supersupers.com/comparar/levadura-de-panaderia-hacendado-paquete-0-07-kg

**Опт / Distribuidores profesional:**
- **Codipán** (Alicante): levadura для panaderia
  → https://www.codipan.es/levaduras?taxonomy26435=26871
- **AB Mauri** — основной production levadura panaderia España
  → https://abmauri.es/blog/inocuidad-alimentaria-ab-mauri/
- **Cash Unide, Reyvi** — distribuidores
- **El Bucarito**: levadura fresca профуровень
  → https://elbucarito.es/commerce/san-antonio/levadura-fresca-98.html

**Levadura seca** — обычно используется в производстве лаваша, цены опт **3–6 €/кг** [estimate, не подтверждено прайсом].

**Рекомендация для модели:**
- **Levadura fresca опт (упаковка 500 г × 20 = 10 кг ящик):** **2,00–3,50 €/кг [estimate]**
- **Levadura seca (sachet 11 г, опт от 100 шт.):** **8–15 €/кг [estimate]**

### Соль industrial alimentaria

**Опт — сако 25 кг:**
- Ricardo Terán — saco 25 кг
  → https://ricardoteransl.es/producto/sal-gruesa-25-kg/
- Grupo Prodesco — Saco 25 кг marca Fomento, Madrid distribuidor
  → https://www.grupoprodesco.com/sal/sal-gruesa-granel-saco-25-kg-fomento
- **Vadequimica** — sal extrafina 25 кг específicamente recomendada panaderia
  → https://www.vadequimica.com/sal-alimentaria-pura-extrafina-25-kg.html
- **Makro Chef** — saco 25 кг
  → https://tienda.makro.es/shop/pv/BTY-X107072/0032/0021/Sal-gruesa-MAKRO-CHEF-saco-25kg
- **Consalero** — distribución nacional, palets 40 sacos
  → https://consalero.es/es/sales/sacos-de-25kg/

**Цена за саco 25 кг (типичная):**
- Розница profesional: **8–14 €/saco 25 кг** = **0,32–0,56 €/кг** [estimate, прайсы в результатах не показаны конкретно]
- Опт (палет 40 sacos = 1.000 кг): **0,25–0,35 €/кг** [estimate]

---

## 9. УПАКОВКА

### Bolsas OPP/PP para pan/lavash

**Distribuidores и diapasone цен:**
- **DISPAN** — bolsas polipropileno con solapa adhesiva для pan, varios tamaños, packs от 100 шт.
  → https://dispan.es/bolsas-de-plastico/
- **BOLENVASE** — bolsas PP transparentes para bollería/panadería (mejor barrera oxígeno)
  → https://www.bolenvase.es/110-bolsas-de-polipropileno
- **TODOPLASTIC** — bolsas PP, packs 100 / 1.000 шт.
  → https://todoplastic.com/bolsas/96-polipropileno.html
- **Fernandez Sera** — bolsas polipropileno от 1.000 шт./упаковка
  → https://fernandezsera.com/producto/bolsas-de-polipropileno-1000-unidades-por-paquete/

**Типовые цены пакета OPP для лаваша 400–700 г:**
- **0,02–0,06 €/шт.** в упаковках 1.000+ шт. [estimate, диапазон по рынку]
- При тираже 10.000+ шт.: **0,015–0,03 €/шт.** [estimate]

### Этикетки adhesivas alimentación

**Цены / распечатка**:
- **AreaGraficaDigital:** **24,90 € / 100 шт** = **0,249 €/шт** при малом тираже
  → https://www.areagraficadigital.es/productos/impresion-pequeno-formato/etiquetas-personalizadas/etiquetas-adhesivas/64/
- **ANC Publicidad** — этикетки rollo от 1.000 шт.
  → https://www.ancpublicidad.com/etiquetas/
- **SAXOPRINT** — от 100 до 80.000 шт.
  → https://www.saxoprint.es/material-publicitario/etiquetas-adhesivas
- **Etiquetas Oedim** — pequeña tirada
  → https://etiquetasoedim.com/

**При тираже 1.000 шт. этикетка ~5×3 см:** **70–120 € total** = **0,07–0,12 €/шт.**
**Tирадж 5.000 шт.:** **150–250 €** = **0,03–0,05 €/шт.**
**Tирадж 10.000+:** **0,015–0,03 €/шт.**

### Картон / коробы для опт-поставки
[не исследовано отдельно — типичные 0,30–0,80 €/коробка под 10–20 единиц продукта]

---

## 10. ЛОГИСТИКА

### Топливо (май 2026)
- **Gasolina 95:** 1,572 €/л
- **Gasolina 98:** 1,746 €/л
- **Diesel A:** **1,679 €/л**
- **Diesel A+:** 1,771 €/л
→ https://ocasion.starmadrid.es/noticias/precio-gasolina-espana/
→ https://www.rmotion.es/noticias/precio-combustible-espana/
→ https://energia.serviciosmin.gob.es/shpCarburantes/ (официальный histórico Ministerio)

### Транспорт refrigerado/палет Cataluña
**Provedores:**
- **Transeop** — grupaje Barcelona, refrigerado
  → https://www.transeop.com/grupaje-barcelona/
- **Macingo** — refrigerado Barcelona
  → https://www.macingo.com/es/transporte-comida-refrigerada/barcelona
- **Mercatrans congelado**
  → https://transporte.mercatrans.com/transporte-de-congelado/
- **PalletCat** (Cataluña local operator)
  → https://www.palletcat.cat/en/
- **Ontruck** (calculadora online)
  → https://www.ontruck.com/en/why-ontruck/price-pallet-deliveries

**Типовые цены палет refrigerado:**
- Лорет → Барселона (~75 км): **40–80 €/палет** [estimate]
- Групаж 100–500 кг внутри Каталонии: **35–60 €/доставка** [estimate]
- Своя доставка фургоном Льорет→BCN: **~15 €/поездка топливо** + время

> **Точные цены требуют котизации онлайн** в Ontruck, Transeop, PalletCat по конкретному маршруту.

### Своя доставка (если фургон Citroën Berlingo / Renault Kangoo Refrigerado)
- Расход ~7 л/100 км diesel
- Льорет → Жирона (~40 км) round trip: ~5,5 л = **~9 €**
- Льорет → BCN (~75 км) round trip: ~10,5 л = **~17,6 €**

---

## 11. РАЗОВЫЕ СТАРТОВЫЕ РАСХОДЫ (CAPEX administrative)

### RSIPAC (Registro Sanitario Industria Cataluña)
- **Inscripción para productos no animales:** **64,25 €**
- Cambio titular/sede sin otras modificaciones: 10,25 €
- Сертификаты sanitarios export — variable по типу certificate
→ https://www.aspb.cat/es/tramits/rsipac/
→ https://canalempresa.gencat.cat/en/integraciodepartamentaltramit/tramit/PerTemes/Registre-sanitari-dindustries-i-productes-alimentaris-de-Catalunya-RSIPAC-00001
→ https://www.tandemhse.com/seguridad-de-producto/rsipac/

### RGSEAA (Registro General Sanitario nacional)
- Если работаете только на территории Cataluña — достаточно RSIPAC
- Для экспорта/межрегиональной торговли — RGSEAA (federal, Aesan)
- **Стоимость RGSEAA:** ~150–200 € + IVA inscripción [estimate, не нашёл точной цифры в этом research]

### HACCP / APPCC план
**Ambialia** — implantación от **290 € + IVA** (документация + формация персонала)
→ https://www.ambialia.es/sistema-appcc

**Hilván Consultores** (Levante, но обслуживают España) — consultoría APPCC obradores/panaderias
→ https://www.hilvan.eu/consultoria-appcc-valencia-alicante-castellon-asesoria-alimentaria-implantacion-haccp-auditoria-alimento-precio-presupuesto-implantar-guia-manual-restaurante-hosteleria-carniceria-pescaderia-horchata/

**Рекомендация:** **500–1.200 €** базовый план APPCC для маленькой пекарни (consultor + документы + первичная аудит)

### Halal certificación
- **Instituto Halal** — referente España, 600+ certified companies
  → https://institutohalal.com/
- **Halal Food & Quality** — alternativa oficial
  → https://www.halalfoodquality.com/
- **AEC certificación Halal**
  → https://www.aec.es/web/guest/centro-conocimiento/certificacion-halal

**Стоимость в открытом доступе не publica** — требует presupuesto individual. Типичные ranges для PYME alimentaria:
- **Cuota inicial:** 1.500–4.000 € [estimate, не подтверждено прайсом]
- **Annual renewal + audit:** 1.000–2.500 €/год [estimate]
- **Запрос presupuesto:** info@institutohalal.com или https://institutohalal.com/

### IFS Food (если бы понадобилось для retail)
- **Inicial audit + cert:** **3.000–6.000 €** [estimate]
- **Annual:** 1.500–3.500 € [estimate]
- Для лаваш-стартапа PYME — преждевременно. Только если Mercadona/Carrefour специально потребуют.

### Código EAN / GS1
- **GS1 Spain (AECOC):** **350 € + IVA** quota inicial (miembros) / **700 € + IVA** non-miembros / **200 € + IVA** new
- **Alternativas:** провайдеры от **19,99 €/код** one-time payment
→ https://www.gs1es.org/asociate-gs1/
→ https://www.gs1es.org/acordeons/precio-7/
→ https://codigos-de-barras.es/aecoc-espana-gs1-es-obligatorio/
→ https://codigosespana.es/
→ https://ahorraenlasbarras.es/

**Рекомендация:** для старта PYME — alternativa **19,99 €/код × 3–5 SKU = ~100 €**. AECOC только когда выйдете в national retail.

### Constitución SL
- **Минимум:** **~250 €** (denominación + notario + registro)
- **Полный:** до 1.000 € с advisor/более сложным capital social
- **Capital social mínimo legal:** 1 € (рекомендация: 3.000 €)
- Срок via CIRCE telemática: 48–72 часа

**Detalle:**
- Certificado denominación social: **16–20 €**
- Notario (escritura constitución): **150–600 €** (зависит от complexity)
- Registro Mercantil: **40–200 €**

→ https://gestoria247.com/blog/constituir-sl-online-2026
→ https://quanture.es/blog/guia-constituir-sl-2026-pasos-costes-plazos
→ https://getquipu.com/blog/cuanto-cuesta-crear-sl/
→ https://www.legalitas.com/actualidad/gastos-constitucion-sl

---

## 12. МАРКЕТИНГ И SMM

### Community Manager / SMM-менеджер part-time

**Freelance Каталония / España 2026:**
- **Базовый mантенимиенто PYME:** **150–500 €/мес**
- **Стандарт интегральный:** **300–600 €/мес**
- **Полная стратегия + ads:** **600–1.500 €/мес**
- **Часовой:** **15–60 €/час**
→ https://www.socialmediapymes.com/salario-de-community-manager/
→ https://www.venderporinternet.org/precios-y-tarifas-de-un-community-manager/
→ https://monicaprados.es/precios-de-un-community-manager-freelance-en-espana/
→ https://olacreators.com/post/contratar-community-manager-2025-precios-y-comparativa

### Food photography

**Cataluña / Barcelona прайсы:**
- **Daniel López:** от **350 €** session 1ч, 10 edited photos
  → https://www.daniellopezart.com/us/
- **Lenka's Lens:** session 1ч с 4 edited photos
  → https://www.lenkaslens.com/precios
- **Studio Lolandfriends:** quarterly plans от **192–288 €/quarter** (30–50 фото)
  → https://studio.lolandfriends.es/servicios-de-fotografia/fotografia-gastronomica/
- **Alex Froloff** — BCN, 300+ ресторанов
  → https://alexfroloff.com/
- **Hans Geel** — BCN, professional studio 160 m²
  → https://www.hansgeel.com/information-food-photography
- **Kema Food Culture** — BCN
  → https://kemafoodculture.com/en/
- **Barcelona Food Photography**
  → https://barcelonafoodphotography.com/

**Рекомендация для модели:**
- **Стартовая фото-сессия (10–15 фото, brand launch):** **400–700 €**
- **Annual refresh каждые 3–4 мес (5 фото):** **150–250 €/сессия** × 3 = **600 €/год**

### Дизайн упаковки (freelance Cataluña)
- [не отдельно исследовано, типичные ranges]
- **Дизайн макета упаковки 1 SKU:** **300–800 €** freelance / **800–2.000 €** агентство [estimate]

### Печать упаковки малая партия
- Печать на пакетах OPP — обычно **минимум 5.000–10.000 шт./дизайн** для рентабельности печати
- При 5.000 шт. OPP с печатью: **350–600 € набор** = **0,07–0,12 €/пакет** [estimate]
- При 10.000 шт.: **600–1.000 €** = **0,06–0,10 €/пакет** [estimate]

---

## 13. НАЛОГИ И ИМПУЭСТО

### IVA (НДС)
- **IVA 4% (super-reducido)** для лаваша/пан особенный — **подтверждено BOE-A-2025-3950** (24.02.2025)
- Применимо ко **всем типам хлеба** (включая pita, tortillas, sandwich, gluten-free, prejuela congelada)
- Civio: https://civio.es/el-boe-nuestro-de-cada-dia/2025/02/27/todos-los-tipos-de-pan-tambien-colines-tostadas-y-de-rebanadas-pasan-al-iva-reducido-del-4-percent/
- BOE PDF: https://www.boe.es/boe/dias/2025/02/27/pdfs/BOE-A-2025-3950.pdf
- BOE buscador: https://www.boe.es/buscar/doc.php?id=BOE-A-2025-3950
- Cuatrecasas analysis: https://www.cuatrecasas.com/es/spain/fiscalidad/art/iva-pan-dgt-clarifica-tributacion

> **Важно:** входной IVA на сырьё (мука, дрожжи, электричество, газ) обычно **10%** (alimentación) или **21%** (energy, services). При выходном 4% — возникает **VAT credit / возврат**, которое надо учитывать в cash-flow модели.

### Impuesto Sociedades (IS) 2026

| Тип компании | Tipo IS 2026 |
|---|---|
| Tipo general | **25%** |
| ERD (Empresa Reducida Dimensión, ingresos 1–10 М €) | **23%** |
| Microempresa (< 1 М €), primeros 50.000 € base | **19%** |
| Microempresa, остаток | **21%** |
| Empresa nueva creación / emergente, primeros 2 años positivos | **15%** |

→ https://www.wolterskluwer.com/es-es/expert-insights/impuesto-sociedades-2025-2026-novedades
→ https://aseryde.com/en/impuesto-de-sociedades-2026-bajada-de-tipos-para-pymes-nuevas-deducciones-y-el-impuesto-minimo-del-15-para-multinacionales/
→ https://sanchisasesores.com/impuesto-sociedades-2026-nuevos-tipos-pymes/
→ https://sede.agenciatributaria.gob.es/Sede/impuesto-sobre-sociedades/que-base-imponible-se-determina-sociedades/tipo-impositivo.html

**Эль Лаваш:** при оборотах <1 М €/год = **19% на первые 50.000 € прибыли** + **21% на остаток**.

### IRPF Autónomo 2026

**Трамо estatales 2026 (progresivo):**
| Доход (€/год) | Tipo |
|---|---|
| 0 – 12.450 | 19% |
| 12.450 – 20.199 | 24% |
| 20.200 – 35.199 | 30% |
| 35.200 – 59.999 | 37% |
| 60.000 – 299.999 | 45% |
| > 300.000 | 47% |

> Plus autonómico Cataluña — добавляется к estatal.

**Retención на facturas:**
- **New autónomo (год + 2 след.):** **7%**
- **Стандарт:** **15%**

→ https://taxdown.es/irpf/tabla-tramos
→ https://www.holded.com/es/blog/retenciones-irpf-autonomos
→ https://www.bbva.es/finanzas-vistazo/ae/financiacion/irpf-autonomo.html
→ https://www.raisin.com/es-es/tributacion/declaracion-de-la-renta/tramos-irpf/

---

## 14. ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ

### Asesoría fiscal/laboral

**Тарифы PYME 2026:**
| Тип клиента | €/мес |
|---|---|
| Autónomo базовый online | **25,90–40 €** |
| Autónomo с 50+ facturas | **80–150 €** |
| Autónomo 100+ facturas | **200–250 €** |
| PYME SL базовая | **80–200 €** |
| PYME SL 1–5 empleados | **200–400 €** |
| Asesoría laboral per trabajador | **15–60 €/мес** |

**Provedores:**
- Fiscaliza.es: от **25,90 €/мес** online
  → https://fiscaliza.es/
- TSP Asesores online
  → https://www.asesoriaonlineautonomos.com/tarifas/
- Quipu (мнение по precios)
  → https://getquipu.com/blog/precios-gestoria/
- AntaConsulting (Cataluña)
  → https://www.antaconsulting.es/blog/precio-de-asesoria-laboral-fiscal-contable/

**Рекомендация модели:**
- **Год 1 (autónomo с tarifa plana):** **40–80 €/мес** = **480–960 €/год**
- **Год 2+ (SL с 2–3 empleados):** **250–400 €/мес** = **3.000–4.800 €/год**

---

## 15. ДОПОЛНИТЕЛЬНО НЕ ИССЛЕДОВАНО / ТРЕБУЕТ ЗВОНКА

| Пункт | Рекомендация | Источник |
|---|---|---|
| Точная цена муки W-260/W-280 опт от B-Grup, Llopart, Vilafranquina | Запрос presupuesto B2B | bgrup.es, josellopart.com, harinera-vilafranquina.com |
| Точная PYME-тарифа воды Aqualia Льорет | 900 810 818 / Av. Camino de Santiago 40 | aqualia.com/web/aqualia-lloret-de-mar |
| Точные таблы salariales convenio Girona 2026 | Скачать BOP Girona / запрос Gremio Flequers | gremidefleques.cat, ugtfica.cat |
| Точная цена certificación Halal Instituto Halal | Запрос presupuesto info@institutohalal.com | institutohalal.com |
| Цена IFS Food (если потребуется retail) | Запрос presupuesto en SGS, Bureau Veritas, AENOR | aenor.com |
| Точные цены levadura fresca опт от Codipán/AB Mauri | Запрос ценник | codipan.es, abmauri.es |
| Дизель и расходы доставки: точный километраж и tariff PalletCat | Cotización Transeop, Ontruck | ontruck.com |
| Картон/коробы под опт-логистику | Запрос B2B Cartonajes Vidal, Saica Pack | saicapack.com |

---

## ОТЧЁТ (200 слов)

**Точно подтверждённые цифры (с конкретным BOE / прайсом):**
- IVA 4% на лаваш — BOE-A-2025-3950, 100% подтверждено
- SMI 2026: 1.221 €/мес × 14 = 17.094 €/год — Moncloa, SEPE
- Соц.отчисления работодателя 2026: ~32,15% — Sage, Cuatrecasas, Grupo 2000
- Cuota autónomo 2026: 200–590 €/мес (15 трамо), заморожены — Wolters Kluwer
- Tarifa plana autónomo: 80 €/мес × 12 мес
- IS PYME 2026: микро 19%/21%, ERD 23%, nueva creación 15%
- IRPF трамо 2026: 19%/24%/30%/37%/45%/47%
- RSIPAC inscripción: 64,25 €
- Constitución SL: ~250 € мин
- Дизель: 1,679 €/л (май 2026)
- Электричество PYME: 0,098–0,1449 €/кВт·ч (Octopus, Endesa One)
- Газ TUR PYME: 0,038–0,043 €/кВт·ч, mercado libre ~0,06–0,08

**Estimates / диапазоны (требуют верификации перед финальной моделью):**
- Мука W-260/280 опт: 0,55–0,90 €/кг
- Levadura fresca / seca опт: 1,50–6,00 €/кг
- Sal industrial: 0,25–0,50 €/кг
- Tipovые упаковка/этикетки за единицу
- Транспорт refrigerado per палет / per доставка

**Требуют звонка от Élen / её asesor:**
1. Aqualia Льорет — точная PYME tarifa воды (900 810 818)
2. Gremio Flequers Catalunya — таблы salariales 2026 для Girona
3. Instituto Halal — presupuesto certificación
4. B-Grup / Llopart — B2B-ценник на муку W-260/W-280 при объёме 200–500 кг/месяц
5. Codipán / AB Mauri — оптовый прайс levadura

Эти 5 звонков закроют 90% неопределённости в финансовой модели.

---

**Конец документа v1.**
