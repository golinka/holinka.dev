export type Experience = {
	position: string;
	company: string;
	sphere: string;
	logoUrl: string;
	jobType: 'part-time' | 'full-time' | 'internship';
	dateStart: string;
	dateEnd?: string;
	duration: string;
	location: string;
	url: string;
};
