import React from "react";
import PropTypes from "prop-types";


class TextOutput extends React.Component {


    render() {
        return(
            <fieldset>
                <legend>{this.props.caption}</legend>
                <p>{this.props.value}</p>
            </fieldset>
        );
    }

}


TextOutput.propTypes = {
    caption: PropTypes.string,      // Text box caption
    value: PropTypes.string,        // Text contained in text box
};


export default TextOutput;