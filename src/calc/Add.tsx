import { useRecoilState } from 'recoil'
import atomX from '../atoms/x'
import atomY from '../atoms/y'

const Add = () => {
	const [x, setX] = useRecoilState(atomX)
	const [y] = useRecoilState(atomY)

	return (
		<div>
			{x} + {y} == {x + y}
			<button onClick={() => setX(x + y)}> Increase x </button>
		</div>
	)
}
export default Add
