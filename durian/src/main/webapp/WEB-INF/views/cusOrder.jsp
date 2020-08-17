<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Begin Page Content -->
<div class="container-fluid">
	<!-- <p class="mb-4">
						DataTables is a third party plugin that is used to generate the
						demo table below. For more information about DataTables, please
						visit the <a target="_blank" href="https://datatables.net">official
							DataTables documentation</a>.
					</p> -->

	<!-- DataTales Example -->
	<div class="card shadow mb-4">
		<div class="card-header py-3">
			<h6 class="m-0 font-weight-bold text-primary">Danh sách các đơn
				hàng</h6>
			<%-- <div class="pagination">
								<c:forEach var="item" items="${pagi}">
									<div class="pagination-item">
										${item}
									</div>
								</c:forEach>
							</div> --%>
		</div>
		<div class="card-body">
			<div class="table-responsive">
				<table class="table table-bordered" id="dataTable" width="100%"
					cellspacing="0">
					<thead>
						<tr>
							<th>Mã đơn hàng</th>
							<th>Ngày tạo</th>
							<th>Ngày chỉnh sửa</th>
							<th>Trạng thái</th>
						</tr>
					</thead>
					<tfoot>
					</tfoot>
					<tbody>
						<c:forEach var="order" items="${orders}">
							<tr>
								<td>${order.id}</td>
								<td>${order.getCreateDateFormat('dd/MM/yyyy:HH:mm:ss')}</td>
								<td>${order.getUpdateDateFormat('dd/MM/yyyy:HH:mm:ss')}</td>
								<td><c:if test="${order.status ==0}">
										<span style="color: green; font-weight: bold">Đang chờ
											duyệt...</span>
									</c:if> <c:if test="${order.status ==1}">
										<span style="color: green; font-weight: bold">Đã chấp
											nhận</span>
									</c:if> <c:if test="${order.status ==2}">
										<span style="color: red; font-weight: bold">Đã hủy</span>
									</c:if></td>
								<c:if test="${order.status ==0}">
									<td>
										<form method="POST">
											<input name="orderId" value="${order.id }" type="hidden">
											<input name="status" value="1" type="hidden">
											<button formaction="/order/changeOrder" type="submit"
												class="btn btn-primary">Duyệt</button>
										</form>
									</td>
								</c:if>
								<c:if test="${order.status == 0}">
									<td>
										<form method="POST">
											<input name="orderId" value="${order.id }" type="hidden">
											<input name="status" value="2" type="hidden">
											<button formaction="/order/changeOrder" type="submit"
												class="btn btn-danger">Hủy</button>
										</form>
									</td>
								</c:if>
								<td><a href="/order/orderDetail?orderId=${order.id }">
										Xem chi tiết đơn hàng </a></td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</div>

</div>
<!-- /.container-fluid -->
