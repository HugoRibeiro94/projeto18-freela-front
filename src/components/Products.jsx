import styled from "styled-components"

export default function Products(props){
    const {name, description, image, price} = props
    return(
        <>
            <ListProductContainer>
                <div>
                    <img src={image} />
                    <strong>{name}</strong>
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
          </ListProductContainer>
        </>
    )
}

const ListProductContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;
  div span {
    color: #c6c6c6;
    margin-right: 10px;
  }
`