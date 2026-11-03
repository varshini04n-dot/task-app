
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import image from './images/vijay.png';

function App() {
  let name = "Varshini";
console.log("React app started");
  return (
    <div>
      <body style={{ backgroundColor: 'lightblue', minHeight: '100vh' }}></body>
      <h1 style={{ color: 'brown', textAlign: 'center' }}>Welcome to React learning, {name}!</h1>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" style={{ color:'darkgreen', textAlign: 'center',textDecoration: 'underline'   }}>Welcome Card</h5>
<img src={image} alt="Vijay" className=" img-fluid rounded mx-auto d-block mb-3"  style={{ width: '200px'}}/>
 <img src="https://picsum.photos/400/200" className=" img-fluid rounded mx-auto d-block mb-3" alt="Random" />
 <p className="card-text d-flex justify-content-center">This is a your firsr card with images and style!</p>


               

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
