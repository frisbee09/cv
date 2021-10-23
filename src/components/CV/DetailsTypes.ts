export interface CVItem {
	name: string;
	start: string | number;
	end: string | number;
	at: string;
	contentFile?: string;
}

export interface SideProject {
	name: string;
	repo: string;
	url: string;
	contentFile?: string;
}
