import type {NextPage} from 'next'

//型アノテーション
let foo: number = 123

//型アサーション
let type = {} as { bar: number }

// boolean
const boolean: boolean = true || false

//string
const string: string = 'string'

//number
const integer: number = 123

//null
const bar: null = null

//undefined
const fff: undefined = undefined

// boolean literal types
const boolean2: true = true

//string literal types
const string2: 'string2' = 'string2';

//number literal types
const number2: 123 = 123

// Widening , ex) string literal types → string types
const foo2 = 'foo2'  //as const, const アサーション や :'foo2' 型アノテーションで対応
let foo3 = foo2


const Home: NextPage = ()=>{
  return (
    <div>test</div>
  )
}

export default Home