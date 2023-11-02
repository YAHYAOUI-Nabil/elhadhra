import AlaUne from "./components/AlaUne"
import Articles from "./components/Articles"
import Chroniques from "./components/Chroniques"
import Lettre from "./components/Lettre"
import Recents from "./components/Recents"
import Slider from "./components/Slider"
import Tribunes from "./components/Tribunes"
import Videos from "./components/Videos"

const Index = () => {
  return (
    <div className="px-24 py-4">
      <Recents /> 
      <AlaUne />
      <Slider title="La rédaction vous conseille" />
      <Lettre />
      <Articles title="politique" />
      <Tribunes />
      <Articles title="immigration" />
      <Chroniques />
      <Slider title="Nos derniers articles" />
      <Articles title="Société" />
      <Articles title="Union-européenne" />
      <Videos />
      <Articles title="International" />
    </div>
  )
}
export default Index