'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
  const { name, description, score } = event;


  const res = await db.collection('activities').add({
    name,
	description,
	score
	
  });

  if (res.id) {
    return { success: true, message: '注册成功' };
  } else {
    return { success: false, message: '注册失败' };
  }
};