const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

const faqs = [];
showFaq()
function showFaq() {
  // for iterating
faqData.forEach(createFaq)
}

function createFaq({question,id,answer}) {
  let faq = document.createElement("div")
  faq.classList.add("faq")
 accordianBody.append(faq)
 let childElement = document.createElement("div")
 childElement.classList.add("faq_header")
 faq.append(childElement)
 let h3 = document.createElement('h3')
let textNode = document.createTextNode(question)
h3.append(textNode)
childElement.append(h3)
let button = document.createElement("button")
button.classList.add("show_btn")
childElement.append(button)
button.innerHTML = `<i class="fa-solid fa-plus" id =${id}></i>`

let hiddenText = document.createElement('p')
let text = document.createTextNode(answer)
hiddenText.append(text)
faq.append(hiddenText)
hiddenText.classList.add('hidden')
button.setAttribute("id",id)
let buttonCount = false
button.addEventListener("click",function btnStatusUpdate() {
buttonCount= !buttonCount
  if(buttonCount == true){
    button.innerHTML = `<i class="fa-solid  fa-minus" id =${id}></i>`
  hiddenText.classList.remove('hidden')

  }
  else{
  
    button.innerHTML = `<i class="fa-solid fa-plus" id =${id}></i>`
    hiddenText.classList.add('hidden')
   
    
  }
})
  
}


// function btnStatusUpdate() {

// }


