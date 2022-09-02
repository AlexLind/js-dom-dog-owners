// WRITE YOUR CODE BELOW!
const myHeaderUnorderedList = document.querySelector('.dogs-list')
const myMainSection = document.querySelector('.main')




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
    console.log(dog)
    myMainSection.innerHTML = ""
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

for (const dog of data) {
   const li = document.createElement('li')
   li.innerHTML = dog.name
   li.setAttribute('class', 'dogs-list__button')
   li.addEventListener('click', () => {
    createDogCard(dog)
   })
   myHeaderUnorderedList.append(li)
}


