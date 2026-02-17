  // ===== util: switch screen + persist
  const screens = {
    1: document.getElementById('screen1'),
    2: document.getElementById('screen2'),
    3: document.getElementById('screen3'),
    4: document.getElementById('screen4'),
    5: document.getElementById('screen5'),
    6: document.getElementById('screen6'),
    7: document.getElementById('screen7'),
    8: document.getElementById('screen8'),
    9: document.getElementById('screen9'),
    10: document.getElementById('screen10'),
    11: document.getElementById('screen11'),
    12: document.getElementById('screen12'),
    13: document.getElementById('screen13'),
    14: document.getElementById('screen14'),
    15: document.getElementById('screen15'),
    16: document.getElementById('screen16'),
    17: document.getElementById('screen17'),
    18: document.getElementById('screen18'),
    19: document.getElementById('screen19'),
    20: document.getElementById('screen20'),
    21: document.getElementById('screen21'),
    22: document.getElementById('screen22'),
    23: document.getElementById('screen23'),
    24: document.getElementById('screen24'),
    25: document.getElementById('screen25'),
    26: document.getElementById('screen26'),
    27: document.getElementById('screen27'),
    28: document.getElementById('screen28'),
    29: document.getElementById('screen29'),
    30: document.getElementById('screen30'),
    31: document.getElementById('screen31'),
    32: document.getElementById('screen32'),
    33: document.getElementById('screen33'),
    34: document.getElementById('screen34'),
    35: document.getElementById('screen35'),
    36: document.getElementById('screen36'),
  };
  function goTo(n){
    Object.values(screens).forEach(s=>s && s.classList.remove('active'));
    screens[n]?.classList.add('active');
    localStorage.setItem('currentScreen', String(n));
  }

  // ===== nav events umum
  document.getElementById('playBtn').addEventListener('click', ()=> goTo(2));
  document.getElementById('backBtn').addEventListener('click', ()=> goTo(1));
  document.getElementById('toPage2').addEventListener('click', ()=> goTo(2));
  document.getElementById('p4Home').addEventListener('click', ()=> goTo(3));

  // Home & nav di Pendahuluan
  document.getElementById('introHome1').addEventListener('click', ()=> goTo(3));
  document.getElementById('introHome2').addEventListener('click', ()=> goTo(3));
  document.getElementById('introPrev1').addEventListener('click', ()=> goTo(3));
  document.getElementById('introNext1').addEventListener('click', ()=> goTo(6));
  document.getElementById('introPrev2').addEventListener('click', ()=> goTo(5));

  // Home & nav di Deskripsi
  document.getElementById('descHome1').addEventListener('click', ()=> goTo(3));
  document.getElementById('descHome2').addEventListener('click', ()=> goTo(3));
  document.getElementById('descPrev1').addEventListener('click', ()=> goTo(3));
  document.getElementById('descNext1').addEventListener('click', ()=> goTo(8));
  document.getElementById('descPrev2').addEventListener('click', ()=> goTo(7));

  // Home & nav di Materi
  document.getElementById('matHome1').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome2').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome3').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome4').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome5').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome6').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome7').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome8').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome9').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome10').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome11').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome12').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome13').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome14').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome15').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome16').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome17').addEventListener('click', ()=> goTo(3));
  document.getElementById('matHome18').addEventListener('click', ()=> goTo(3));

  // FIX: id yang benar 'mat9Next' (bukan 'mat9next')
  document.getElementById('mat9Next') && document.getElementById('mat9Next').addEventListener('click', ()=> goTo(10));

  document.getElementById('mat10Prev').addEventListener('click', ()=> goTo(9));
  document.getElementById('mat10Next').addEventListener('click', ()=> goTo(11));

  document.getElementById('mat11Prev').addEventListener('click', ()=> goTo(10));
  document.getElementById('mat11Next').addEventListener('click', ()=> goTo(12));

  document.getElementById('mat12Prev').addEventListener('click', ()=> goTo(11));
  document.getElementById('mat12Next').addEventListener('click', ()=> goTo(14));

  document.getElementById('mat13Prev').addEventListener('click', ()=> goTo(12));
  document.getElementById('mat13Next').addEventListener('click', ()=> goTo(14));

  document.getElementById('mat14Prev').addEventListener('click', ()=> goTo(13));
  document.getElementById('mat14Next').addEventListener('click', ()=> goTo(15));

  document.getElementById('mat15Prev').addEventListener('click', ()=> goTo(14));
  document.getElementById('mat15Next').addEventListener('click', ()=> goTo(16));

  document.getElementById('mat16Prev').addEventListener('click', ()=> goTo(15));
  document.getElementById('mat16Next').addEventListener('click', ()=> goTo(17));

  document.getElementById('mat17Prev').addEventListener('click', ()=> goTo(16));
  document.getElementById('mat17Next').addEventListener('click', ()=> goTo(18));

  document.getElementById('mat18Prev').addEventListener('click', ()=> goTo(17));
  document.getElementById('mat18Next').addEventListener('click', ()=> goTo(19));

  document.getElementById('mat19Prev').addEventListener('click', ()=> goTo(18));
  document.getElementById('mat19Next').addEventListener('click', ()=> goTo(20));

  document.getElementById('mat20Prev').addEventListener('click', ()=> goTo(19));
  document.getElementById('mat20Next').addEventListener('click', ()=> goTo(21));

  document.getElementById('mat21Prev').addEventListener('click', ()=> goTo(20));
  document.getElementById('mat21Next').addEventListener('click', ()=> goTo(22));

  document.getElementById('mat22Prev').addEventListener('click', ()=> goTo(21));
  document.getElementById('mat22Next').addEventListener('click', ()=> goTo(23));

  document.getElementById('mat23Prev').addEventListener('click', ()=> goTo(22));
  document.getElementById('mat23Next').addEventListener('click', ()=> goTo(24));

  document.getElementById('mat24Prev').addEventListener('click', ()=> goTo(23));
  document.getElementById('mat24Next').addEventListener('click', ()=> goTo(25));

  document.getElementById('mat25Prev').addEventListener('click', ()=> goTo(24));
  document.getElementById('mat25Next').addEventListener('click', ()=> goTo(26));

  document.getElementById('mat26Prev').addEventListener('click', ()=> goTo(25));

  // ===== Evaluasi
  document.getElementById('evalHome0').addEventListener('click', ()=> goTo(3));
  document.getElementById('evalStart').addEventListener('click', ()=> goTo(28));

  document.getElementById('evalHome1').addEventListener('click', ()=> goTo(3));
  document.getElementById('evalHome2').addEventListener('click', ()=> goTo(3));
  document.getElementById('evalHome3').addEventListener('click', ()=> goTo(3));
  document.getElementById('evalHome4').addEventListener('click', ()=> goTo(3));
  document.getElementById('evalHome5').addEventListener('click', ()=> goTo(3));
  document.getElementById('evalHome6').addEventListener('click', ()=> goTo(3));
  document.getElementById('evalHome7').addEventListener('click', ()=> goTo(3));

  document.getElementById('eval28Prev').addEventListener('click', ()=> goTo(27));
  document.getElementById('eval28Next').addEventListener('click', ()=> goTo(29));

  document.getElementById('eval29Prev').addEventListener('click', ()=> goTo(28));
  document.getElementById('eval29Next').addEventListener('click', ()=> goTo(30));

  document.getElementById('eval30Prev').addEventListener('click', ()=> goTo(29));
  document.getElementById('eval30Next').addEventListener('click', ()=> goTo(31));

  document.getElementById('eval31Prev').addEventListener('click', ()=> goTo(30));
  document.getElementById('eval31Next').addEventListener('click', ()=> goTo(32));

  document.getElementById('eval32Prev').addEventListener('click', ()=> goTo(31));
  document.getElementById('eval32Next').addEventListener('click', ()=> goTo(33));

  document.getElementById('eval33Prev').addEventListener('click', ()=> goTo(32)); 
  document.getElementById('eval33Next').addEventListener('click', ()=> goTo(34));

  document.getElementById('eval34Prev').addEventListener('click', ()=> goTo(33));
  document.getElementById('eval34Next').addEventListener('click', ()=> goTo(35));

  document.getElementById('eval35Prev').addEventListener('click', ()=> goTo(34));

  // ===== Virtual Lab (Screen 36)
  document.getElementById('labHome') && document.getElementById('labHome').addEventListener('click', ()=> goTo(3));

    // init Virtual Lab Logic here or load virtuallab.js separately
    // Since users asked to separate internal JS, we can include the logic here or in a separate file.
    // Assuming logic is simple enough to include here for now to ensure it works without extra file requests if acceptable, 
    // OR we just assume virtuallab.js is loaded. 
    // BUT the user said "externalize js" which we did for the main script. 
    // To make sure Virtual Lab works, let's include its logic here wrapped in a check or event listener, 
    // OR just add the event listeners since the HTML elements will exist when this runs (at bottom of body).
    
    const beaker = document.getElementById('beaker');
    const status = document.getElementById('status');
    const resetBtn = document.getElementById('resetBtn');
  
    if (beaker && status) {
      const contents = new Set();
  
      document.querySelectorAll('.draggable').forEach(el => {
        el.addEventListener('dragstart', (e) => {
          const id = e.target.id;
          e.dataTransfer?.setData('text/plain', id);
        });
        // el.addEventListener('mousedown', (e) => e.preventDefault()); // This might break drag in some browsers if not careful, removing for now or keeping default
      });
  
      beaker.addEventListener('dragover', (e) => {
        e.preventDefault();
        beaker.classList.add('drag-over');
      });
  
      beaker.addEventListener('dragleave', () => {
        beaker.classList.remove('drag-over');
      });
  
      beaker.addEventListener('drop', (e) => {
        e.preventDefault();
        beaker.classList.remove('drag-over');
        const item = e.dataTransfer?.getData('text/plain');
        if (!item) return;
  
        contents.add(item);
  
        if (item === 'acid') status.textContent = 'Asam dituangkan ke beaker!';
        if (item === 'base') status.textContent = 'Basa dituangkan ke beaker!';
        
        evaluateReaction();
      });
  
      resetBtn?.addEventListener('click', () => {
        contents.clear();
        const img = beaker.querySelector('img');
        if (img) img.src = 'assets/img/beaker.png';
        status.textContent = 'Tarik bahan ke beaker…';
      });
  
      function evaluateReaction() {
        const img = beaker.querySelector('img');
        if (contents.has('acid') && contents.has('base')) {
          status.textContent = 'Reaksi Netralisasi terjadi 🔬';
          if (img) img.src = 'assets/img/beaker-reaction.png';
        } else if (contents.has('acid')) {
          status.textContent = 'Larutan bersifat asam (belum dinetralkan).';
          if (img) img.src = 'assets/img/beaker.png';
        } else if (contents.has('base')) {
          status.textContent = 'Larutan bersifat basa (belum dinetralkan).';
          if (img) img.src = 'assets/img/beaker.png';
        }
      }
    }


  // Klik bubble menu (Page 3)
  document.querySelectorAll('.orbit .bubble').forEach(b=>{
    b.addEventListener('click', () => {
      const act = (b.dataset.action||'').toLowerCase();
      if (act === 'profil')       return goTo(4);
      if (act === 'pendahuluan')  return goTo(5);
      if (act === 'deskripsi')    return goTo(7);
      if (act === 'materi')       return goTo(9);
      if (act === 'evaluasi')     return goTo(27);
      if (act === 'virtuallab')   return goTo(36);
      alert('Menu: ' + act);
    });
  });

  // ===== interaksi pilihan jawaban sederhana
  document.querySelectorAll('#screen28 .choice').forEach(choice=>{
    choice.addEventListener('click', ()=>{
      // reset state
      document.querySelectorAll('#screen28 .choice').forEach(c=>{
        c.classList.remove('selected','correct','wrong');
        const input = c.querySelector('input[type="radio"]');
        if (input) input.checked = false;
      });
      // set selected
      choice.classList.add('selected');
      const input = choice.querySelector('input[type="radio"]');
      if (input) input.checked = true;
      // feedback cepat
      if (choice.dataset.correct === 'true'){
        choice.classList.remove('selected'); choice.classList.add('correct');
      }else{
        choice.classList.remove('selected'); choice.classList.add('wrong');
      }
    });
  });

  // ===== form profil (Page 2)
  const form = document.getElementById('formProfil');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = Object.fromEntries(new FormData(form).entries());
      localStorage.setItem('profilSiswa', JSON.stringify(data));
      goTo(3);
    });
  }

  // ===== restore state on load
  (function init(){
    try{
      const saved = JSON.parse(localStorage.getItem('profilSiswa')||'{}');
      if (form && saved.nama)  form.elements['nama'].value  = saved.nama;
      if (form && saved.email) form.elements['email'].value = saved.email;
    }catch{}
    const last = Number(localStorage.getItem('currentScreen')||1);
    // if (last===3 && !localStorage.getItem('profilSiswa')) { goTo(2); return; }
    // izinkan semua halaman yang tersedia (termasuk 36)
    const allowed = new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]);
    goTo(allowed.has(last)? last : 1);
  })();
