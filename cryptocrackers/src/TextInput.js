import React from "react";
import PropTypes from "prop-types";


class TextInput extends React.Component {

    render() {
        return(
            <form>
                <fieldset>
                    <legend>{this.props.caption}</legend>
                    <textarea value={this.props.value} />
                    <p>Characters: {this.props.value.length}</p>
                </fieldset>
            </form>
        );
    }

}


TextInput.propTypes = {
    caption: PropTypes.string,      // Text entry box caption
    value: PropTypes.string,        // Text contained in text box
};


export default TextInput;