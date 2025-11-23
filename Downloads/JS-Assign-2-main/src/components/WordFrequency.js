import React, {useState} from 'react';

const WordFrequency = ({wordArray}) => {
    
    // coutns the number of words in the word array that is passed into the function
    const countWords = () => {
        const counts = {};
        for (const word of wordArray) {
        counts[word] = (counts[word] || 0) + 1;
        }

        return counts;
    }
    

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
                    {Object.entries(countWords()).map(([word,freq], index) => ( 
                        <tr key={index}>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{word}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{freq}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default WordFrequency;