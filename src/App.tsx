import './App.css';
import TopMain from "./components/body/top-bar/top-main/TopMain"
import Footer from "./components/footer/Footer"
import {GridPhotos} from "./components/body/grid-photos/GridPhotos";

const App=()=>
    <div className="App">
        <TopMain/>
        <GridPhotos/>
        <Footer/>
    </div>

export default App;
