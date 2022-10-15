import { useMemo, useContext } from 'react'
import { useSubscription } from 'use-subscription'
import { StoreContext } from '../StoreContext'
import { State } from '../State'

export const useSelector = <S extends unknown>(
  selector: (state: State) => S,
) => {
  const store = useContext(StoreContext)
  return useSubscription(
    useMemo(
      () => ({
        getCurrentValue: () => selector(store.getState()),
        subscribe: store.subscribe,
      }),
      [store, selector],
    ),
  )
}
