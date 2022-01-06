// function saveLead() {
//     console.log("Button Clicked!!")
// }

let myLeads = []

// practice on JSON
// let myLead = ["https://www.youtube.com/watch?v=jS4aFq5-91M&t=19589s","https://www.fontawesome.com"]

// myLead = JSON.stringify(myLead)

// console.log(typeof myLead)

// myLead = JSON.parse(myLead)
// myLead.push("abcd")
// console.log(myLead)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn") 
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

// Local storage
// localStorage.setItem("myLead","www.youtube.com")
// console.log(localStorage.getItem("myLead"))
// localStorage.clear()

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick",function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click",function() {
    myLeads.push(inputEl.value)

    inputEl.value = ""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))

    renderLeads()
} )

// for(let i=0;i<myLead.length;i++){
//     ulEl.innerHTML += "<li>" + myLead[i] + "</li>"
//     // const li = document.createElement("li")
//     // li.innerText = myLead[i]
//     // ulEl.append(li)
// }

function renderLeads() {
    let listItems = ""

    for(let i=0;i<myLeads.length;i++){
        // listItems += "<li><a href='" + myLead[i] + "' target='_blank'>" + myLead[i] + "</a></li>"
        listItems += `
            <li>
                <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
            </li>
        `
    }

    ulEl.innerHTML = listItems
}

