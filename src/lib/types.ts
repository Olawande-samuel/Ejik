export interface Category {
	slug: { current: string; _type: string };
	title: string;
}

export interface Job {
	_id: string;
	jobType: { title: string };
	slug: {
		_type: string;
		current: string;
	};
	title: string;
	_createdAt: string;
	location: string;
	salaryRange: string;
	applicationLink: string;
	preview: string;
	description: string;
	level: { title: string } | null;
	field: {
		title: string;
		slug: {
			_type: string;
			current: string;
		};
	};
}
