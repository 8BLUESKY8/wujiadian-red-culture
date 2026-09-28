/* ==================== DATA ==================== */
const characters = [
  { name:'徐子清', role:'特委书记·起义总指挥', avatar:'徐', village:'吴家店', bio:'徐子清（1902—1929），商罗麻特别区委书记，立夏节起义主要策划者和总指挥。1929年5月2日在穿石庙主持紧急会议，果断决定提前起义时间并制定多点突袭战术，为起义成功立下首功。同年牺牲，年仅27岁。' },
  { name:'周维炯', role:'红32师师长', avatar:'周', village:'吴家店', bio:'周维炯（1908—1931），立夏节起义核心领导人之一，红11军第32师首任师长。起义中率队攻克吴家店民团据点，后率红32师转战鄂豫皖边区，为创建豫东南革命根据地作出卓越贡献。1931年牺牲，年仅23岁。' },
  { name:'徐其虚', role:'起义领导人·红32师党代表', avatar:'徐', village:'吴家店', bio:'徐其虚（1906—1929），商罗麻特别区委委员，穿石庙会议主要参与者。起义后担任红32师党代表，在吴家店一带深入开展群众工作和苏维埃政权建设。1929年底壮烈牺牲。' },
  { name:'肖方', role:'起义核心骨干', avatar:'肖', village:'吴家店', bio:'肖方（1907—1930），立夏节起义核心骨干，穿石庙会议参会者之一。起义中负责组织吴家店包畈一带的农民武装暴动，作战勇猛。1930年在战斗中牺牲。' },
  { name:'廖秉国', role:'起义骨干·地下党员', avatar:'廖', village:'吴家店', bio:'廖秉国（1903—1930），立夏节起义骨干成员，参与穿石庙会议决策。起义前在吴家店地区积极发展地下党组织，动员农民参加革命。1930年牺牲，年仅27岁。' },
  { name:'毛月波', role:'起义骨干', avatar:'毛', village:'吴家店', bio:'毛月波（1905—1929），立夏节起义骨干，穿石庙会议参会者。起义之夜率队攻打吴家店反动民团，身先士卒。1929年底在反围剿战斗中牺牲。' }
];

const sites = [
  { name:'穿石庙', category:'landmark', catLabel:'核心地标', img:'chuanshi-temple', addr:'吴家店镇', desc:'国家级文物保护单位。1929年5月2日，中共商罗麻特别区委在此召开紧急会议，决定发动立夏节起义。穿石庙是鄂豫皖边区革命的决策原点，具有极高的历史价值。', lat:31.228, lng:115.848 },
  { name:'立夏节起义革命烈士纪念碑', category:'landmark', catLabel:'核心地标', img:'martyr-monument', addr:'吴家店镇中心', desc:'为纪念立夏节起义及在革命战争中牺牲的吴家店籍烈士而修建。碑身庄严肃穆，是每年清明、立夏节举行公祭活动的重要场所。', lat:31.220, lng:115.850 },
  { name:'包畈暴动旧址', category:'uprising', catLabel:'暴动与组织旧址', img:'baofan-uprising', addr:'吴家店镇包畈村', desc:'立夏节之夜，包畈暴动点由肖方、廖秉国等指挥，一举攻占当地民团驻地，缴获步枪十余支、弹药若干，是吴家店片区起义的主要暴动点之一。', lat:31.235, lng:115.832 },
  { name:'地下党组织秘密联络地（西庄徐氏祠）', category:'uprising', catLabel:'暴动与组织旧址', img:'xizhuang-xu', addr:'吴家店镇西庄村', desc:'西庄徐氏祠是立夏节起义前中共地下党组织的重要秘密联络站。起义骨干多次在此接头、传递情报、策划行动方案。', lat:31.218, lng:115.825 },
  { name:'红军枪械所旧址', category:'uprising', catLabel:'暴动与组织旧址', img:'red-army-arsenal', addr:'吴家店镇境内', desc:'红32师成立后，在吴家店建立的简易枪械修理所，为红军修理枪支、制造简易弹药，是鄂豫皖苏区早期军工事业的重要历史见证。', lat:31.225, lng:115.865 },
  { name:'红27军包家畈战斗遗址', category:'battle', catLabel:'战斗遗址', img:'baojiafan-battle', addr:'吴家店镇包家畈村', desc:'红27军在包家畈与国民党军队展开激战，红军指战员英勇奋战，以少胜多。战斗遗址至今保留有战壕遗迹。', lat:31.240, lng:115.838 },
  { name:'皮旅强越松子关战斗遗址', category:'battle', catLabel:'战斗遗址', img:'songziguan-battle', addr:'吴家店镇松子关村', desc:'皮定均旅（皮旅）在松子关一带与敌军展开激烈战斗，成功掩护主力部队转移。松子关地势险要，战斗遗址保存完好。', lat:31.195, lng:115.845 },
  { name:'金寨县吴家店穿石庙烈士陵园', category:'tomb', catLabel:'烈士墓园', img:'chuanshi-cemetery', addr:'吴家店镇', desc:'穿石庙烈士陵园安葬着立夏节起义及后续革命战争中牺牲的多位英烈忠骨。陵园依山而建，松柏环绕，庄严肃穆，是吴家店镇重要的爱国主义教育基地和红色旅游瞻仰场所。', lat:31.230, lng:115.850 },
  { name:'刘邓大军竹根河驻地旧址', category:'station', catLabel:'驻地旧址', img:'zhugenhe-station', addr:'吴家店镇竹根河村', desc:'1947年刘邓大军千里跃进大别山时，所部在竹根河一带驻扎休整，当地群众踊跃支援部队，体现了军民鱼水深情。', lat:31.238, lng:115.862 },
  { name:'罗洁故居', category:'residence', catLabel:'名人故居', img:'luojie-residence', addr:'吴家店镇境内', desc:'罗洁（1885—1942），辛亥革命先驱，早年加入同盟会，追随孙中山先生。其故居保存完好，展现了一代民主革命志士的成长足迹。', lat:31.210, lng:115.840 }
];

