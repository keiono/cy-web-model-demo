import { State } from '../State'
import { useSetState } from '../hooks/useSetState'
import { useSelector } from '../hooks/useSelector'

const selectCount = (state: State) => state.count

export const NetworkPanel = () => {
  const count = useSelector(selectCount)

  const setState = useSetState()
  const inc = () => {
    setState( state => ({
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
