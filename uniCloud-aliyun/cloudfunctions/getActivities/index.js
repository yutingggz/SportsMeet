'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	try {
		const activities = await db.collection('activities').get();
		return {
			success: true,
			data: activities.data
		};
		
	} catch (error) {
		return {
			success: false,
			message: '获取活动失败',
			error: error.message
		};
	}

};
