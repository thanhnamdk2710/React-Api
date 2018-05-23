import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../actions/index';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDeleteProduct = (id) => {
        this.props.onDeleteProduct(id);
    }

    render() {
        var { products } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Link to="/products/add" className="btn btn-primary mb-10">
                            Thêm Sản Phẩm
                        </Link>
                        <ProductList>
                            { this.showProductItem(products) }
                        </ProductList>
                    </div>
                </div>
            </div>
        );
    }

    showProductItem = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem 
                            key={ index }
                            product={ product }
                            index={ index + 1 }
                            onDeleteProduct={ this.onDeleteProduct }
                        />
            });
        }

        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, porps) => {
    return {
        fetchAllProducts: () => {
            dispatch(actions.actFetchProductsRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(actions.actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
