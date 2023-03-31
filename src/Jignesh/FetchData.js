import React,{useState , useEffect} from 'react'
import axios from 'axios'

function FetchData() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idButtonClick,setIdButtonClick] = useState(1)

    const handleClick = () => {
        setIdButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButtonClick}`)
        .then(res => {
          console.log(res)
          setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idButtonClick])

  return (
    <div>
        <label for="data">Data Id </label>
        <input id="data" type='text' value={id} onChange={e => setId(e.target.value)}/>
        <button type="button" onClick={handleClick}> Fetch Data</button>
         <br/><br/>
         Fetched Data is - {post.title}
    </div>
  )
}

export default FetchData
