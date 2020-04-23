import React from 'react';

class EvenOdd extends React.Component {

    render() {
        const nums = [1,2,3,4,5,6,7,8,9,10]

        const odds = nums
        .map(function (el) {
                    if(el % 2 !== 0)
            return <li> {el} </li>
        })

        const evens = nums.map(function (el) {
            if(el % 2 === 0)
            return <li> {el} </li>
        })

        return (
            <div>
                <div>
                <h2>Odd Numbers</h2>
                <ul>{odds}</ul>
                </div>
                <div>
                <h2>Even Numbers</h2>
                <ul>{evens}</ul>
                </div>
                
            </div>
        )
    }
}

export default EvenOdd;