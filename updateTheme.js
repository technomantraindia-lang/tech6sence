const fs = require('fs');
const path = require('path');

const file1 = path.join(__dirname, 'src/components/business-brains/ApplicationAndNomination.jsx');
let appContent = fs.readFileSync(file1, 'utf8');

// Replace main container
appContent = appContent.replace('bg-[#020617] text-white', 'bg-slate-50 text-slate-900');
appContent = appContent.replace('border-slate-800/80', 'border-slate-200');
appContent = appContent.replace('bg-cyan-900/10', 'bg-cyan-500/10'); 

// Typography
appContent = appContent.replace(/text-white/g, 'text-slate-900');
appContent = appContent.replace(/text-slate-300/g, 'text-slate-600');
appContent = appContent.replace(/text-slate-400/g, 'text-slate-500');

// Cards & Inputs
appContent = appContent.replace(/bg-white\/\\[0\.02\\]/g, 'bg-white');
appContent = appContent.replace(/bg-white\/5/g, 'bg-white');
appContent = appContent.replace(/border-white\/10/g, 'border-slate-300');
appContent = appContent.replace(/border-white\/20/g, 'border-slate-300');
appContent = appContent.replace(/bg-cyan-950\/40/g, 'bg-cyan-50');
appContent = appContent.replace(/bg-violet-950\/40/g, 'bg-violet-50');
appContent = appContent.replace(/bg-slate-900/g, 'bg-white'); 
appContent = appContent.replace(/bg-white\/10/g, 'bg-slate-100'); 
appContent = appContent.replace(/hover:bg-white\/20/g, 'hover:bg-slate-200'); 

// Fix primary buttons which should remain text-white
appContent = appContent.replace(/text-slate-900 font-bold text-sm tracking-wide/g, 'text-white font-bold text-sm tracking-wide');
appContent = appContent.replace(/bg-violet-500 text-slate-900/g, 'bg-violet-600 text-white');

fs.writeFileSync(file1, appContent);

console.log("Successfully converted ApplicationAndNomination.jsx to light theme!");
