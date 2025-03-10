let mảng = [];
let lựaChọn;

do {
    console.log(`
==================== MENU ====================
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7. Thêm một phần tử vào vị trí chỉ định
8. Thoát
============================================`);
    lựaChọn = +prompt("Nhập lựa chọn:");

    switch (lựaChọn) {
        case 1:
            let sốLượng = +prompt("Nhập số lượng phần tử:");
            for (let i = 0; i < sốLượng; i++) {
                let giáTrị = +prompt(`Nhập phần tử thứ ${i + 1}:`);
                mảng.push(giáTrị);
            }
            console.log("Mảng đã nhập:", mảng);
            break;

        case 2:
            console.log("Các phần tử trong mảng:", mảng);
            break;

        case 3:
            let sốChẵn = [];
            let tổngSốChẵn = 0;
            for (let i = 0; i < mảng.length; i++) {
                if (mảng[i] % 2 === 0) {
                    sốChẵn.push(mảng[i]);
                    tổngSốChẵn += mảng[i];
                }
            }
            console.log("Các số chẵn:", sốChẵn);
            console.log("Tổng các số chẵn:", tổngSốChẵn);
            break;

        case 4:
            if (mảng.length === 0) {
                console.log("Mảng rỗng");
            } else {
                let lớnNhất = mảng[0];
                let nhỏNhất = mảng[0];
                for (let i = 1; i < mảng.length; i++) {
                    if (mảng[i] > lớnNhất) lớnNhất = mảng[i];
                    if (mảng[i] < nhỏNhất) nhỏNhất = mảng[i];
                }
                console.log("Giá trị lớn nhất:", lớnNhất);
                console.log("Giá trị nhỏ nhất:", nhỏNhất);
            }
            break;

        case 5:
            let sốNguyênTố = [];
            let tổngNguyênTố = 0;
            for (let i = 0; i < mảng.length; i++) {
                let làNguyênTố = true;
                if (mảng[i] <= 1) {
                    làNguyênTố = false;
                }
                for (let j = 2; j <= Math.sqrt(mảng[i]); j++) {
                    if (mảng[i] % j === 0) {
                        làNguyênTố = false;
                        break;
                    }
                }
                if (làNguyênTố) {
                    sốNguyênTố.push(mảng[i]);
                    tổngNguyênTố += mảng[i];
                }
            }
            console.log("Các số nguyên tố:", sốNguyênTố);
            console.log("Tổng các số nguyên tố:", tổngNguyênTố);
            break;

        case 6:
            let giáTrịCầnĐếm = +prompt("Nhập giá trị cần kiểm tra:");
            let đếm = 0;
            for (let i = 0; i < mảng.length; i++) {
                if (mảng[i] === giáTrịCầnĐếm) {
                    đếm++;
                }
            }
            console.log(`Số lần xuất hiện của ${giáTrịCầnĐếm}:`, đếm);
            break;

        case 7:
            let vịTrí = +prompt("Nhập vị trí muốn thêm:");
            let giáTrị = +prompt("Nhập giá trị muốn thêm:");
            if (vịTrí >= 0 && vịTrí <= mảng.length) {
                mảng.splice(vịTrí, 0, giáTrị);
                console.log("Mảng sau khi thêm:", mảng);
            } else {
                console.log("Vị trí không hợp lệ");
            }
            break;

        case 8:
            console.log("Thoát chương trình");
            break;

        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (lựaChọn !== 8);
