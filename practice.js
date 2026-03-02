let warriors = [
  { id: "W001", name: "Musashi", class: "Samurai", attack: 85, defense: 60 },
  { id: "W002", name: "Ragnar", class: "Viking", attack: 92, defense: 70 },
  { id: "W003", name: "Spartacus", class: "Gladiator", attack: 80, defense: 65 },
  { id: "W004", name: "Lancelot", class: "Viking", attack: 75, defense: 85 },
  { id: "W005", name: "Leonidas", class: "Spartan", attack: 88, defense: 72 }
];

let out, choice;

const showList = () => {
    let newList = warriors.map(warrior => `ID: ${warrior.id} | Tên: ${warrior.name} | Lớp: ${warrior.class} | Tấn công ${warrior.attack} | Phòng thủ: ${warrior.defense}`);
    let newStr = newList.join("\n");
    console.log(newStr);
};

const addNewWarrior = () => {
    let newId, newName, newClass, newAtk, newDef;
    let check;
    do {
        check = 0;
        newId = prompt(`Nhập id cho chiến binh`).trim();
        if (!newId) {
            alert(`Không được để trống`);
            check = 1;
        };
        let findId = warriors.find(item => item.id.toLowerCase() === newId.toLowerCase());
        if (findId) {
            alert(`Id này đã được chiến binh khác sử dụng`);
            check = 1;
        };
    } while (check === 1);
    do {
        check = 0;
        newName = prompt(`Nhập tên chiến binh`).trim();
        if (!newName) {
            alert(`Không được để trống`);
            check = 1;
        };
        let findName = warriors.find(item => item.name.toLowerCase() === newName.toLowerCase());
        if (findName) {
            check = 1;
        };
    } while (check === 1);
    do {
        check = 0;
        newClass = prompt(`Nhập lớp chiến binh (Samurai, Viking, Gladiator, Knight, Spartan)`).trim();
        if (!newClass) {
            alert(`Không được để trống`);
            check = 1;
        } else if (!(newClass.toLowerCase() === "samurai" || newClass.toLowerCase() === "viking" || newClass.toLowerCase() === "gladiator" || newClass.toLowerCase() === "knight" || newClass.toLowerCase() === "spartan")) {
            alert(`Phải nhập đúng lớp chiến binh`);
            check = 1;
        };
    } while (check === 1);
    do {
        check = 0;
        newAtk = +prompt(`Nhập sức tấn công của chiến binh (1-100)`).trim();
        if (!newAtk || !Number.isInteger(newAtk) || newAtk > 100 || newAtk < 1) {
            alert(`Phải nhập đúng định dạng`);
            check = 1;
        };
    } while (check === 1);
    do {
        check = 0;
        newDef = +prompt(`Nhập sức phòng thủ của chiến binh`).trim();
        if (!newDef || !Number.isInteger(newDef) || newDef < 0) {
            alert(`Phải nhập số nguyên lớn hơn hoặc bằng 0`);
            check = 1;
        };
    } while (check === 1);
    warriors.push({id: newId, name: newName, class: newClass, attack: newAtk, defense: newDef});
};

const deleteWarrior = () => {
    let delName, findIndex;
    do {
        delName = prompt(`Nhập tên chiến binh cần xóa`).trim();
        if (!delName) {
            alert(`Không được để trống`);
        };
    } while (!delName);
    let findName = warriors.find((warrior, index) => {
        findIndex = index;
        return warrior.name.toLowerCase().includes(delName.toLowerCase())
    });
    if (!findName) {
        console.log(`chiến binh ${delName} không có trong guild`);
        return;
    };
    let confirm = prompt(`Chắc chắn xóa chiến binh ${delName}? (yes/no)`).toLowerCase().trim();
    if (confirm === "yes") {
        warriors.splice(findIndex, 1);
        console.log(`Đã xóa chiến binh ${delName} thành công`);
    } else {
        console.log("Đã hủy thao tác xóa");
    };
};

const uppdateWarrior = () => {
    let updateName, findIndex, newAtk, newDef, check;
    do {
        updateName = prompt(`Nhập tên chiến binh cần xóa`).trim();
        if (!updateName) {
            alert(`Không được để trống`);
        };
    } while (!updateName);
    let findName = warriors.find((warrior, index) => {
        findIndex = index;
        return warrior.name.toLowerCase().includes(updateName.toLowerCase())
    });
    if (!findName) {
        console.log(`chiến binh ${updateName} không có trong guild`);
        return;
    };
    do {
        check = 0;
        newAtk = +prompt(`Nhập sức tấn công của chiến binh (1-100)`).trim();
        if (!newAtk || !Number.isInteger(newAtk) || newAtk > 100 || newAtk < 1) {
            alert(`Phải nhập đúng định dạng`);
            check = 1;
        };
    } while (check === 1);
    do {
        check = 0;
        newDef = +prompt(`Nhập sức phòng thủ của chiến binh`).trim();
        if (!newDef || !Number.isInteger(newDef) || newDef < 0) {
            alert(`Phải nhập đúng định dạng`);
            check = 1;
        };
    } while (check === 1);
    warriors[findIndex].attack = newAtk;
    warriors[findIndex].defense = newDef;
    console.log(`Đã cập nhật chién binh: ${updateName}`);
};

