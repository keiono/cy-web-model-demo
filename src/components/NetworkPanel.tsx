import { State } from '../states/State'
import { useSetState } from '../hooks/useSetState'
import { useSelector } from '../hooks/useSelector'
import { StoreContext } from '../contexts/StoreContext'

const selectCount = (state: State): number => state.count

export const NetworkPanel = () => {
  const count = useSelector<number, State>(selectCount, StoreContext)

  const setState = useSetState()
  const inc = () => {
    setState((state) => ({
      ...state,
      count: state.count + 1,
    }))
  }
  return (
    <div>
      Dummy count: {count} <button onClick={inc}>+1</button>
    </div>
  )
}
