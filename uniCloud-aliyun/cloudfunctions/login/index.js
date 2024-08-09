'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
  const { username, password } = event;

  // 检查用户名和密码
  const userCheck = await db.collection('users').where({ username, password }).get();
  if (userCheck.data.length > 0) {
    return { success: true, message: '登录成功', userData: userCheck.data[0] };
  } else {
    return { success: false, message: '用户名或密码错误' };
  }
};
