import React, {useState} from 'react';

const WordFrequency = ({wordArray}) => {
  
   // Need to write code to count the frequency and display in the table.
    return (
        <div style={{backgroundColor: 'white'}}>
            <table style={{borderCollapse: 'collapse'}}>
                <thead style={{backgroundColor: 'grey'}}>
                    <tr>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Word</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Frequency</th>
                    </tr>
                </thead>
                <tbody>
                    {wordArray.map((word,index) => (
                        <tr key={index}>
                            <td style={{ border: "1px solid black", padding: "8px" }}>Test</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>1</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default WordFrequency;