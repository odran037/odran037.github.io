const head = document.querySelector('head')
const body = document.querySelector('body')
const div = document.createElement('div')
const elementsList = [
  {
    target: head,
    elements: [
      { name: 'meta', attributes: [{ name: 'charset', value: 'utf-8' }] },
      { name: 'meta', attributes: [{ name: 'http-equiv', value: 'X-UA-Compatible' }, { name: 'content', value: 'IE=edge' }] },
      { name: 'meta', attributes: [{ name: 'name', value: 'viewport' }, { name: 'content', value: 'width=device-width, initial-scale=1' }] },
      { name: 'meta', attributes: [{ name: 'name', value: 'format-detection' }, { name: 'content', value: 'telephone=no' }] },
      { name: 'title', properties: [{ name: 'textContent', value: '53662736772837' }] },
      { name: 'link', attributes: [{ name: 'rel', value: 'shortcut icon' }, { name: 'href', value: 'favicon.ico' }, { name: 'type', value: 'image/x-icon' }] },
      { name: 'link', attributes: [{ name: 'rel', value: 'stylesheet' }, { name: 'href', value: 'style.css' }] }
    ]
  },
  {
    target: div,
    elements: [
//       { name: 'p', properties: [{ name: 'innerHTML', value: 'Be in this life as if you were a' }] },
//       { name: 'p', properties: [{ name: 'innerHTML', value: 'stranger or a traveler on a path.' }] },
      { name: 'pre', properties: [{ name: 'textContent', value: `
        _____           __
   ____|__  /__  ______/ /
  / ___//_ </ / / / __  / 
 (__  )__/ / /_/ / /_/ /  
/____/____/\__, /\__,_/   
          /____/          
` }] }
    ]
  }
]

function domBuilder() {
  elementsList.forEach(list => {
    list.elements.forEach(e => {
      let element = document.createElement(e.name)

      if (e.hasOwnProperty('properties')) {
        e.properties.forEach(prop => {
          element[prop.name] = prop.value
        })
      }

      if (e.hasOwnProperty('attributes')) {
        e.attributes.forEach(prop => {
          element.setAttribute(prop.name, prop.value)
        })
      }

      list.target.appendChild(element)
    })

    body.appendChild(list.target)
  })
}

domBuilder()
