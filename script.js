const html = document.getElementsByTagName('html')[0]
const head = document.querySelector('head')
const body = document.querySelector('body')
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
    target: body,
    elements: [
      { name: 'p', properties: [{ name: 'innerHTML', value: 'Be in this life as if you were a stranger or a traveler on a path.<br>If you reach the evening, do not expect to reach the morning, and if you reach the morning, do not expect to reach the evening. Take from your health before your sickness and from your life before your death.' }] }
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

    html.appendChild(list.target)
  })
}

domBuilder()
