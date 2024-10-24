import { Pool } from 'pg';
import bcrypt from 'bcrypt';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // 環境変数からデータベースのURLを取得
});

// ユーザーの認証を行う関数
export const authenticateUser = async (username: string, password: string) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        const user = result.rows[0];

        if (user && await bcrypt.compare(password, user.password)) {
            return { success: true, user }; // 認証成功
        } else {
            return { success: false, message: 'ユーザ名またはパスワードが間違っています' }; // 認証失敗
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        throw new Error('サーバーエラー');
    }
};
