import { useContext } from "react"
import { AppConfigContext } from "../AppConfigContext"

// TODO: Add type for ndex client

// @ts-ignore
import {NDEx} from '@js4cytoscape/ndex-client'
// @ts-ignore
import { CyNetworkUtils, CxToJs } from "@js4cytoscape/cx2js"

const utils = new CyNetworkUtils()
const cx2js = new CxToJs(utils);


export const useCx = async (uuid: string) => {
  const { ndexBaseUrl } = useContext(AppConfigContext)
  const network = await getNetwork({ndexUrl: ndexBaseUrl, uuid})

  return {
    network,
  }
}


const processNetwork = async (uuid: string) => {

}

type GetCxParams = {
  ndexUrl: string,
  uuid: string
}

const getNetwork = async ({ndexUrl, uuid}: GetCxParams) => {
  const ndexClient = new NDEx(ndexUrl)
  const cx = await ndexClient.getCXNetwork(uuid)
  const network = await cx2js.rawCXtoNiceCX(cx)

  return network
}
