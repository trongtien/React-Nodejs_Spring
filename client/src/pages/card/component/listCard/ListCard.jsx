import React from 'react'
import './style.scss'
import { Table, CardImg, Input } from 'reactstrap';
import Icon from './../../../../contants/icon'
import { useRecoilState, useSetRecoilState } from "recoil";
import { cardState, deleteCard, countAllProduct, totalMoney, billState } from '../../../../recoil/card';

function ListCardComponent() {
  const [card, setCard] = useRecoilState(cardState);
  const setbill = useSetRecoilState(billState);

  React.useEffect(() => {
    async function getCard() {
      if (localStorage.getItem('listCard')) {
        let getCardLocal = await JSON.parse(localStorage.getItem('listCard'))
        if (getCardLocal.length > 0) {
          await setCard(getCardLocal)
          let countProduct = await countAllProduct(card)
          let totalMonney = await totalMoney(card)
          await setbill({
            countProduct: countProduct,
            totalMonney: totalMonney
          })
        }
      }
    }
    getCard()
  }, [])

  async function handleDelete(item) {
    const newCart = deleteCard(card, item)
    let getCardLocal = await JSON.parse(localStorage.getItem('listCard'))

    setCard(newCart);
    let global = localStorage.setItem('listCard', JSON.stringify(newCart))
    if (global === undefined) {
      setbill({
        countProduct: 0,
        totalMonney: 0
      })
    }
    if (global) {
      setbill({
        countProduct: countAllProduct(global),
        totalMonney: totalMoney(global)
      })
    }
    if (getCardLocal.length <= 1) {
      await localStorage.clear('listCard')
    }

  }

  return (

    <Table responsive >
      <thead>
        <tr>
          <th>STT</th>
          <th>Hình Ảnh</th>
          <th>Tên Sản Phẩm</th>
          <th>Đơn Giá</th>
          <th>Số Lượng</th>
          <th>Thành Tiền</th>
          <th></th>
        </tr>
      </thead>
      {
        card.length > 0 ?
          card.map((cardItem, index) => {
            return (
              <tbody>
                <tr className="list-cart-product" key={cardItem.product_id}>
                  <th scope="row">{index + 1}</th>
                  <td> <CardImg center width="100%" src={require(`./../../../../../../durian/durian/src/main/resources/public/imgae-product/${cardItem.image}`)} className="image-cart" /></td>
                  <td>{cardItem.name}</td>
                  <td>{cardItem.discount === 0 ? cardItem.price : cardItem.discount}</td>
                  <td><div className="input-count"> <span>{cardItem.quantity}</span></div></td>
                  <td>{cardItem.discount === 0 ? cardItem.price * cardItem.quantity : cardItem.discount * cardItem.quantity}</td>
                  <td><CardImg center width="100%" src={Icon.deleteIcon} className="icon-cart" onClick={() => handleDelete(cardItem)} /></td>
                </tr>
              </tbody>
            )
          })
          : <div><h1 className="card-title-count">Chưa có sản phẩm trong giỏ hàng</h1></div>
      }

    </Table >
  )
}
export default ListCardComponent