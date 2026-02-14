const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 1450,
        description: "Apple iPhone 15 Pro, 256GB xotira, kuchli A17 chip bilan."
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        price: 1200,
        description: "Samsung flagman smartfoni, yuqori sifatli kamera va AMOLED ekran."
    },
    {
        id: 3,
        name: "MacBook Air M2",
        price: 1700,
        description: "Yengil va kuchli MacBook, M2 chip bilan ishlaydi."
    },
    {
        id: 4,
        name: "HP Pavilion Laptop",
        price: 950,
        description: "Kundalik ish va o‘qish uchun qulay noutbuk."
    },
    {
        id: 5,
        name: "Dell XPS 13",
        price: 1600,
        description: "Premium dizayn va yuqori unumdorlikka ega noutbuk."
    },
    {
        id: 6,
        name: "Sony WH-1000XM5",
        price: 400,
        description: "Shovqinni bekor qiluvchi simsiz quloqchin."
    },
    {
        id: 7,
        name: "AirPods Pro 2",
        price: 300,
        description: "Apple’ning aktiv shovqin bekor qiluvchi quloqchini."
    },
    {
        id: 8,
        name: "Apple Watch Series 9",
        price: 500,
        description: "Sog‘liqni nazorat qiluvchi aqlli soat."
    },
    {
        id: 9,
        name: "Samsung Galaxy Watch 6",
        price: 420,
        description: "Android foydalanuvchilari uchun aqlli soat."
    },
    {
        id: 10,
        name: "Logitech MX Master 3",
        price: 120,
        description: "Professional simsiz sichqoncha."
    },
    {
        id: 11,
        name: "Mechanical Keyboard",
        price: 150,
        description: "RGB yoritgichli mexanik klaviatura."
    },
    {
        id: 12,
        name: "PlayStation 5",
        price: 700,
        description: "Yangi avlod o‘yin konsoli."
    },
    {
        id: 13,
        name: "Xbox Series X",
        price: 680,
        description: "Microsoft’ning kuchli o‘yin konsoli."
    },
    {
        id: 14,
        name: "Canon EOS M50",
        price: 850,
        description: "Yuqori sifatli mirrorless kamera."
    },
    {
        id: 15,
        name: "GoPro Hero 12",
        price: 450,
        description: "Ekstremal videolar uchun action kamera."
    },
    {
        id: 16,
        name: "Smart TV 55 inch",
        price: 900,
        description: "4K UHD, Android TV bilan jihozlangan televizor."
    },
    {
        id: 17,
        name: "Xiaomi Robot Vacuum",
        price: 380,
        description: "Avtomatik tozalovchi aqlli changyutgich."
    },
    {
        id: 18,
        name: "Power Bank 20000mAh",
        price: 60,
        description: "Katta sig‘imli tashqi batareya."
    },
    {
        id: 19,
        name: "Bluetooth Speaker",
        price: 110,
        description: "Sifatli ovozga ega portativ karnay."
    },
    {
        id: 20,
        name: "Wireless Charger",
        price: 50,
        description: "Tezkor simsiz quvvatlagich."
    }
];

const defaultProducts = [...products]
const elSearch_input = document.querySelector(".phones__search-input")
const elList  = document.querySelector(".phones__list")
function render(arr, list){
    list.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        const elItem = document.createElement("li")
        const elId = document.createElement("i")
        const elName = document.createElement("h3")
        const elPrice = document.createElement("p")
        const elDescription = document.createElement("span")
        const elLink = document.createElement("a")

        elItem.setAttribute("class", "phones__item")
        elId.setAttribute("class", "phones__item-id")
        elName.setAttribute("class", "phones__item-name")
        elPrice.setAttribute("class", "phones__item-price")
        elDescription.setAttribute("class", "phones__item-description")
        elLink.setAttribute("class", "phones__item-link")

        elLink.setAttribute("href", "/../login_tizimi/cabinet/categories/phones_detail.html?id=" + arr[i].id)
        // elLink.setAttribute("target", "_blank")





        elId.innerHTML = `Id ${arr[i].id}`
        elName.innerHTML = arr[i].name
        elPrice.innerHTML =`$${arr[i].price}`
        elDescription.innerHTML = arr[i].description

        elLink.appendChild(elId)
        elLink.appendChild(elName)
        elLink.appendChild(elPrice)
        elLink.appendChild(elDescription)

        elItem.appendChild(elLink)


        list.appendChild(elItem)
    }
}

render(products, elList)
elSearch_input.addEventListener("input", () => {
    const value = elSearch_input.value.toLowerCase()
    const filtered = products.filter((el) =>
        el.name.toLowerCase().includes(value)
    )

    if(filtered.length === 0){
        elList.innerHTML = "<h1>Hechnima topilmadi</h1>"
    }
    else{
        render(filtered, elList)
    }

})

const elSort = document.querySelector(".phones__sort")

elSort.addEventListener("input", () => {
    console.log(elSort.value)
    switch (elSort.value) {
        case "A-Z":
            products.sort((a, b) => a.name.localeCompare(b.name))
            render(products,elList)
            break
        case "Z-A":
            products.sort((a, b) => b.name.localeCompare(a.name))
            render(products,elList)

            break
        case "high":
            products.sort((a, b) => b.price - a.price)
            render(products,elList)
            break
        case "low":
            products.sort((a, b) => a.price - b.price)
            render(products,elList)
            break
        case "default":

            render(defaultProducts,elList)
            break
    }
})


