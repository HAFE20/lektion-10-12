import { atom } from 'recoil'

const y = atom<number>({
	key: 'calculator-y',
	default: 0
})

export default y
