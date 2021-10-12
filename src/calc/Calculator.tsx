import { useRecoilState } from 'recoil'
import Add from './Add'
import Subtract from './Subtract'
import atomX from '../atoms/x'
import atomY from '../atoms/y'

const Calculator = () => {
	const [x, setX] = useRecoilState(atomX)
	const [y, setY] = useRecoilState(atomY)

	return (
		<div>
			<div>
				Enter two numbers: <br/>
				<input type="number"
					value={x}
					onChange={e => setX(Number(e.target.value))}/> <br/>
				<input type="number"
					value={y}
					onChange={e => setY(Number(e.target.value))}/> <br/>
			</div>
			<Add />
			<Subtract />
		</div>
	)
}

export default Calculator
