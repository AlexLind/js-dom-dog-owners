// WRITE YOUR CODE BELOW!
const myHeaderUnorderedList = document.querySelector('.dogs-list')
const myMainSection = document.querySelector('.main')
const myHeaderAddButton = document.querySelector('.dogs-list__button--add')
myHeaderAddButton.addEventListener('click', () => {
    clearScreen()
    addForm()
    console.log('plus clicked')
})

const addForm = () => {
  const section = createSection()
  const header = createSectionHeader('Add a new Dog')
  const form = document.createElement('form')
  form.setAttribute('class', 'form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('Dog added', nameInput.value)
    data.unshift({
        id: 'created by user',
        name: nameInput.value,
        bio: bioInput.value,
        isGoodDog: true,
        image: imgInput.value
    })
    // myHeaderUnorderedList.removeChild(0)
    myHeaderUnorderedList.innerHTML = ''
    renderDogList()
    console.log('dog added success')
  })
    const labelName = document.createElement('label')
    labelName.setAttribute('for', 'name')
    labelName.innerHTML = "Dog's name"
    form.append(labelName)

    const nameInput = document.createElement('input')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('id', 'name')
    nameInput.setAttribute('name', 'name')
    nameInput.innerHTML = "Dog's name"
    form.append(nameInput)

    const labelImage = document.createElement('label')
    labelImage.setAttribute('for', 'image')
    labelImage.innerHTML = "Dog's picture"
    form.append(labelImage)

    const imgInput = document.createElement('input')
    imgInput.setAttribute('type', 'url')
    imgInput.setAttribute('id', 'image')
    imgInput.setAttribute('name', 'image')
    imgInput.innerHTML = "Dog's name"
    form.append(imgInput)

    const labelBio = document.createElement('label')
    labelBio.setAttribute('for', 'image')
    labelBio.innerHTML = "Dog's bio"
    form.append(labelBio)

    const bioInput = document.createElement('textarea')
    bioInput.setAttribute('rows', '5')
    bioInput.setAttribute('id', 'bio')
    bioInput.setAttribute('name', 'bio')
    form.append(bioInput)

    const submitForm = document.createElement('input')
    submitForm.setAttribute('type', 'submit')
    submitForm.setAttribute('id', 'submit')
    submitForm.setAttribute('name', 'submit')
    submitForm.setAttribute('value', "Let's add a dog!")
    submitForm.setAttribute('class', "form__button")
    form.append(submitForm)


  section.append(header, form)
  return form
}

const clearScreen = () => {
    myMainSection.innerHTML = ""
}


const createSection = () => {
    const myDogSection = document.createElement('section')
    myDogSection.setAttribute('class', 'main__dog-section')
    myMainSection.append(myDogSection)
    return myDogSection
}

const createSectionHeader = (name) => {
    const header = document.createElement('h2')
    header.innerText = name;
    return header
}

const createSectionImage = (imageSource) => {
    const image = document.createElement('img')
    image.setAttribute('src', imageSource)
    return image
}

const createDogCard = (dog) => {
    clearScreen()
    const section = createSection()
    const header = createSectionHeader(dog.name)
    const image = createSectionImage(dog.image)
    const desc = createDogCardDesc(dog.bio, dog.isGoodDog)
    
    section.append(header, image, desc)
    return section
}

const createDogCardDesc = (bio, isGoodDog) => {
    const cardDesc = document.createElement('div')
    cardDesc.setAttribute('class', 'main__dog-section__desc')
    const header = document.createElement('h3')
    header.innerHTML = 'Bio'
    cardDesc.append(header)
    const text = document.createElement('p')
    text.innerHTML = bio
    cardDesc.append(text)
    const bottomSection = document.createElement('div')
    bottomSection.setAttribute('class', 'main__dog-section__btn')
    cardDesc.append(bottomSection)
    const textBottom = document.createElement('p')
    bottomSection.append(textBottom)
    const button = document.createElement('button')
    button.addEventListener('click', () => {
        if (isGoodDog) {
            textBottom.innerHTML = '<em>Is naughty?</em> yes!'
            button.innerHTML = 'Bad Dog!' 
        } else {
            textBottom.innerHTML = '<em>Is naughty?</em> no!'
            button.innerHTML = 'Good Dog!'
        }
    })    
    if (isGoodDog) {
        textBottom.innerHTML = '<em>Is naughty?</em> no!'
        button.innerHTML = 'Good Dog!'
    } else {
        textBottom.innerHTML = '<em>Is naughty?</em> yes!'
        button.innerHTML = 'Bad Dog!'
        } 
    bottomSection.append(button)
    return cardDesc
}

const renderDogList = () => {
  for (const dog of data) {
   const li = document.createElement('li')
   li.innerHTML = dog.name
   li.setAttribute('class', 'dogs-list__button')
   li.addEventListener('click', () => {
    createDogCard(dog)
   })
   myHeaderUnorderedList.append(li)
}}

renderDogList()

