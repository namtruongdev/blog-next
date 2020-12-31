import admin from 'firebase-admin';
import config from '../laptrinhbanthan-firebase-adminsdk-61t0r-7209814517.json'

if (!admin.apps.length)
  admin.initializeApp(config),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });

export default admin.database();
