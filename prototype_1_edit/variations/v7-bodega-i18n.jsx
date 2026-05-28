// V7 — Bodega Pop
// Energy: Omsom × Graza × real-life Mexican/Armenian corner-store packaging.
// Loud blocks of yellow/red/cream pulled straight from the logo, chunky retro
// display type (Yeseva One), starburst stickers, halftone placeholders, and a
// "fusion supermercado" menu that owns the joke: El (Spanish) + Lavash
// (Armenian) = a fictional immigrant-fusion brand.

const bp = {
  // tokens
  cream:  '#F5EAD2',
  cream2: '#EFE0BF',
  paper:  '#FBF4E1',
  yellow: '#F4C430',
  yellowDeep: '#E0A800',
  red:    '#E32726',
  redDeep:'#B0181A',
  brown:  '#5C3A1E',
  dark:   '#231209',
  ink:    '#1A0D05',
  mint:   '#3F8A4F',
  coral:  '#FF8B5C',
  blueInk:'#1F3A8A',
};

/* =========================================================================
   CONTENT — bilingual ES / RU
   ========================================================================= */
const C = {
  es: {
    tickerTop: ['EL LAVASH · SUPERMERCADO','DESDE 2026','PAN PLANO PARA LA GENTE','½ DOCENA · €4,50','ENVÍO PENINSULAR · 24H','LLORET DE MAR · CAT'],
    tickerBig: ['JUGOSO','CRUJIENTE','RECIÉN HORNEADO','HECHO A MANO','A LA PIEDRA','SIN PRISAS'],
    heroLot: "LOT №2607 · MAR ‘26",
    heroBag: "Cesta · 0",
    nav: ['El Pan','La Tienda','El Menú','Bodegas','Hola'],
    heroKick: "★ EL LAVASH · SUPERMERCADO · DESDE 2026 ★",
    h1: ['Pan plano','para la','gente.'],
    heroLead: "Lavash de toda la vida, hecho a mano en la Costa Brava. Tres mil años de pan plano, cero pretensiones.",
    btnBuy: "Comprar — €4,50",
    btnTry: "Probar gratis",
    badges: ['Recién horneado','Sin aditivos','Vegano','Hecho a mano'],
    label: { tag:"PAN PLANO ARTESANO", rows:[['NETO','480 G'],['UNIDADES','6 LÁMINAS'],['HORNO','480°'],['LOTE','2607–014']], priceSub:"la docena 1/2" },
    recipeKick: "★ LA RECETA ★",
    recipeH2: "Cuatro cosas. Nada más.",
    ingr: [
      { name:"Trigo", sub:"Catalunya · Ecológico" },
      { name:"Agua",  sub:"Manantial · Empordà" },
      { name:"Sal",   sub:"Delta de l'Ebre" },
      { name:"Fuego", sub:"Horno de leña · 480°" },
    ],
    catKick: "★ EL CATÁLOGO ★",
    catH2: "De la nevera a tu cesta.",
    catSub: "Tres formatos. Misma masa. Recién hechos cada mañana entre las 5 y las 9.",
    products: [
      { name:"El Clásico",  tag:"ORIGINAL",      price:"€4,50", unit:"6 láminas · 480g", note:"El de toda la vida. 38 segundos en piedra.", sticker:"MÁS\nVENDIDO" },
      { name:"El Integral", tag:"100% INTEGRAL", price:"€5,20", unit:"6 láminas · 510g", note:"Trigo entero. Sabor a campo. Va con todo.", sticker:"ALTO\nFIBRA" },
      { name:"El Especial", tag:"CON SEMILLAS",  price:"€5,80", unit:"4 láminas · 380g", note:"Sésamo, comino negro, hinojo. Edición de fin de semana.", sticker:"LIMITADO" },
    ],
    addBtn: "Añadir →",
    receipt: { store:"EL LAVASH · SUPERMERCADO", addr:"Carrer Sant Pere 14 · Lloret de Mar · CIF B-12345678",
      items:[["1 × El Clásico 480g","4,50"],["2 × El Integral 510g","10,40"],["1 × El Especial s/s","5,80"],["1 × Shawarma Bodega","8,50"],["1 × Tikka Taco","7,80"],["1 × Dulce de Abuela","5,90"]],
      total:"TOTAL", totalVal:"42,90", thanks:"— gracias por venir —" },
    menuKick: "★ ¡EL MENÚ FUSIÓN! ★",
    menuH2: ['Cocina sin','fronteras,','con mucho pan.'],
    menuLead: "Seis recetas que solo tienen sentido en nuestra bodega. Nuestros clientes las piden por su número. Tú también puedes.",
    dishes: [
      { name:"Shawarma Bodega",   price:"€8,50", desc:"Cordero, salsa de yogur con ajo, cebolla encurtida, pimientos del piquillo.", tag:"CLÁSICO" },
      { name:"Tikka Taco",        price:"€7,80", desc:"Pollo tikka, salsa verde, cilantro, cebolla morada. La confusión más rica.", tag:"PICANTE" },
      { name:"Asado Armenian",    price:"€9,20", desc:"Ternera marinada 24h en granada y romero. Brasa lenta. Lavash caliente.", tag:"LENTO" },
      { name:"Banderillas El Aram", price:"€6,40", desc:"Aceitunas, queso halloumi, tomate seco. Lavash crujiente como guarnición.", tag:"VEGETARIANO" },
      { name:"Falafel a la Brava", price:"€7,20", desc:"Falafel casero, salsa brava, alioli. Crujiente fuera, suave dentro.", tag:"VEGANO" },
      { name:"Dulce de Abuela",   price:"€5,90", desc:"Lavash dulce, miel de romero, queso fresco, nueces. Postre de domingo.", tag:"POSTRE" },
    ],
    dishCta: "pedir →",
    storyKick: "★ LA HISTORIA ★",
    storyH2: ['De Dnipró','a la Costa Brava.'],
    storyP1: "Elen llegó desde Dnipró — primero por Ucrania, después aquí, a la Costa Brava. Y decidió hacer lo que mejor sabe: lavash de verdad, a mano.",
    storyP2: "Así nació El Lavash. Una pequeña producción, sin cadenas ni franquicias. Solo buen pan plano, hecho cada mañana.",
    storySign: "— Elen",
    portraits: [ { name:"ELEN", sub:"la fundadora" }, { name:"ELEN", sub:"al horno" } ],
    mapKick: "★ ENCUÉNTRANOS ★",
    mapH2: "14 bodegas. Una costa.",
    locations: [
      ['Lloret de Mar', 'Carrer de Sant Pere 14', 'Bodega madre'],
      ['Tossa de Mar', "Plaça d'Espanya 3", 'Lun–Sab'],
      ['Blanes', 'Mercat Municipal · Parada 12', 'Mar–Dom'],
      ['Sant Feliu', 'Carrer Major 78', 'Lun–Sab'],
      ['Palafrugell', 'Plaça Nova 5', 'Mar–Sab'],
      ['Begur', 'Carrer Bonaventura 9', 'Vie–Dom'],
      ['Cadaqués', 'Riba Pianc 4', 'Solo verano'],
    ],
    mapMore: "+7 más bodegas →",
    clubKick: "★ EL CLUB ★",
    clubH2: ['Diez lavash','el onceavo va por la casa.'],
    clubP: "Apúntate a la lista de la bodega. Recetas raras, nuevos sabores, y un correo cada dos semanas — el viernes, justo antes del horno de la tarde.",
    clubPlaceholder: "tu@correo.es",
    clubBtn: "Unirse →",
    clubFine: "Sin spam. Solo pan. Cancelas cuando quieras.",
    punch: { card:"TARJETA DE FIDELIDAD · №00142", count:"llevas 4 de 10", free:"EL 11º POR LA CASA" },
    faqKick: "★ DUDAS ★",
    faqH2: ['Preguntas que nos hacen','en la barra del bar.'],
    faqs: [
      { q:"¿Qué es lavash exactamente?", a:"Pan plano armenio, fino, hecho con tres ingredientes y mucha paciencia. UNESCO lo declaró patrimonio inmaterial en 2014. Nosotros lo declaramos delicioso desde siempre." },
      { q:"¿Cuánto dura?", a:"Cinco días en la nevera envuelto en paño. Cuatro meses en el congelador. Si se pone duro: 30 segundos al vapor y vuelve a la vida." },
      { q:"¿Hacéis envíos?", a:"A toda la península, lunes a jueves. Empaquetado en cartón sin plástico. Llega al día siguiente, fresco." },
      { q:"¿Sin gluten?", a:"No. El lavash es trigo, agua, sal, fuego. Sin trigo no es lavash. Lo sentimos." },
      { q:"¿Mayorista?", a:"Sí. Si tienes restaurante, bodega o tienda y quieres venderlo, escríbenos. Mínimo 50 láminas." },
      { q:"¿Por qué El Lavash y no Lavash?", a:"El (de aquí) + Lavash (de allá). Dos sitios en un solo nombre." },
    ],
    igKick: "★ INSTAGRAM ★",
    igH2: "Pan fresco, todos los días.",
    igLine: "El horno, la masa y la costa — cada día en nuestro Instagram.",
    igBtn: "Seguir en Instagram →",
    foot: {
      name:"El Lavash · Supermercado", addr:"Carrer de Sant Pere 14 · Lloret de Mar · Catalunya",
      cols:[ {h:"El Pan", links:["Clásico","Integral","Especial"]}, {h:"La Casa", links:["La historia","El horno","Prensa"]}, {h:"Contacto", links:["hola@ellavash.es","+34 972 33 12 14","Instagram"]} ],
      meta:["© 2026 El Lavash SL","CIF B-12345678","Lloret de Mar · ESP","Hecho con harina · agua · sal · fuego"],
    },
    switchLabel: "IDIOMA",
  },

  ru: {
    tickerTop: ['EL LAVASH · СУПЕРМАРКЕТ','С 2026 ГОДА','ПЛОСКИЙ ХЛЕБ ДЛЯ ЛЮДЕЙ','½ ДЮЖИНЫ · €4,50','ДОСТАВКА · 24 Ч','ЛЬОРЕТ-ДЕ-МАР · CAT'],
    tickerBig: ['СОЧНЫЙ','ХРУСТЯЩИЙ','ИЗ ПЕЧИ','РУЧНАЯ РАБОТА','НА КАМНЕ','БЕЗ СПЕШКИ'],
    heroLot: "ПАРТИЯ №2607 · МАР ‘26",
    heroBag: "Корзина · 0",
    nav: ['Хлеб','Магазин','Меню','Точки','Привет'],
    heroKick: "★ EL LAVASH · СУПЕРМАРКЕТ · С 2026 ★",
    h1: ['Плоский хлеб','для','людей.'],
    heroLead: "Настоящий лаваш ручной работы, с Коста-Бравы. Три тысячи лет плоскому хлебу — и ноль пафоса.",
    btnBuy: "Купить — €4,50",
    btnTry: "Попробовать",
    badges: ['Прямо из печи','Без добавок','Веган','Ручная работа'],
    label: { tag:"ЛАВАШ РУЧНОЙ РАБОТЫ", rows:[['ВЕС','480 Г'],['ШТУК','6 ЛИСТОВ'],['ПЕЧЬ','480°'],['ПАРТИЯ','2607–014']], priceSub:"за полдюжины" },
    recipeKick: "★ РЕЦЕПТ ★",
    recipeH2: "Четыре вещи. И всё.",
    ingr: [
      { name:"Мука",  sub:"Каталония · Эко" },
      { name:"Вода",  sub:"Родник · Эмпорда" },
      { name:"Соль",  sub:"Дельта Эбро" },
      { name:"Огонь", sub:"Дровяная печь · 480°" },
    ],
    catKick: "★ КАТАЛОГ ★",
    catH2: "Из печи — к тебе в корзину.",
    catSub: "Три формата. Одно тесто. Печём каждое утро с 5 до 9.",
    products: [
      { name:"Классический", tag:"ОРИГИНАЛ",     price:"€4,50", unit:"6 листов · 480 г", note:"Тот самый. 38 секунд на камне.", sticker:"ХИТ\nПРОДАЖ" },
      { name:"Цельнозерновой", tag:"100% ЦЕЛЬНЫЙ", price:"€5,20", unit:"6 листов · 510 г", note:"Цельное зерно. Вкус поля. Идёт со всем.", sticker:"МНОГО\nКЛЕТЧАТКИ" },
      { name:"Особый",      tag:"С СЕМЕНАМИ",    price:"€5,80", unit:"4 листа · 380 г", note:"Кунжут, чёрный тмин, фенхель. Выпуск выходного дня.", sticker:"ЛИМИТКА" },
    ],
    addBtn: "В корзину →",
    receipt: { store:"EL LAVASH · СУПЕРМАРКЕТ", addr:"Carrer Sant Pere 14 · Льорет-де-Мар · CIF B-12345678",
      items:[["1 × Классический 480 г","4,50"],["2 × Цельнозерновой 510 г","10,40"],["1 × Особый","5,80"],["1 × Шаурма Бодега","8,50"],["1 × Тикка Тако","7,80"],["1 × Бабушкин десерт","5,90"]],
      total:"ИТОГО", totalVal:"42,90", thanks:"— спасибо, что зашли —" },
    menuKick: "★ ФЬЮЖН-МЕНЮ! ★",
    menuH2: ['Кухня без','границ,','и много хлеба.'],
    menuLead: "Шесть рецептов, которые имеют смысл только в нашей бодеге. Клиенты заказывают их по номеру. Ты тоже можешь.",
    dishes: [
      { name:"Шаурма Бодега",   price:"€8,50", desc:"Баранина, йогуртовый соус с чесноком, маринованный лук, перец пикильо.", tag:"КЛАССИКА" },
      { name:"Тикка Тако",      price:"€7,80", desc:"Курица тикка, зелёный соус, кинза, красный лук. Самая вкусная путаница.", tag:"ОСТРОЕ" },
      { name:"Асадо по-армянски", price:"€9,20", desc:"Говядина 24 ч в гранате и розмарине. Медленный огонь. Горячий лаваш.", tag:"МЕДЛЕННО" },
      { name:"Бандерильи",      price:"€6,40", desc:"Оливки, сыр халуми, вяленый томат. Хрустящий лаваш на гарнир.", tag:"ВЕГЕТАРИАНСКОЕ" },
      { name:"Фалафель брава",  price:"€7,20", desc:"Домашний фалафель, соус брава, айоли. Хрустит снаружи, нежный внутри.", tag:"ВЕГАН" },
      { name:"Бабушкин десерт", price:"€5,90", desc:"Сладкий лаваш, розмариновый мёд, свежий сыр, орехи. Десерт выходного дня.", tag:"ДЕСЕРТ" },
    ],
    dishCta: "заказать →",
    storyKick: "★ ИСТОРИЯ ★",
    storyH2: ['Из Днепра','на Коста-Браву.'],
    storyP1: "Элен приехала из Днепра — через всю Украину, а потом сюда, на Коста-Браву. И решила делать то, что умеет лучше всего: настоящий лаваш, руками.",
    storyP2: "Так появился El Lavash. Небольшое производство — без сетей и франшиз. Просто хороший плоский хлеб, каждое утро.",
    storySign: "— Элен",
    portraits: [ { name:"ЭЛЕН", sub:"основательница" }, { name:"ЭЛЕН", sub:"у печи" } ],
    mapKick: "★ ГДЕ НАЙТИ ★",
    mapH2: "14 точек. Одно побережье.",
    locations: [
      ['Льорет-де-Мар', 'Carrer de Sant Pere 14', 'Главная бодега'],
      ['Тосса-де-Мар', "Plaça d'Espanya 3", 'Пн–Сб'],
      ['Бланес', 'Mercat Municipal · Parada 12', 'Вт–Вс'],
      ['Сант-Фелиу', 'Carrer Major 78', 'Пн–Сб'],
      ['Палафружель', 'Plaça Nova 5', 'Вт–Сб'],
      ['Бегур', 'Carrer Bonaventura 9', 'Пт–Вс'],
      ['Кадакес', 'Riba Pianc 4', 'Только лето'],
    ],
    mapMore: "+7 точек →",
    clubKick: "★ КЛУБ ★",
    clubH2: ['Десять лавашей','одиннадцатый за счёт заведения.'],
    clubP: "Подпишись на рассылку бодеги. Редкие рецепты, новые вкусы и одно письмо раз в две недели — в пятницу, прямо перед вечерней печью.",
    clubPlaceholder: "ты@почта.рф",
    clubBtn: "Вступить →",
    clubFine: "Без спама. Только хлеб. Отписаться можно в любой момент.",
    punch: { card:"КАРТА ЛОЯЛЬНОСТИ · №00142", count:"у тебя 4 из 10", free:"11-Й ЗА СЧЁТ ЗАВЕДЕНИЯ" },
    faqKick: "★ ВОПРОСЫ ★",
    faqH2: ['Что у нас спрашивают','у барной стойки.'],
    faqs: [
      { q:"Что такое лаваш вообще?", a:"Армянский тонкий плоский хлеб из трёх ингредиентов и большого терпения. В 2014-м ЮНЕСКО признал его наследием. Мы признали его вкусным давно." },
      { q:"Сколько хранится?", a:"Пять дней в холодильнике в полотенце. Четыре месяца в морозилке. Зачерствел — 30 секунд на пару, и снова как новый." },
      { q:"Доставляете?", a:"По всему полуострову, с понедельника по четверг. Упаковка из картона, без пластика. Приходит на следующий день, свежий." },
      { q:"Без глютена есть?", a:"Нет. Лаваш — это пшеница, вода, соль, огонь. Без пшеницы это не лаваш. Извините." },
      { q:"Оптом?", a:"Да. Если у тебя ресторан, бодега или магазин и хочешь продавать — напиши. Минимум 50 листов." },
      { q:"Почему El Lavash, а не просто Lavash?", a:"El (отсюда) + Lavash (оттуда). Два места в одном названии — как и мы." },
    ],
    igKick: "★ INSTAGRAM ★",
    igH2: "Свежий хлеб, каждый день.",
    igLine: "Печь, тесто и побережье — каждый день в нашем Instagram.",
    igBtn: "Подписаться в Instagram →",
    foot: {
      name:"El Lavash · Супермаркет", addr:"Carrer de Sant Pere 14 · Льорет-де-Мар · Каталония",
      cols:[ {h:"Хлеб", links:["Классический","Цельнозерновой","Особый"]}, {h:"О нас", links:["История","Печь","Пресса"]}, {h:"Контакты", links:["hola@ellavash.es","+34 972 33 12 14","Instagram"]} ],
      meta:["© 2026 El Lavash SL","CIF B-12345678","Льорет-де-Мар · ESP","Сделано из муки · воды · соли · огня"],
    },
    switchLabel: "ЯЗЫК",
  },
};

