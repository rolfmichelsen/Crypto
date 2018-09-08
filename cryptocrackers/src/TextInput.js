import React from "react";
import PropTypes from "prop-types";


class TextInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.props.onTextChange(event.target.value);
    }


    render() {
        return(
            <form>
                <fieldset>
                    <legend>{this.props.caption}</legend>
                    <textarea value={this.props.value} onChange={this.handleChange} />
                    <p>Characters: {this.props.value.length}</p>
                </fieldset>
            </form>
        );
    }

}


TextInput.propTypes = {
    caption: PropTypes.string,      // Text entry box caption
    value: PropTypes.string,        // Text contained in text box
    onTextChange: PropTypes.func,   // Callback function for changes to the text in the text area
};


export default TextInput;