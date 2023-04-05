import { React, Component } from 'react';
import Student from './Student';

class ListStudent extends Component {

  // Xem thông tin
  handleView = (toggle, actionName, student) => {
    console.log(student);
    this.props.handleView(toggle, actionName, student)
  }
  handleEdit = (toggle,actionName,student) => {
    this.props.handleEdit(toggle, actionName,student)
  }
  handleDelete = (student) => {
    this.props.handleDelete(student)
  }
    render() {
        // let students = this.props.students;
        let {students} = this.props;
        let elementStudent = students.map((student,index)=> {
            return(
                <Student key ={index} student = {student} stt={index+1}  
                handleView={this.handleView} 
                handleEdit = {this.handleEdit}
                handleDelete = {this.handleDelete}/>
            )
        })
        return (
            <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {elementStudent}
                </tbody>
              </table>
            </div>
          </div>
            );
    }
}
export default ListStudent;