const searchWarrior = () => {
    let searchType = +prompt(`Tìm kiếm theo tên (1) hay lớp (2)?`);
    if (searchType === 1) {
        let searchName, findIndex;
        do {
            searchName = prompt(`Nhập tên chiến binh cần tìm`).trim();
            if (!searchName) {
                alert(`Không được để trống`);
            };
        } while (!searchName);
        let findName = warriors.find((warrior, index) => {
            findIndex = index;
            return warrior.name.toLowerCase().includes(searchName.toLowerCase())
        });
        if (!searchName) {
            console.log(`Không tìm thấy chiến binh nào tên ${searchName}`);
            return;
        };
        console.log(`Chiến binh: ${warriors[findIndex].name}, Lớp: ${warriors[findIndex].class}, Tấn công: ${warriors[findIndex].attack}, Phòng thủ: ${warriors[findIndex].defense}`);
    } else if (searchType === 2) {
        let check, searchClass;
        do {
            check = 0;
            searchClass = prompt(`Nhập lớp chiến binh (Samurai, Viking, Gladiator, Knight, Spartan)`).trim();
            if (!searchClass) {
                alert(`Không được để trống`);
                check = 1;
            } else if (!(searchClass.toLowerCase() === "samurai" || searchClass.toLowerCase() === "viking" || searchClass.toLowerCase() === "gladiator" || searchClass.toLowerCase() === "knight" || searchClass.toLowerCase() === "spartan")) {
                alert(`Phải nhập đúng lớp chiến binh`);
                check = 1;
            };
        } while (check === 1);
        let arrayWarriorByClass = warriors.filter(item => item.class.toLowerCase() === searchClass.toLocaleLowerCase());
        if (!arrayWarriorByClass) {
            alert(`Không có chiến binh nào thuộc lớp ${searchClass}`);
            return;
        }
        console.log(`Các chiến binh thuộc lớp ${searchClass}`);
        arrayWarriorByClass.forEach(item => {
            console.log(`Tên: ${item.name}, Tấn công: ${item.attack}, Phòng thủ: ${item.defense}`);
        });
    } else {
        alert(`Phải nhập đúng định dạng cho sẵn`);
    };
};

const totalPowerGuild = () => {
    let totalAtk = warriors.reduce((acc, cur) => (acc += cur.attack), 0);
    let totalDef = warriors.reduce((acc, cur) => (acc += cur.defense), 0);
    console.log(`Tổng sức mạnh guild hiện tại: Tổng tấn công: ${totalAtk} | Tổng phòng thủ: ${totalDef}`);
};

const sortGuild = () => {
    let arraySortedInAscendingOrder = warriors.toSorted((el1, el2) => {
        return el1.attack - el2.attack;
    });
    let arraySortedInDescendingOrder = warriors.toSorted((el1, el2) => {
        return el2.attack - el1.attack;
    });
    console.log(`Mảng sắp xếp guild theo tấn công tăng dần`);
    arraySortedInAscendingOrder.forEach(warrior => {
        console.log(`ID: ${warrior.id} | Tên: ${warrior.name} | Lớp: ${warrior.class} | Tấn công ${warrior.attack} | Phòng thủ: ${warrior.defense}`);
    });
    console.log(`Mảng sắp xếp guild theo tấn công giảm dần`);
    arraySortedInDescendingOrder.forEach(warrior => {
        console.log(`ID: ${warrior.id} | Tên: ${warrior.name} | Lớp: ${warrior.class} | Tấn công ${warrior.attack} | Phòng thủ: ${warrior.defense}`);
    });
};

const classCoverageCheck = () => {
    let samuraiArray = warriors.filter(item => item.class.toLowerCase() === "samurai");
    let vikingArray = warriors.filter(item => item.class.toLowerCase() === "viking");
    let gladiatorArray = warriors.filter(item => item.class.toLowerCase() === "gladiator");
    let knightArray = warriors.filter(item => item.class.toLowerCase() === "knight");
    let spartanArray = warriors.filter(item => item.class.toLowerCase() === "spartan");
    let classNameArray = ["Samurai", "Viking", "Gladiator", "Knight", "Spartan"];
    let classNumArray = [samuraiArray.length, vikingArray.length, gladiatorArray.length, knightArray.length, spartanArray.length];
    console.log(`"Samurai: ${classNumArray[0]}""Viking: ${classNumArray[1]}""Gladiator: ${classNumArray[2]}""Knight: ${classNumArray[3]}""Spartan: ${classNumArray[4]}"`);
    let maxClassIndex = classNumArray.reduce((acc, cur, index) => {
        return cur > classNumArray[acc] ? index : acc;
    }, 0);
    if (classNameArray[maxClassIndex] > warriors.length/2) {
        console.log(`Cảnh báo: Guild thiên về class ${classNameArray[maxClassIndex]} quá nhiều (${classNumArray[maxClassIndex]} chiến binh), dễ bị khắc chế bởi các class đối lập!`);
    } else if (classNumArray.filter(item => item === 0).length >= 3) {
        console.log(`Guild thiếu đa dạng class! Nên tuyển thêm các class khác để cân bằng đội hình.`);
    } else if (classNumArray.filter(item => item === 0).length <= 1){
        console.log(`Guild khá cân bằng về class! Coverage tốt, sẵn sàng cho trận chiến lớn.`);
    };
};

