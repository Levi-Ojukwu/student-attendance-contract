// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

contract StudentAttendance {

    struct Student {
        string name;
        uint256 age;
        bool present;
    }

    Student[] public students;

    event StudentAdded(uint256 studentId, string name, uint256 age);
    event AttendanceUpdated(uint256 studentId, bool present);

    function addStudent(string memory _name, uint256 _age) external {

        students.push(Student({
            name: _name,
            age: _age,
            present: false
        }));

        uint256 studentId = students.length - 1;

        emit StudentAdded(studentId, _name, _age);
    }


    function updateAttendance(uint256 _studentId, bool _present) external {

        require(_studentId < students.length, "Student does not exist");
        
        students[_studentId].present = _present;

        emit AttendanceUpdated(_studentId, _present);
    }

    function getTotalStudents() external view returns (uint256) {
        return students.length;
    }
}
