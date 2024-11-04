var { expressjwt: jwt } = require("express-jwt");

function authJwt() {
    const secret = process.env.JSON_WEB_TOKEN_SECRET_KEY;
    return jwt({
        secret: secret,
        algorithms: ["HS256"],
    }).unless({
        path: [
            '/signin', // ตัวอย่างเส้นทางสำหรับเข้าสู่ระบบ
            '/signup',  // ตัวอย่างเส้นทางสำหรับลงทะเบียน
            '/',    // เส้นทางสำหรับหน้า Home ที่ไม่ต้องการการพิสูจน์ตัวตน
        ]
    });
}



module.exports = authJwt