const martyrs = [
  { name:'徐子清', village:'吴家店村', years:'1902—1929', bio:'商罗麻特别区委书记，立夏节起义总指挥', type:'martyr' },
  { name:'徐其虚', village:'吴家店村', years:'1906—1929', bio:'红32师党代表，起义核心领导人', type:'martyr' },
  { name:'周维炯', village:'吴家店村', years:'1908—1931', bio:'红11军第32师师长，起义核心领导人', type:'martyr' },
  { name:'肖方', village:'包畈村', years:'1907—1930', bio:'起义骨干，包畈暴动指挥者', type:'martyr' },
  { name:'廖秉国', village:'包畈村', years:'1903—1930', bio:'起义骨干，地下党员', type:'martyr' },
  { name:'毛月波', village:'吴家店村', years:'1905—1929', bio:'起义骨干，穿石庙会议参会者', type:'martyr' },
  { name:'李德胜', village:'西庄村', years:'1901—1931', bio:'红军连长，黄安战役牺牲', type:'martyr' },
  { name:'张正明', village:'石佛村', years:'1908—1932', bio:'红军营教导员，第四次反围剿牺牲', type:'martyr' },
  { name:'王大江', village:'竹根河村', years:'1899—1931', bio:'赤卫队长，掩护群众转移时牺牲', type:'martyr' },
  { name:'陈树生', village:'松子关村', years:'1904—1932', bio:'红军排长，松子关战斗中牺牲', type:'martyr' },
  { name:'刘青山', village:'太平山村', years:'1907—1934', bio:'苏维埃主席，被捕后英勇就义', type:'martyr' },
  { name:'罗洁', village:'吴家店村', years:'1885—1942', bio:'辛亥革命先驱，同盟会会员', type:'pioneer' },
  { name:'马长顺', village:'包畈村', years:'1898—1930', bio:'农民协会负责人，组织群众支前', type:'martyr' },
  { name:'胡志强', village:'西庄村', years:'1909—1932', bio:'红军通信员，传递情报途中被捕就义', type:'martyr' },
  { name:'林大勇', village:'竹根河村', years:'1905—1933', bio:'红军连长，掩护刘邓大军时牺牲', type:'martyr' }
];

const tourismItems = [
  { title:'太平山万亩映山红', tag:'红+生态', img:'yingshanhong', bgImg:'taipingshan_wanmu_yingshanhong', desc:'每年春季，太平山万亩映山红竞相绽放，漫山红遍，与红色文化交相辉映。"红色寻踪+花海观光"已成为吴家店最具特色的文旅线路。', color:'#c41e3a' },
  { title:'天堂寨毗邻优势', tag:'区位联动', img:'tiantangzhai', bgImg:'tiantaizhai_pilin_youshi', desc:'吴家店镇毗邻国家5A级景区天堂寨，红色文化+绿色生态互补联动，"山上观景、山下寻红"的全域旅游格局已初步形成。', color:'#2e7d32' },
  { title:'金寨吊锅', tag:'本地风物', img:'diao-guo', bgImg:'jinzhai_diaoguo', desc:'金寨吊锅是本地最具特色的传统美食，炭火慢炖、山珍荟萃，承载着大别山区的淳朴民风与饮食文化。来吴家店，品正宗吊锅。', color:'#e67e22' },
  { title:'山珍农特产品', tag:'特色物产', img:'shan-zhen', bgImg:'shanzhen_nongte_chanpin', desc:'吴家店地处大别山腹地，盛产板栗、核桃、茶叶、天麻、茯苓等山珍特产，是"金寨山珍"品牌的重要产地。', color:'#8d6e63' },
  { title:'楚剧团民俗文化', tag:'非遗传承', img:'chu-opera', bgImg:'chujutuan_minsu_wenhua', desc:'吴家店楚剧团传承百年，每逢节庆演出不断。楚剧以质朴的唱腔讲述历史故事与民间传说，是省级非物质文化遗产保护项目。', color:'#6a1b9a' },
  { title:'安徽省优秀旅游乡镇', tag:'发展成果', img:'tourism-township', bgImg:'anhuisheng_youxiu_lvyou_xiangzhen', desc:'吴家店镇获评"安徽省优秀旅游乡镇"称号，红色旅游基础设施不断完善，年接待游客量稳步增长，旅游产业成为乡村振兴的重要引擎。', color:'#c41e3a' },
  { title:'红色宣讲志愿服务队', tag:'精神传承', img:'volunteer-team', bgImg:'hongse_xuanjiang_zhiyuan_fuwudui', desc:'吴家店成立了由老党员、退休教师、青年志愿者组成的红色宣讲团，常年为游客和中小学生义务讲解本地革命历史，传承红色基因。', color:'#b8860b' },
  { title:'红色村镇建设', tag:'乡村振兴', img:'red-village', bgImg:'hongse_cunzhen_jianshe', desc:'依托红色文化资源优势，吴家店大力推进红色美丽村庄建设，包畈村等已建成红色文旅示范村，农文旅融合助力乡村振兴。', color:'#1b5e20' }
];

