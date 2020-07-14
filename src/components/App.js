import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();

    await this.loadBlockChainData();
  }
  // Metemask connection
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non Etherium browser detectef');
    }
  }

  async loadBlockChainData() {
    const web3 = window.web3;
    // from web3.js docs
    const accounts = await web3.eth.getAccounts();

    console.log(accounts);
  }

  render() {
    return (
      <div>
        <nav className='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
          <a
            className='navbar-brand col-sm-3 col-md-2 mr-0'
            href='http://www.dappuniversity.com/bootcamp'
            target='_blank'
            rel='noopener noreferrer'
          >
            Crypto Trade
          </a>
        </nav>
        <div className='container-fluid mt-5'>
          <div className='row'>
            <main role='main' className='col-lg-12 d-flex text-center'>
              <div className='content mr-auto ml-auto'>Hello World</div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
