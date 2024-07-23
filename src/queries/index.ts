export const JOB_CATEGORIES = `*[_type == "field"] {
  slug,
  title,
  _createdAt
}`;

export const ALL_JOBS = `*[_type == "job"]|order(_createdAt desc) {
   jobType->{title}, 
    slug,
    title,
    _createdAt,
    location, 
    salaryRange,
    applicationLink,
    preview,
    description,
    level->{
      title
    },
    field-> {
      title,
      slug
    }
}`;
export const JOB_BY_ID = `*[_type == "job" && $slug == slug.current ]|order(_createdAt desc) {
  ...
}[0]`;
export const JOB_BY_CATEGORIES_ID = `*[_type == "jobs" && $name in fields[]->.title]|order(_createdAt desc) {
  ...
}`;
