import { useContext } from 'react'
import useSWR from 'swr'
import { AppConfigContext } from '../AppConfigContext'

type NetworkSummary = {
  [key: string]: any
}

export const useNetworkSummary = (uuid: string) => {
  const { ndexBaseUrl } = useContext(AppConfigContext)
  const { data, error } = useSWR(`${ndexBaseUrl}/network/${uuid}/summary`)

  return {
    summary: data as NetworkSummary,
    isLoading: !error && !data,
    isError: error,
  }
}
