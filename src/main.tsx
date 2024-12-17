import 'nprogress/nprogress.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import '~/assets/styles/fonts.css';
import App from './App';

const element = document.getElementById('root');
const root = createRoot(element as HTMLElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
