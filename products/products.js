const products=[{id:1,title:'Vintage Watch',category:'accessories',price:2499,rating:4.6,img:'https://picsum.photos/seed/w1/600/400'},{id:2,title:'Leather Wallet',category:'accessories',price:799,rating:4.2,img:'https://picsum.photos/seed/w2/600/400'},{id:3,title:'Running Shoes',category:'footwear',price:3499,rating:4.7,img:'https://picsum.photos/seed/w3/600/400'},{id:4,title:'Sneaker Socks',category:'footwear',price:299,rating:4.0,img:'https://picsum.photos/seed/w4/600/400'},{id:5,title:'Denim Jacket',category:'apparel',price:3999,rating:4.5,img:'https://picsum.photos/seed/w5/600/400'},{id:6,title:'Graphic Tee',category:'apparel',price:699,rating:4.1,img:'https://picsum.photos/seed/w6/600/400'}]
const categorySelect=document.getElementById('category-select')
const sortSelect=document.getElementById('sort-select')
const productGrid=document.getElementById('product-grid')
const searchInput=document.getElementById('search')
const categories=['all',...new Set(products.map(p=>p.category))]
categories.forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c.charAt(0).toUpperCase()+c.slice(1);categorySelect.appendChild(o)})
function render(list){productGrid.innerHTML=''
list.forEach(p=>{const card=document.createElement('div');card.className='card';const img=document.createElement('img');img.src=p.img;const h3=document.createElement('h3');h3.textContent=p.title;const meta=document.createElement('div');meta.className='meta';meta.textContent=`₹${p.price} • ⭐ ${p.rating}`;card.appendChild(img);card.appendChild(h3);card.appendChild(meta);productGrid.appendChild(card)})}
function applyFilters(){let res=products.slice()
const cat=categorySelect.value
const q=searchInput.value.trim().toLowerCase()
if(cat!=='all') res=res.filter(p=>p.category===cat)
if(q) res=res.filter(p=>p.title.toLowerCase().includes(q))
const sort=sortSelect.value
if(sort==='price-asc') res.sort((a,b)=>a.price-b.price)
if(sort==='price-desc') res.sort((a,b)=>b.price-a.price)
if(sort==='rating-desc') res.sort((a,b)=>b.rating-b.rating?b.rating-a.rating:0)
render(res)}
categorySelect.addEventListener('change',applyFilters)
sortSelect.addEventListener('change',applyFilters)
searchInput.addEventListener('input',applyFilters)
applyFilters()