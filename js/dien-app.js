// @ts-nocheck  ← kalau VS Code rewel dengan TypeScript, biar diam

document.addEventListener('DOMContentLoaded', () => {
  const beaker = document.getElementById('beaker');
  const status = document.getElementById('status');
  const resetBtn = document.getElementById('resetBtn');

  if (!beaker || !status) {
    console.error('Elemen #beaker atau #status tidak ditemukan.');
    return;
  }

  // state sederhana: apa saja yang sudah dituang
  const contents = new Set();

  // ==== Drag Source ====
  document.querySelectorAll('.draggable').forEach(el => {
    // cegah “ghost image” transparan (opsional)
    el.addEventListener('dragstart', (e) => {
      // id item
      const id = /** @type {HTMLElement} */(e.target).id;
      // beberapa browser lebih suka 'text/plain'
      e.dataTransfer?.setData('text/plain', id);

      // set drag image biar rapih (opsional)
      const img = new Image();
      img.src = el.src;
      e.dataTransfer?.setDragImage(img, img.width/2, img.height/2);
    });

    // mencegah gambar ikut “terseret” seleksi
    el.addEventListener('mousedown', (e) => e.preventDefault());
  });

  // ==== Drop Target ====
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

    // update state
    contents.add(item);

    // feedback
    if (item === 'acid') setStatus('Asam dituangkan ke beaker!');
    if (item === 'base') setStatus('Basa dituangkan ke beaker!');

    // cek kombinasi
    evaluateReaction();
  });

  // ==== Keyboard accessibility: Enter drop "simulasi" (optional) ====
  beaker.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      // contoh: enter = campurkan acid + base sekaligus untuk demo cepat
      contents.add('acid'); contents.add('base');
      evaluateReaction();
    }
  });

  // ==== Reset ====
  resetBtn?.addEventListener('click', reset);

  function evaluateReaction() {
    const img = beaker.querySelector('img');

    // Contoh rule sederhana:
    // - acid + base  → netralisasi (ubah gambar beaker)
    // - acid saja    → status asam
    // - base saja    → status basa
    if (contents.has('acid') && contents.has('base')) {
      setStatus('Reaksi Netralisasi terjadi 🔬');
      if (img) img.src = 'assets/img/beaker-reaction.png';
    } else if (contents.has('acid') && !contents.has('base')) {
      setStatus('Larutan bersifat asam (belum dinetralkan).');
      if (img) img.src = 'assets/img/beaker.png';
    } else if (contents.has('base') && !contents.has('acid')) {
      setStatus('Larutan bersifat basa (belum dinetralkan).');
      if (img) img.src = 'assets/img/beaker.png';
    } else {
      setStatus('Tarik bahan ke beaker…');
      if (img) img.src = 'assets/img/beaker.png';
    }
  }

  function reset() {
    contents.clear();
    const img = beaker.querySelector('img');
    if (img) img.src = 'assets/img/beaker.png';
    setStatus('Tarik bahan ke beaker…');
  }

  function setStatus(text) {
    status.textContent = text;
  }

  // init
  evaluateReaction();
});
