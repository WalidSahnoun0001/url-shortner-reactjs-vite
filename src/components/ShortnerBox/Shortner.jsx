import './shortner.css'
import { useState } from 'react'
import fetchData from '../../controllers/data'
import { useEffect } from 'react'

function Shortner() {
    const [urls, setUrls] = useState([])
    const [copied, setCopied] = useState(false)

    const [link, setLink] = useState('')
    const generateShortLink = async (e) => {
        e.preventDefault()
        if(link != '') {
            const fulldata = await fetchData(link)
            const dataToAdd = {id: Date.now().toString(), data: fulldata.result}
            setUrls([...urls, dataToAdd])
            window.localStorage.setItem(`link-${dataToAdd.id}`, JSON.stringify(dataToAdd))
            setLink('')
        }
    }

    const copyLink = (shortedUrl) => {
        setCopied(true)

        navigator.clipboard.writeText(shortedUrl)

        setTimeout(() => {
            setCopied(false)
        }, 1000)
    }
    const removeLink = (urlId) => {
        const dataUpdate = urls.filter((url) => url.id != urlId)
        setUrls(dataUpdate)
        window.localStorage.removeItem(`link-${urlId}`)
    }

    useEffect(() => {
        if(window.localStorage.length > 0 && urls.length == 0) {
           const allKeys = Object.keys(localStorage)
           let items = []
           for(let i = 0; i < allKeys.length; i++) {
            items.push(window.localStorage.getItem(allKeys[i]))
           }
           setUrls(items.map(item => JSON.parse(item)))
        }
    }, [urls])

  return (
    <section className="shortner">
        <form action="">
            <input type="text" placeholder='Shorten a link here...' value={link} onChange={(e) => setLink(e.target.value)} />
            <button onClick={(e) => generateShortLink(e)}>Shorten it!</button>
        </form>
        <div className="urls">
            {
                urls.map(url => (
                    <div className="url" key={url.id}>
                        <p>{url.data.original_link}</p>
                        <div className="more">
                            <p>{url.data.full_short_link}</p>
                            {!copied && <div className="copy" onClick={() => copyLink(url.data.full_short_link)}>Copy</div>}
                            {copied && <div className="copied">Copied!</div>}
                            <div className="delete" onClick={()=> removeLink(url.id)}>Delete</div>
                        </div>
                    </div>
                ))
            }
           
        </div>
    </section>
  )
}

export default Shortner