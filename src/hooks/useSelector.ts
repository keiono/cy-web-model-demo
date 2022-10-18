import { useMemo, useContext, Context } from 'react'
import { useSubscription } from 'use-subscription'
import { Store } from '../store/Store'

export const useSelector = <S extends unknown, T extends unknown>(
  selector: (state: T) => S,
  context: Context<Store<T>>
) => {
  const store = useContext(context)
  
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