/* ==================== NAVIGATION ==================== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navAnchors = document.querySelectorAll('.nav-links a');

navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navAnchors.forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navAnchors.forEach(a => { a.classList.remove('active'); if (a.getAttribute('data-nav') === id) a.classList.add('active'); });
    }
  });
  // Scroll-to-top button
  document.getElementById('scrollTop').classList.toggle('visible', scrollY > 500);
});

document.getElementById('scrollTop').addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

/* ==================== HERO CAROUSEL ==================== */
(function(){
  const slides = document.querySelectorAll('#carouselTrack .carousel-slide');
  const dotsContainer = document.getElementById('carouselDots');
  let current = 0;
  slides.forEach((_,i) => { const dot = document.createElement('button'); dot.className = 'carousel-dot' + (i===0?' active':''); dot.addEventListener('click', ()=>goTo(i)); dotsContainer.appendChild(dot); });
  const dots = dotsContainer.querySelectorAll('.carousel-dot');
  function goTo(i) { slides[current].style.display='none'; dots[current].classList.remove('active'); current=(i+slides.length)%slides.length; slides[current].style.display='block'; dots[current].classList.add('active'); }
  slides.forEach((s,i) => { if(i!==0) s.style.display='none'; });
  setInterval(() => goTo(current+1), 4000);
})();

/* ==================== UPRISING CAROUSEL ==================== */
(function(){
  const slides = document.querySelectorAll('#siteCarouselMain img');
  const placeholders = document.querySelectorAll('#siteCarouselMain .carousel-placeholder');
  const captions = ['穿石庙旧址 — 国家级文物保护单位','穿石庙会议桌 — 1929年5月2日紧急会议文物','立夏节起义革命烈士纪念碑 — 吴家店镇'];
  const captionEl = document.getElementById('carouselCaption');
  let idx = 0;
  function showSlide(i) {
    // Hide all
    slides.forEach(function(s) { s.classList.remove('active'); });
    placeholders.forEach(function(p) { p.classList.remove('active'); });
    // Show current: prefer real image, fallback to placeholder
    var img = slides[i];
    var placeholder = placeholders[i];
    if (img.naturalWidth === 0 && img.complete) {
      // Image failed to load — show placeholder
      if (placeholder) placeholder.classList.add('active');
    } else {
      img.classList.add('active');
    }
    captionEl.textContent = captions[i];
    idx = i;
  }
  document.getElementById('carouselPrev').addEventListener('click',function(){ showSlide((idx-1+slides.length)%slides.length); });
  document.getElementById('carouselNext').addEventListener('click',function(){ showSlide((idx+1)%slides.length); });
  setInterval(function(){ showSlide((idx+1)%slides.length); }, 5000);
})();

/* ==================== TIMELINE SCROLL HIGHLIGHT ==================== */
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.3 });
timelineItems.forEach(item => timelineObserver.observe(item));

/* ==================== CHARACTER CARDS & MODAL ==================== */
const charsGrid = document.getElementById('charsGrid');
const charModal = document.getElementById('charModal');
const modalClose = document.getElementById('modalClose');
characters.forEach(c => {
  const card = document.createElement('div'); card.className='char-card'; card.setAttribute('role','button'); card.setAttribute('tabindex','0');
  card.innerHTML = `<div class="char-avatar">${c.avatar}</div><h4>${c.name}</h4><div class="role">${c.role}</div>`;
  card.addEventListener('click', () => {
    document.getElementById('modalName').textContent = c.name;
    document.getElementById('modalRole').textContent = c.role + ' | ' + c.village;
    document.getElementById('modalBio').textContent = c.bio;
    charModal.classList.add('open');
  });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); card.click(); }
  });
  charsGrid.appendChild(card);
});
modalClose.addEventListener('click', () => charModal.classList.remove('open'));
charModal.addEventListener('click', (e) => { if(e.target===charModal) charModal.classList.remove('open'); });

/* ==================== SITES FILTER ==================== */
const sitesGrid = document.getElementById('sitesGrid');
const webgisSiteList = document.getElementById('webgisSiteList');
const webgisCount = document.getElementById('webgisCount');
const siteSearchInput = document.getElementById('siteSearch');
let activeSiteFilter = 'all';

function filterSiteData(filter, query) {
  const normalizedQuery = (query || '').trim().toLocaleLowerCase();
  return sites.map((site, index) => ({ site, index })).filter(({site}) => {
    const matchesCategory = filter === 'all' || site.category === filter;
    const haystack = [site.name, site.catLabel, site.addr, site.desc].join(' ').toLocaleLowerCase();
    return matchesCategory && (!normalizedQuery || haystack.includes(normalizedQuery));
  });
}

