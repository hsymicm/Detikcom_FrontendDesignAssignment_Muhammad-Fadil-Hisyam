const brands = [
    "alpha-jwc.png",
    "500.png",
    "insignia-ventures.png",
    "sequoia.png",
    "sginnovate.png",
    "wavemaker.png",
    "gfc.png",
    "golden-gate.png",
];

const posts = [
    {
        cover: "1.png",
        title: "Alpha JWC Ventures Suntikkan Dana Segar kepada OnlinePajak dan Stoqo"
    },
    {
        cover: "2.png",
        title: "Startup Lifepack Rampungkan Pendanaan Seri A yang Dipimpin Golden Gate Ventures"
    },
    {
        cover: "3.png",
        title: "Angel Investor Adalah? Berikut Jenis, Contoh dan Cara Mendapatkannya"
    },
    {
        cover: "4.png",
        title: "Crowe Indonesia Gelar Diskusi terkait Valuasi Startup & Laporan ESG"
    },
    {
        cover: "5.png",
        title: "Startup Fresh Factory Bangun Ratusan Gudang Dingin di 103 Kota"
    },
    {
        cover: "6.png",
        title: "Startup Pertanian RI Dapat Pendanaan Awal, Totalnya Rp 90 M"
    }
];

const scroller = document.getElementById('scroller');
const arr = [...brands, ...brands];
arr.forEach((brand) => {
    const card = document.createElement('div');
    card.className = 'brand-card bg-white'

    const image = document.createElement('img');
    image.setAttribute('src', `./assets/img/brand_img/${brand}`);
    image.setAttribute('width', 216);
    image.setAttribute('alt', brand.split('.')[0]);
    
    card.appendChild(image);
    scroller.appendChild(card);
});

const postContainer = document.getElementById('posts');
posts.forEach((post) => {
    const container = document.createElement('article');
    container.className = 'post-container';

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'img-wrapper';

    const image = document.createElement('img');
    image.setAttribute('src', `./assets/img/post_img/${post.cover}`);

    const title = document.createElement('h3');
    title.innerText = post.title;
    title.className = 'post-title';

    const date = document.createElement('p');
    date.innerText = '1 hari yang lalu';
    date.className = 'post-date text-gray';

    imageWrapper.appendChild(image);
    container.append(imageWrapper, title, date);
    postContainer.appendChild(container);
});