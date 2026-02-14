let users = [
    {
        name:"Javohir",
        lastName:"Imomaliyev",
        age:18,
        login:"Joxa",
        password:"joxa"
    },
    {
        name:"Sherbek",
        lastName:"Ruzmamatov",
        age:18,
        login:"Sher",
        password:"miuav"
    },
    {
        name:"Shohjohon",
        lastName:"Adizov",
        age:18,
        login:"Shox",
        password:"gey"
    },
    {
        name:"Badriddin",
        lastName:"Baxtiyorov",
        age:18,
        login:"Badr",
        password:"pidor"
    },
    {
        name:"Zoirjon",
        lastName:"Dostonov",
        age:18,
        login:"Zoir",
        password:"ko't"
    },{
        name:"Javohir",
        lastName:"Hamdamov",
        age:18,
        login:"jovo",
        password:"jovo"
    },{
        name:"Samandar",
        lastName:"Solibekov",
        age:18,
        login:"saman",
        password:"saman"
    }

]

const elForm = document.querySelector('.login__name-password')

const elName = document.querySelector('.login__name')
const elPassword = document.querySelector(".login__password")
const elSign_btn = document.querySelector(".login__btn")
const elInner = document.querySelector(".login__name-password")
const elP = document.querySelector(".incorrect")

elForm.addEventListener("submit", (evt)=>{
    evt.preventDefault()

})



function checkUsers(arr,inner, name, password ,p){

    let elMatn = ""
    for (let i = 0; i < arr.length; i++) {
        if(name == arr[i].login && password == arr[i].password){
            elMatn = "xush kelibsan gan"
            open("./cabinet/cabinet.html", "_parent")
            break

        }else{

            elMatn = "Pashol nax "
            p.setAttribute("href", "http://localhost:63342/login_tizimi/cabinet/categories/phones.html/gfhj")

        }

    }

    p.innerHTML = elMatn

    inner.appendChild(p)





}
elSign_btn.addEventListener("click", () => {
    checkUsers(users, elInner, elName.value, elPassword.value, elP)


    elName.value = ""
    elPassword.value = ""
})
