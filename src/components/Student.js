import { React, Component } from 'react';

class Student extends Component {
    // Xem
    handleView = () => {
        this.props.handleView(true, "View", this.props.student)
    }
    // sửa
    handleEdit = () => {
        this.props.handleEdit(true, "Update", this.props.student)
    }
    //xóa
    handleDelete = () => {
        this.props.handleDelete(this.props.student)
    }
    render() {
        let { student, stt } = this.props;
        return (
            <tr>
                <td>{stt}</td>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.age}</td>
                <td>

                    {
                        (student.sex === true || student.sex === "true") ? "Nam" : "Nữ"
                    }
                </td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                            onClick={this.handleView}
                        >
                            Xem
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning btn-icon-text"
                            onClick={this.handleEdit}
                        >
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                            onClick={this.handleDelete}
                        >
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}
export default Student;