import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

import { DateRangePicker } from 'react-dates';

export class ExpenseListFilter extends React.Component {
    state = {
        focusedInput: null
    }

    onDateChange = ({ startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = ( focusedInput ) => {
        this.setState(() => ({ focusedInput }));
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if(e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    }

    render() {
        const {props} = this;
        return (
            <div>
                <input 
                    type="text" 
                    value={props.filters.text}
                    onChange={this.onTextChange}
                />
                <select 
                    value={props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={props.filters.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={props.filters.endDate}
                    endDateId="your_unique_end_date_id"
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={this.onFocusChange}
                    showClearDates={false}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);
