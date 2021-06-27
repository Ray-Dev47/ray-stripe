import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Sidemenu from './component/Submenu/Submenu';
import Sidebar from './component/Sidebar/Sidebar'


function App() {
  return (
    <div>
     <Navbar />
     <Sidebar />
     <Hero />
     <Sidemenu />
    </div>
  );
}

export default App;
