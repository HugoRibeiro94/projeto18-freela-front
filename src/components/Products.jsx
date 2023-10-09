import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function Products(props){
    const {key, name, description, image, price, id} = props

    return(
        <>
            <ListProductContainer>
              <Link to = {`/info-product/${id}`}>
                <div>
                    <img src={image} />
                    <h1><strong>{name}</strong></h1>
                    <p>Descrição: {description}</p>
                    <p>Preço: {price}</p>
                </div>
              </Link>
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