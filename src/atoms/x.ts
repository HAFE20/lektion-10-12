import { atom } from 'recoil'

const x = atom<number>({
	key: 'calculator-x',
	default: 0
})

export default x
