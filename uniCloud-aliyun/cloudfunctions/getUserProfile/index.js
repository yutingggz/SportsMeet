'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
  const { userId } = event;

  // 获取用户信息
  const userRes = await db.collection('users').doc(userId).get();
  if (userRes.data.length === 0) {
    return { success: false, message: '用户不存在' };
  }
  const user = userRes.data[0];

  // 获取用户的活动记录
  const activityRecordsRes = await db.collection('activity_records').where({ userId }).get();
  const activityRecords = activityRecordsRes.data;

  // 获取活动信息
  const activityIds = activityRecords.map(record => record.activityId);
  const activitiesRes = await db.collection('activities').where({ _id: db.command.in(activityIds) }).get();
  const activities = activitiesRes.data;

  // 将活动信息添加到活动记录中
  const detailedRecords = activityRecords.map(record => {
    const activity = activities.find(activity => activity._id === record.activityId);
    return {
      ...record,
      activityName: activity ? activity.name : '未知活动',
      activityScore: activity ? activity.score : 0
    };
  });

  return {
    success: true,
    user,
    activityRecords: detailedRecords
  };
};