function renderWebgisList(items) {
  if (!webgisSiteList) return;
  if (!items.length) {
    webgisSiteList.innerHTML = '<div class="webgis-empty"><span>⌕</span><strong>没有找到匹配的遗址</strong><p>试试其他名称、村落或类别。</p></div>';
    return;
  }
  webgisSiteList.innerHTML = items.map(({site, index}) => `
    <button type="button" class="webgis-site-row" data-site-index="${index}" data-category="${site.category}" aria-label="在地图上定位${escapeHtml(site.name)}">
      <span class="webgis-site-thumb"><img src="${IMAGE_URLS[`${site.img}.jpg`]}" alt="" loading="lazy"></span>
      <span class="webgis-site-copy"><span class="webgis-site-category">${escapeHtml(site.catLabel)}</span><strong>${escapeHtml(site.name)}</strong><span class="webgis-site-address">${escapeHtml(site.addr)}</span></span>
      <span class="webgis-row-mark" aria-hidden="true">↗</span>
    </button>`).join('');
  webgisSiteList.querySelectorAll('.webgis-site-row').forEach(row => {
    row.addEventListener('click', () => {
      const index = Number(row.dataset.siteIndex);
      if (typeof window.focusSiteOnMap === 'function') window.focusSiteOnMap(index);
    });
  });
}

function renderSites(filter='all') {
  activeSiteFilter = filter;
  const query = siteSearchInput ? siteSearchInput.value : '';
  const items = filterSiteData(filter, query);
  sitesGrid.innerHTML = '';
  items.forEach(({site:s}) => {
    const card = document.createElement('div'); card.className='site-card';
    card.innerHTML = `
      <div class="site-card-img" style="background:linear-gradient(135deg, ${s.category==='landmark'?'#8B0000':s.category==='uprising'?'#5D3A1A':s.category==='battle'?'#4a4a4a':s.category==='station'?'#2c3e50':s.category==='tomb'?'#1a3a1a':'#3a2a1a'}, ${s.category==='landmark'?'#c41e3a':s.category==='uprising'?'#8B6914':s.category==='battle'?'#777':s.category==='station'?'#507192':s.category==='tomb'?'#3a6a3a':'#6a5a3a'});">
        <img src="${IMAGE_URLS[`${s.img}.jpg`]}" alt="${s.name}" loading="lazy" onerror="this.style.display='none'">
        <span class="img-placeholder" style="color:rgba(255,255,255,0.75);">📷 ${s.name}</span>
      </div>
      <div class="site-card-body">
        <span class="tag">${s.catLabel}</span>
        <h4>${s.name}</h4>
        <p>${s.desc}</p>
        <div class="addr">📍 ${s.addr}</div>
      </div>`;
    sitesGrid.appendChild(card);
  });
  renderWebgisList(items);
  if (webgisCount) webgisCount.textContent = `${items.length} / ${sites.length}`;
}
renderSites();
document.querySelectorAll('.site-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.site-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.site-tab').forEach(t => t.setAttribute('aria-pressed', String(t === tab)));
    var filter = tab.dataset.filter;
    renderSites(filter);
    // 同步筛选地图标记
    if (typeof filterMapMarkers === 'function') {
      filterMapMarkers(filter, siteSearchInput ? siteSearchInput.value : '');
    }
  });
});

if (siteSearchInput) {
  siteSearchInput.addEventListener('input', () => {
    const clearButton = document.getElementById('siteSearchClear');
    if (clearButton) clearButton.hidden = siteSearchInput.value.length === 0;
    renderSites(activeSiteFilter);
    if (typeof filterMapMarkers === 'function') filterMapMarkers(activeSiteFilter, siteSearchInput.value);
  });
}
const siteSearchClear = document.getElementById('siteSearchClear');
if (siteSearchClear) siteSearchClear.addEventListener('click', () => {
  siteSearchInput.value = '';
  siteSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
  siteSearchInput.focus();
});

/* ==================== HEROES SEARCH ==================== */
const heroesGrid = document.getElementById('heroesGrid');
const noResults = document.getElementById('noResults');

/* 弹窗文案：按类型区分 */
const MARTYR_EPILOGUE = {
  martyr:  '吴家店这片红色热土永远铭记烈士的英名，他们的革命精神将代代相传，激励后人砥砺前行。',
  pioneer: '吴家店人民永远怀念这位革命先驱，他的精神与事迹将永载史册，激励一代又一代人奋勇向前。'
};

