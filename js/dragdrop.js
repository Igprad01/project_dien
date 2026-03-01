// drag and drop logic shared between screens
let draggedElement = null;
let isDraggingFromRak = false;
let currentContainer = null;
let currentDropArea = null;
let offsetX = 0;
let offsetY = 0;

// Setup drag untuk semua item di rak
function setupDraggableItems() {
  const draggableItems = document.querySelectorAll('.draggable-item');
  
  draggableItems.forEach(item => {
    item.addEventListener('mousedown', function(e) {
      e.preventDefault();
      draggedElement = this;
      isDraggingFromRak = true;
      
      offsetX = e.clientX;
      offsetY = e.clientY;

      // find the relevant container and drop area for this item
      currentContainer = this.closest('.mainContainer');
      currentDropArea = currentContainer ? currentContainer.querySelector('.dropArea') : null;
      
      this.style.opacity = '0.5';
      this.style.position = 'relative';
      this.style.zIndex = '1000';
      
      // Highlight container
      if (currentContainer) {
        currentContainer.style.backgroundColor = 'rgba(100,200,255,0.1)';
      }
      
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    });
  });
}

function handleMouseMove(e) {
  if (!draggedElement) return;
}

function handleMouseUp(e) {
  if (!draggedElement || !currentDropArea) return;
  
  const dropAreaRect = currentDropArea.getBoundingClientRect();
  
  // Hitung posisi di dalam dropArea
  const x = e.clientX - dropAreaRect.left;
  const y = e.clientY - dropAreaRect.top;
  
  // Cek apakah item dilepas dalam area meja (dropArea)
  if (e.clientY >= dropAreaRect.top && 
      e.clientY <= dropAreaRect.bottom &&
      e.clientX >= dropAreaRect.left && 
      e.clientX <= dropAreaRect.right) {
    
    if (isDraggingFromRak) {
      // PINDAHKAN (CUT) gambar asli dari rak ke dropArea
      const itemWrapper = document.createElement('div');
      itemWrapper.className = 'placed-item';
      itemWrapper.style.cssText = `
        position: absolute;
        left: ${Math.max(0, x)}px;
        top: ${Math.max(0, y)}px;
        cursor: move;
        pointer-events: auto;
        z-index: 1;
      `;
      
      // Pindahkan gambar asli (tidak clone)
      draggedElement.style.cssText = `
        width: 70px;
        cursor: move;
        user-select: none;
        display: block;
        margin: 0;
      `;
      draggedElement.draggable = false;
      draggedElement.classList.remove('draggable-item');
      
      itemWrapper.appendChild(draggedElement);
      
      // Buat item bisa dipindah lagi
      makeMovable(itemWrapper, currentDropArea);
      
      currentDropArea.appendChild(itemWrapper);
    }
  }
  
  // Reset style
  if (draggedElement && draggedElement.parentNode) {
    draggedElement.style.opacity = '1';
    draggedElement.style.zIndex = 'auto';
  }
  if (currentContainer) currentContainer.style.backgroundColor = 'transparent';
  
  draggedElement = null;
  isDraggingFromRak = false;
  currentContainer = null;
  currentDropArea = null;
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
}

// Fungsi untuk membuat item bisa dipindah
function makeMovable(element) {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;
  
  element.addEventListener('mousedown', function(e) {
    e.preventDefault();
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startLeft = parseInt(this.style.left) || 0;
    startTop = parseInt(this.style.top) || 0;
    
    this.style.opacity = '0.7';
    this.style.zIndex = '1000';
    
    document.addEventListener('mousemove', moveItem);
    document.addEventListener('mouseup', stopMoving);
  });
  
  function moveItem(e) {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    
    let newLeft = startLeft + deltaX;
    let newTop = startTop + deltaY;
    
    element.style.left = newLeft + 'px';
    element.style.top = newTop + 'px';
  }
  
  function stopMoving() {
    isDragging = false;
    element.style.opacity = '1';
    element.style.zIndex = '1';
    document.removeEventListener('mousemove', moveItem);
    document.removeEventListener('mouseup', stopMoving);
  }
}

// Initialize draggable items saat halaman load
setupDraggableItems();
