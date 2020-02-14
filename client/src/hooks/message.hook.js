import {useCallback} from 'react'
import M from '../scripts/main'

export const useMessage = () => {
  return useCallback(text => {
    if (text) {
      M.toast(text);
    }
  }, [])
}