function renderHeroes(search, village) {
  search = (search || '').toLowerCase();
  village = village || 'all';

  // 大小写不敏感搜索
  var filtered = martyrs.filter(function(m) {
    var nameMatch = m.name.toLowerCase().indexOf(search) !== -1;
    var villageMatch = village === 'all' || m.village === village;
    return nameMatch && villageMatch;
  });

  // 无结果提示带计数
  if (filtered.length === 0) {
    noResults.style.display = 'block';
    noResults.textContent = '未找到匹配的烈士信息，请调整搜索条件（共 ' + martyrs.length + ' 位英烈）';
  } else {
    noResults.style.display = 'none';
  }

  // 渲染卡片（XSS 安全：用 textContent 或 escapeHtml）
  heroesGrid.innerHTML = '';
  filtered.forEach(function(m) {
    var card = document.createElement('div');
    card.className = 'hero-card';

    var nameEl = document.createElement('div');
    nameEl.className = 'hero-name';
    nameEl.textContent = m.name;

    var infoEl = document.createElement('div');
    infoEl.className = 'hero-info';
    infoEl.textContent = m.years + ' · ' + m.bio;

    var villageEl = document.createElement('span');
    villageEl.className = 'hero-village';
    villageEl.textContent = '📍 ' + m.village;

    card.appendChild(nameEl);
    card.appendChild(infoEl);
    card.appendChild(villageEl);

    card.addEventListener('click', function() {
      document.getElementById('modalName').textContent = m.name;
      document.getElementById('modalRole').textContent = m.years + ' | ' + m.village;
      document.getElementById('modalBio').textContent = m.bio + '。' + (MARTYR_EPILOGUE[m.type] || MARTYR_EPILOGUE.martyr);
      charModal.classList.add('open');
    });

    heroesGrid.appendChild(card);
  });
}

renderHeroes();

// 搜索输入防抖（200ms）
var heroSearchTimer = 0;
document.getElementById('heroSearch').addEventListener('input', function(e) {
  clearTimeout(heroSearchTimer);
  heroSearchTimer = setTimeout(function() {
    renderHeroes(e.target.value, document.getElementById('heroVillage').value);
  }, 200);
});
document.getElementById('heroVillage').addEventListener('change', function(e) {
  renderHeroes(document.getElementById('heroSearch').value, e.target.value);
});

/* ==================== FLOWER OFFERING ==================== */
const flowerCountEl = document.getElementById('flowerCount');
const flowerTotalEl = document.getElementById('flowerTotal');
const flowerBtn = document.getElementById('flowerBtn');
let flowerCount = parseInt(localStorage.getItem('wjd_flowerCount')) || 0;
flowerCountEl.textContent = flowerCount;
flowerTotalEl.textContent = flowerCount;

flowerBtn.addEventListener('click', () => {
  flowerCount++;
  localStorage.setItem('wjd_flowerCount', flowerCount);
  flowerCountEl.textContent = flowerCount;
  flowerTotalEl.textContent = flowerCount;
  // Create petals
  for(let i=0;i<12;i++) {
    setTimeout(() => {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.textContent = ['🌸','🌺','💮','🏵️','🌷','🌼'][Math.floor(Math.random()*6)];
      petal.style.left = Math.random()*100+'%';
      petal.style.animationDuration = (2+Math.random()*3)+'s';
      petal.style.animationDelay = '0s';
      document.body.appendChild(petal);
      setTimeout(() => petal.remove(), 4000);
    }, i*80);
  }
});

/* ==================== MESSAGE WALL ==================== */
const msgList = document.getElementById('msgList');
const msgText = document.getElementById('msgText');
const msgAuthor = document.getElementById('msgAuthor');
const msgSubmit = document.getElementById('msgSubmit');

/* ---- 留言数据加载（加固 localStorage） ---- */
const MSG_MAX = 200;
let messages = [];
(function loadMessages() {
  try {
    var raw = localStorage.getItem('wjd_messages');
    messages = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(messages)) messages = [];
  } catch(e) {
    messages = [];
    console.warn('留言数据读取失败，已重置:', e);
  }
  // 超过上限只保留最新 MSG_MAX 条
  if (messages.length > MSG_MAX) {
    messages = messages.slice(messages.length - MSG_MAX);
  }
})();

function saveMessages() {
  if (messages.length > MSG_MAX) {
    messages = messages.slice(messages.length - MSG_MAX);
  }
  try {
    localStorage.setItem('wjd_messages', JSON.stringify(messages));
  } catch(e) {
    console.warn('留言存储失败，尝试释放空间:', e);
    // localStorage 满时裁剪一半再试
    messages = messages.slice(Math.floor(messages.length / 2));
    try { localStorage.setItem('wjd_messages', JSON.stringify(messages)); } catch(e2) {}
  }
}

