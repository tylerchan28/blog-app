import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

const EntryFilters = (props) => {
    const onTextChange = (e) => {
        props.setTextFilter(e.target.value);
    } 
    
    return (
        <div className="content-container">
            <input 
                type="text"
                className="text-input"
                placeholder="Search by title"
                value={props.filters.text}
                onChange={onTextChange}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(EntryFilters);