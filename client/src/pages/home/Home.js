import AlaUne from "./components/AlaUne"
import Articles from "./components/Articles"
import Chroniques from "./components/Chroniques"
import Recents from "./components/Recents"

const Home = () => {
  return (
    <div className="px-24 py-4">
      <Recents /> 
      <AlaUne />
      <Articles title="politique" />
      <Articles title="immigration" />
      <Chroniques />
      <Articles title="Société" />
      <Articles title="Union-européenne" />
      <Articles title="International" />
    </div>
  )
}
export default Home