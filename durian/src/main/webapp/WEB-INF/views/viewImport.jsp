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
			<h6 class="m-0 font-weight-bold text-primary">Phiếu nhập</h6>
		</div>
		<div class="card-body">
			<div class="table-responsive">
				<table class="table table-bordered" id="dataTable" width="100%"
					cellspacing="0">
					<thead>
						<tr>
							<th>Ngày nhập</th>
							<th>Khối lượng</th>
							<th>Vốn trên mỗi kilogram</th>
							<th>Tổng vốn</th>
							<th>Tên Nhà cung cấp</th>
						</tr>
					</thead>
					<tfoot>

					</tfoot>
					<tbody>
						<c:forEach var="import" items="${imports}">
							<tr>
								<td>${import.getDateFormat('dd/MM/yyyy:HH:mm:ss')}</td>
								<td>${import.quantity} kilogram</td>
								<td>${import.getVonEachPro()}/kilogram</td>
								<td>${import.von}</td>
								<td><a href="/supplier?supId=${import.supplier.id }">${import.supplier.name}</a></td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</div>

</div>
<!-- /.container-fluid -->