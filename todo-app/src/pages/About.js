import "../css/About.css"
import Navbar from "../components/Navbar";
function About(){
    return(<div>
   <Navbar/>
    <div className="about-section">
      <h1>Hakkımızda</h1>
      <p>Biz kimiz ve ne yapıyoruz?</p>
    </div>

    <h2>Ekibimiz</h2>
    <div className="row">
      <div className="column">
        <div className="container">
          <h2>Jane Doe</h2>
          <p className="title">CEO & Kurucu</p>
          <p>Biraz beni tanımlayan metin.</p>
          <p>jane@example.com</p>
          <p><button className="button">İletişim</button></p>
        </div>
      </div>

      <div className="column">
        <div className="container">
          <h2>Mike Ross</h2>
          <p className="title">Sanat Yönetmeni</p>
          <p>Biraz beni tanımlayan metin.</p>
          <p>mike@example.com</p>
          <p><button className="button">İletişim</button></p>
        </div>
      </div>

      <div className="column">
        <div className="container">
          <h2>John Doe</h2>
          <p className="title">Tasarımcı</p>
          <p>Biraz beni tanımlayan metin.</p>
          <p>john@example.com</p>
          <p><button className="button">İletişim</button></p>

        </div>

      </div>
 
    </div>

        
    </div> );
}
export default About;