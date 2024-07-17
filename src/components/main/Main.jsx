import { FilterList } from '../filter-list/FilterList'
import { VacancyList } from '../vacancy-list/VacancyList'

import { useHH } from '../../store'

import styles from './styles.module.css'
import { useEffect } from 'react'
import { VacancyListSkeleton } from '../vacancy-list-skeleton/VacancyListSkeleton'

export function Main() {
  const { fetchVacancies, loading } = useHH(state => ({
    fetchVacancies: state.fetchVacancies,
    loading: state.loading
  }))

  useEffect(() => {
    // fetchVacancies(true) //Раскоментировать если нужно на один день
    fetchVacancies() //Закоментировать если нужно на один день
  }, [])

  return (
    <main className={styles.main}>
      <FilterList />
      {loading ? <VacancyListSkeleton /> : <VacancyList/>}
    </main>
  )
}