// imp imports 
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage  from './components/pages/HomePage'
import ProductPage  from './components/pages/ProductPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        {/* <h1>Hello World From React </h1> */}
        {/* <HomePage /> */}
        <Route path='/' component={HomePage} exact/>
        <Route path='/product/:id' component={ProductPage} />
        </Container>
        
      </main>
      <Footer />
    </Router>
  );
}
 
export default App;
