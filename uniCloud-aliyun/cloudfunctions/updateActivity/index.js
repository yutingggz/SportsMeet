'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
  const { _id, name, score } = event;


  const res = await db.collection('activities').doc(_id).update({
    name,
	score
	
  });

  if (res.updated == 1) {
    return { success: true, message: 'Successfully updated activity' };
  } else {
    return { success: false, message: 'Failed to update activity' };
  }
};