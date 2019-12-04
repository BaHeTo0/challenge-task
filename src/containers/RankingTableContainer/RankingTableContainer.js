import React, { Component } from 'react'
import TableHeader from '../../components/TableHeader/TableHeader'
import { MDBDataTable } from 'mdbreact';
import './RankingTableContainer.css'

class RankingTableContainer extends Component {
    state = {
        displayTable: true,
        data: {}
    }

    handleHeaderClick = () => {
        this.setState({displayTable: !this.state.displayTable});
    }

    render() {

        const data = {
            columns: [
              {
                label: 'Rank',
                field: 'rank',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 270
              },
              {
                label: 'Club',
                field: 'club',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Level',
                field: 'level',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Experience',
                field: 'experience',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Messages',
                field: 'messages',
                sort: 'asc',
                width: 100
              }
            ],
            rows: this.props.content
        }

        let content = null;
        if (this.state.displayTable) {
            content = 
            <MDBDataTable
            entries='5'
            entriesOptions={[]}
            searching={false}
            sortable={false}
            small
            data={data}
            />
        }

        return(
            <div>
                <TableHeader click={() => this.handleHeaderClick()} displayTable={this.state.displayTable}/>
                {content}
            </div>
        );
    }
}

export default RankingTableContainer;