function ElvLangSwitch({ lang, setLang }) {
  const wrap = { position:'sticky', top:0, zIndex:100, background:bp.dark, display:'flex',
    justifyContent:'flex-end', alignItems:'center', gap:6, padding:'8px 16px',
    borderBottom:`2px solid ${bp.ink}`, fontFamily:'"Space Grotesk", sans-serif' };
  const btn = (on)=>({ cursor:'pointer', border:`2px solid ${on?bp.yellow:'#F5EAD244'}`,
    background: on?bp.yellow:'transparent', color: on?bp.dark:bp.cream, fontWeight:800,
    fontSize:12, letterSpacing:'0.1em', padding:'5px 13px', borderRadius:6, transition:'all 120ms' });
  return (
    <div style={wrap}>
      <span style={{color:bp.cream, opacity:0.45, fontSize:10, letterSpacing:'0.2em', marginRight:6}}>ES / RU</span>
      <button style={btn(lang==='es')} onClick={()=>setLang('es')}>ES</button>
      <button style={btn(lang==='ru')} onClick={()=>setLang('ru')}>RU</button>
    </div>
  );
}

function BpInstagram({ t }) {
  const tile = (bg) => ({ aspectRatio:'1/1', background:bg, border:`2.5px solid ${bp.dark}`,
    borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' });
  const tiles = [bp.yellow, bp.red, bp.cream, bp.dark, bp.red, bp.yellow];
  return (
    <section style={v7.ig}>
      <BpHalftone color={bp.cream} opacity={0.06}/>
      <div style={v7.igGrid}>
        <div style={v7.igLeft}>
          <div style={v7.kickerCream}>{t.igKick}</div>
          <h2 style={v7.igH2}>{t.igH2}</h2>
          <a href="https://www.instagram.com/mar.elien/" target="_blank" rel="noopener" style={v7.igHandle}>@mar.elien</a>
          <p style={v7.igLineP}>{t.igLine}</p>
          <a href="https://www.instagram.com/mar.elien/" target="_blank" rel="noopener" style={v7.igBtn}>{t.igBtn}</a>
        </div>
        <div style={v7.igTiles}>
          {tiles.map((bg, i) => (
            <div key={i} style={tile(bg)}>
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none"
                stroke={bg===bp.dark?bp.cream:bp.dark} strokeWidth="1.6" opacity="0.55">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4.2"/>
                <circle cx="17.2" cy="6.8" r="1.1" fill={bg===bp.dark?bp.cream:bp.dark} stroke="none"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function V7Bodega() {
  const [lang, setLang] = React.useState('es');
  const t = C[lang];
  return (
    <div style={v7.root}>
      <BpFonts/>
      <ElvLangSwitch lang={lang} setLang={setLang}/>

      <BpTickerTop t={t}/>

      {/* HERO */}
      <section style={v7.hero}>
        <BpHalftone color={bp.yellowDeep} opacity={0.18}/>
        <BpStarburst top={70} left={'7%'} rot={-14} color={bp.red} size={110} text={lang==='ru'?"НОВОЕ!":"¡NUEVO!"}/>
        <BpStarburst top={'70%'} right={'9%'} rot={18} color={bp.dark} size={120} text={lang==='ru'?"100% МУКА":"100% TRIGO"}/>

        <div style={v7.heroTopBar}>
          <span style={v7.heroLot}>{t.heroLot}</span>
          <nav style={v7.heroNav}>
            {t.nav.map((it,i)=>(<a key={i} style={v7.heroNavItem}>{it}</a>))}
          </nav>
          <span style={v7.heroBag}>{t.heroBag}</span>
        </div>

        <div style={v7.heroGrid}>
          <div style={v7.heroLeft}>
            <div style={v7.heroKick}>{t.heroKick}</div>
            <h1 style={v7.h1}>
              <span style={v7.h1Line1}>{t.h1[0]}</span>
              <span style={v7.h1Line2}>{t.h1[1]}</span>
              <span style={v7.h1Line3}>{t.h1[2]}</span>
            </h1>
            <p style={v7.heroLead}>{t.heroLead}</p>
            <div style={v7.heroCtas}>
              <a style={v7.btnRed}>{t.btnBuy}<span style={v7.btnArrow}>→</span></a>
              <a style={v7.btnGhost}>{t.btnTry}</a>
            </div>
            <div style={v7.heroStripRow}>
              {t.badges.map((b,i)=>(<BpStripBadge key={i}>{b}</BpStripBadge>))}
            </div>
          </div>

          <div style={v7.heroRight}>
            <BpHeroLabel t={t}/>
          </div>
        </div>
      </section>

      <BpTickerBig t={t}/>

      {/* INGREDIENTS */}
      <section style={v7.ingr}>
        <div style={v7.ingrHead}>
          <div style={v7.kicker}>{t.recipeKick}</div>
          <h2 style={v7.h2}>{t.recipeH2}</h2>
        </div>
        <div style={v7.ingrGrid}>
          <BpIngrCard n="01" name={t.ingr[0].name} sub={t.ingr[0].sub} bg={bp.yellow} fg={bp.dark} icon="wheat"/>
          <BpIngrCard n="02" name={t.ingr[1].name} sub={t.ingr[1].sub} bg={bp.red}    fg={bp.cream} icon="drop"/>
          <BpIngrCard n="03" name={t.ingr[2].name} sub={t.ingr[2].sub} bg={bp.cream}  fg={bp.dark} icon="salt"/>
          <BpIngrCard n="04" name={t.ingr[3].name} sub={t.ingr[3].sub} bg={bp.dark}   fg={bp.yellow} icon="fire"/>
        </div>
      </section>

      {/* CATALOG */}
      <section style={v7.cat}>
        <BpHalftone color={bp.brown} opacity={0.06}/>
        <div style={v7.catHead}>
          <div style={v7.kicker}>{t.catKick}</div>
          <h2 style={v7.h2Dark}>{t.catH2}</h2>
          <p style={v7.h2Sub}>{t.catSub}</p>
        </div>
        <div style={v7.catGrid}>
          <BpProduct num="01" color={bp.red}    name={t.products[0].name} tag={t.products[0].tag} price={t.products[0].price} unit={t.products[0].unit} note={t.products[0].note} sticker={t.products[0].sticker} addBtn={t.addBtn}/>
          <BpProduct num="02" color={bp.brown}  name={t.products[1].name} tag={t.products[1].tag} price={t.products[1].price} unit={t.products[1].unit} note={t.products[1].note} sticker={t.products[1].sticker} addBtn={t.addBtn}/>
          <BpProduct num="03" color={bp.yellow} name={t.products[2].name} tag={t.products[2].tag} price={t.products[2].price} unit={t.products[2].unit} note={t.products[2].note} sticker={t.products[2].sticker} addBtn={t.addBtn} dark/>
        </div>
      </section>

      <BpReceipt t={t}/>

      {/* FUSION MENU */}
      <section style={v7.menu}>
        <BpHalftone color={bp.red} opacity={0.05}/>
        <div style={v7.menuHead}>
          <div style={v7.kickerCream}>{t.menuKick}</div>
          <h2 style={v7.h2Big}>
            {t.menuH2[0]}<br/>
            {t.menuH2[1]}<br/>
            <span style={v7.h2BigItalic}>{t.menuH2[2]}</span>
          </h2>
          <p style={v7.menuLead}>{t.menuLead}</p>
        </div>
        <div style={v7.menuGrid}>
          {t.dishes.map((d,i)=>(
            <BpDish key={i} n={String(i+1).padStart(2,'0')} name={d.name} price={d.price} desc={d.desc} tag={d.tag} cta={t.dishCta}/>
          ))}
        </div>
      </section>

      <BpTickerBig t={t} dark/>

      {/* OWNERS / STORY — Elen */}
      <section style={v7.owners}>
        <div style={v7.ownersGrid}>
          <div style={v7.ownersPhotos}>
            <BpPortrait name={t.portraits[0].name} sub={t.portraits[0].sub} bg={bp.red}    rot={-3} img="assets/elen.jpg" uid="p1"/>
            <BpPortrait name={t.portraits[1].name} sub={t.portraits[1].sub} bg={bp.yellow} rot={2} dark img="assets/elen.jpg" uid="p2"/>
          </div>
          <div style={v7.ownersText}>
            <div style={v7.kicker}>{t.storyKick}</div>
            <h2 style={v7.h2Dark}>{t.storyH2[0]}<br/>{t.storyH2[1]}</h2>
            <p style={v7.ownersP}>{t.storyP1}</p>
            <p style={v7.ownersP}>{t.storyP2}</p>
            <div style={v7.ownersSign}>{t.storySign}</div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={v7.map}>
        <BpHalftone color={bp.dark} opacity={0.08}/>
        <div style={v7.mapHead}>
          <div style={v7.kicker}>{t.mapKick}</div>
          <h2 style={v7.h2Dark}>{t.mapH2}</h2>
        </div>
        <div style={v7.mapWrap}>
          <BpMap/>
          <div style={v7.mapList}>
            {t.locations.map(([city, addr, hrs], i) => (
              <div key={i} style={v7.mapItem}>
                <div style={v7.mapPin}>{String(i+1).padStart(2,'0')}</div>
                <div style={{flex: 1}}>
                  <div style={v7.mapCity}>{city}</div>
                  <div style={v7.mapAddr}>{addr}</div>
                </div>
                <div style={v7.mapHrs}>{hrs}</div>
              </div>
            ))}
            <a style={v7.mapMore}>{t.mapMore}</a>
          </div>
        </div>
      </section>

      {/* CLUB */}
      <section style={v7.club}>
        <div style={v7.clubGrid}>
          <div style={v7.clubText}>
            <div style={v7.kickerCream}>{t.clubKick}</div>
            <h2 style={v7.h2Big}>
              {t.clubH2[0]}<br/>
              <span style={v7.h2BigItalic}>{t.clubH2[1]}</span>
            </h2>
            <p style={v7.clubP}>{t.clubP}</p>
            <form style={v7.clubForm} onSubmit={(e)=>e.preventDefault()}>
              <input style={v7.clubInput} placeholder={t.clubPlaceholder}/>
              <button style={v7.clubBtn}>{t.clubBtn}</button>
            </form>
            <div style={v7.clubFine}>{t.clubFine}</div>
          </div>
          <div style={v7.clubCardWrap}>
            <BpPunchCard t={t}/>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <BpInstagram t={t}/>

      {/* FAQ */}
      <section style={v7.faq}>
        <div style={v7.faqHead}>
          <div style={v7.kicker}>{t.faqKick}</div>
          <h2 style={v7.h2Dark}>{t.faqH2[0]}<br/>{t.faqH2[1]}</h2>
        </div>
        <div style={v7.faqGrid}>
          {t.faqs.map((f,i)=>(<BpFaq key={i} q={f.q} a={f.a}/>))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={v7.foot}>
        <div style={v7.footTop}>
          <div style={v7.footBrand}>
            <img src="assets/logo.png" style={v7.footLogo} alt=""/>
            <div>
              <div style={v7.footName}>{t.foot.name}</div>
              <div style={v7.footAddr}>{t.foot.addr}</div>
            </div>
          </div>
          <div style={v7.footCols}>
            {t.foot.cols.map((col,i)=>(
              <div key={i}>
                <div style={v7.footColH}>{col.h}</div>
                {col.links.map((l,j)=>(<a key={j} style={v7.footLink}>{l}</a>))}
              </div>
            ))}
          </div>
        </div>
        <div style={v7.footBig}>EL · LAVASH</div>
        <div style={v7.footMeta}>
          {t.foot.meta.map((m,i)=>(<span key={i}>{m}</span>))}
        </div>
      </footer>
    </div>
  );
}

function V7BodegaOld() {
  return (
    <div style={v7.root}>
      <BpFonts/>

      <BpTickerTop/>

      {/* HERO — yellow block, giant logo, chunky headline */}
      <section style={v7.hero}>
        <BpHalftone color={bp.yellowDeep} opacity={0.18}/>
        <BpStarburst top={70} left={'7%'} rot={-14} color={bp.red} size={110} text="¡NUEVO!"/>
        <BpStarburst top={'70%'} right={'9%'} rot={18} color={bp.dark} size={120} text="100% TRIGO"/>

        <div style={v7.heroTopBar}>
          <span style={v7.heroLot}>LOT №2607 · MAR ‘26</span>
          <nav style={v7.heroNav}>
            <a style={v7.heroNavItem}>El Pan</a>
            <a style={v7.heroNavItem}>La Tienda</a>
            <a style={v7.heroNavItem}>El Menú</a>
            <a style={v7.heroNavItem}>Bodegas</a>
            <a style={v7.heroNavItem}>Hola</a>
          </nav>
          <span style={v7.heroBag}>Cesta · 0</span>
        </div>

        <div style={v7.heroGrid}>
          <div style={v7.heroLeft}>
            <div style={v7.heroKick}>★ EL LAVASH · SUPERMERCADO · DESDE 2026 ★</div>
            <h1 style={v7.h1}>
              <span style={v7.h1Line1}>Pan plano</span>
              <span style={v7.h1Line2}>para la</span>
              <span style={v7.h1Line3}>gente.</span>
            </h1>
            <p style={v7.heroLead}>
              Old-world lavash, new-world bodega. Hecho a mano en Lloret de Mar
              por un armenio y una catalana que se conocieron en la cola del
              mercado. Tres mil años de pan plano, cero pretensiones.
            </p>
            <div style={v7.heroCtas}>
              <a style={v7.btnRed}>Comprar — €4,50<span style={v7.btnArrow}>→</span></a>
              <a style={v7.btnGhost}>Probar gratis</a>
            </div>
            <div style={v7.heroStripRow}>
              <BpStripBadge>Recién horneado</BpStripBadge>
              <BpStripBadge>Sin aditivos</BpStripBadge>
              <BpStripBadge>Vegano</BpStripBadge>
              <BpStripBadge>Hecho a mano</BpStripBadge>
            </div>
          </div>

          <div style={v7.heroRight}>
            <BpHeroLabel/>
          </div>
        </div>
      </section>

      <BpTickerBig/>

      {/* INGREDIENT BANNER — 4 chunky cards */}
      <section style={v7.ingr}>
        <div style={v7.ingrHead}>
          <div style={v7.kicker}>★ LA RECETA ★</div>
          <h2 style={v7.h2}>Cuatro cosas. Nada más.</h2>
        </div>
        <div style={v7.ingrGrid}>
          <BpIngrCard n="01" name="Trigo" sub="Catalunya · Ecológico" bg={bp.yellow} fg={bp.dark} icon="wheat"/>
          <BpIngrCard n="02" name="Agua"  sub="Manantial · Empordà"   bg={bp.red}    fg={bp.cream} icon="drop"/>
          <BpIngrCard n="03" name="Sal"   sub="Delta de l'Ebre"       bg={bp.cream}  fg={bp.dark} icon="salt"/>
          <BpIngrCard n="04" name="Fuego" sub="Horno de leña · 480°"  bg={bp.dark}   fg={bp.yellow} icon="fire"/>
        </div>
      </section>

      {/* PRODUCT CATALOG — supermarket shelf */}
      <section style={v7.cat}>
        <BpHalftone color={bp.brown} opacity={0.06}/>
        <div style={v7.catHead}>
          <div style={v7.kicker}>★ EL CATÁLOGO ★</div>
          <h2 style={v7.h2Dark}>De la nevera a tu cesta.</h2>
          <p style={v7.h2Sub}>Tres formatos. Misma masa. Recién hechos cada mañana entre las 5 y las 9.</p>
        </div>
        <div style={v7.catGrid}>
          <BpProduct
            num="01"
            color={bp.red}
            name="El Clásico"
            tag="ORIGINAL"
            price="€4,50"
            unit="6 láminas · 480g"
            note="El de toda la vida. 38 segundos en piedra."
            sticker="MÁS\nVENDIDO"
          />
          <BpProduct
            num="02"
            color={bp.brown}
            name="El Integral"
            tag="100% INTEGRAL"
            price="€5,20"
            unit="6 láminas · 510g"
            note="Trigo entero. Sabor a campo. Va con todo."
            sticker="ALTO\nFIBRA"
          />
          <BpProduct
            num="03"
            color={bp.yellow}
            name="El Especial"
            tag="CON SEMILLAS"
            price="€5,80"
            unit="4 láminas · 380g"
            note="Sésamo, comino negro, hinojo. Edición de fin de semana."
            sticker="LIMITADO"
            dark
          />
        </div>
      </section>

      <BpReceipt/>

      {/* FUSION MENU — owns the joke */}
      <section style={v7.menu}>
        <BpHalftone color={bp.red} opacity={0.05}/>
        <div style={v7.menuHead}>
          <div style={v7.kickerCream}>★ ¡EL MENÚ FUSIÓN! ★</div>
          <h2 style={v7.h2Big}>
            Un armenio y una<br/>
            catalana entran en<br/>
            <span style={v7.h2BigItalic}>un mercado…</span>
          </h2>
          <p style={v7.menuLead}>
            Seis recetas que solo tienen sentido en nuestra bodega. Nuestros clientes
            las piden por su número. Tú también puedes.
          </p>
        </div>
        <div style={v7.menuGrid}>
          <BpDish n="01" name="Shawarma Bodega" price="€8,50" desc="Cordero, salsa de yogur con ajo, cebolla encurtida, pimientos del piquillo." tag="CLÁSICO"/>
          <BpDish n="02" name="Tikka Taco"      price="€7,80" desc="Pollo tikka, salsa verde, cilantro, cebolla morada. La confusión más rica."   tag="PICANTE"/>
          <BpDish n="03" name="Asado Armenian"  price="€9,20" desc="Ternera marinada 24h en granada y romero. Brasa lenta. Lavash caliente."     tag="LENTO"/>
          <BpDish n="04" name="Banderillas El Aram" price="€6,40" desc="Aceitunas, queso halloumi, tomate seco. Lavash crujiente como guarnición." tag="VEGETARIANO"/>
          <BpDish n="05" name="Falafel a la Brava" price="€7,20" desc="Falafel casero, salsa brava, alioli. Crujiente fuera, suave dentro." tag="VEGANO"/>
          <BpDish n="06" name="Dulce de Abuela" price="€5,90" desc="Lavash dulce, miel de romero, queso fresco, nueces. Postre de domingo." tag="POSTRE"/>
        </div>
      </section>

      <BpTickerBig dark/>

      {/* OWNERS */}
      <section style={v7.owners}>
        <div style={v7.ownersGrid}>
          <div style={v7.ownersPhotos}>
            <BpPortrait name="ARAM" sub="el panadero" bg={bp.red}    rot={-3}/>
            <BpPortrait name="ESPERANZA" sub="la jefa" bg={bp.yellow} rot={2} dark/>
          </div>
          <div style={v7.ownersText}>
            <div style={v7.kicker}>★ LA HISTORIA ★</div>
            <h2 style={v7.h2Dark}>"Pan plano,<br/>palabras planas."</h2>
            <p style={v7.ownersP}>
              Aram llegó de Gyumri en 2008 con una receta de su abuela y dos palabras
              de español. Esperanza vendía aceite de oliva en el mercado de Lloret.
              Se conocieron en la cola del Mercadona, discutieron sobre qué era pan
              de verdad, y dieciocho meses después abrieron <i>El Lavash</i>.
            </p>
            <p style={v7.ownersP}>
              Hoy hacemos 320 láminas al día, vendemos a 14 bodegas de la Costa Brava,
              y seguimos peleándonos sobre la masa madre. Es lo que hay.
            </p>
            <div style={v7.ownersSign}>— Aram & Esperanza</div>
          </div>
        </div>
      </section>

      {/* BODEGA MAP / WHERE TO BUY */}
      <section style={v7.map}>
        <BpHalftone color={bp.dark} opacity={0.08}/>
        <div style={v7.mapHead}>
          <div style={v7.kicker}>★ ENCUÉNTRANOS ★</div>
          <h2 style={v7.h2Dark}>14 bodegas. Una costa.</h2>
        </div>
        <div style={v7.mapWrap}>
          <BpMap/>
          <div style={v7.mapList}>
            {[
              ['Lloret de Mar', 'Carrer de Sant Pere 14', 'Bodega madre'],
              ['Tossa de Mar', 'Plaça d\'Espanya 3', 'Lun–Sab'],
              ['Blanes', 'Mercat Municipal · Parada 12', 'Mar–Dom'],
              ['Sant Feliu', 'Carrer Major 78', 'Lun–Sab'],
              ['Palafrugell', 'Plaça Nova 5', 'Mar–Sab'],
              ['Begur', 'Carrer Bonaventura 9', 'Vie–Dom'],
              ['Cadaqués', 'Riba Pianc 4', 'Solo verano'],
            ].map(([city, addr, hrs], i) => (
              <div key={i} style={v7.mapItem}>
                <div style={v7.mapPin}>{String(i+1).padStart(2,'0')}</div>
                <div style={{flex: 1}}>
                  <div style={v7.mapCity}>{city}</div>
                  <div style={v7.mapAddr}>{addr}</div>
                </div>
                <div style={v7.mapHrs}>{hrs}</div>
              </div>
            ))}
            <a style={v7.mapMore}>+7 más bodegas →</a>
          </div>
        </div>
      </section>

      {/* PUNCH CARD CLUB */}
      <section style={v7.club}>
        <div style={v7.clubGrid}>
          <div style={v7.clubText}>
            <div style={v7.kickerCream}>★ EL CLUB ★</div>
            <h2 style={v7.h2Big}>
              Diez lavash<br/>
              <span style={v7.h2BigItalic}>el onceavo va por la casa.</span>
            </h2>
            <p style={v7.clubP}>
              Apúntate a la lista de la bodega. Recetas raras, nuevos sabores, y un
              correo cada dos semanas — el viernes, justo antes del horno de la tarde.
            </p>
            <form style={v7.clubForm} onSubmit={(e)=>e.preventDefault()}>
              <input style={v7.clubInput} placeholder="tu@correo.es"/>
              <button style={v7.clubBtn}>Unirse →</button>
            </form>
            <div style={v7.clubFine}>Sin spam. Solo pan. Cancelas cuando quieras.</div>
          </div>
          <div style={v7.clubCardWrap}>
            <BpPunchCard/>
          </div>
        </div>
      </section>

      {/* FAQ tiny */}
      <section style={v7.faq}>
        <div style={v7.faqHead}>
          <div style={v7.kicker}>★ DUDAS ★</div>
          <h2 style={v7.h2Dark}>Preguntas que nos hacen<br/>en la barra del bar.</h2>
        </div>
        <div style={v7.faqGrid}>
          <BpFaq q="¿Qué es lavash exactamente?" a="Pan plano armenio, fino, hecho con tres ingredientes y mucha paciencia. UNESCO lo declaró patrimonio inmaterial en 2014. Nosotros lo declaramos delicioso desde siempre."/>
          <BpFaq q="¿Cuánto dura?" a="Cinco días en la nevera envuelto en paño. Cuatro meses en el congelador. Si se pone duro: 30 segundos al vapor y vuelve a la vida."/>
          <BpFaq q="¿Hacéis envíos?" a="A toda la península, lunes a jueves. Empaquetado en cartón sin plástico. Llega al día siguiente, fresco."/>
          <BpFaq q="¿Sin gluten?" a="No. El lavash es trigo, agua, sal, fuego. Sin trigo no es lavash. Lo sentimos."/>
          <BpFaq q="¿Mayorista?" a="Sí. Si tienes restaurante, bodega o tienda y quieres venderlo, escríbenos. Mínimo 50 láminas."/>
          <BpFaq q="¿Por qué El Lavash y no Lavash?" a="Porque Esperanza es catalana y Aram es armenio. El + Lavash. No se puede explicar mejor."/>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={v7.foot}>
        <div style={v7.footTop}>
          <div style={v7.footBrand}>
            <img src="assets/logo.png" style={v7.footLogo} alt=""/>
            <div>
              <div style={v7.footName}>El Lavash · Supermercado</div>
              <div style={v7.footAddr}>Carrer de Sant Pere 14 · Lloret de Mar · Catalunya</div>
            </div>
          </div>
          <div style={v7.footCols}>
            <div>
              <div style={v7.footColH}>El Pan</div>
              <a style={v7.footLink}>Clásico</a>
              <a style={v7.footLink}>Integral</a>
              <a style={v7.footLink}>Especial</a>
            </div>
            <div>
              <div style={v7.footColH}>La Casa</div>
              <a style={v7.footLink}>La historia</a>
              <a style={v7.footLink}>El horno</a>
              <a style={v7.footLink}>Prensa</a>
            </div>
            <div>
              <div style={v7.footColH}>Contacto</div>
              <a style={v7.footLink}>hola@ellavash.cat</a>
              <a style={v7.footLink}>+34 972 33 12 14</a>
              <a style={v7.footLink}>Instagram</a>
            </div>
          </div>
        </div>
        <div style={v7.footBig}>EL · LAVASH</div>
        <div style={v7.footMeta}>
          <span>© 2026 El Lavash SL</span>
          <span>CIF B-12345678</span>
          <span>Lloret de Mar · ESP</span>
          <span>Hecho con harina · agua · sal · fuego</span>
        </div>
      </footer>
    </div>
  );
}

/* =========================================================================
   COMPONENTS
   ========================================================================= */

function BpFonts() {
  return (
    <style>{`
      .bp-marquee-inner { animation: bpScroll 40s linear infinite; }
      @keyframes bpScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .bp-spin { animation: bpSpin 24s linear infinite; }
      @keyframes bpSpin { to { transform: rotate(360deg); } }
      .bp-product:hover { transform: translateY(-6px) rotate(-0.3deg) !important; }
      .bp-product { transition: transform 200ms cubic-bezier(.2,.8,.2,1); }
      .bp-dish { transition: transform 160ms; }
      .bp-dish:hover { transform: translate(-2px,-2px); }
    `}</style>
  );
}

function BpTickerTop({ t }) {
  const items = t.tickerTop;
  return (
    <div style={v7.tickTop}>
      <div className="bp-marquee-inner" style={v7.tickInner}>
        {[...items, ...items, ...items].map((s, i) => (
          <span key={i} style={v7.tickItem}>
            <span style={v7.tickDot}>●</span> {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function BpTickerBig({ t, dark }) {
  const items = t.tickerBig;
  return (
    <div style={dark ? v7.tickBigDark : v7.tickBig}>
      <div className="bp-marquee-inner" style={v7.tickBigInner}>
        {[...items, ...items, ...items, ...items].map((s, i) => (
          <span key={i} style={v7.tickBigItem}>
            {s}
            <span style={v7.tickBigStar}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function BpStarburst({ top, left, right, rot = 0, color, size = 120, text }) {
  const points = 22;
  const pts = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? 50 : 42;
    const a = (i * Math.PI) / points - Math.PI / 2;
    pts.push(`${50 + r * Math.cos(a)}% ${50 + r * Math.sin(a)}%`);
  }
  return (
    <div
      style={{
        position: 'absolute', top, left, right,
        width: size, height: size,
        transform: `rotate(${rot}deg)`,
        zIndex: 3, pointerEvents: 'none',
      }}
    >
      <div style={{
        width: '100%', height: '100%',
        background: color,
        clipPath: `polygon(${pts.join(',')})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: color === bp.yellow ? bp.dark : bp.cream,
        fontFamily: '"Yeseva One", serif',
        fontSize: size * 0.13,
        lineHeight: 1.05, textAlign: 'center', letterSpacing: '0.02em',
        whiteSpace: 'pre',
      }}>
        {text}
      </div>
    </div>
  );
}

function BpHalftone({ color, opacity }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `radial-gradient(${color} 1.2px, transparent 1.4px)`,
      backgroundSize: '14px 14px',
      opacity,
    }}/>
  );
}

function BpStripBadge({ children }) {
  return (
    <span style={v7.stripBadge}>
      <span style={v7.stripBadgeDot}>✦</span>
      {children}
    </span>
  );
}

function BpHeroLabel({ t }) {
  return (
    <div style={v7.heroLabelWrap}>
      <div className="bp-spin" style={v7.heroSeal}>
        <svg viewBox="0 0 200 200" width="100%" height="100%">
          <defs>
            <path id="bp-seal-path" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"/>
          </defs>
          <text fontFamily="Space Grotesk" fontSize="13" fontWeight="700" fill={bp.dark} letterSpacing="3">
            <textPath href="#bp-seal-path">
              {'★  EL LAVASH  ★  PAN PLANO  ★  RECIÉN HORNEADO  ★  LLORET DE MAR  '}
            </textPath>
          </text>
        </svg>
      </div>

      <div style={v7.heroLabel}>
        {/* outer brown frame */}
        <div style={v7.heroLabelFrame}>
          <div style={v7.heroLabelInner}>
            <img src="assets/logo.png" alt="El Lavash" style={v7.heroLabelLogo}/>
            <div style={v7.heroLabelTagRow}>
              <span style={v7.heroLabelTag}>{t.label.tag}</span>
            </div>
            <div style={v7.heroLabelMeta}>
              {t.label.rows.map(([k, v], i) => (
                <div key={i} style={v7.heroLabelMetaRow}><span>{k}</span><span>{v}</span></div>
              ))}
            </div>
            <div style={v7.heroLabelBarcode}>
              {Array.from({length: 38}).map((_, i) => (
                <span key={i} style={{
                  width: i % 3 === 0 ? 3 : i % 2 === 0 ? 1 : 2,
                  height: '100%', background: bp.dark, display: 'inline-block', marginRight: 1,
                }}/>
              ))}
            </div>
            <div style={v7.heroLabelEan}>8 414327 264503</div>
          </div>
        </div>
      </div>

      <div style={v7.heroTag}>
        <div style={v7.heroTagInner}>
          <div style={v7.heroTagPrice}>€4,50</div>
          <div style={v7.heroTagPriceSub}>{t.label.priceSub}</div>
        </div>
      </div>
    </div>
  );
}

function BpIngrCard({ n, name, sub, bg, fg, icon }) {
  return (
    <div style={{...v7.ingrCard, background: bg, color: fg}}>
      <div style={{...v7.ingrN, color: fg}}>{n}</div>
      <BpIcon kind={icon} color={fg}/>
      <div style={v7.ingrName}>{name}</div>
      <div style={{...v7.ingrSub, color: fg, opacity: 0.7}}>{sub}</div>
    </div>
  );
}

function BpIcon({ kind, color }) {
  const c = color;
  if (kind === 'wheat') return (
    <svg viewBox="0 0 60 80" width="56" height="76">
      <line x1="30" y1="18" x2="30" y2="76" stroke={c} strokeWidth="3" strokeLinecap="round"/>
      {[0,1,2,3,4].map(i => (
        <g key={i} transform={`translate(30, ${22 + i*11})`}>
          <ellipse cx="-8" cy="0" rx="6" ry="4" fill={c} transform="rotate(-35)"/>
          <ellipse cx="8" cy="0" rx="6" ry="4" fill={c} transform="rotate(35)"/>
        </g>
      ))}
    </svg>
  );
  if (kind === 'drop') return (
    <svg viewBox="0 0 60 80" width="56" height="76">
      <path d="M30 8 C 30 8, 12 32, 12 48 a 18 18 0 0 0 36 0 C 48 32, 30 8, 30 8 Z" fill={c}/>
    </svg>
  );
  if (kind === 'salt') return (
    <svg viewBox="0 0 60 80" width="56" height="76">
      <rect x="14" y="22" width="32" height="46" rx="3" fill={c}/>
      <rect x="18" y="14" width="24" height="8" rx="2" fill={c}/>
      <circle cx="22" cy="10" r="2" fill={c}/>
      <circle cx="30" cy="8" r="2" fill={c}/>
      <circle cx="38" cy="10" r="2" fill={c}/>
      <circle cx="26" cy="4" r="1.5" fill={c}/>
      <circle cx="34" cy="4" r="1.5" fill={c}/>
    </svg>
  );
  if (kind === 'fire') return (
    <svg viewBox="0 0 60 80" width="56" height="76">
      <path d="M30 8 C 36 22, 44 26, 44 44 C 44 60, 36 70, 30 70 C 24 70, 16 60, 16 44 C 16 32, 22 30, 24 22 C 26 30, 30 28, 30 8 Z" fill={c}/>
    </svg>
  );
  return null;
}

function BpProduct({ num, color, name, tag, price, unit, note, sticker, dark, addBtn }) {
  const ink = dark ? bp.dark : bp.cream;
  const sub = dark ? bp.dark : bp.cream;
  return (
    <article className="bp-product" style={{...v7.prod, background: color, color: ink}}>
      <div style={v7.prodHead}>
        <span style={{...v7.prodNum, color: ink}}>№ {num}</span>
        <span style={{...v7.prodTag, borderColor: ink, color: ink}}>{tag}</span>
      </div>
      <BpProductCan color={color} accentDark={dark}/>
      <div style={v7.prodBody}>
        <h3 style={{...v7.prodName, color: ink}}>{name}</h3>
        <div style={{...v7.prodUnit, color: sub, opacity: 0.7}}>{unit}</div>
        <p style={{...v7.prodNote, color: ink}}>{note}</p>
        <div style={v7.prodFootRow}>
          <span style={{...v7.prodPrice, color: ink}}>{price}</span>
          <a style={{...v7.prodCta, background: ink, color: color}}>{addBtn}</a>
        </div>
      </div>

      {sticker && (
        <div style={{
          ...v7.prodSticker,
          background: color === bp.yellow ? bp.red : bp.yellow,
          color: color === bp.yellow ? bp.cream : bp.dark,
        }}>
          {sticker}
        </div>
      )}
    </article>
  );
}

function BpProductCan({ color, accentDark }) {
  // a stylized vintage food package / bag
  const labelBg = accentDark ? bp.cream : bp.cream;
  const ink = bp.dark;
  return (
    <div style={v7.prodCanWrap}>
      <div style={{
        width: '78%', height: 230, background: labelBg,
        borderRadius: 6,
        border: `3px solid ${ink}`,
        boxShadow: `8px 8px 0 ${ink}`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '20px 16px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `radial-gradient(${ink} 1px, transparent 1.2px)`,
          backgroundSize: '10px 10px', opacity: 0.08,
        }}/>
        <div style={{
          fontFamily: '"Space Grotesk", sans-serif', fontSize: 10, letterSpacing: '0.18em',
          color: ink, opacity: 0.6, marginBottom: 6,
        }}>EL LAVASH · ARTESANO</div>
        <img src="assets/logo.png" alt="" style={{ width: '78%', maxWidth: 200, height: 'auto', filter: 'drop-shadow(0 2px 0 rgba(0,0,0,0.1))' }}/>
        <div style={{
          marginTop: 10, fontFamily: '"Yeseva One", serif', fontSize: 13,
          letterSpacing: '0.04em', color: ink, textAlign: 'center', lineHeight: 1.2,
        }}>Pan plano<br/>artesano</div>
        <div style={{
          marginTop: 8, padding: '4px 10px',
          background: color, color: color === bp.yellow ? ink : bp.cream,
          border: `2px solid ${ink}`,
          fontFamily: '"Space Grotesk", sans-serif', fontSize: 10, letterSpacing: '0.16em',
          fontWeight: 700,
        }}>
          480 G · 6 UDS
        </div>
      </div>
    </div>
  );
}

function BpReceipt({ t }) {
  const r = t.receipt;
  return (
    <div style={v7.receiptWrap}>
      <div style={v7.receipt}>
        <div style={v7.receiptHead}>
          <div style={{fontFamily: '"Yeseva One", serif', fontSize: 22, color: bp.dark, textAlign: 'center'}}>
            {r.store}
          </div>
          <div style={{fontFamily: '"Space Grotesk", sans-serif', fontSize: 10, letterSpacing: '0.18em', color: bp.dark, opacity: 0.6, textAlign: 'center', marginTop: 4}}>
            {r.addr}
          </div>
        </div>
        <div style={v7.receiptDiv}/>
        {r.items.map(([k, v], i) => (
          <div key={i} style={v7.receiptRow}>
            <span>{k}</span>
            <span style={v7.receiptDots}/>
            <span>€ {v}</span>
          </div>
        ))}
        <div style={v7.receiptDiv}/>
        <div style={{...v7.receiptRow, fontFamily: '"Yeseva One", serif', fontSize: 18}}>
          <span>{r.total}</span>
          <span style={v7.receiptDots}/>
          <span>€ {r.totalVal}</span>
        </div>
        <div style={v7.receiptDiv}/>
        <div style={{textAlign: 'center', fontFamily: '"Caveat", cursive', fontSize: 22, color: bp.red, marginTop: 8}}>
          {r.thanks}
        </div>
      </div>
    </div>
  );
}

function BpDish({ n, name, price, desc, tag, cta }) {
  return (
    <article className="bp-dish" style={v7.dish}>
      <div style={v7.dishHead}>
        <span style={v7.dishN}>{n}</span>
        <span style={v7.dishTag}>{tag}</span>
      </div>
      <h3 style={v7.dishName}>{name}</h3>
      <p style={v7.dishDesc}>{desc}</p>
      <div style={v7.dishFoot}>
        <span style={v7.dishPrice}>{price}</span>
        <span style={v7.dishLine}/>
        <a style={v7.dishCta}>{cta}</a>
      </div>
    </article>
  );
}

function BpPortrait({ name, sub, bg, rot, dark, img, uid }) {
  const ink = dark ? bp.dark : bp.cream;
  return (
    <div style={{...v7.portraitWrap, transform: `rotate(${rot}deg)`, background: bg, color: ink}}>
      <div style={v7.portraitFrame}>
        {img ? (
          <img src={img} alt={name} style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block'}}/>
        ) : (
          <svg viewBox="0 0 140 160" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id={`bpdots-${uid}`} x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.4" fill={bp.dark}/>
              </pattern>
              <radialGradient id={`bpgrad-${uid}`} cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="white" stopOpacity="1"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <rect width="140" height="160" fill={bp.cream}/>
            <rect width="140" height="160" fill={`url(#bpdots-${uid})`}/>
            <ellipse cx="70" cy="64" rx="34" ry="40" fill={bp.dark}/>
            <path d="M 22 160 C 22 116, 50 100, 70 100 C 90 100, 118 116, 118 160 Z" fill={bp.dark}/>
            <rect width="140" height="160" fill={`url(#bpgrad-${uid})`} opacity="0.15"/>
          </svg>
        )}
      </div>
      <div style={v7.portraitName}>{name}</div>
      <div style={{...v7.portraitSub, opacity: 0.8}}>— {sub}</div>
    </div>
  );
}

function BpMap() {
  // stylized coast with pins
  return (
    <div style={v7.mapBox}>
      <svg viewBox="0 0 500 400" width="100%" height="100%">
        <defs>
          <pattern id="bp-mapdots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="0.8" fill={bp.dark} opacity="0.25"/>
          </pattern>
        </defs>
        <rect width="500" height="400" fill={bp.cream}/>
        <rect width="500" height="400" fill="url(#bp-mapdots)"/>
        {/* sea */}
        <path d="M 0 200 Q 60 180 130 200 T 270 200 T 410 220 T 500 220 L 500 400 L 0 400 Z"
              fill={bp.yellow} opacity="0.35"/>
        {/* coastline */}
        <path d="M 0 200 Q 60 180 130 200 T 270 200 T 410 220 T 500 220"
              stroke={bp.dark} strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* land grid */}
        {Array.from({length: 8}).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 25} x2="500" y2={i * 25} stroke={bp.dark} opacity="0.06" strokeWidth="1"/>
        ))}
        {Array.from({length: 14}).map((_, i) => (
          <line key={`v${i}`} x1={i * 36} y1="0" x2={i * 36} y2="200" stroke={bp.dark} opacity="0.06" strokeWidth="1"/>
        ))}
        {/* pins */}
        {[
          [90, 150, '01', 'Lloret'],
          [150, 140, '02', 'Tossa'],
          [60, 165, '03', 'Blanes'],
          [200, 130, '04', 'St Feliu'],
          [260, 120, '05', 'Palafrugell'],
          [310, 110, '06', 'Begur'],
          [420, 90, '07', 'Cadaqués'],
        ].map(([x, y, n, lbl], i) => (
          <g key={i} transform={`translate(${x},${y})`}>
            <line x1="0" y1="0" x2="0" y2="14" stroke={bp.dark} strokeWidth="1.5"/>
            <circle cx="0" cy="0" r="11" fill={bp.red}/>
            <circle cx="0" cy="0" r="11" fill="none" stroke={bp.dark} strokeWidth="2"/>
            <text textAnchor="middle" y="3.5" fontSize="9" fontWeight="800" fill={bp.cream} fontFamily="Space Grotesk">{n}</text>
            <text textAnchor="middle" y="-16" fontSize="10" fontWeight="600" fill={bp.dark} fontFamily="Space Grotesk">{lbl}</text>
          </g>
        ))}
        {/* compass */}
        <g transform="translate(450,50)">
          <circle r="22" fill="none" stroke={bp.dark} strokeWidth="1.5"/>
          <polygon points="0,-18 4,0 0,18 -4,0" fill={bp.red}/>
          <text textAnchor="middle" y="-28" fontSize="10" fontWeight="700" fill={bp.dark} fontFamily="Space Grotesk">N</text>
        </g>
        {/* sea label */}
        <text x="250" y="320" textAnchor="middle" fontFamily="Yeseva One" fontSize="22" fill={bp.dark} opacity="0.4" letterSpacing="6">MAR MEDITERRANI</text>
      </svg>
    </div>
  );
}

function BpPunchCard({ t }) {
  return (
    <div style={v7.punch}>
      <div style={v7.punchHead}>
        <div style={{fontFamily: '"Yeseva One", serif', fontSize: 20, color: bp.dark}}>EL LAVASH</div>
        <div style={{fontFamily: '"Space Grotesk", sans-serif', fontSize: 9, letterSpacing: '0.2em', color: bp.dark, opacity: 0.6}}>{t.punch.card}</div>
      </div>
      <div style={v7.punchGrid}>
        {Array.from({length: 10}).map((_, i) => (
          <div key={i} style={{
            ...v7.punchSlot,
            background: i < 4 ? bp.red : 'transparent',
            color: i < 4 ? bp.cream : bp.dark,
            opacity: i < 4 ? 1 : 0.4,
          }}>
            {i < 4 ? '✓' : i + 1}
          </div>
        ))}
      </div>
      <div style={v7.punchFoot}>
        <div style={{fontFamily: '"Caveat", cursive', fontSize: 18, color: bp.red}}>{t.punch.count}</div>
        <div style={{fontFamily: '"Space Grotesk", sans-serif', fontSize: 9, letterSpacing: '0.18em', color: bp.dark, opacity: 0.6}}>{t.punch.free}</div>
      </div>
    </div>
  );
}

function BpFaq({ q, a }) {
  return (
    <div style={v7.faqItem}>
      <div style={v7.faqQ}>{q}</div>
      <div style={v7.faqA}>{a}</div>
    </div>
  );
}

/* =========================================================================
   STYLES
   ========================================================================= */

const v7 = {
  root: {
    background: bp.cream,
    color: bp.dark,
    fontFamily: '"Manrope", system-ui, sans-serif',
    minHeight: '100vh',
    overflow: 'hidden',
  },

  /* ---------- TOP TICKER ---------- */
  tickTop: {
    background: bp.dark, color: bp.cream,
    overflow: 'hidden', borderBottom: `3px solid ${bp.red}`,
  },
  tickInner: {
    display: 'flex', whiteSpace: 'nowrap', width: 'max-content',
    padding: '10px 0',
  },
  tickItem: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 12, fontWeight: 600,
    letterSpacing: '0.22em', padding: '0 24px', display: 'inline-flex', alignItems: 'center', gap: 12,
  },
  tickDot: { color: bp.yellow, fontSize: 8 },

  /* ---------- HERO ---------- */
  hero: {
    position: 'relative',
    background: bp.yellow,
    padding: '0 56px 80px',
    overflow: 'hidden',
  },
  heroTopBar: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '22px 0', borderBottom: `2px solid ${bp.dark}`, marginBottom: 56,
    position: 'relative', zIndex: 2,
  },
  heroLot: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 11, fontWeight: 700,
    letterSpacing: '0.22em', color: bp.dark,
  },
  heroNav: { display: 'flex', gap: 28 },
  heroNavItem: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 13, fontWeight: 600,
    letterSpacing: '0.1em', color: bp.dark, cursor: 'pointer',
  },
  heroBag: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 12, fontWeight: 700,
    letterSpacing: '0.18em', color: bp.dark,
    padding: '6px 14px', border: `2px solid ${bp.dark}`, borderRadius: 999,
  },

  heroGrid: {
    display: 'grid', gridTemplateColumns: '1.05fr 0.95fr',
    gap: 56, alignItems: 'center', position: 'relative', zIndex: 2,
  },
  heroLeft: { paddingTop: 12 },
  heroRight: { display: 'flex', justifyContent: 'center' },

  heroKick: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 12, fontWeight: 700,
    letterSpacing: '0.24em', color: bp.dark, marginBottom: 22,
  },
  h1: {
    fontFamily: '"Yeseva One", serif', fontSize: 132, lineHeight: 0.88,
    margin: 0, color: bp.dark, letterSpacing: '-0.02em',
    textShadow: `4px 4px 0 ${bp.red}`,
  },
  h1Line1: { display: 'block' },
  h1Line2: { display: 'block', fontStyle: 'italic', color: bp.red, textShadow: `4px 4px 0 ${bp.dark}` , marginLeft: 60 },
  h1Line3: { display: 'block' },

  heroLead: {
    fontSize: 19, lineHeight: 1.55, color: bp.dark, opacity: 0.88,
    maxWidth: 480, marginTop: 28, marginBottom: 30,
  },
  heroCtas: { display: 'flex', gap: 14, flexWrap: 'wrap' },
  btnRed: {
    background: bp.red, color: bp.cream,
    fontFamily: '"Yeseva One", serif', fontSize: 22,
    padding: '16px 28px', border: `3px solid ${bp.dark}`,
    boxShadow: `6px 6px 0 ${bp.dark}`,
    display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer',
  },
  btnArrow: { fontSize: 22 },
  btnGhost: {
    background: 'transparent', color: bp.dark,
    fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 14,
    letterSpacing: '0.18em', padding: '16px 24px',
    border: `2px solid ${bp.dark}`, cursor: 'pointer',
  },

  heroStripRow: { display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 32 },
  stripBadge: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '6px 12px', background: bp.cream, color: bp.dark,
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 11, fontWeight: 700,
    letterSpacing: '0.14em', border: `1.5px solid ${bp.dark}`,
  },
  stripBadgeDot: { color: bp.red, fontSize: 9 },

  /* hero label / package */
  heroLabelWrap: { position: 'relative', width: 460, height: 540 },
  heroSeal: {
    position: 'absolute', top: -32, right: -40, width: 150, height: 150, zIndex: 4,
  },
  heroLabel: {
    position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  heroLabelFrame: {
    width: '100%', maxWidth: 400, padding: 14,
    background: bp.red, border: `4px solid ${bp.dark}`,
    boxShadow: `14px 14px 0 ${bp.dark}`,
    transform: 'rotate(-2deg)',
  },
  heroLabelInner: {
    background: bp.cream, padding: '30px 24px 22px',
    border: `2px solid ${bp.dark}`,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
  },
  heroLabelLogo: { width: '90%', maxWidth: 320, height: 'auto', marginBottom: 16 },
  heroLabelTagRow: { width: '100%', textAlign: 'center', marginBottom: 18 },
  heroLabelTag: {
    display: 'inline-block', padding: '6px 14px',
    background: bp.dark, color: bp.yellow,
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 11, fontWeight: 700,
    letterSpacing: '0.22em',
  },
  heroLabelMeta: {
    width: '100%', fontFamily: '"Space Grotesk", sans-serif',
    fontSize: 11, color: bp.dark, marginBottom: 16,
    display: 'flex', flexDirection: 'column', gap: 4,
  },
  heroLabelMetaRow: {
    display: 'flex', justifyContent: 'space-between',
    borderBottom: `1px dashed ${bp.dark}`, paddingBottom: 3,
    letterSpacing: '0.12em', fontWeight: 600,
  },
  heroLabelBarcode: {
    display: 'flex', alignItems: 'stretch', height: 36, width: '80%',
    marginBottom: 6,
  },
  heroLabelEan: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 11,
    letterSpacing: '0.3em', color: bp.dark,
  },

  heroTag: {
    position: 'absolute', bottom: -24, left: -28, zIndex: 5,
    transform: 'rotate(-8deg)',
  },
  heroTagInner: {
    background: bp.dark, color: bp.yellow,
    padding: '14px 20px', border: `3px solid ${bp.yellow}`,
    boxShadow: `4px 4px 0 ${bp.red}`,
    textAlign: 'center', minWidth: 120,
  },
  heroTagPrice: {
    fontFamily: '"Yeseva One", serif', fontSize: 36, lineHeight: 1,
  },
  heroTagPriceSub: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 10,
    letterSpacing: '0.18em', marginTop: 4, opacity: 0.8,
  },

  /* ---------- BIG TICKER ---------- */
  tickBig: {
    background: bp.red, color: bp.cream,
    overflow: 'hidden', borderTop: `4px solid ${bp.dark}`, borderBottom: `4px solid ${bp.dark}`,
    padding: '18px 0',
  },
  tickBigDark: {
    background: bp.dark, color: bp.yellow,
    overflow: 'hidden', borderTop: `4px solid ${bp.red}`, borderBottom: `4px solid ${bp.red}`,
    padding: '18px 0',
  },
  tickBigInner: { display: 'flex', whiteSpace: 'nowrap', width: 'max-content' },
  tickBigItem: {
    fontFamily: '"Yeseva One", serif', fontSize: 44, lineHeight: 1,
    padding: '0 26px', display: 'inline-flex', alignItems: 'center', gap: 30,
    letterSpacing: '-0.01em',
  },
  tickBigStar: { fontSize: 22, color: bp.yellow },

  /* ---------- INGREDIENTS ---------- */
  ingr: {
    background: bp.cream, padding: '88px 56px',
  },
  ingrHead: { textAlign: 'center', marginBottom: 48 },
  kicker: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 12, fontWeight: 700,
    letterSpacing: '0.28em', color: bp.red, marginBottom: 18,
  },
  kickerCream: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 12, fontWeight: 700,
    letterSpacing: '0.28em', color: bp.yellow, marginBottom: 18,
  },
  h2: {
    fontFamily: '"Yeseva One", serif', fontSize: 82, lineHeight: 0.96,
    color: bp.dark, margin: 0, letterSpacing: '-0.015em',
  },
  h2Dark: {
    fontFamily: '"Yeseva One", serif', fontSize: 76, lineHeight: 0.96,
    color: bp.dark, margin: 0, letterSpacing: '-0.015em',
  },
  h2Sub: {
    fontFamily: '"Manrope", sans-serif', fontSize: 18, lineHeight: 1.5,
    color: bp.dark, opacity: 0.7, marginTop: 16, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto',
  },
  h2Big: {
    fontFamily: '"Yeseva One", serif', fontSize: 92, lineHeight: 0.94,
    color: bp.cream, margin: 0, letterSpacing: '-0.02em',
  },
  h2BigItalic: { fontStyle: 'italic', color: bp.yellow },

  ingrGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18,
    maxWidth: 1280, margin: '0 auto',
  },
  ingrCard: {
    border: `3px solid ${bp.dark}`, padding: '36px 28px 30px',
    boxShadow: `8px 8px 0 ${bp.dark}`,
    display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
    minHeight: 280,
  },
  ingrN: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 11, fontWeight: 700,
    letterSpacing: '0.24em', marginBottom: 14, opacity: 0.7,
  },
  ingrName: {
    fontFamily: '"Yeseva One", serif', fontSize: 42, marginTop: 18, lineHeight: 1,
  },
  ingrSub: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 11, fontWeight: 600,
    letterSpacing: '0.18em', marginTop: 8,
  },

  /* ---------- CATALOG ---------- */
  cat: {
    position: 'relative', background: bp.cream2,
    padding: '96px 56px',
  },
  catHead: { textAlign: 'center', marginBottom: 56, position: 'relative', zIndex: 2 },
  catGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28,
    maxWidth: 1320, margin: '0 auto', position: 'relative', zIndex: 2,
  },
  prod: {
    position: 'relative',
    border: `3px solid ${bp.dark}`,
    padding: '28px 22px 26px',
    boxShadow: `12px 12px 0 ${bp.dark}`,
    display: 'flex', flexDirection: 'column',
    minHeight: 580,
  },
  prodHead: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18,
  },
  prodNum: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 11, fontWeight: 800,
    letterSpacing: '0.22em',
  },
  prodTag: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 10, fontWeight: 700,
    letterSpacing: '0.2em', padding: '4px 10px', border: '2px solid', borderRadius: 999,
  },
  prodCanWrap: {
    display: 'flex', justifyContent: 'center', padding: '8px 0 22px',
  },
  prodBody: { flex: 1, display: 'flex', flexDirection: 'column' },
  prodName: {
    fontFamily: '"Yeseva One", serif', fontSize: 38, margin: 0, lineHeight: 1,
  },
  prodUnit: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 11, fontWeight: 600,
    letterSpacing: '0.16em', marginTop: 6,
  },
  prodNote: {
    fontFamily: '"Manrope", sans-serif', fontSize: 14, lineHeight: 1.5,
    marginTop: 14, marginBottom: 18, opacity: 0.92,
  },
  prodFootRow: {
    marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14,
  },
  prodPrice: {
    fontFamily: '"Yeseva One", serif', fontSize: 30,
  },
  prodCta: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 12, fontWeight: 800,
    letterSpacing: '0.18em', padding: '10px 16px', cursor: 'pointer',
  },
  prodSticker: {
    position: 'absolute', top: -14, right: -14,
    width: 84, height: 84, borderRadius: '50%',
    border: `3px solid ${bp.dark}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: '"Yeseva One", serif', fontSize: 13, lineHeight: 1.05,
    textAlign: 'center', whiteSpace: 'pre',
    transform: 'rotate(12deg)',
    boxShadow: `4px 4px 0 ${bp.dark}`,
  },

  /* ---------- RECEIPT divider ---------- */
  receiptWrap: {
    background: bp.cream2, padding: '40px 56px 90px', display: 'flex', justifyContent: 'center',
  },
  receipt: {
    background: bp.paper, border: `2px solid ${bp.dark}`,
    width: 460, padding: '26px 30px 34px',
    boxShadow: `8px 8px 0 ${bp.dark}`,
    transform: 'rotate(-1deg)',
    position: 'relative',
  },
  receiptHead: {},
  receiptDiv: {
    height: 1, background: bp.dark, opacity: 0.25, margin: '14px 0',
    borderBottom: `1px dashed ${bp.dark}`,
  },
  receiptRow: {
    display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 14, color: bp.dark,
    padding: '4px 0', gap: 8,
  },
  receiptDots: {
    flex: 1, borderBottom: `1.5px dotted ${bp.dark}`, height: 2, alignSelf: 'flex-end', margin: '0 6px 4px',
    opacity: 0.5,
  },

  /* ---------- MENU ---------- */
  menu: {
    position: 'relative',
    background: bp.dark, color: bp.cream,
    padding: '110px 56px',
  },
  menuHead: { maxWidth: 1280, margin: '0 auto 60px', position: 'relative', zIndex: 2 },
  menuLead: {
    fontFamily: '"Manrope", sans-serif', fontSize: 19, lineHeight: 1.55,
    color: bp.cream, opacity: 0.75, marginTop: 28, maxWidth: 580,
  },
  menuGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
    maxWidth: 1280, margin: '0 auto',
    border: `2px solid ${bp.cream}`,
    position: 'relative', zIndex: 2,
  },
  dish: {
    background: bp.dark, color: bp.cream,
    border: `2px solid ${bp.cream}`,
    margin: '-1px',
    padding: '28px 28px 24px',
    display: 'flex', flexDirection: 'column',
    minHeight: 240,
  },
  dishHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  dishN: {
    fontFamily: '"Yeseva One", serif', fontSize: 24, color: bp.yellow,
  },
  dishTag: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 10, fontWeight: 700,
    letterSpacing: '0.18em', color: bp.red,
  },
  dishName: {
    fontFamily: '"Yeseva One", serif', fontSize: 32, margin: 0, lineHeight: 1.05,
  },
  dishDesc: {
    fontFamily: '"Manrope", sans-serif', fontSize: 14, lineHeight: 1.5,
    color: bp.cream, opacity: 0.75, marginTop: 12,
  },
  dishFoot: {
    marginTop: 'auto', paddingTop: 18,
    display: 'flex', alignItems: 'center', gap: 14,
  },
  dishPrice: {
    fontFamily: '"Yeseva One", serif', fontSize: 26, color: bp.yellow,
  },
  dishLine: { flex: 1, borderTop: `1px dashed ${bp.cream}`, opacity: 0.3 },
  dishCta: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 11, fontWeight: 700,
    letterSpacing: '0.18em', color: bp.cream, opacity: 0.9, cursor: 'pointer',
  },

  /* ---------- OWNERS ---------- */
  owners: {
    background: bp.cream, padding: '110px 56px',
  },
  ownersGrid: {
    display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 70,
    maxWidth: 1280, margin: '0 auto', alignItems: 'center',
  },
  ownersPhotos: {
    display: 'flex', gap: 18, justifyContent: 'center',
  },
  portraitWrap: {
    width: 200, padding: 14,
    border: `3px solid ${bp.dark}`,
    boxShadow: `6px 6px 0 ${bp.dark}`,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
  },
  portraitFrame: {
    width: '100%', height: 220, border: `2px solid ${bp.dark}`, overflow: 'hidden',
    marginBottom: 12, background: bp.cream,
  },
  portraitName: {
    fontFamily: '"Yeseva One", serif', fontSize: 26, lineHeight: 1, letterSpacing: '0.02em',
  },
  portraitSub: {
    fontFamily: '"Caveat", cursive', fontSize: 18, marginTop: 2,
  },
  ownersText: {},
  ownersP: {
    fontFamily: '"Manrope", sans-serif', fontSize: 18, lineHeight: 1.6,
    color: bp.dark, opacity: 0.85, marginTop: 18,
  },
  ownersSign: {
    fontFamily: '"Caveat", cursive', fontSize: 26, color: bp.red, marginTop: 22,
  },

  /* ---------- MAP ---------- */
  map: {
    position: 'relative', background: bp.cream2, padding: '110px 56px',
  },
  mapHead: { textAlign: 'center', marginBottom: 56, position: 'relative', zIndex: 2 },
  mapWrap: {
    display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 36,
    maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2,
    alignItems: 'start',
  },
  mapBox: {
    background: bp.cream, border: `3px solid ${bp.dark}`, boxShadow: `10px 10px 0 ${bp.dark}`,
    aspectRatio: '5/4',
  },
  mapList: {
    background: bp.cream, border: `3px solid ${bp.dark}`, boxShadow: `10px 10px 0 ${bp.dark}`,
    padding: '8px 0',
  },
  mapItem: {
    display: 'flex', alignItems: 'center', gap: 14,
    padding: '14px 18px', borderBottom: `1px dashed ${bp.dark}`,
  },
  mapPin: {
    width: 36, height: 36, borderRadius: '50%',
    background: bp.red, color: bp.cream,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 12, fontWeight: 800,
    border: `2px solid ${bp.dark}`,
  },
  mapCity: {
    fontFamily: '"Yeseva One", serif', fontSize: 18, color: bp.dark, lineHeight: 1,
  },
  mapAddr: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 11, color: bp.dark,
    opacity: 0.65, marginTop: 4, letterSpacing: '0.08em',
  },
  mapHrs: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 10, color: bp.dark,
    opacity: 0.7, letterSpacing: '0.14em', fontWeight: 700,
  },
  mapMore: {
    display: 'block', textAlign: 'center', padding: '18px 0',
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 12, fontWeight: 700,
    letterSpacing: '0.2em', color: bp.red, cursor: 'pointer',
  },

  /* ---------- CLUB ---------- */
  club: {
    background: bp.red, color: bp.cream, padding: '110px 56px',
    borderTop: `4px solid ${bp.dark}`,
  },
  clubGrid: {
    display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56,
    maxWidth: 1240, margin: '0 auto', alignItems: 'center',
  },
  clubText: {},
  clubP: {
    fontFamily: '"Manrope", sans-serif', fontSize: 19, lineHeight: 1.55,
    color: bp.cream, opacity: 0.9, marginTop: 24, maxWidth: 520,
  },
  clubForm: {
    display: 'flex', gap: 0, marginTop: 28, maxWidth: 500,
    border: `3px solid ${bp.dark}`, background: bp.cream,
    boxShadow: `6px 6px 0 ${bp.dark}`,
  },
  clubInput: {
    flex: 1, border: 0, padding: '18px 22px', background: 'transparent',
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 16,
    color: bp.dark, outline: 'none',
  },
  clubBtn: {
    border: 0, background: bp.dark, color: bp.yellow,
    fontFamily: '"Yeseva One", serif', fontSize: 22,
    padding: '0 24px', cursor: 'pointer', borderLeft: `3px solid ${bp.dark}`,
  },
  clubFine: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 11,
    letterSpacing: '0.18em', color: bp.cream, opacity: 0.7, marginTop: 14,
  },
  clubCardWrap: { display: 'flex', justifyContent: 'center' },

  punch: {
    background: bp.cream, color: bp.dark,
    width: 400, padding: '22px 26px 24px',
    border: `3px solid ${bp.dark}`, boxShadow: `8px 8px 0 ${bp.dark}`,
    transform: 'rotate(2.5deg)',
  },
  punchHead: { textAlign: 'center', marginBottom: 14 },
  punchGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8,
    margin: '8px 0 14px',
  },
  punchSlot: {
    aspectRatio: '1', borderRadius: '50%', border: `2px solid ${bp.dark}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: '"Yeseva One", serif', fontSize: 18,
  },
  punchFoot: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' },

  /* ---------- FAQ ---------- */
  faq: { background: bp.cream, padding: '110px 56px' },
  faqHead: { maxWidth: 1280, margin: '0 auto 48px' },
  faqGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0,
    maxWidth: 1280, margin: '0 auto',
    border: `2px solid ${bp.dark}`,
  },
  faqItem: {
    padding: '28px 32px', border: `2px solid ${bp.dark}`, margin: '-1px',
    background: bp.cream,
  },
  faqQ: {
    fontFamily: '"Yeseva One", serif', fontSize: 24, color: bp.dark, marginBottom: 10,
  },
  faqA: {
    fontFamily: '"Manrope", sans-serif', fontSize: 15, lineHeight: 1.55,
    color: bp.dark, opacity: 0.78,
  },

  /* ---------- FOOTER ---------- */
  foot: {
    background: bp.dark, color: bp.cream, padding: '70px 56px 30px',
    borderTop: `4px solid ${bp.red}`,
  },
  footTop: {
    display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 56,
    maxWidth: 1280, margin: '0 auto 60px',
    paddingBottom: 40, borderBottom: `1px solid ${bp.cream}33`,
  },
  footBrand: { display: 'flex', gap: 16, alignItems: 'center' },
  footLogo: { width: 90, height: 'auto' },
  footName: {
    fontFamily: '"Yeseva One", serif', fontSize: 22, color: bp.yellow, lineHeight: 1.1,
  },
  footAddr: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 12,
    letterSpacing: '0.14em', color: bp.cream, opacity: 0.7, marginTop: 6,
  },
  footCols: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
  },
  footColH: {
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 11, fontWeight: 800,
    letterSpacing: '0.22em', color: bp.red, marginBottom: 16,
  },
  footLink: {
    display: 'block', fontFamily: '"Manrope", sans-serif', fontSize: 15,
    color: bp.cream, opacity: 0.78, marginBottom: 8, cursor: 'pointer',
  },
  footBig: {
    fontFamily: '"Yeseva One", serif',
    fontSize: 'clamp(120px, 22vw, 340px)', lineHeight: 0.85,
    color: bp.yellow, textAlign: 'center', margin: '30px 0 20px',
    letterSpacing: '-0.02em',
  },
  footMeta: {
    display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16,
    fontFamily: '"Space Grotesk", sans-serif', fontSize: 11,
    letterSpacing: '0.18em', color: bp.cream, opacity: 0.6, paddingTop: 16,
    borderTop: `1px solid ${bp.cream}33`, maxWidth: 1280, margin: '0 auto',
  },

  /* ---------- INSTAGRAM ---------- */
  ig: {
    position: 'relative', background: bp.dark, color: bp.cream,
    padding: '100px 56px', borderTop: `4px solid ${bp.red}`, overflow: 'hidden',
  },
  igGrid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
    maxWidth: 1240, margin: '0 auto', alignItems: 'center',
    position: 'relative', zIndex: 2,
  },
  igLeft: {},
  igH2: {
    fontFamily: '"Yeseva One", serif', fontSize: 56, lineHeight: 0.98,
    color: bp.cream, margin: '0 0 18px', letterSpacing: '-0.015em',
  },
  igHandle: {
    display: 'inline-block', fontFamily: '"Space Grotesk", sans-serif',
    fontWeight: 800, fontSize: 24, letterSpacing: '0.02em', color: bp.yellow, marginBottom: 14,
  },
  igLineP: {
    fontFamily: '"Manrope", sans-serif', fontSize: 18, lineHeight: 1.55,
    color: bp.cream, opacity: 0.82, maxWidth: 420, marginBottom: 28,
  },
  igBtn: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: bp.yellow, color: bp.dark,
    fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800, fontSize: 14,
    letterSpacing: '0.06em', padding: '14px 22px',
    border: `2.5px solid ${bp.cream}`, boxShadow: `6px 6px 0 ${bp.red}`, cursor: 'pointer',
  },
  igTiles: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
  },
};

window.V7Bodega = V7Bodega;
