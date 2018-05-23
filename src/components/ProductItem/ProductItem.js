import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    OnDeleteProduct = (id) => {
        if (confirm('Bạn có chắc chắn muốn xoá?')) { //eslint-disable-line
            this.props.onDeleteProduct(id);
        }
    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'success' : 'warning';
        return (
            <tr>
                <td className='text-center'>{ index }</td>
                <td>{ product.name }</td>
                <td className='text-center'>{ product.price }</td>
                <td className='text-center'>
                    <span className={`label label-${statusClass}`}>{ statusName }</span>
                </td>
                <td className='text-center'>
                    <Link 
                        to={`products/${product.id}/edit`} 
                        className="btn btn-large btn-warning"
                    >Sửa</Link>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-large btn-danger"
                        onClick={ () => this.OnDeleteProduct(product.id) }
                    >Xoá</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
