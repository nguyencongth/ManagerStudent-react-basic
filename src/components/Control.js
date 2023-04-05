import { React, Component } from "react"
class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: ''
    }
  }
  handleSearchDataChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    })
  }
  handleSearch = (e) => {
    this.props.handleSearch(this.state.searchData);
    e.preventDefault()
  }
  // sort
  handleSort = (event) => {
    let value = event.target.value;
    let arr = value.split('-');
    this.props.sort(arr[0], arr[1]); // studentName, ASC; ....
    event.preventDefault();
  }
  // click vào thêm mới sinh viên
  handleAddStudent = () => {
    this.props.handleAdd(true, "AddNew");
  }
  render() {
    return (
      <div>
        <div className="card-header">
          <div className="row">
            <div className="col-3 ">
              <button type="button" className="btn btn-primary btn-icon-text" onClick={this.handleAddStudent}>
                Thêm mới sinh viên
              </button>
            </div>
            <div className="col-6 ">
              <form className="search-form" action="#">
                <i className="icon-search" />
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Here"
                  title="Search here"
                  name="searchData"
                  value={this.state.searchData}
                  onChange={this.handleSearchDataChange}
                />
                <button className="btn btn-primary btn-icon-text" onClick={this.handleSearch}>
                  Tìm kiếm
                </button>
              </form>
            </div>
            <div className="col-3 d-flex align-items-center">
              <select className="form-control" onChange={this.handleSort}>
                <option value="">Sắp xếp</option>
                <option value="studentName-ASC">Student Name ASC</option>
                <option value="studentName-DESC">Student Name DESC</option>
                <option value="age-ASC">Age ASC</option>
                <option value="age-DESC">Age DESC</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Control;