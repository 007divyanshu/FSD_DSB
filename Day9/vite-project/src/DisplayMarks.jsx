
import Marks from "./Marks";

const DisplayMarks = () => {
    const students = [
        { name: 'Divyanshu', roll: 4566, m1: 90, m2: 98, m3: 99 },
        { name: 'Parvani', roll: 4567, m1: 90, m2: 98, m3: 99 },
        { name: 'Riddhi', roll: 4568, m1: 90, m2: 98, m3: 99 },
        { name: 'Tannu', roll: 4569, m1: 90, m2: 98, m3: 99 },
        { name: 'Saurabh', roll: 4570, m1: 90, m2: 98, m3: 99 },
    ];

    return (
        <div>
            {students.map((student, index) => (
                <Marks
                    key={index}
                    name={student.name}
                    roll={student.roll}
                    m1={student.m1}
                    m2={student.m2}
                    m3={student.m3}
                />
            ))}
        </div>
    );
};

export default DisplayMarks;
