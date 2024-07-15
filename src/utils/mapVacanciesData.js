import { formatSalary } from '@utils';

export function mapVacanciesData(vacancies) {
  if (vacancies?.length === 0) {
    return [];
  }

  const blocks = [];

  vacancies.forEach((vacancy) => {
    const dayKey = vacancy.published_at.split('T')[0];
    if (!blocks[dayKey]) {
      blocks[dayKey] = [];
    }

    blocks[dayKey].push({
      publishedAt: vacancy.published_at,
      id: vacancy?.id || '',
      name: vacancy?.name || '',
      salary: formatSalary(vacancy?.salary?.from, {
        max: vacancy?.salary?.to,
        currency: vacancy?.salary?.currency,
      }),
      company: vacancy?.employer?.name || '',
      city: vacancy?.area?.name || '',
      experience: vacancy?.experience?.name || '',
    });
  });

  return Object.values(blocks);
}
