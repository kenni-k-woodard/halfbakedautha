// Enter Supabase Information
const SUPABASE_URL = 'https://redfcyboqrqwpbcseyiu.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlZGZjeWJvcXJxd3BiY3NleWl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwNjAsImV4cCI6MTk4MzY4NDA2MH0.OoXlk2kwsTh4QiT7WNyjocL1GPxxVvERWoKwz167v0o';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {
    const user = await getUser();

    if (user) {
        location.replace('./other-page');
    }
}

export async function logout() {}
