// function that draws result data
export const createLnkItem = (key, value) => {
    let valueLnk = document.createElement('li')
    valueLnk.innerText = `${key}: ${value}`
    return valueLnk
}

const handleSubmit = async inpEvent => {
    inpEvent.preventDefault()
    const url = document.querySelector('#name') ? document.querySelector('#name').value : ''
    //checking if there is no url
    if (!url) {
        alert('please enter url')
    } else {
        // validate on the url if it's valid or not
        if (Client.urlValidator(url)) {
            // requesting to the serevr
            var req = await fetch('http://localhost:3000/test', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })
            })
            let data = await req.json()
            // creating container to insert the values in it
            let container = document.getElementById('container')

            //creating fragment
            const fragment = document.createDocumentFragment()

            //looping on data to get the object values
            Object.keys(data).map(key => {
                if (typeof data[key] === 'object' && data[key] !== null && key == 'sentence_list') {
                    Object.keys(data[key][0]).map(k => {
                        if (typeof data[key][0][k] === 'string') fragment.appendChild(createLnkItem(k, data[key][0][k]))
                    })
                } else if (typeof data[key] === 'string') {
                    fragment.appendChild(createLnkItem(key, data[key]))
                }
            })

            container.appendChild(fragment)
        } else {
            alert('url not valid')
        }
    }
}

export { handleSubmit }
