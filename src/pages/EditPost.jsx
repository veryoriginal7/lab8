import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css';
import { supabase } from '../client';

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ name: "", class: "", race: "", lv: 0 });
  const [loading, setLoading] = useState(true);

  // Fetch current post from database
  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('crewPost')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setPost({
        name: data.name,
        class: data.class,
        race: data.race,
        lv: data.lv
      });
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };

  const updatePost = async (event) => {
    event.preventDefault();
    await supabase
      .from('crewPost')
      .update({ name: post.name, class: post.class, race: post.race, lv: post.lv })
      .eq('id', id);

    window.location = '/';
  };

  const deletePost = async (event) => {
    event.preventDefault();
    const { error } = await supabase.from('crewPost').delete().eq('id', id);
    if (error) console.error(error);
    else window.location = '/';
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label><br />
        <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br /><br />

        <label htmlFor="lv">Level</label><br />
        <input type="text" id="lv" name="lv" value={post.lv} onChange={handleChange} /><br />
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
        </select><br /><br />

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
        </select><br /><br />

        <input type="submit" value="Submit" onClick={updatePost} />
        <button className="deleteButton" onClick={deletePost}>Delete</button>
      </form>
    </div>
  );
};

export default EditPost;