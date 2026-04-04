// FUNGSI PEMUTAR AUDIO
function playAudio(fileUrl) {
    const audio = new Audio(fileUrl);
    audio.play().catch(error => {
        const toast = document.createElement('div');
        toast.className = "fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-full text-sm shadow-2xl z-[100] border border-slate-600";
        toast.innerText = "Audio belum tersedia di sistem ini.";
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2500);
    });
}

// RENDER TABEL HURUF
const tableContainer = document.getElementById('table-container');
if (tableContainer && typeof hurufData !== 'undefined') {
    hurufData.forEach(row => {
        const rowDiv = document.createElement('div');
        
        const latinTitle = document.createElement('div');
        latinTitle.className = "text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-2";
        latinTitle.innerText = row.latin;
        rowDiv.appendChild(latinTitle);

        const cardsGrid = document.createElement('div');
        cardsGrid.className = "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6";
        
        row.items.forEach(item => {
            const card = document.createElement('div');
            card.className = "letter-card bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center";
            card.onclick = () => playAudio(item.audio);
            card.innerHTML = `
                <div class="arabic-text text-6xl text-emerald-800 font-bold mb-3">${item.char}</div>
                <div class="arabic-text text-xl text-slate-400 font-medium">${item.full}</div>
            `;
            cardsGrid.appendChild(card);
        });

        rowDiv.appendChild(cardsGrid);
        tableContainer.appendChild(rowDiv);
    });
}

// RENDER LATIHAN
const latihanContainer = document.getElementById('latihan-container');
if (latihanContainer && typeof latihanData !== 'undefined') {
    latihanData.forEach(section => {
        const sectionHeader = document.createElement('div');
        sectionHeader.className = "py-4 px-6 bg-slate-200 rounded-xl text-slate-600 font-bold text-sm uppercase tracking-widest mt-10 mb-4";
        sectionHeader.innerText = section.level;
        latihanContainer.appendChild(sectionHeader);

        section.content.forEach((text, index) => {
            const card = document.createElement('div');
            card.className = "practice-row bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group";
            
            card.innerHTML = `
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="arabic-text text-4xl md:text-5xl leading-[2.5] md:leading-[2.8] text-slate-800 text-center">
                    ${text}
                </div>
                <div class="mt-4 text-center">
                    <span class="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Baris ${index + 1}</span>
                </div>
            `;
            latihanContainer.appendChild(card);
        });
    });
}
