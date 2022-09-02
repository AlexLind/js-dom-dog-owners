// WRITE YOUR CODE BELOW!
const myHeaderUnorderedList = document.querySelector('.dogs-list')
const myMainSection = document.querySelector('.main')




const createSection = () => {
    const myDogSection = document.createElement('section')
    myDogSection.setAttribute('class', 'main__dog-section')
    myMainSection.append(myDogSection)
    return myDogSection
}

const createSectionHeader = () => {
    const header = document.createElement('h2')
    header.innerText = data[0].name;
    return header
}

const createSectionImage = () => {
    const image = document.createElement('img')
    image.setAttribute('src', data[0].image)
    return image
}

const createDogCard = () => {
    myMainSection.innerHTML = ""
    const section = createSection()
    const header = createSectionHeader()
    const image = createSectionImage()
    const desc = createDogCardDesc()
    
    section.append(header, image, desc)
    return section
}

const createDogCardDesc = () => {
    const cardDesc = document.createElement('div')
    cardDesc.setAttribute('class', 'main__dog-section__desc')
    const header = document.createElement('h3')
    header.innerHTML = 'Bio'
    cardDesc.append(header)
    const text = document.createElement('p')
    text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    cardDesc.append(text)
    const bottomSection = document.createElement('div')
    bottomSection.setAttribute('class', 'main__dog-section__btn')
    cardDesc.append(bottomSection)
    const textBottom = document.createElement('p')
    textBottom.innerHTML = '<em>Is naughty?</em> yes!'
    bottomSection.append(textBottom)
    const button = document.createElement('button')
    button.innerHTML = 'Good Dog!'
    bottomSection.append(button)
    return cardDesc
}

for (dog of data) {
   const li = document.createElement('li')
   li.innerHTML = dog.name
   li.setAttribute('class', 'dogs-list__button')
   li.addEventListener('click', createDogCard) // Change the function to display dog card
   myHeaderUnorderedList.append(li)
}


