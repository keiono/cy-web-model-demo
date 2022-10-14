import { createContext } from 'react'

export interface AppConfig {
  ndexBaseUrl: string
}

export const defaultAppConfig: AppConfig = {
  ndexBaseUrl: 'https://public.ndexbio.org/v2',
}

export const AppConfigContext = createContext<AppConfig>(defaultAppConfig)
