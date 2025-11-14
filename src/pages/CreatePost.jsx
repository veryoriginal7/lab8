import { useState } from 'react'
import './CreatePost.css'
import { supabase } from '../client'
const CreatePost =  () => {
    const createPost = async (event) => {
        event.preventDefault()
        await supabase
        .from('crewPost')
        .insert({name: post.name, class: post.class, race: post.race, lv: post.lv})
        .select()
        window.location = "/";
    }
    const [post, setPost] = useState({name: "", class: "", race: "", lv: 0})
    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <form>

                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="lv">Level</label><br />
                <input type="text" id="lv" name="lv" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="class">Class</label><br />
                <select id="class" name="class" value={post.class} onChange={handleChange}>
                    <option value="">--Select Class--</option>
                    <option value="Paladin">Paladin</option>
                    <option value="Ranger">Ranger</option>
                    <option value="Bard">Bard</option>
                    <option value="Cleric">Cleric</option>
                    <option value="Druid">Druid</option>
                    <option value="Fighter">Fighter</option>
                    <option value="Monk">Monk</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Sorcerer">Sorcerer</option>
                    <option value="Warlock">Warlock</option>
                    <option value="Wizard">Wizard</option>
                </select>
                    <br /><br />

                <label htmlFor="race">Race</label><br />
                <select id="race" name="race" value={post.race} onChange={handleChange}>
                    <option value="">--Select Race--</option>
                    <option value="Human">Human</option>
                    <option value="Elf">Elf</option>
                    <option value="Orc">Orc</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Halfling">Halfling</option>
                    <option value="Gnome">Gnome</option>
                    <option value="Tiefling">Tiefling</option>
                    <option value="Dragonborn">Dragonborn</option>
                </select>
                <br/>
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost