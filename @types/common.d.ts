interface SectionLayoutHeader {
	isBack?: boolean;
	isCancel?: boolean;
	isLoading?: boolean;
	noMargin?: boolean;
	isBorderless?: boolean;
	title: string;
	backPath?: string;
	badgeText?: string;
	items: {
		to: string;
		title: translationKeys;
	}[];
}

interface LayoutProps extends SectionLayoutHeader {
	redirectTo: string;
	routes: {
		path: string;
		Component: React.FC;
	}[];
	permissions?: string | string[];
}
