import Cookies from 'js-cookie';
import moment from 'moment';
import React from 'react';
import { Button, Table } from 'reactstrap';
import swal from 'sweetalert';
import cardAPI from './../../../../api/cardApi';
import './style.scss';


function CardNew() {

    const [newCard, setNewCard] = React.useState([])
    const [paginationCard, setPaginationCard] = React.useState({
        _limit: 10,
        _page: 1,
        _totalRows: 0
    })

    React.useEffect(() => {
        async function getListNewCard() {
            let user_id = await Cookies.get('user_id')
            if (user_id) {
                cardAPI.getById(user_id, paginationCard._limit, paginationCard._page).then((result) => {
                    setNewCard(result.data)
                })
            }
        }
        getListNewCard('newCard', newCard)
    }, [])

    function handleDelete(order_id, status_order) {
        swal({
            title: "Bạn có muốn hủy đơn hàng",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    if (order_id && status_order !== 2) {
                        cardAPI.deleteById(order_id).then((result) => {
                            if (result.status === 200) {
                                let user_id = Cookies.get('user_id')
                                cardAPI.getById(user_id, paginationCard._limit, paginationCard._page).then((result) => {
                                    setNewCard(result.data)
                                })
                                swal({
                                    title: "Hủy đơn hàng thàn công",
                                    icon: "success",
                                    buttons: false,
                                    timer: 1500
                                });
                            } else {
                                swal({
                                    title: "Hủy đơn hàng thất bại, vui lòng thử lại",
                                    icon: "error",
                                    buttons: false,
                                    timer: 1500
                                });
                            }
                        })
                    } else {
                        swal({
                            title: "Hủy đơn hàng thất bại",
                            text: "Đơn hàng đang được đi giao vui lòng liên hệ nhân viên để được hủy",
                            icon: "error",
                            buttons: false,
                            timer: 1500
                        });
                    }
                }
            });


    }

    return (
        <div>
            <div className="a-center">
                <h2><span>Đơn hàng đang chờ xác nhận</span></h2>
            </div>
            <Table responsive >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã đơn hàng</th>
                        <th>Ghi chú</th>
                        <th>Trạng thái</th>
                        <th>Ngày đặt hàng</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    newCard.length > 0 ?
                        newCard.map((cardItem, index) => {
                            return (
                                <tbody>
                                    <tr className="list-cart-product" key={cardItem.product_id}>
                                        <th scope="row">{index + 1}</th>
                                        {/* <td> <CardImg center width="100%" src={require(`./../../../../../../durian/durian/src/main/resources/public/imgae-product/${cardItem.image}`)} className="image-cart" /></td> */}
                                        <td>{cardItem.order_id}</td>
                                        <td>{cardItem.content}</td>

                                        <td>{cardItem.status_order != 1 ? "Đã xác nhận" : "Đang chờ xác nhận"}</td>
                                        <td> {moment(cardItem.createdAt).format('MM/DD/YYYY,  h:mm a')}</td>
                                        {/* <td><Button color="success" >Xem chi tiết</Button></td> */}
                                        <td>
                                            <Button color="success"
                                                style={{ margin: "0px 10px 0px 10px" }}
                                            >Xem chi tiết</Button>
                                            <Button color="success" onClick={() => handleDelete(cardItem.order_id, cardItem.status_order)}>Hủy đơn hàng</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                        : <div><h1 className="card-title-count">Chưa có đơn hàng mới nào</h1></div>
                }

            </Table >
        </div>

    )
}
export default CardNew