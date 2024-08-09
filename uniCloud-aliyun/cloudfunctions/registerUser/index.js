'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
  const { username, password, nickname } = event;

  // 检查用户名是否已经存在
  const userCheck = await db.collection('users').where({ username }).get();
  if (userCheck.data.length > 0) {
    return { success: false, message: '用户名已存在' };
  }

  // 创建新用户
  const res = await db.collection('users').add({
    username,
    password, // 注意：实际项目中应对密码进行加密处理
    nickname,
	totalScore: 0,
	role : 'user'
  });

  if (res.id) {
    return { success: true, message: '注册成功' };
  } else {
    return { success: false, message: '注册失败' };
  }
};