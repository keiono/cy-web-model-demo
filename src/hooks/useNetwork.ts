import { useContext } from 'react'
import useSWR from 'swr'
import { AppConfigContext } from '../AppConfigContext'
// @ts-ignore
import * as cy2js from '@js4cytoscape/cx2js'

const utils = new cy2js.CyNetworkUtils()

export const useNetwork = (uuid: string) => {
  const { ndexBaseUrl } = useContext(AppConfigContext)
  const key: string = `${ndexBaseUrl}/network/${uuid}`
  const { data, error } = useSWR(key)
  const niceCX = utils.rawCXtoNiceCX(data)

  return {
    network: niceCX,
    isLoading: !error && !data,
    isError: error,
  }
}
