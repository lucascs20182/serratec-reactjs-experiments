import Header from './components/Header.jsx';

import Routes from "./routes";

import './global.css';

export default function App() {
  return (
    <div className="container">
      <Header />
      <Routes/>
    </div>
  );
}
