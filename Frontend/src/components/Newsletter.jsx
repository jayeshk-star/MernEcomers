import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'

const MainConatainer = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const TitleBar = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`

const DescriptionBar = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}
`

const InputBar = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: '80%' })}
`

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`

const Newsletter = () => {
  return (
    <MainConatainer>
      <TitleBar>Newsletter</TitleBar>
      <DescriptionBar>
        Get timely updates from your favorite products.
      </DescriptionBar>
      <InputBar>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputBar>
    </MainConatainer>
  )
}

export default Newsletter
