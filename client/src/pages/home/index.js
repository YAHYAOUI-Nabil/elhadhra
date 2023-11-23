import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AlaUne from "./components/AlaUne"
import Articles from "./components/Articles"
import Chroniques from "./components/Chroniques"
import Lettre from "./components/Lettre"
import Recents from "./components/Recents"
import Slider from "./components/Slider"
import Tribunes from "./components/Tribunes"
import Videos from "./components/Videos"
import { fetchAllArticles, fetchVideos } from '../../api';

const Index = () => {
  const data = useSelector((state) => state.homeState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllArticles());
    dispatch(fetchVideos());
  }, [dispatch])

  return (
    <div className="px-24 py-4">
      <Recents articles={data.articles} /> 
      <AlaUne articles={data.articles} />
      <Slider title="La rédaction vous conseille" articles={data.articles} />
      <Lettre />
      <Articles title="politique" articles={data.articles} />
      <Tribunes title="tribunes" articles={data.articles} />
      <Articles title="immigration" articles={data.articles} />
      <Chroniques title="chroniques" articles={data.articles} />
      <Slider title="Nos derniers articles" articles={data.articles} />
      <Articles title="societe" articles={data.articles} />
      <Articles title="union-europeenne" articles={data.articles} />
      <Videos videos={data.videos} />
      <Articles title="international" articles={data.articles} />
    </div>
  )
}
export default Index