import { Component, useState, React } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Fade, Box } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

class ComboBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOptions: []
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event, value) => {
        this.setState({ selectedOptions: value });
    };

    handleSubmit = () => { this.props.handleSubmit(this.state.selectedOptions) }

    render() {
        // console.log(this.props.champions);

        var champions = this.props.champions;
        return (
            <div className="module-border-wrap" style={{
                margin: "20px",
                height: "100px",
            }}>
                <Autocomplete
                    className="customAutocomplete"
                    sx={{
                        width: 300, margin: "auto", display: "inline-block", padding: "10px",
                        // borderImage: "linear-gradient(to right, red, orange)",
                        // border: "2px solid blue",
                        "& .MuiOutlinedInput-root": {
                            border: "none",
                            borderImage: "linear-gradient(to right, red, orange)",
                            borderRadius: "4px",
                            background: "linear-gradient(to right, rgb(255, 138, 0, 0.6), rgb(229, 46, 113,0.6)) rgba(0,0,0,0.1)",
                            backgroundColor:"rgba(0,0,0,0.1)"
                            //     padding: "0"
                        },
                        // "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        //     border: "10px solid",
                        //     borderImage: "linear-gradient(to right, red, orange)",
                        // }

                    }}
                    options={champions}
                    autoHighlight
                    getOptionLabel={(option) => option.name}
                    onChange={this.handleChange}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="40"
                                height="40"
                                src={option.imgUrl}
                                srcSet={option.imgUrl}
                                alt=""
                            />
                            {option.name}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose a champion..."
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                        />
                    )}
                />
                <IconButton onClick={this.handleSubmit}
                    variant="contained"
                    style={{marginTop: "25px", }} >
                    <SendIcon/>
                </IconButton>
            </div>
        );

    }
}

export default ComboBox