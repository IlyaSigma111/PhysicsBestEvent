// ============================================
// firebase-config.js
// ============================================

const firebaseConfig = {
    apiKey: "AIzaSyC_86gSXMHhRXk3q63usfJK3fQrFhQU7Ig",
    authDomain: "physicsproject-b5660.firebaseapp.com",
    databaseURL: "https://physicsproject-b5660-default-rtdb.firebaseio.com",
    projectId: "physicsproject-b5660",
    storageBucket: "physicsproject-b5660.firebasestorage.app",
    messagingSenderId: "244631414073",
    appId: "1:244631414073:web:69b4bdc74e233051f474e8"
};

// Инициализация
try {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log('✅ Firebase готов');
    }
    window.db = firebase.database();
} catch (e) {
    console.error('❌ Firebase error:', e);
}
