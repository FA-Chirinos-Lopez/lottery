

import { useEffect, useState } from 'react'
import { get6RandomInt } from './aleNumber';

let aleatoryNumbers = []
let bubblesElements = []

let numbersUsed = false

export default function Bubble({ NumberOfBubbles }) {

    let bubbles = [];

    const [innerNumber, setInnerNumber] = useState([])
    const [score, setScore] = useState(0)







    const setBubbles = () => {
        for (let i = 0; i < NumberOfBubbles; ++i) {


            bubbles.push(
                <section className="stageGame">
                    <figure className="bubbleGame bubble"><div className='bubbleInsideNumber'>{innerNumber[i]}</div></figure>
                </section>

            )

        }
    }

    const getNewNumbers = () => {
        numbersUsed = false
        aleatoryNumbers = get6RandomInt(58)
        console.log(aleatoryNumbers)
        setInnerNumber(aleatoryNumbers)

    }

    const showNumbers = () => {
        let mainContainer = document.getElementById("mainContainer")
        mainContainer.style.opacity = 1
        mainContainer.style.transition = "opacity 1s";
        setInnerNumber(aleatoryNumbers)

    }

    setBubbles()












    const [aciertos, setAciertos] = useState(0)
    const [bubble1, setBubble1] = useState(null)
    const [bubble2, setBubble2] = useState(null)
    const [bubble3, setBubble3] = useState(null)
    const [bubble4, setBubble4] = useState(null)
    const [bubble5, setBubble5] = useState(null)
    const [bubble6, setBubble6] = useState(null)
    let bubbleVal = [bubble1, bubble2, bubble3, bubble4, bubble5, bubble6]

    let numberOfRightNumbers = 0;
    const addCorrect = () => {
        numberOfRightNumbers++
    }

    useEffect(() => {


        for (let i = 0; i < 6; ++i) {
            bubblesElements.push(document.getElementById(`bubble${i + 1}`))

        }
        bubblesElements[0].addEventListener('change', (event) => {
            constraints(event, setBubble1, 0)
        });


        bubblesElements[1].addEventListener('change', (event) => {
            constraints(event, setBubble2, 1)
        });


        bubblesElements[2].addEventListener('change', (event) => {
            constraints(event, setBubble3, 2)
        });


        bubblesElements[3].addEventListener('change', (event) => {
            constraints(event, setBubble4, 3)
        });

        bubblesElements[4].addEventListener('change', (event) => {
            constraints(event, setBubble5, 4)
        });


        bubblesElements[5].addEventListener('change', (event) => {
            constraints(event, setBubble6, 5)

        });



    }, [])



    const constraints = (event, setBubble, current) => {

        let actualValue = event.target.value;
        let repeated = false


        for (let i = 0; i < 6; ++i) {
            if (i != current) {
                if (bubblesElements[i].value == actualValue) {
                    console.log("repeated")
                    repeated = true
                }

            }
        }


        if (!repeated && actualValue <= 59 && actualValue >= 1) {
            event.target.style.backgroundColor = "white"
            setBubble(actualValue)
        } else {
            event.target.style.backgroundColor = "red"
            setBubble(0)
        }




    }




    const check = () => {
        getNewNumbers()
        showNumbers()



        if (!numbersUsed) {

            numberOfRightNumbers = 0
            for (let i = 0; i < 6; ++i) {
                let actualValue = bubbleVal[i];
                for (let i = 0; i < 6; ++i) {
                    let each = aleatoryNumbers[i]
                    if (actualValue == each) {
                        addCorrect()
                    }
                }
            }

            switch (numberOfRightNumbers) {
                case 3:
                    setScore(score + 50)
                    break;
                case 4:
                    setScore(score + 100)

                    break;
                case 5:
                    setScore(score + 200)

                    break;
                case 6:
                    setScore(score + 500)

                    break;

                default:
                    break;
            }
            numbersUsed = true
            setAciertos(numberOfRightNumbers)







        }


    }


    const luckyDipButton = () => {
        let luckyNumbers = get6RandomInt(58)
        console.log(luckyNumbers)

        setBubble1(luckyNumbers[0])
        setBubble2(luckyNumbers[1])
        setBubble3(luckyNumbers[2])
        setBubble4(luckyNumbers[3])
        setBubble5(luckyNumbers[4])
        setBubble6(luckyNumbers[5])



        for (let i = 0; i < 6; ++i) {
            let e = i + 1
            let element = document.getElementById(`bubble${e}`)
            element.style.opacity = 0
            element.style.transition = "opacity 1s";
        }




    }







    const reset = () => {
        aleatoryNumbers = []
        setBubble1(null)
        setBubble2(null)
        setBubble3(null)
        setBubble4(null)
        setBubble5(null)
        setBubble6(null)

        for (let i = 0; i < 6; ++i) {
            let element = document.getElementById(`bubble${i + 1}`)
            element.value = ""
        }
        for (let i = 0; i < 6; ++i) {
            let e = i + 1
            let element = document.getElementById(`bubble${e}`)
            element.style.opacity = 1
            element.style.transition = "opacity 1s";
        }


        let mainContainer = document.getElementById("mainContainer")
        mainContainer.style.opacity = 0
        mainContainer.style.transition = "opacity 1s";
    }
















    return (
        <div>
            <div style={{ position: "absolute", left: "80%" }}><h2>Score: {score}</h2></div>
            <div className='bubblesContainer' style={{ opacity: 0 }} id="mainContainer">
                {bubbles.map((each, index) => (

                    <div className="individualBubble" key={index}>{each}</div>
                ))}
            </div>




























            <div>

                <div className='bubblesContainer' style={{ position: "absolute", top: "70%" }} >
                    <div>
                        <section className="stageGame">
                            <figure className="bubbleGame bubble"><div className='bubbleInsideNumber'>{bubble1}</div></figure>
                        </section>
                        <input id="bubble1" type="number" min="1" max="59" placeholder='Write number' style={{ position: "relative", left: "25%", width: "40%" }}></input>
                    </div>
                    <div>
                        <section className="stageGame">
                            <figure className="bubbleGame bubble"><div className='bubbleInsideNumber'>{bubble2}</div></figure>
                        </section>
                        <input id="bubble2" type="number" min="1" max="59" placeholder='Write number' style={{ position: "relative", left: "25%", width: "40%" }}></input>
                    </div>
                    <div>
                        <section className="stageGame">
                            <figure className="bubbleGame bubble"><div className='bubbleInsideNumber'>{bubble3}</div></figure>
                        </section>
                        <input id="bubble3" type="number" min="1" max="59" placeholder='Write number' style={{ position: "relative", left: "25%", width: "40%" }}></input>
                    </div>
                    <div>
                        <section className="stageGame">
                            <figure className="bubbleGame bubble"><div className='bubbleInsideNumber'>{bubble4}</div></figure>
                        </section>
                        <input id="bubble4" type="number" placeholder='Write number' min="1" max="59" style={{ position: "relative", left: "25%", width: "40%" }}></input>
                    </div>
                    <div>
                        <section className="stageGame">
                            <figure className="bubbleGame bubble"><div className='bubbleInsideNumber'>{bubble5}</div></figure>
                        </section>
                        <input placeholder='Write your number' id="bubble5" type="number" min="1" max="59" style={{ position: "relative", left: "25%", width: "40%" }}></input>
                    </div>
                    <div>
                        <section className="stageGame">
                            <figure className="bubbleGame bubble"><div className='bubbleInsideNumber'>{bubble6}</div></figure>
                        </section>
                        <input placeholder='Write number' id="bubble6" type="number" min="1" max="59" style={{ position: "relative", left: "25%", width: "40%" }}></input>
                    </div>

                </div>

                <div style={{ position: "absolute", top: "60%" }}>

                    <button style={{ marginRight: "50px" }} onClick={check}>Play numbers</button>
                    <button style={{ marginRight: "50px" }} onClick={luckyDipButton}>Lucky Dip</button>
                    <button style={{ marginRight: "50px" }} onClick={reset}>Reset</button>
                </div>
            </div>
        </div>



















    )
}



export { aleatoryNumbers }