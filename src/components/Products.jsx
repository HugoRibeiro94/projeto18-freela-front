import styled from "styled-components"

export default function Products(props){
    const {key, name, description, image, price} = props
    return(
        <>
            <ListProductContainer>
                <div>
                    <img src={image} />
                    <h1><strong>{name}</strong></h1>
                    <p>Descrição: {description}</p>
                    <p>Preço: {price}</p>
                </div>
          </ListProductContainer>
        </>
    )
}

const ListProductContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;
  p{
    font-size: 20x;
  }
  img{
    width: 200px;
    height:200px;
    }
`