/* ---- HTML 转义（防 XSS） ---- */
function escapeHtml(str) {
  var div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

/* ---- 渲染留言列表 ---- */
function renderMessages() {
  msgList.innerHTML = '';
  if (messages.length === 0) {
    msgList.innerHTML = '<p style="text-align:center;color:#aaa;padding:20px;">暂无留言，成为第一个留下寄语的人吧 🌟</p>';
    return;
  }
  messages.slice().reverse().forEach(function(m) {
    var div = document.createElement('div'); div.className = 'msg-item';
    div.innerHTML =
      '<span class="msg-author">' + escapeHtml(m.author || '匿名访客') + '</span>' +
      '<span class="msg-time">' + escapeHtml(m.time) + '</span>' +
      '<div class="msg-text">' + escapeHtml(m.text) + '</div>';
    msgList.appendChild(div);
  });
}
renderMessages();

/* ---- 提交留言（防刷 + 字数下限 + Ctrl+Enter） ---- */
var msgCooldown = 0;
function submitMessage() {
  // 3 秒冷却
  if (Date.now() - msgCooldown < 3000) {
    msgText.style.borderColor = '#e67e22';
    msgText.setAttribute('placeholder', '请稍等几秒再提交');
    setTimeout(function() {
      msgText.style.borderColor = '#ddd';
      msgText.setAttribute('placeholder', '写下您对革命先烈的缅怀寄语……');
    }, 1500);
    return;
  }
  var text = msgText.value.trim();
  // 至少 2 个字
  if (text.length < 2) {
    msgText.style.borderColor = '#e74c3c';
    setTimeout(function() { msgText.style.borderColor = '#ddd'; }, 1500);
    return;
  }
  var author = msgAuthor.value.trim();
  var now = new Date();
  var timeStr = now.getFullYear() + '-' +
    String(now.getMonth() + 1).padStart(2, '0') + '-' +
    String(now.getDate()).padStart(2, '0') + ' ' +
    String(now.getHours()).padStart(2, '0') + ':' +
    String(now.getMinutes()).padStart(2, '0');
  messages.push({ text: text, author: author, time: timeStr });
  saveMessages();
  msgText.value = '';
  msgAuthor.value = '';
  msgCooldown = Date.now();
  renderMessages();
}
msgSubmit.addEventListener('click', submitMessage);
// Ctrl+Enter / Cmd+Enter 快捷键提交
msgText.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    submitMessage();
  }
});

/* ==================== QUIZ ==================== */
const quizData = [
  { q:'穿石庙会议召开于哪一年？', opts:['1927年','1928年','1929年','1930年'], ans:2, explain:'1929年5月2日，中共商罗麻特别区委在吴家店穿石庙召开紧急会议，决定发动立夏节起义。' },
  { q:'立夏节起义又称什么起义？', opts:['南昌起义','商南起义','秋收起义','黄麻起义'], ans:1, explain:'立夏节起义又称"商南起义"，因发生在商城县南部（今金寨县西部吴家店一带）而得名。' },
  { q:'红32师的首任师长是谁？', opts:['徐子清','肖方','周维炯','徐其虚'], ans:2, explain:'红11军第32师在斑竹园会师后成立，周维炯担任首任师长，党代表为徐子清。' },
  { q:'穿石庙会议的核心决策是什么？', opts:['推迟起义','取消起义','提前起义并多点突袭','仅在南溪暴动'], ans:2, explain:'会议作出两大核心决策：提前起义时间至立夏节夜，以及制定多点同时突袭的战术方案。' },
  { q:'吴家店镇有多少个行政村拥有革命遗址？', opts:['8个','10个','13个','15个'], ans:2, explain:'吴家店镇下辖13个行政村，每个村都有红色革命遗址，革命遗迹遍布全镇。' }
];

let quizIndex = 0, quizScore = 0;
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizResult = document.getElementById('quizResult');
const quizArea = document.getElementById('quizArea');
const quizScoreArea = document.getElementById('quizScoreArea');
const quizBigScore = document.getElementById('quizBigScore');

function loadQuiz() {
  if(quizIndex >= quizData.length) {
    quizArea.style.display = 'none';
    quizScoreArea.style.display = 'block';
    quizBigScore.textContent = Math.round((quizScore/quizData.length)*100);
    localStorage.setItem('wjd_quizBest', Math.max(parseInt(localStorage.getItem('wjd_quizBest'))||0, Math.round((quizScore/quizData.length)*100)));
    return;
  }
  const q = quizData[quizIndex];
  quizQuestion.textContent = `第${quizIndex+1}/${quizData.length}题：${q.q}`;
  quizResult.textContent = '';
  quizOptions.innerHTML = '';
  q.opts.forEach((opt,i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = `${['A','B','C','D'][i]}. ${opt}`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.quiz-option').forEach(b=>b.disabled=true);
      if(i===q.ans) { btn.classList.add('correct'); quizScore++; quizResult.innerHTML='<span style="color:#2ecc71;">✅ 回答正确！</span>'; }
      else { btn.classList.add('wrong'); document.querySelectorAll('.quiz-option')[q.ans].classList.add('correct'); quizResult.innerHTML='<span style="color:#e74c3c;">❌ 回答错误</span>'; }
      quizResult.innerHTML += `<br><span style="color:var(--gray-light);font-size:0.85rem;">${q.explain}</span>`;
      quizResult.innerHTML += `<br><button class="btn btn-red quiz-next" style="margin-top:12px;" id="quizNextBtn">下一题 ▶</button>`;
      document.getElementById('quizNextBtn').addEventListener('click', () => { quizIndex++; loadQuiz(); });
    });
    quizOptions.appendChild(btn);
  });
}
loadQuiz();
document.getElementById('quizRetry').addEventListener('click', () => { quizIndex=0; quizScore=0; quizArea.style.display='block'; quizScoreArea.style.display='none'; loadQuiz(); });

/* ==================== TOURISM GRID ==================== */
const tourismGrid = document.getElementById('tourismGrid');
tourismItems.forEach(item => {
  const card = document.createElement('div'); card.className = 'tourism-card';
  card.innerHTML = `
    <div class="tourism-card-img" style="background-image:url('${IMAGE_URLS[`${item.bgImg}.jpg`]}');background-size:cover;background-position:center;"></div>
    <div class="tourism-card-body">
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
      <span class="tourism-tag">${item.tag}</span>
    </div>`;
  tourismGrid.appendChild(card);
});

