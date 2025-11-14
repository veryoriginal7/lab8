import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'
const ReadPosts = ({props}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('crewPost')
            .select()
            .order('created_at', { ascending: true })
            setPosts(data)
        }
        fetchPosts()
    }, [])
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                [...posts]
                .sort((a, b) => b.id - a.id)
                .map((post,index) => 
                    <Card 
                        key={post.id}
                        id={post.id} 
                        name={post.name}
                        class={post.class}
                        race={post.race}
                        lv={post.lv}
                    />
                ) : <h2>{'No Character Yet '}</h2>
            }
        </div>  
    )
}

export default ReadPosts