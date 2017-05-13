import React from 'react';
import { Pagination } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Entry from './Entry.jsx';

const tableStyle = {
  textAlign: 'left',
  verticalAlign: 'middle',
}


class EntryList extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      currPage: 1,
      sortByRating: false,
      fixedHeader: true,
      stripedRows: false,
      showRowHover: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(number) {
    this.setState({
      currPage: number,
    });
  }
  render () {
    let allEntryData = this.props.allEntries.slice();

    // handle sorting:
    if (this.props.sortByAlbum) {
      allEntryData.sort((a, b) => {
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    } else if (this.props.sortByArtist) {
      allEntryData.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (this.props.sortByRatingLowest) {
      allEntryData.sort((a, b) => {
        return a.rating - b.rating;
      });
    } else if (this.props.sortByRatingHighest) {
      allEntryData = allEntryData.sort((a,b) => {
        return b.rating - a.rating;
      });
    }

    // handle pagination, determine which entries to show
    let showNumEntries;
    let numItems = 10;
    let totalPages = Math.ceil(this.props.allEntries.length / 10);
    if (this.state.currPage === 1) {
      showNumEntries = allEntryData.slice(0, numItems);
    } else {
      let end = numItems * this.state.currPage;
      let start = end - numItems;
      showNumEntries = allEntryData.slice(start, end);
    }
    return (
      <div className='container-list'>
        <Table
          height='auto'
          width='75%'
          fixedHeader
          >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn colSpan="1" >
                <h3 className='glyphicon glyphicon-calendar'> </h3>
              </TableHeaderColumn>
              <TableHeaderColumn colSpan="2" ><h3>Album</h3></TableHeaderColumn>
              <TableHeaderColumn colSpan="2" ></TableHeaderColumn>
              <TableHeaderColumn colSpan="4" ><h3>Impression</h3></TableHeaderColumn>
              <TableHeaderColumn colSpan="3" ><h3>Rating</h3></TableHeaderColumn>
              <TableHeaderColumn colSpan="3" ></TableHeaderColumn>
            </TableRow>
          </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              showRowHover={true}
              stripedRows
              >
                {showNumEntries.map( (entry, index) => (
                  <Entry
                    index={index}
                    date={entry.date.slice(0,10)}
                    title={entry.title}
                    artist={entry.name}
                    genre={entry.genre}
                    year={entry.year}
                    rating={entry.rating}
                    impression={entry.impression}
                    art_url60={entry.art_url60}
                    art_url100={entry.art_url100}
                    impressionId={entry.id}
                    updateUserEntries={this.props.updateUserEntries}
                    getUserEntries={this.props.getUserEntries}
                    deleteUserEntries={this.props.deleteUserEntries}
                    key={entry.date + entry.id}
                    album={entry}
                    playSong={this.props.playSong}
                    song={this.props.song}
                  />
                ))}
              </TableBody>
            </Table>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          bsSize="medium"
          items={totalPages}
          maxButtons={5}
          activePage={this.state.currPage}
          onSelect={this.handleSelect}
          style={{backgroundColor: '#90A4AE'}}
        />
      </div>
    );
  }
};

export default EntryList;
