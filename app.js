function saveToLocalStorage() {
    localStorage.setItem('studentData', JSON.stringify(student));
}

var show = document.getElementById('show')


var student = [
    // {
    //     'name': 'Umer',
    //     'fatherName': 'IrfanButt',
    //     'email': 'abc@example.com',
    //     'phone': '012334445',
    // },
    // {
    //     'name': 'Yaseen',
    //     'fatherName': 'Muzzamil',
    //     'email': 'xyz@example.com',
    //     'phone': '032852875',
    // },
    // {
    //     'name': 'rafay',
    //     'fatherName': 'Hamu',
    //     'email': 'pak@example.com',
    //     'phone': '012334445',
    // },
    // {
    //     'name': 'ateeq',
    //     'fatherName': 'samaad',
    //     'email': 'paks@example.com',
    //     'phone': '012334465',
    // },
    // {
    //     'name': 'kahliq',
    //     'fatherName': 'hassan',
    //     'email': 'paks@example.com',
    //     'phone': '012334465',
    // },

]


if (localStorage.getItem('studentData')) {
    student = JSON.parse(localStorage.getItem('studentData'));
}
else {
    localStorage.setItem('studentData', JSON.stringify(student));
}

displayStudents();


function displayStudents() {
    show.innerHTML = '';
    for (var i = 0; i < student.length; i++) {
        show.innerHTML += `
            <tr style="width: 20vw;height:30px;background-color:#F5EEDD">
                <td>${student[i].name}</td>
                <td>${student[i].fatherName}</td>
                <td>${student[i].email}</td>
                <td>${student[i].phone}</td>
                <td>
                <button onclick="edit(${i})" style="width: 49%;height:30px;background-color: #71C0BB;border:none;">Edit</button>
                <button onclick="remove(${i})" style="width: 49%;height:30px;background-color: #DC2525;border:none;">remove</button>
                </td>
            </tr>
        `;
    }
    saveToLocalStorage();
}


function remove(index){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        student.splice(index, 1); // remove student
        displayStudents();        // update table
        saveToLocalStorage();     // update localStorage

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Student has been deleted.",
        //   icon: "success"
        // });
      }
    });
}

// function remove(index) {
//     student.splice(index, 1);
//     displayStudents();
// }


var currentEditIndex = -1;

function edit(index) {
    currentEditIndex = index;
    document.getElementById('editName').value = student[index].name;
    document.getElementById('editFatherName').value = student[index].fatherName;
    document.getElementById('editEmail').value = student[index].email;
    document.getElementById('editPhone').value = student[index].phone;
    document.getElementById('editPopup').style.display = 'block';
}


function saveEdit() {
    student[currentEditIndex].name = document.getElementById('editName').value;
    student[currentEditIndex].fatherName = document.getElementById('editFatherName').value;
    student[currentEditIndex].email = document.getElementById('editEmail').value;
    student[currentEditIndex].phone = document.getElementById('editPhone').value;

    displayStudents();
    closePopup();
}

function closePopup() {
    document.getElementById('editPopup').style.display = 'none';
}


function add() {
    document.getElementById('addName').value = '';
    document.getElementById('addFatherName').value = '';
    document.getElementById('addEmail').value = '';
    document.getElementById('addPhone').value = '';
    document.getElementById('newform').style.display = 'block';
}


function saveAdd() {

    var name = document.getElementById('addName').value;
    var fatherName = document.getElementById('addFatherName').value;
    var email = document.getElementById('addEmail').value;
    var phone = document.getElementById('addPhone').value;

    if (!name || !fatherName || !email || !phone) {
        alert('Please fill in all fields');
        return;
    }

    var newStudent = {
        'name': name,
        'fatherName': fatherName,
        'email': email,
        'phone': phone,
    };

    student.push(newStudent);
    displayStudents();
    closeForm();
}

function closeForm() {
    document.getElementById('newform').style.display = 'none';
}


 