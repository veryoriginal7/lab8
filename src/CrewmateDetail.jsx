import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from './client';

const CrewmateDetail = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('crewPost')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error(error);
      } else {
        setCrewmate(data);
      }
      setLoading(false);
    };

    fetchCrewmate();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!crewmate) return <div>Crewmate not found.</div>;
  const des = (crewmate.lv>6)? "this crewmate is strong":"this crewmate is weak, level them up";
  return (
    <div>
      <h1>{crewmate.name}</h1>
      <p>Level: {crewmate.lv}</p>
      <p>Class: {crewmate.class}</p>
      <p>Race: {crewmate.race}</p>
      
      <p>Description: {des} </p>
      <Link to={`/edit/${crewmate.id}`}><button>Edit Crewmate</button></Link>
      <Link to="/"><button>Back to Summary</button></Link>
    </div>
  );
};

export default CrewmateDetail;
