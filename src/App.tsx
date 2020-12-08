import {useState, useEffect} from 'react';
import axios from 'axios';
import {CardGroup, ICard} from '@/components/CardGroup';

const App = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const {data} = await axios.get('/response');
    setCards(data);
  };

  return <CardGroup items={cards} />;
};

export default App;
