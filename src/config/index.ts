export default {
	siteName: 'Supabase',
	lang: 'en',
	dev: import.meta.env.DEV,
	baseURL: import.meta.env.BASE_URL,
	apiURL: import.meta.env.VITE_BACKEND_API_URL,
	supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
	supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
	itemsPerPage: 10,
	itemsPerPageMax: 9999,
	dateFormat: 'YYYY-MM-DD',
	themeColorCode: '#20519E',
};
