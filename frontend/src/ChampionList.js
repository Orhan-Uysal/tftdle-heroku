import React, { Component, useState, useEffect } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import './ChampionList.css';
import { Fade, Box, TableCell, tableCellClasses } from '@mui/material';
import ComboBox from './ComboBox';
import styled from '@emotion/styled'
import ToolTipTableCell from './ToolTipTableCell';
import Confetti from 'react-confetti'


function MyConfetti({ isAnswered, handler }) {
    const [show, setShow] = useState(false)
    const [timedOut, setTimedOut] = useState(false)
    // On componentDidMount set the timer
    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShow(true)
        }, 6000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);
    // console.log("SHOW: " + show)
    if (show && isAnswered) {
        if (!timedOut) {
            handler()
            setTimedOut(true)
        }
        return <Confetti tweenDuration={5000}></Confetti>
    }
    else
        return;
}

function MyEmote({ isAnswered }) {
    const [show, setShow] = useState(false)

    // On componentDidMount set the timer
    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShow(true)
        }, 6000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);
    // console.log("SHOW: " + show)
    if (show && isAnswered) {
        return <Fade in="true"
            timeout={{ enter: 1000, exit: 250 }}
            style={{ transitionDelay: `100ms` }}>
            <div style={{
                margin: "20px",
                height: "100px",
            }}>
                <img src='https://raw.communitydragon.org/latest/game/assets/loadouts/summoneremotes/flairs/penguin_happy_greetings_selector.png'></img></div></Fade>
    }

    else
        return;
}

function MyComboBox({ isAnswered, champions, handleSubmit }) {
    if (!isAnswered) {
        return <ComboBox className="pad" champions={champions} handleSubmit={handleSubmit}></ComboBox>
    }
    return <ComboBox className="pad" champions={champions} handleSubmit={handleSubmit} style={{ display: "none" }}></ComboBox>;
}

class ChampionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            champions: [],
            championsGuessed: [],
            checked: false,
            answer: {},
            answerResult: false,
            showConfetti: false,
            hideComboBox: true,
            toggleInfoModal: false,
        };
    }

    setState(state) {
        window.localStorage.setItem('state', JSON.stringify(state));
        super.setState(state);
    }

    componentDidUpdate() {
        window.localStorage.setItem('state', JSON.stringify(this.state));
    }

    componentDidMount() {
        fetch('/all')
            .then(response => response.json())
            .then(data => this.setState({ champions: data }));

        fetch('/winner')
            .then(response => response.json())
            .then(data => this.setState({ answer: data }));

        try {
            const state = window.localStorage.getItem('state');
            this.setState({ ...JSON.parse(state) });
        } catch (e) { }
    }

    handleSubmit = (selectedOptions) => {
        // console.log("HERE")
        // console.log(selectedOptions);
        // console.log(selectedOptions.length);
        this.setState({ checked: this.state.checked = true })

        if (Object.keys(selectedOptions).length > 0) {
            // console.log("CHANGE")
            this.setState(prevState => ({
                championsGuessed: [selectedOptions, ...prevState.championsGuessed]
            }))
            if (this.isCorrectAnswer(selectedOptions)) {
                this.setState({ answerResult: this.state.answerResult = true })
            }
            var array = [...this.state.champions]; // make a separate copy of the array
            var index = array.indexOf(selectedOptions)
            if (index !== -1) {
                array.splice(index, 1);
                this.setState({ champions: array });
            }
        }
    }

    toggleInfoModal = () => {
        this.setState({ toggleInfoModal: !this.toggleInfoModal })
    }

    textBoxHandle = () => {
        this.setState({
            hideComboBox: false
        })
    }

    isCorrectAnswer = (guess) => {
        var count = 0;
        if (this.state.answer.gender == guess.gender) {
            count++;
        }
        if (this.state.answer.cost == guess.cost) {

            count++;
        }
        if (this.state.answer.originTrait == guess.originTrait) {

            count++;
        }
        if (this.state.answer.classTrait == guess.classTrait) {
            count++;
        }
        if (this.state.answer.rangeType == guess.rangeType) {
            count++;
        }


        // console.log("COUNT: " + count);
        if (count == 5) {
            return true;
        }
        return false;
    }
    getGuessColour = (guess) => {
        const green = "#28aa0a"
        const red = "#D4312B"
        const orange = "#f07e0f"
        // console.log(guess);
        var result = [];
        if (this.state.answer.gender == guess.gender) {
            result.push(green)
        }
        else
            result.push(red);
        if (this.state.answer.cost == guess.cost) {
            result.push(green)
        }
        else
            result.push(red);

        if (this.state.answer.originTrait == guess.originTrait) {
            result.push(green)

        }
        else {
            var colour = red;
            var ans = this.state.answer.originTrait.replace(/ /g, '');
            var ansArr = ans.split(",")

            var guess1 = guess.originTrait.replace(/ /g, '');
            var guessArr = guess1.split(",")

            for (var word1 of ansArr) {
                for (var word2 of guessArr) {
                    if (word1 == word2) {
                        colour = orange
                    }
                }
            }

            result.push(colour);
        }
        if (this.state.answer.classTrait == guess.classTrait) {
            result.push(green)
        }
        else {
            var colour = red;
            var ans = this.state.answer.classTrait.replace(/ /g, '');
            var ansArr = ans.split(",")

            var guess1 = guess.classTrait.replace(/ /g, '');
            var guessArr = guess1.split(",")

            for (var word1 of ansArr) {
                for (var word2 of guessArr) {
                    if (word1 == word2) {
                        colour = orange
                    }
                }
            }

            result.push(colour);
        }
        if (this.state.answer.rangeType == guess.rangeType) {
            result.push(green)
        }
        else
            result.push(red);

        return result;
    }
    render() {
        const { champions, championsGuessed, answer, answerResult, showConfetti, hideComboBox } = this.state;

        // console.log(JSON.parse(window.localStorage.getItem('state')))
        // console.log(answer);
        // console.log(champions);
        // console.log(championsGuessed);
        // console.log("RESULT: " + answerResult)

        const championList = championsGuessed.map(champion => {
            const guessColours = this.getGuessColour(champion);
            return <tr key={champion.name}>
                <Fade in={this.state.checked}
                    timeout={{ enter: 1000, exit: 250 }}
                    style={{ transitionDelay: `100ms` }}>

                    <td style={{ border: "1px solid rgb(255, 255, 255, 0)", backgroundColor: "rgb(0, 0, 0, 0)", margin: "0 px", padding: "0px" }} >
                        <a title={champion.name}><img src={champion.imgUrl} alt="some" height="80px"></img></a>
                    </td>
                </Fade>
                <Fade in={this.state.checked}
                    timeout={{ enter: 1000, exit: 250 }}
                    style={{ transitionDelay: `1100ms` }}>
                    <td style={{ border: "1px solid rgb(255, 255, 255)", boxShadow: "inset 0 0 6px black", backgroundColor: guessColours[0], margin: "0 px", padding: "0px" }}>{champion.gender}</td>
                </Fade>
                <Fade in={this.state.checked}
                    timeout={{ enter: 1000, exit: 250 }}
                    style={{ transitionDelay: `2100ms` }}>
                    <td style={{ border: "1px solid rgb(255, 255, 255)", boxShadow: "inset 0 0 6px black", backgroundColor: guessColours[1], margin: "0 px", padding: "0px" }}>{champion.cost}</td>
                </Fade>
                <Fade in={this.state.checked}
                    timeout={{ enter: 1000, exit: 250 }}
                    style={{ transitionDelay: `3100ms` }}>
                    <td style={{ border: "1px solid rgb(255, 255, 255)", boxShadow: "inset 0 0 6px black", backgroundColor: guessColours[2], margin: "0 px", padding: "0px" }}>{champion.originTrait}</td>
                </Fade>
                <Fade in={this.state.checked}
                    timeout={{ enter: 1000, exit: 250 }}
                    style={{ transitionDelay: `4100ms` }}>
                    <td style={{ border: "1px solid rgb(255, 255, 255)", boxShadow: "inset 0 0 6px black", backgroundColor: guessColours[3], margin: "0 px", padding: "0px" }}>{champion.classTrait}</td>
                </Fade>
                <Fade in={this.state.checked}
                    timeout={{ enter: 1000, exit: 250 }}
                    style={{ transitionDelay: `5100ms` }}>
                    <td style={{ border: "1px solid rgb(255, 255, 255)", boxShadow: "inset 0 0 6px black", backgroundColor: guessColours[4], margin: "0 px", padding: "0px" }}>{champion.rangeType}</td>
                </Fade>
            </tr>
        });


        // console.log(answerResult)
        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <div className={(answerResult ? 'show' : 'hidden')}>
                        {answerResult && <MyConfetti isAnswered={answerResult} handler={this.textBoxHandle} />}
                    </div>
                    <div style={{
                        margin: "20px",
                        height: "100px",
                    }}>
                        {hideComboBox && <MyComboBox isAnswered={answerResult} champions={champions} handleSubmit={this.handleSubmit} />}
                        {answerResult && <MyEmote isAnswered={answerResult} />}
                    </div>
                    <div className='pad' style={{ width: "650px", backgroundColor: "rgba(0, 0, 0, 0.5)", margin: "auto" }}>
                        <Table className="align-middle"
                            borderless
                            // hover
                            responsive
                            style={{
                                borderCollapse: "separate", borderSpacing: "5px 5px",
                                fontFamily: "Roboto",
                                color: "white",
                                width: "100%",
                                textShadow: "0 0 3px black"
                            }}
                        >
                            <thead>
                                <tr>
                                    <th width="80px">Champion</th>
                                    <th width="80px">Gender</th>
                                    <th width="80px">Cost</th>
                                    <th width="80px">Origin</th>
                                    <th width="80px">Class</th>
                                    <th width="80px">Range Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {championList}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        );
    }
}


export default ChampionList;