const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
            "./img/tteokbokki.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "./img/chicken-ramen.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "./img/bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
            "./img/dandanMian.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "./img/Jajangmyeon.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 6,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "./img/Dorayaki.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
    {
        id: 7,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "./img/Yangzhou-Fried-Rice.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 8,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "./img/Onigiri.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    }
];



const container = document.querySelector('.btn-container');

const buttonAll = document.createElement('button');
buttonAll.textContent = 'All';
buttonAll.classList.add('btn', 'btn-outline-danger', 'btn-item');
buttonAll.setAttribute('type', 'button');
container.appendChild(buttonAll);

const buttonKorea = document.createElement('button');
buttonKorea.textContent = 'Korea';
buttonKorea.classList.add('btn', 'btn-outline-danger', 'btn-item');
buttonKorea.setAttribute('type', 'button');
container.appendChild(buttonKorea);

const buttonJapan = document.createElement('button');
buttonJapan.textContent = 'Japan';
buttonJapan.classList.add('btn', 'btn-outline-danger', 'btn-item');
buttonJapan.setAttribute('type', 'button');
container.appendChild(buttonJapan);

const buttonChina = document.createElement('button');
buttonChina.textContent = 'China';
buttonChina.classList.add('btn', 'btn-outline-danger', 'btn-item');
buttonChina.setAttribute('type', 'button');
container.appendChild(buttonChina);



const filterCategory = (category) => {
    if (category === 'All') return menu;
    return menu.filter((item) => item.category === category);
}

const menuContainer = document.getElementById('menu-container');
const showMenu = (menuList) => {
    menuContainer.innerHTML = "";
    menuList.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-items', 'col-lg-6', 'col-sm-12');
        menuItem.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="menu-info">
        <div class="menu-title">
            <h4>${item.title}</h4>
            <h4>${item.price}</h4>
        </div>
        <p class="menu-text">${item.desc}</p>
        </div>
        `;
        menuContainer.appendChild(menuItem);
    });
}


const eventHandler = (filterText) => {
    showMenu(filterCategory(filterText));
};

// hangi butona tıklandığı bilgisini alıyoruz eventHandler fonksiyonunu bu değerle çağırıyoruz. go to 132
buttonAll.addEventListener("click", () => eventHandler("All"));
buttonJapan.addEventListener("click", () => eventHandler("Japan"));
buttonKorea.addEventListener("click", () => eventHandler("Korea"));
buttonChina.addEventListener("click", () => eventHandler("China"));

// sayfa yüklendiğinde çağrılıyor ki menünün tamamı görünsün.
window.addEventListener("DOMContentLoaded", () => {
    eventHandler("All");
});