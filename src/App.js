import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { Incomeexpense } from './components/Incomeexpense'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
function App() {
  return (
    <GlobalProvider>
       <Header/>
      <div className="container">
      <Balance />
      <Incomeexpense/>
      <TransactionList/>
      <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class App extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{  key: process.env.REACT_APP_MAP_KEY,}}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default App;