/* ==================== INTERACTIVE MAP (Leaflet.js) ==================== */
(function() {
  var mapEl = document.getElementById('sites-map');
  if (!mapEl) return;

  // 分类颜色映射
  var catColors = {
    landmark:  '#C41E3A',
    uprising:  '#DAA520',
    battle:    '#555555',
    station:   '#2980B9',
    tomb:      '#27AE60',
    residence: '#8E44AD'
  };

  // 分类图钉：颜色对应图例，单字便于在缩放后快速识别类别
  var catGlyphs = { landmark: '地', uprising: '暴', battle: '战', station: '驻', tomb: '陵', residence: '居' };
  function markerIcon(category) {
    var color = catColors[category] || '#999';
    return L.divIcon({
      className: 'custom-marker',
      html: '<span class="map-pin" style="--pin-color:' + color + '"><i>' + (catGlyphs[category] || '址') + '</i></span>',
      iconSize: [30, 37],
      iconAnchor: [15, 34],
      popupAnchor: [0, -32]
    });
  }

  // 构建弹窗 HTML（XSS 安全：使用 escapeHtml）
  function popupHTML(site) {
    return '<div class="site-popup">'
         + '<img src="' + IMAGE_URLS[escapeHtml(site.img) + '.jpg'] + '" alt="' + escapeHtml(site.name) + '" class="site-popup-img" loading="lazy">'
         + '<h5>' + escapeHtml(site.name) + '</h5>'
         + '<span class="popup-tag">' + escapeHtml(site.catLabel) + '</span>'
         + '<div class="popup-addr">📍 ' + escapeHtml(site.addr) + '</div>'
         + '<div class="popup-desc">' + escapeHtml(site.desc.substring(0, 80)) + '…</div>'
         + '</div>';
  }
  // 初始化地图（国内默认高德瓦片；Ctrl+滚轮才缩放，避免页面滚动被劫持）
  var map = L.map('sites-map', {
    center: [31.22, 115.85],
    zoom: 13,
    scrollWheelZoom: false,
    zoomControl: true
  });

  // 双底图由高德公开瓦片提供；图钉沿用项目整理的位置示意坐标。
  var streetLayer = L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
    subdomains: ['1', '2', '3', '4'],
    attribution: '&copy; <a href="https://www.amap.com/">高德地图</a>',
    maxZoom: 18
  }).addTo(map);
  var satelliteLayer = L.tileLayer('https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', {
    subdomains: ['1', '2', '3', '4'],
    attribution: '&copy; <a href="https://www.amap.com/">高德地图</a>',
    maxZoom: 18
  });
  var activeBaseLayer = streetLayer;
  var layerCaption = document.getElementById('mapLayerCaption');
  document.querySelectorAll('[data-map-layer]').forEach(function(button) {
    button.addEventListener('click', function() {
      var satellite = button.dataset.mapLayer === 'satellite';
      if (activeBaseLayer) map.removeLayer(activeBaseLayer);
      activeBaseLayer = satellite ? satelliteLayer : streetLayer;
      activeBaseLayer.addTo(map);
      document.querySelectorAll('[data-map-layer]').forEach(function(item) {
        var selected = item === button;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      if (layerCaption) layerCaption.textContent = (satellite ? '卫星影像' : '街道地图') + ' · 遗址位置示意';
    });
  });

  var fullscreenBtn = document.getElementById('mapFullscreenBtn');
  var mapFrame = mapEl.closest('.webgis-map-frame');
  function syncFullscreen() {
    var isFullscreen = document.fullscreenElement === mapFrame;
    if (fullscreenBtn) {
      fullscreenBtn.textContent = isFullscreen ? '退出全屏' : '全屏';
      fullscreenBtn.setAttribute('aria-label', isFullscreen ? '退出地图全屏' : '全屏查看地图');
    }
    window.setTimeout(function() { map.invalidateSize(); }, 120);
  }
  if (fullscreenBtn && mapFrame && mapFrame.requestFullscreen) {
    fullscreenBtn.addEventListener('click', function() {
      if (document.fullscreenElement === mapFrame) document.exitFullscreen();
      else mapFrame.requestFullscreen();
    });
    document.addEventListener('fullscreenchange', syncFullscreen);
  } else if (fullscreenBtn) {
    fullscreenBtn.hidden = true;
  }

  // Ctrl/Cmd + 滚轮缩放地图
  mapEl.addEventListener('wheel', function(e) {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      var delta = e.deltaY > 0 ? -1 : 1;
      map.setZoom(map.getZoom() + delta);
    }
  }, { passive: false });

  // 创建所有标记
  var allMarkers = []; // { marker, site, idx }

  sites.forEach(function(site, idx) {
    var icon = markerIcon(site.category);
    var marker = L.marker([site.lat, site.lng], { icon: icon })
      .bindPopup(popupHTML(site));
    var tooltip = document.createElement('span');
    tooltip.textContent = site.name;
    marker.bindTooltip(tooltip, { direction: 'top', offset: [0, -29], opacity: 1 });
    allMarkers.push({ marker: marker, site: site, idx: idx });
  });

  // 全部添加到地图
  allMarkers.forEach(function(e) { e.marker.addTo(map); });

  // 自适应显示全部标记
  function fitAllMarkers() {
    if (allMarkers.length > 0) {
      var allGroup = L.featureGroup(allMarkers.map(function(e) { return e.marker; }));
      map.fitBounds(allGroup.getBounds().pad(0.1), { maxZoom: 15 });
    }
  }
  fitAllMarkers();

  // 控制"查看全部"按钮显隐
  var resetBtn = document.getElementById('mapResetBtn');

  // 筛选地图标记的函数（供标签切换调用）
  window.filterMapMarkers = function(filter, query) {
    var normalizedQuery = (query || '').trim().toLocaleLowerCase();
    function matches(entry) {
      var categoryMatch = filter === 'all' || entry.site.category === filter;
      var haystack = [entry.site.name, entry.site.catLabel, entry.site.addr, entry.site.desc].join(' ').toLocaleLowerCase();
      return categoryMatch && (!normalizedQuery || haystack.indexOf(normalizedQuery) !== -1);
    }
    allMarkers.forEach(function(entry) {
      if (matches(entry)) {
        if (!map.hasLayer(entry.marker)) entry.marker.addTo(map);
      } else {
        if (map.hasLayer(entry.marker)) map.removeLayer(entry.marker);
      }
    });
    // 重新自适应视野
    var visible = allMarkers.filter(matches).map(function(e) { return e.marker; });
    if (visible.length > 0) {
      var grp = L.featureGroup(visible);
      map.fitBounds(grp.getBounds().pad(0.08), { maxZoom: 16 });
    }
    // 切换"查看全部"按钮
    if (resetBtn) {
      resetBtn.hidden = filter === 'all' && !normalizedQuery;
    }
  };

  // 重置地图视图（查看全部）
  window.resetMapView = function() {
    // 显示全部标记
    allMarkers.forEach(function(e) {
      if (!map.hasLayer(e.marker)) e.marker.addTo(map);
    });
    fitAllMarkers();
    if (resetBtn) resetBtn.hidden = true;
    if (siteSearchInput) siteSearchInput.value = '';
    var clearButton = document.getElementById('siteSearchClear');
    if (clearButton) clearButton.hidden = true;
    // 同时重置遗址卡片筛选
    document.querySelectorAll('.site-tab').forEach(function(t) { t.classList.remove('active'); });
    var allTab = document.querySelector('.site-tab[data-filter="all"]');
    document.querySelectorAll('.site-tab').forEach(function(t) { t.setAttribute('aria-pressed', String(t === allTab)); });
    if (allTab) allTab.classList.add('active');
    if (typeof renderSites === 'function') renderSites('all');
  };

  window.focusSiteOnMap = function(index) {
    var entry = allMarkers.find(function(item) { return item.idx === index; });
    if (!entry) return;
    map.flyTo([entry.site.lat, entry.site.lng], 16, { duration: .55 });
    entry.marker.openPopup();
    document.querySelectorAll('.webgis-site-row').forEach(function(row) {
      row.classList.toggle('is-active', Number(row.dataset.siteIndex) === index);
    });
    if (window.innerWidth <= 760) mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  allMarkers.forEach(function(entry) {
    entry.marker.on('popupopen', function() {
      if (entry.marker.getElement()) entry.marker.getElement().classList.add('is-active');
      document.querySelectorAll('.webgis-site-row').forEach(function(row) {
        row.classList.toggle('is-active', Number(row.dataset.siteIndex) === entry.idx);
      });
    });
    entry.marker.on('popupclose', function() {
      if (entry.marker.getElement()) entry.marker.getElement().classList.remove('is-active');
    });
  });
  if (resetBtn) resetBtn.addEventListener('click', window.resetMapView);

  // 生成图例
  var legendEl = document.getElementById('mapLegend');
  var catNames = {
    landmark: '核心地标', uprising: '暴动与组织旧址', battle: '战斗遗址',
    station: '驻地旧址', tomb: '烈士墓园', residence: '名人故居'
  };
  var legendHTML = '';
  for (var cat in catColors) {
    legendHTML += '<div class="map-legend-item">'
                + '<span class="map-legend-dot" style="background:' + catColors[cat] + ';"></span>'
                + (catNames[cat] || cat)
                + '</div>';
  }
  legendEl.innerHTML = '<span class="map-legend-title">图例</span>' + legendHTML;

  // 修复地图尺寸（窗口大小变化 / 滚动到地图区域时）
  window.addEventListener('resize', function() {
    map.invalidateSize();
  });

  var sitesSection = document.getElementById('sites');
  if (sitesSection) {
    var sectionObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) map.invalidateSize();
      });
    }, { threshold: 0.1 });
    sectionObserver.observe(sitesSection);
  }

  console.log('🗺️ 交互地图已就绪 — ' + allMarkers.length + ' 个遗址标注（高德瓦片）');
})();

console.log('🏛️ 吴家店镇红色文化宣传网已就绪');
console.log('📜 立夏节起义策源地 | 穿石庙国家级文保单位 | 733位英烈永垂不朽');
