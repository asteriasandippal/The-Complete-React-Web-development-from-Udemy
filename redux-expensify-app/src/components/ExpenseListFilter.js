import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

import { DateRangePicker } from 'react-dates';

class ExpenseListFilter extends React.Component {
    state = {
        focusedInput: null
    }

    onDateChange = ({ startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = ( focusedInput ) => {
        this.setState(() => ({ focusedInput }));
    }

    render() {
        const {props} = this;
        return (
            <div>
                <input 
                    type="text" 
                    value={props.filters.text}
                    onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select 
                    value={props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            props.dispatch(sortByDate());
                        } else if(e.target.value === 'amount') {
                            props.dispatch(sortByAmount());
                        }
                    }}
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

export default connect(mapStateToProps)(ExpenseListFilter);
