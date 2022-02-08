import React, { Component } from 'react'
import "../App.css"
import Navbar from './Navbar'
class TransactionList extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('transactions') == null)
            localStorage.setItem('transactions', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
    }

    

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex == -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }


    render() {
        return (
            <div>
                <Navbar/>
            <h1 className='text-center'> Hospital Beds for Emergency </h1>
                <hr />
                                {/* <td className='clmhead'>Hospital Name</td>
                                <td className='clmhead'>Hospital Contact Number</td>
                                <td className='clmhead'>Hospital available Beds</td>
                <table>
                    <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                <td> {index+1}</td>
                                <td className='clm1'>{item.bAccountNo}</td>
                                <td className='clm2'>{item.bName}</td>
                                <td className='clm3'> {item.amount}</td>
                               
                            </tr>
                            
                        })}
                    </tbody>
                </table> */}
                <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Hospital id</th>
      <th scope="col">Name of the Hospital</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Number of available beds</th>
    </tr>
  </thead>
  <tbody>
  {this.state.list.map((item, index) => {
                            return <tr key={index} scope="row">
                                <td> {index+1}</td>
                                <td className='clm1'>{item.bAccountNo}</td>
                                <td className='clm2'>{item.bName}</td>
                                <td className='clm3'> {item.amount}</td>
                               
                            </tr>
                            
                        })}
  </tbody>
</table>
            </div>
        )
    }
}

export default TransactionList