const simulate1v1Battle = () => {
    let firstWarriorName, secondWarriorName, firstWarriorIndex, secondWarriorIndex, findName;
    do {
        firstWarriorName = prompt(`Nhập tên chiến binh thứ nhất`).trim();
        if (!firstWarriorName) {
            alert(`Không được để trống`);
            continue;
        };
        findName = warriors.find((warrior, index) => {
            firstWarriorIndex = index;
            return warrior.name.toLowerCase() === firstWarriorName.toLowerCase();
        });
        if (!findName) {
            alert(`Không tìm thấy chiến binh nào tên ${firstWarriorName}`);
        };
    } while (!firstWarriorName || !findName);
    do {
        secondWarriorName = prompt(`Nhập tên chiến binh thứ hai`).trim();
        if (!secondWarriorName) {
            alert(`Không được để trống`);
            continue;
        };
        findName = warriors.find((warrior, index) => {
            secondWarriorIndex = index;
            return warrior.name.toLowerCase() === secondWarriorName.toLowerCase();
        });
        if (!findName) {
            alert(`Không tìm thấy chiến binh nào tên ${secondWarriorName}`);
            continue;
        };
        if (secondWarriorName.toLowerCase() === firstWarriorName.toLowerCase()) {
            alert(`Tên trùng với chiến binh đầu tiên`)
        };
    } while (!secondWarriorName || !findName || secondWarriorName.toLowerCase() === firstWarriorName.toLowerCase());
    let firstWarriorDamage = warriors[firstWarriorIndex].attack - warriors[secondWarriorIndex].defense;
    let secondWarriorDamage = warriors[secondWarriorIndex].attack - warriors[firstWarriorIndex].defense;
    let firstWarriorResult = secondWarriorDamage - warriors[firstWarriorIndex].defense;
    let secondWarriorResult = firstWarriorDamage - warriors[secondWarriorIndex].defense;
    let winnerName = firstWarriorResult > secondWarriorResult ? firstWarriorName : secondWarriorName;
    console.log(`
Trận đấu: ${firstWarriorName} (${warriors[firstWarriorIndex].class}) vs ${secondWarriorName} (${warriors[secondWarriorIndex].class})
---------------------------------------------------
${firstWarriorName} tấn công => gây ${firstWarriorDamage} sát thương cho ${secondWarriorName} (phòng thủ còn ${secondWarriorResult})
${secondWarriorName} tấn công => gây ${secondWarriorDamage} sát thương cho ${firstWarriorName} (phòng thủ còn ${firstWarriorResult})
Kết quả: ${winnerName} thắng! (phòng thủ còn lại: ${firstWarriorResult} và ${secondWarriorResult})
    `);
};

do {
    choice = +prompt(`
=========================================
        ANCIENT WARRIORS GUILD - QUẢN LÝ GUILD
=========================================

1. Hiển thị danh sách chiến binh hiện tại
2. Thêm chiến binh mới
3. Xóa chiến binh
4. Cập nhật thông tin chiến binh
5. Tìm kiếm chiến binh (theo tên hoặc class)
6. Tính tổng sức mạnh guild (attack + defense)
7. Sắp xếp danh sách theo attack
8. Kiểm tra độ cân bằng guild theo class
9. Mô phỏng trận chiến 1v1
0. Thoát chương trình

=========================================
    `);
        switch (choice) {
            case 1:
                showList();
                break;
            case 2:
                addNewWarrior();
                break;
            case 3:
                deleteWarrior();
                break;
            case 4:
                uppdateWarrior();
                break;
            case 5:
                searchWarrior();
                break;
            case 6:
                totalPowerGuild();
                break;
            case 7:
                sortGuild();
                break;
            case 8:
                classCoverageCheck();
                break;
            case 9:
                simulate1v1Battle();
                break;
            case 0:
                alert("Thoát chương trình");
                out = 1;
                break;
            default:
                alert("Vui lòng nhập đúng lựa chọn");
                break;
        };
} while (out !== 1);
